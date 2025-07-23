'use client';

import { useEffect } from 'react';
import { initializeSectionPositions } from '@/utils/scrollToSection';

/**
 * Component that initializes static section positions on page load
 * This prevents issues with sticky positioned sections affecting scroll calculations
 */
const SectionPositionInitializer = () => {
  useEffect(() => {
    // Initialize section positions when the component mounts and DOM is ready
    const initializePositions = () => {
      // Small delay to ensure all elements are rendered and styled
      setTimeout(() => {
        initializeSectionPositions();
      }, 100);
    };

    // Initialize on mount
    initializePositions();

    // Re-initialize on window resize (in case layout changes)
    const handleResize = () => {
      initializePositions();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SectionPositionInitializer;
