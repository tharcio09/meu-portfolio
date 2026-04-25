'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeSwitcher } from './ThemeSwitcher';
import type { NavLink } from '../../data/constants';
import { navLinks } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mainLinks = navLinks.filter((link) => link.cta !== true);
  const ctaLink = navLinks.find((link) => link.cta === true);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-200/80 bg-light-bg/95 p-4 backdrop-blur transition-colors dark:border-gray-800 dark:bg-dark-bg/95"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold tracking-normal text-primary-text transition-colors hover:text-cyan-700 dark:text-light-text dark:hover:text-cyan-300"
          aria-label="Voltar para o início"
        >
          Tharcio.dev
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {mainLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-text transition-colors hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {ctaLink && (
            <Link
              href={ctaLink.href}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-primary-text transition-colors hover:border-cyan-700 hover:text-cyan-700 dark:border-gray-700 dark:text-light-text dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              {ctaLink.label}
            </Link>
          )}
          <ThemeSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            className="text-primary-text transition-colors hover:text-cyan-700 dark:text-light-text dark:hover:text-cyan-300"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 animate-fade-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-secondary-text transition-colors hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
