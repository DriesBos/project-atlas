// Test script to verify Mailchimp API connection
// Run this locally with: node test-mailchimp.js

const MailchimpKey = 'x99fc6a3eb6843444fd28874727ecda75-us10';
const MailchimpAudience = 'efa6f2e3f3';

// Extract datacenter from API key
const datacenter = MailchimpKey.split('-').pop();
console.log('Datacenter:', datacenter);

// First, let's test if we can get the lists (this will verify the API key works)
async function testGetLists() {
  console.log('\n=== Testing API Key by getting lists ===');
  try {
    const listsUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists`;
    console.log('Lists URL:', listsUrl);

    const response = await fetch(listsUrl, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anystring:${MailchimpKey}`
        ).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status);

    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));

    if (response.ok) {
      console.log('✅ API Key works! Lists found:', data.lists?.length || 0);
      if (data.lists) {
        data.lists.forEach((list) => {
          console.log(`- List: ${list.name} (ID: ${list.id})`);
        });
      }
    } else {
      console.log('❌ API Key failed');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

// Test API connection to add member
async function testAddMember() {
  console.log('\n=== Testing Add Member ===');
  try {
    const customUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;
    console.log('Add Member URL:', customUrl);

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anystring:${MailchimpKey}`
        ).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: 'test@example.com',
        status: 'subscribed',
      }),
    });

    console.log('Response status:', response.status);

    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('❌ Add member failed:', data);
    } else {
      console.log('✅ Add member success!');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

async function runTests() {
  await testGetLists();
  await testAddMember();
}

runTests();
