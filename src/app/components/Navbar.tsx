'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeSwitcher } from './ThemeSwitcher';
import type { NavLink } from '../../data/constants';
import { navLinks } from '../../data/constants';
import { useActiveSection } from '../hooks/useScrollReveal';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';

const sectionIds = ['home', 'projetos', 'sobre-mim', 'habilidades', 'experiencia', 'contato'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const mainLinks = navLinks.filter((link) => link.cta !== true);
  const ctaLink = navLinks.find((link) => link.cta === true);

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  // Fechar menu ao pressionar Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Bloquear scroll quando menu mobile aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-border-light bg-light-bg/95 p-4 backdrop-blur-md transition-colors dark:border-border-dark dark:bg-dark-bg/95"
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-lg font-bold tracking-tight text-primary-text transition-colors hover:text-accent dark:text-light-text dark:hover:text-accent-light"
            aria-label="Voltar para o início"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-extrabold text-white transition-colors group-hover:bg-accent-hover dark:bg-accent-light dark:text-dark-bg dark:group-hover:bg-accent-light-hover">
              T
            </span>
            <span>
              Tharcio<span className="text-accent dark:text-accent-light">.dev</span>
            </span>
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {mainLinks.map((link: NavLink) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors
                    ${
                      active
                        ? 'text-accent dark:text-accent-light'
                        : 'text-secondary-text hover:text-accent dark:text-dark-text dark:hover:text-accent-light'
                    }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-accent dark:bg-accent-light"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            {ctaLink && (
              <Link
                href={ctaLink.href}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  isActive(ctaLink.href) &&
                    'border-accent text-accent dark:border-accent-light dark:text-accent-light'
                )}
              >
                {ctaLink.label}
              </Link>
            )}
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={isOpen ? handleClose : handleOpen}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              className="text-primary-text transition-colors hover:text-accent dark:text-light-text dark:hover:text-accent-light"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }}
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <div
          className={`fixed top-[65px] left-0 right-0 z-50 border-b border-border-light bg-light-bg/98 pb-4 backdrop-blur-md dark:border-border-dark dark:bg-dark-bg/98 md:hidden`}
          style={{
            opacity: isClosing ? 0 : 1,
            transform: isClosing ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className={`text-base font-medium transition-colors
                  ${
                    isActive(link.href)
                      ? 'text-accent dark:text-accent-light'
                      : 'text-secondary-text hover:text-accent dark:text-dark-text dark:hover:text-accent-light'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
