'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration (iOS Safari fix)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // CSS-based iOS Safari fixes
    document.body.style.setProperty('-webkit-overflow-scrolling', 'auto');
    document.documentElement.style.setProperty(
      '-webkit-overflow-scrolling',
      'auto'
    );

    // Function to reset scroll positions with multiple methods
    const resetScrollPositions = () => {
      // Method 1: Force documentElement scroll first
      document.documentElement.scrollTop = 0;
      document.documentElement.scrollLeft = 0;

      // Method 2: Window scroll with instant behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

      // Method 3: Fallback window scroll
      window.scrollTo(0, 0);

      // Method 4: Reset main element scroll
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
        mainElement.scrollLeft = 0;
      }

      // Method 5: Body scroll reset as fallback
      document.body.scrollTop = 0;
    };

    // Event-based resets for iOS Safari
    const handleLoad = () => {
      requestAnimationFrame(resetScrollPositions);
    };

    const handleDOMContentLoaded = () => {
      requestAnimationFrame(resetScrollPositions);
    };

    // Add event listeners
    window.addEventListener('load', handleLoad);
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    // Immediate reset with requestAnimationFrame wrapper
    requestAnimationFrame(() => {
      resetScrollPositions();
    });

    // Multiple delayed resets for iOS Safari (option 2)
    const timeouts = [
      setTimeout(() => {
        requestAnimationFrame(resetScrollPositions);
      }, 100),

      setTimeout(() => {
        requestAnimationFrame(resetScrollPositions);
      }, 200),

      setTimeout(() => {
        requestAnimationFrame(resetScrollPositions);
      }, 300),
    ];

    // Cleanup timeouts and event listeners on unmount
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      // Restore webkit overflow scrolling
      document.body.style.removeProperty('-webkit-overflow-scrolling');
      document.documentElement.style.removeProperty(
        '-webkit-overflow-scrolling'
      );
    };
  }, [pathname]); // Re-run when pathname changes (route changes)

  return null; // This component doesn't render anything
}
