'use client';

import { useState, useEffect } from 'react';

export default function GetTheme() {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    // Get user's theme preference (light/dark mode)
    const getThemePreference = () => {
      try {
        if (window.matchMedia) {
          const darkModeQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          );
          const lightModeQuery = window.matchMedia(
            '(prefers-color-scheme: light)'
          );

          if (darkModeQuery.matches) {
            setTheme('dark');
          } else if (lightModeQuery.matches) {
            setTheme('light');
          } else {
            setTheme('unavailable');
          }

          // Listen for theme changes
          const handleThemeChange = () => {
            if (darkModeQuery.matches) {
              setTheme('dark');
            } else if (lightModeQuery.matches) {
              setTheme('light');
            } else {
              setTheme('unavailable');
            }
          };

          darkModeQuery.addEventListener('change', handleThemeChange);
          lightModeQuery.addEventListener('change', handleThemeChange);

          // Cleanup listeners
          return () => {
            darkModeQuery.removeEventListener('change', handleThemeChange);
            lightModeQuery.removeEventListener('change', handleThemeChange);
          };
        } else {
          setTheme('unavailable');
        }
      } catch (error) {
        console.log('Failed to get theme preference:', error);
        setTheme('unavailable');
      }
    };

    const themeCleanup = getThemePreference();

    // Cleanup theme listeners on unmount
    return () => {
      if (themeCleanup) themeCleanup();
    };
  }, []);

  return (
    <span>{theme && theme !== 'unavailable' && `theme: ${theme} mode`}</span>
  );
}
