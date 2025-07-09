'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to reset scroll positions
    const resetScrollPositions = () => {
      // Reset window scroll position
      window.scrollTo(0, 0);

      // Reset scroll position of main tag if it exists
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
        mainElement.scrollLeft = 0;
      }

      // Also reset body scroll as a fallback
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Reset immediately
    resetScrollPositions();

    // Also reset after a short delay to ensure DOM is fully loaded
    const timeoutId = setTimeout(resetScrollPositions, 100);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [pathname]); // Re-run when pathname changes (route changes)

  return null; // This component doesn't render anything
}
