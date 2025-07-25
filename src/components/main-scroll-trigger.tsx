'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function MainScrollTrigger() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const mainElement = document.querySelector('main');

      if (!mainElement || !triggerRef.current) return;

      // Determine ending width based on window size
      const endingWidth =
        window.innerWidth < 770 ? 'calc(100% - 2rem)' : 'calc(100% - 4rem)';

      // Create ScrollTrigger with scrub animation tied to scroll progress
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        scrub: 0, // Links animation to scroll progress
        animation: gsap.fromTo(
          mainElement,
          { width: '100vw' }, // Starting state
          { width: endingWidth, ease: 'none' } // Ending state
        ),
        markers: false, // Set to true for debugging
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  // This div acts as the trigger point - place it at the end of your main content
  return (
    <div
      ref={triggerRef}
      className="scroll-trigger-point"
      style={{ height: '1px' }}
    />
  );
}
