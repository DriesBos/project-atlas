'use client';

import { useEffect } from 'react';

/**
 * Manages sticky positioning for section containers based on viewport width and section height
 * - Mobile (< 770px): Uses dynamic positioning based on section height vs window height
 * - Desktop (>= 770px): Maintains original sticky behavior
 */

const manageStickyPositioning = (): void => {
  if (typeof window === 'undefined') return;

  const isMobile = window.innerWidth < 770;

  if (!isMobile) {
    // On desktop, restore original sticky behavior for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.position = '';
    });
    return;
  }

  // On mobile, apply dynamic positioning based on section height
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;

    if (sectionHeight < windowHeight) {
      // Section is shorter than viewport - use sticky positioning
      section.style.position = 'sticky';
    } else {
      // Section is taller than viewport - use relative positioning
      section.style.position = 'relative';
    }
  });
};

/**
 * Component that manages sticky positioning for sections on mobile devices
 * Runs on page load and window resize events
 */
const StickyPositionManager = () => {
  useEffect(() => {
    // Function to handle positioning with a small delay to ensure DOM is ready
    const handlePositioning = () => {
      setTimeout(() => {
        manageStickyPositioning();
      }, 100);
    };

    // Run on initial mount
    handlePositioning();

    // Handle window resize
    const handleResize = () => {
      handlePositioning();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StickyPositionManager;
