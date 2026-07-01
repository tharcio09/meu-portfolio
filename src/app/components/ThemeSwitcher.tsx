'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './ui/Icons';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setRotation((prev) => prev + 180);
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="group rounded-md p-2 text-secondary-text transition-[background-color,color] duration-150 ease-out hover:bg-accent-subtle hover:text-accent dark:text-dark-text dark:hover:bg-accent-subtle-dark dark:hover:text-accent-light"
      aria-label="Alternar tema"
    >
      <span
        className="block transition-transform duration-300 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
      </span>
    </button>
  );
};
