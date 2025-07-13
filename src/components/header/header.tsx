'use client';

import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';
import IconPlus from '@/components/icons/icon-plus';
import { useThemeStore } from '@/providers/theme-store-provider';
import type { ThemeState } from '@/store/theme-store';
import ThemeIcon from '../theme-icon/theme-icon';

const Header = ({}) => {
  const headerRef = useRef<HTMLElement>(null);
  const [isOhioInView, setIsOhioInView] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleThemeChange = useCallback(() => {
    const themes: ThemeState[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
  }, [setTheme, theme]);

  const handleScrollToOhio = useCallback(() => {
    const bodyElement = document.body;
    const ohioSection = document.querySelector('#sectionOhio') as HTMLElement;

    console.log('Body element found:', bodyElement);
    console.log('Ohio section found:', ohioSection);

    if (bodyElement && ohioSection) {
      console.log('Scrolling to Ohio section...');
      const offsetTop = ohioSection.offsetTop;
      console.log('Offset top:', offsetTop);
      console.log('Body current scrollTop:', bodyElement.scrollTop);

      // Try scrolling the body instead of main
      bodyElement.scrollTop = offsetTop;

      // Also try window.scrollTo as fallback
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log('Body or Ohio section not found');
    }
  }, []);

  // IntersectionObserver to track when Ohio section is in view
  useEffect(() => {
    const ohioSection = document.querySelector('#sectionOhio');

    if (!ohioSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOhioInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px',
      }
    );

    observer.observe(ohioSection);

    return () => {
      observer.disconnect();
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
        } ${isOhioInView ? styles.active : ''}`}
      >
        <div
          className={styles.animateBlockContent}
          onClick={handleScrollToOhio}
        >
          TEST
        </div>
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
          <ThemeIcon />
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
