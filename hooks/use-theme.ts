"use client";

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return {
    theme,
    setTheme: (theme: Theme) => setTheme(theme),
    toggleTheme: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark'),
  };
}