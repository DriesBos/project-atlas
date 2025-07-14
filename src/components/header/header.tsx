'use client';

import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';
import { useThemeStore } from '@/providers/theme-store-provider';
import type { ThemeState } from '@/store/theme-store';
import ThemeIcon from '../theme-icon/theme-icon';

const Header = ({}) => {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSections, setActiveSections] = useState<Set<string>>(new Set());
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleThemeChange = useCallback(() => {
    const themes: ThemeState[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
  }, [setTheme, theme]);

  const handleScrollToSection = useCallback((sectionId: string) => {
    const bodyElement = document.body;
    const targetSection = document.querySelector(
      `#${sectionId}`
    ) as HTMLElement;

    if (bodyElement && targetSection) {
      const offsetTop = targetSection.offsetTop;

      // Try scrolling the body instead of main
      bodyElement.scrollTop = offsetTop;

      // Also try window.scrollTo as fallback
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  // IntersectionObserver to track when sections are in view
  useEffect(() => {
    const sectionIds = [
      'sectionIntro',
      'sectionNumbers',
      'sectionProblems',
      'sectionSolutions',
      'sectionOhio',
      'sectionMail',
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((sectionId) => {
      const section = document.querySelector(`#${sectionId}`);

      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setActiveSections((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              // Add active class when section is visible
              newSet.add(sectionId);
            } else {
              // Remove active class when section goes out of view (100px from top)
              newSet.delete(sectionId);
            }
            return newSet;
          });
        },
        {
          threshold: [0.1, 0.9], // Trigger at both entry and exit points
          rootMargin: '-100px 0px -100px 0px', // Remove active class when 100px from top
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
        className={`${styles.join} ${styles.block} ${
          styles.animateBlockWidth
        } ${activeSections.has('sectionIntro') ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={() => handleScrollToSection('sectionIntro')}
        >
          <p>about</p>
        </div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${
          styles.animateBlockWidth
        } ${activeSections.has('sectionNumbers') ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={() => handleScrollToSection('sectionNumbers')}
        >
          <p>data</p>
        </div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${
          styles.animateBlockWidth
        } ${activeSections.has('sectionProblems') ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={() => handleScrollToSection('sectionProblems')}
        >
          <p>issues</p>
        </div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${
          styles.animateBlockWidth
        } ${activeSections.has('sectionSolutions') ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={() => handleScrollToSection('sectionSolutions')}
        >
          <p>solutions</p>
        </div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${
          styles.animateBlockWidth
        } ${activeSections.has('sectionOhio') ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={() => handleScrollToSection('sectionOhio')}
        >
          <p>Ohio</p>
        </div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${
          styles.animateBlockWidth
        } ${activeSections.has('sectionMail') ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={() => handleScrollToSection('sectionMail')}
        >
          <p>join us</p>
        </div>
      </div>
      <div
        className={`${styles.join} ${styles.block} ${styles.animateBlockWidth}`}
      >
        <div className={styles.animateBlockContent} onClick={handleThemeChange}>
          <ThemeIcon />
        </div>
      </div>
      {/* <div
        className={`${styles.nav} ${styles.block} ${styles.animateBlockWidth}`}
      >
        <div className={styles.animateBlockContent}>
          <IconPlus />
        </div>
      </div> */}
    </header>
  );
};

export default Header;
