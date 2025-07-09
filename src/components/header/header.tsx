'use client';

import React, { useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';
import IconPlus from '@/components/icons/icon-plus';
import GetTheme from '../get-theme';
import { useThemeStore } from '@/providers/theme-store-provider';
import type { ThemeState } from '@/store/theme-store';

const Header = ({}) => {
  const headerRef = useRef<HTMLElement>(null);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleThemeChange = useCallback(() => {
    const themes: ThemeState[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
  }, [setTheme, theme]);

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
        width: 'auto',
        duration: 1, // Animation duration in seconds
        ease: 'power1.inOut', // Ease-out animation
        stagger: 0.165, // 0.33s stagger between each element
        onComplete: () => {
          // After width animation completes, fade in the content
          gsap.set(contentElements, {
            display: 'inline-block',
            opacity: 0,
          }); // Ensure content is displayed
          gsap.to(contentElements, {
            opacity: 1,
            duration: 0.66,
            ease: 'power1.inOut',
            stagger: 0.165, // 0.33s stagger for content fade-in too
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
        <div className={styles.animateBlockContent}>join us</div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${styles.animateBlockWidth}`}
      >
        <div className={styles.animateBlockContent} onClick={handleThemeChange}>
          <GetTheme />
        </div>
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
