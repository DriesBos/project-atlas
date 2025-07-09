'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function StaggerAnimation() {
  const hasAnimated = useRef(false);

  useGSAP(() => {
    // Only run the animation once
    if (hasAnimated.current) return;

    const elements = document.querySelectorAll('.animateSectionBlock');

    if (elements.length === 0) return;

    // Set initial state - all elements invisible
    gsap.set(elements, { opacity: 0, y: 50 });

    // Create staggered fade-in animation
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.33,
      stagger: 0.165, // 0.15 second delay between each element
      ease: 'power1.inOut',
      delay: 0.33, // Initial delay before animation starts
    });

    hasAnimated.current = true;
  }, []);

  // This component doesn't render anything visible
  return null;
}
