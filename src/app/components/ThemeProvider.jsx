// components/ThemeProvider.jsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }) {
  // O atributo "class" é o que conecta o next-themes ao tailwind.config.js
  return <NextThemesProvider attribute="class" defaultTheme="dark">{children}</NextThemesProvider>;
}