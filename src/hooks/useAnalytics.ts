import { useEffect } from 'react';
import { trackPageView } from '@/utils/analytics';

/**
 * Custom hook for Google Analytics page tracking
 * Automatically tracks page views when the component mounts
 */
export const useAnalytics = (pageName?: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname + window.location.search;
      trackPageView(currentPath);
      
      // Optional: Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Analytics: Page view tracked for ${pageName || currentPath}`);
      }
    }
  }, [pageName]);
};

/**
 * Custom hook for tracking scroll depth
 * Tracks when user scrolls to 25%, 50%, 75%, and 100% of the page
 */
export const useScrollTracking = () => {
  useEffect(() => {
    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${depth}%`,
              value: depth,
            });
          }

          if (process.env.NODE_ENV === 'development') {
            console.log(`Analytics: Scroll depth ${depth}% tracked`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
