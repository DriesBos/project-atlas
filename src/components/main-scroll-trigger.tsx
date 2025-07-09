'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function MainScrollTrigger() {
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mainElement = document.querySelector('main');

    if (!mainElement || !triggerRef.current) return;

    // Create ScrollTrigger with scrub animation tied to scroll progress
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top bottom-=100',
      end: 'top center',
      scrub: 0, // Links animation to scroll progress
      animation: gsap.fromTo(
        mainElement,
        { width: '100vw' }, // Starting state
        { width: '96vw', ease: 'none' } // Ending state
      ),
      markers: false, // Set to true for debugging
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // This div acts as the trigger point - place it at the end of your main content
  return (
    <div
      ref={triggerRef}
      className="scroll-trigger-point"
      style={{ height: '1px' }}
    />
  );
}
