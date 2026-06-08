'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './ui/Icons';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group rounded-md p-2 text-secondary-text transition-[background-color,color,transform] duration-200 ease-out hover:scale-105 hover:bg-accent-subtle hover:text-accent active:scale-95 dark:text-dark-text dark:hover:bg-accent-subtle-dark dark:hover:text-accent-light"
      aria-label="Alternar tema"
    >
      <span className="block transition-transform duration-200 ease-out group-hover:rotate-12">
        {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
      </span>
    </button>
  );
};
