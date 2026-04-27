'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

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
      className="group rounded-md p-2 text-secondary-text transition-[background-color,color,transform] duration-200 ease-out hover:scale-105 hover:bg-gray-100 hover:text-cyan-700 active:scale-95 dark:text-gray-300 dark:hover:bg-zinc-900 dark:hover:text-cyan-300"
      aria-label="Alternar tema"
    >
      <span className="block transition-transform duration-200 ease-out group-hover:rotate-12">
        {isDark ? (
          <FaSun className="h-4 w-4" />
        ) : (
          <FaMoon className="h-4 w-4" />
        )}
      </span>
    </button>
  );
};
