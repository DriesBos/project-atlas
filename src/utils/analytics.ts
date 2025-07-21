/**
 * Google Analytics 4 utility functions
 * Use these functions to track custom events throughout your application
 */

interface GtagConfig {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  [key: string]: string | number | boolean | undefined;
}

interface GtagEventParameters {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameter?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: GtagConfig | GtagEventParameters
    ) => void;
  }
}

// Track page views (automatically handled by @next/third-parties, but useful for manual tracking)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: GtagEventParameters
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
    });
  }
};

// Track conversions
export const trackConversion = (conversionName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GA_ID}/${conversionName}`,
      value: value,
    });
  }
};

// Track user engagement
export const trackEngagement = (engagementTime: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'user_engagement', {
      engagement_time_msec: engagementTime,
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (scrollDepth: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      scroll_depth: scrollDepth,
    });
  }
};

// Track file downloads
export const trackDownload = (fileName: string, fileUrl: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_url: fileUrl,
    });
  }
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'external_link',
      event_label: linkText || url,
      value: url,
    });
  }
};
