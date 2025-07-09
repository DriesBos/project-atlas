'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';
import IconPlus from '@/components/icons/icon-plus';

const Header = ({}) => {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!headerRef.current) return;

    // Find all elements with animateBlockWidth class
    const animateElements = headerRef.current.querySelectorAll(
      `.${styles.animateBlockWidth}`
    );

    // Find all content inside animateBlockWidth containers
    const contentElements = headerRef.current.querySelectorAll(
      `.${styles.animateBlockContent}`
    );

    // Initially hide the content
    gsap.set(contentElements, { opacity: 0 });

    // Animate width from 0px to auto with ease-out
    gsap.fromTo(
      animateElements,
      {
        width: '0px',
      }, // Starting state
      {
        width: '10vw',
        duration: 1, // Animation duration in seconds
        ease: 'power2.out', // Ease-out animation
        onComplete: () => {
          // After width animation completes, fade in the content
          gsap.set(contentElements, { display: 'block' }); // Ensure content is displayed
          gsap.to(contentElements, {
            opacity: 1,
            duration: 0.66,
            ease: 'power2.out',
          });
        },
      }
    );
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`${styles.logo} ${styles.block}`}>
        <Logo />
      </div>
      <div
        className={`${styles.join} ${styles.block} ${styles.animateBlockWidth}`}
      >
        <div className={styles.animateBlockContent}>JOIN US</div>
      </div>
      <div
        className={`${styles.nav} ${styles.block} ${styles.animateBlockWidth}`}
      >
        <div className={styles.animateBlockContent}>
          <IconPlus />
        </div>
      </div>
    </header>
  );
};

export default Header;
