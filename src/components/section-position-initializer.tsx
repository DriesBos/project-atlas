'use client';

import { useEffect } from 'react';
import { initializeSectionPositions } from '@/utils/scrollToSection';

/**
 * Component that initializes static section positions on page load
 * This prevents issues with sticky positioned sections affecting scroll calculations
 */
const SectionPositionInitializer = () => {
  useEffect(() => {
    // Disable scrolling during initialization
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    // Re-enable scrolling after initialization
    const enableScroll = () => {
      document.body.style.overflow = '';
    };

    // Initialize section positions with scroll protection
    const initializePositions = () => {
      disableScroll();

      // Small delay to ensure all elements are rendered and styled
      setTimeout(() => {
        initializeSectionPositions();
        enableScroll();
      }, 150); // Slightly longer delay to ensure DOM is stable
    };

    // Initialize on mount
    initializePositions();

    // Re-initialize on window resize (no scroll disable needed for resize)
    const handleResize = () => {
      setTimeout(() => {
        initializeSectionPositions();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      enableScroll(); // Ensure scroll is always re-enabled
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SectionPositionInitializer;
