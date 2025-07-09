'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useThemeStore } from '@/providers/theme-store-provider';
import styles from './footer.module.sass';
import Logo from '@/components/icons/logo';
import UserInfo from '@/components/user-info';
import OhioInfo from '@/components/ohio-info';
import ScreenInfo from '@/components/screen-info';
import GetTheme from '@/components/get-theme';
import type { ThemeState } from '@/store/theme-store';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleThemeChange = useCallback(() => {
    const themes: ThemeState[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
  }, [setTheme, theme]);

  return (
    <footer className={`${styles.footer} footer`}>
      <div className={styles.container_top}>
        <div className={styles.content}>
          <div className={`${styles.columnOne} ${styles.column}`}>
            <Logo />
            <p className={styles.description}>A New Grid for a New Amerika.</p>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <h2>Site</h2>
            </div>
            <div className={styles.columnLinks}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/play" className={styles.link}>
                Playground
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <h2>Unite</h2>
            </div>
            <div className={styles.columnLinks}>
              <Link href="/" className={styles.link}>
                Twitter
              </Link>
              <Link href="/play" className={styles.link}>
                LinkedIn
              </Link>
              <p>Subscribe</p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>
              <h2>Contact</h2>
            </div>
            <div className={styles.columnLinks}>
              <p>info@projectatlas.com</p>
              <p>
                2431 Main St, Findlay,
                <br />
                Ohio, 45840
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <p>©{currentYear} Project Atlas. All rights reserved</p>
        <p>
          <UserInfo />
        </p>
        <p>
          <OhioInfo />
        </p>
        <div className={styles.userinfoContainer}>
          <p>
            <ScreenInfo />
          </p>
          <div className={styles.themeSwitcher} onClick={handleThemeChange}>
            <div
              className={`${styles.themeIcon} ${
                theme === 'dark' ? styles.rotated : ''
              }`}
            />
            <p>
              <GetTheme />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
