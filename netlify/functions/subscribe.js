exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      console.error('Missing Mailchimp environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Debug logging (remove in production)
    console.log('Mailchimp Config:', {
      server: MailchimpServer,
      audienceId: MailchimpAudience,
      keyLength: MailchimpKey?.length,
      keyEndsWithDash: MailchimpKey?.includes('-'),
      keyLastPart: MailchimpKey?.split('-').pop(),
    });

    // Validate API key format
    if (!MailchimpKey.includes('-')) {
      console.error('Invalid API key format - missing datacenter');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Invalid API key format' }),
      };
    }

    // Extract datacenter from API key
    const datacenter = MailchimpKey.split('-').pop();
    console.log('Extracted datacenter:', datacenter);
    
    // Use datacenter from API key instead of environment variable
    const customUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;
    console.log('Request URL:', customUrl);

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString(
          'base64'
        )}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Mailchimp API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorData,
        url: customUrl,
        datacenter,
      });

      // Handle specific Mailchimp errors
      if (errorData.title === 'Member Exists') {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'This email is already subscribed' }),
        };
      }

      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: errorData.detail || 'Failed to subscribe',
        }),
      };
    }

    const received = await response.json();
    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify({
        message: 'Successfully subscribed!',
        data: received,
      }),
    };
  } catch (error) {
    console.error('Subscribe API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
