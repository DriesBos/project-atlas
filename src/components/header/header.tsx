'use client';

import React, { useRef, useCallback, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.sass';
import Logo from '@/components/icons/logo';
import IconPlus from '@/components/icons/icon-plus';
import { scrollToSection } from '@/utils/scrollToSection';
import ThemeIcon from '@/components/theme-icon/theme-icon';

const Header = ({}) => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerActive, setHeaderActive] = useState(false);

  // Get current route and check if homepage
  const pathname = usePathname();
  const [isHomepage, setIsHomepage] = useState(false);

  // Update isHomepage state when pathname changes
  React.useEffect(() => {
    const currentIsHomepage = pathname === '/' || pathname === '';
    setIsHomepage(currentIsHomepage);
  }, [pathname]);

  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  const handleNavItemClick = useCallback(
    (sectionId: string) => {
      handleScrollToSection(sectionId);
      setHeaderActive(false);
    },
    [handleScrollToSection, setHeaderActive]
  );

  const handleToggleClick = useCallback(() => {
    setHeaderActive((prev) => !prev);
  }, []);

  useGSAP(() => {
    if (!headerRef.current) return;

    const bottomRowItems = headerRef.current.querySelectorAll(
      `.${styles.bottomRow} li`
    );

    // Set initial state
    gsap.set(bottomRowItems, { opacity: 0 });

    // Animate only when headerActive turns true
    if (headerActive) {
      gsap.to(bottomRowItems, {
        opacity: 1,
        duration: 0.66,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }
  }, [headerActive]);

  return (
    <header
      className={styles.header}
      ref={headerRef}
      data-active={headerActive}
    >
      <ul className={styles.topRow}>
        <li className={styles.logo}>
          <Link className={styles.links} href="/">
            <Logo />
          </Link>
        </li>
        <li
          className={styles.toggle}
          data-active={headerActive}
          onClick={handleToggleClick}
        >
          <IconPlus />
        </li>
      </ul>
      {isHomepage ? (
        <ul className={styles.bottomRow}>
          <li onClick={() => handleNavItemClick('sectionIntro')}>about</li>
          <li onClick={() => handleNavItemClick('sectionNumbers')}>data</li>
          <li onClick={() => handleNavItemClick('sectionProblems')}>issues</li>
          <li onClick={() => handleNavItemClick('sectionSolutions')}>
            solutions
          </li>
          <li onClick={() => handleNavItemClick('sectionOhio')}>Ohio</li>
          <li onClick={() => handleNavItemClick('sectionMail')}>Join Us</li>
          <li className={styles.themeIcon}>
            <ThemeIcon />
          </li>
        </ul>
      ) : (
        <ul className={styles.bottomRow}>
          <li onClick={() => handleNavItemClick('sectionTerms')}>
            Privacy Policy
          </li>
          <li className={styles.themeIcon}>
            <ThemeIcon />
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
