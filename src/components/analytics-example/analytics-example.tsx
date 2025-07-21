'use client';

import { useEffect } from 'react';
import { trackEvent, trackExternalLink } from '@/utils/analytics';
import { useScrollTracking } from '@/hooks/useAnalytics';

/**
 * Example component demonstrating Google Analytics integration
 * This shows various ways to track user interactions
 */
export default function AnalyticsExample() {
  // Enable scroll tracking for this page
  useScrollTracking();

  // Track when component mounts (page engagement)
  useEffect(() => {
    trackEvent('page_engagement', {
      event_category: 'engagement',
      event_label: 'analytics_example_page',
    });
  }, []);

  const handleButtonClick = () => {
    trackEvent('button_click', {
      event_category: 'user_interaction',
      event_label: 'example_button',
      value: 1,
    });
  };

  const handleExternalLinkClick = (url: string, linkText: string) => {
    trackExternalLink(url, linkText);
  };

  const handleFileDownload = () => {
    trackEvent('file_download', {
      event_category: 'downloads',
      event_label: 'example_file.pdf',
      file_name: 'example_file.pdf',
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Google Analytics Integration Example</h1>
      
      <p>This page demonstrates various Google Analytics tracking capabilities:</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <button onClick={handleButtonClick}>
          Track Button Click
        </button>
        
        <button onClick={handleFileDownload}>
          Track File Download
        </button>
        
        <a 
          href="https://analytics.google.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleExternalLinkClick('https://analytics.google.com', 'Google Analytics')}
        >
          Track External Link Click
        </a>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <h3>Automatic Tracking Features:</h3>
        <ul>
          <li>✅ Page views (automatic)</li>
          <li>✅ Scroll depth tracking (25%, 50%, 75%, 100%)</li>
          <li>✅ Page engagement time</li>
          <li>✅ Custom events (manual tracking)</li>
        </ul>
      </div>

      {/* Add some content to enable scroll tracking */}
      <div style={{ height: '200vh', marginTop: '2rem' }}>
        <p>Scroll down to test scroll depth tracking...</p>
        <div style={{ position: 'absolute', bottom: '10px' }}>
          <p>You&apos;ve reached the bottom! Scroll tracking should have fired.</p>
        </div>
      </div>
    </div>
  );
}
