// Simple ping test to verify datacenter
const MailchimpKey = 'x99fc6a3eb6843444fd28874727ecda75-us10';
const datacenter = MailchimpKey.split('-').pop();

console.log('Testing datacenter:', datacenter);
console.log('API Key format check:', MailchimpKey.length, 'characters');
console.log('Ends with -us10:', MailchimpKey.endsWith('-us10'));

// Test different datacenters
const testCenters = [
  'us10',
  'us11',
  'us12',
  'us13',
  'us14',
  'us15',
  'us16',
  'us17',
  'us18',
  'us19',
  'us20',
  'us21',
];

async function testDatacenter(dc) {
  try {
    const url = `https://${dc}.api.mailchimp.com/3.0/ping`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anystring:${MailchimpKey}`
        ).toString('base64')}`,
      },
    });

    console.log(`${dc}: ${response.status} - ${response.ok ? '✅' : '❌'}`);

    if (response.ok) {
      const data = await response.json();
      console.log(`  Success! Response:`, data);
    }
  } catch (error) {
    console.log(`${dc}: Error - ${error.message}`);
  }
}

async function testAllDatacenters() {
  console.log('\nTesting different datacenters with ping endpoint...');
  for (const dc of testCenters) {
    await testDatacenter(dc);
  }
}

testAllDatacenters();
