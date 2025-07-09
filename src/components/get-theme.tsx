'use client';

import { useThemeStore } from '@/providers/theme-store-provider';

export default function GetTheme() {
  const theme = useThemeStore((state) => state.theme);

  return <span>{theme && `${theme} mode`}</span>;
}
