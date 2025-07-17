// Quick test with your new API key
// Run: node test-new-key.js

require('dotenv').config();

const MailchimpKey = process.env.MAILCHIMP_API_KEY;
const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

if (!MailchimpKey || !MailchimpAudience) {
  console.error('❌ Missing environment variables');
  console.log('Make sure MAILCHIMP_API_KEY and MAILCHIMP_AUDIENCE_ID are set in your .env file');
  process.exit(1);
}

// Extract datacenter from API key
const datacenter = MailchimpKey.split('-').pop();
console.log('✅ Datacenter extracted:', datacenter);
console.log('✅ API Key length:', MailchimpKey.length);
console.log('✅ Audience ID:', MailchimpAudience);

// Test with ping endpoint first
async function testPing() {
  console.log('\n=== Testing API Key with Ping ===');
  try {
    const url = `https://${datacenter}.api.mailchimp.com/3.0/ping`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
      },
    });
    
    console.log('Ping response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Ping successful!', data);
      return true;
    } else {
      const errorData = await response.json();
      console.log('❌ Ping failed:', errorData);
      return false;
    }
  } catch (error) {
    console.error('❌ Ping error:', error.message);
    return false;
  }
}

// Test getting lists
async function testLists() {
  console.log('\n=== Testing Get Lists ===');
  try {
    const url = `https://${datacenter}.api.mailchimp.com/3.0/lists`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
      },
    });
    
    console.log('Lists response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Lists retrieved successfully!');
      console.log('Total lists:', data.total_items);
      if (data.lists) {
        data.lists.forEach(list => {
          console.log(`  - ${list.name} (ID: ${list.id}) - ${list.stats.member_count} members`);
        });
      }
      return true;
    } else {
      const errorData = await response.json();
      console.log('❌ Lists failed:', errorData);
      return false;
    }
  } catch (error) {
    console.error('❌ Lists error:', error.message);
    return false;
  }
}

async function runTests() {
  const pingSuccess = await testPing();
  if (pingSuccess) {
    await testLists();
  }
}

runTests();
