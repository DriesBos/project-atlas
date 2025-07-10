'use client';

import { useCallback } from 'react';
import { useThemeStore } from '@/providers/theme-store-provider';
// import GetTheme from '@/components/get-theme';
import type { ThemeState } from '@/store/theme-store';
import styles from './theme-icon.module.sass';

const ThemeIcon = () => {
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
    <div className={styles.themeSwitcher} onClick={handleThemeChange}>
      <div
        className={`${styles.themeIcon} ${
          theme === 'dark' ? styles.rotated : ''
        }`}
      />
      {/* <p>
        <GetTheme />
      </p> */}
    </div>
  );
};

export default ThemeIcon;
