
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-dark-card"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <FaSun className="text-neon-blue h-5 w-5" />
      ) : (
        <FaMoon className="text-neon-purple h-5 w-5" />
      )}
    </button>
  );
};