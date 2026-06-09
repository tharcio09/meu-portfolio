'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import type { NavLink } from '../../data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { CloseIcon, MenuIcon } from './ui/Icons';

type MobileNavProps = {
  links: NavLink[];
  activeSection?: string;
};

const sectionIdFromHref = (href: string) => (href.startsWith('#') ? href.slice(1) : '');

export function MobileNav({ links, activeSection = '' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };

    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleClose, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        className={cn(
          'relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors',
          isOpen
            ? 'border-accent bg-primary-text text-white shadow-lg shadow-slate-900/20 ring-2 ring-white/80 hover:bg-accent dark:border-accent-light dark:bg-light-text dark:text-dark-bg dark:ring-accent-light/30 dark:hover:bg-accent-light'
            : 'border-transparent text-primary-text hover:bg-light-surface hover:text-accent dark:text-light-text dark:hover:bg-dark-surface dark:hover:text-accent-light'
        )}
      >
        {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/40 backdrop-blur-sm md:hidden"
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
          className="fixed left-0 right-0 top-16 z-50 border-b border-border-light bg-light-card shadow-lg shadow-slate-900/10 dark:border-border-dark dark:bg-dark-bg dark:shadow-black/30 md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transform: isClosing ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div className="mx-auto flex max-w-sm flex-col items-stretch gap-2 px-6 py-5">
            {links.map((link) => {
              const isActive = activeSection === sectionIdFromHref(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className={
                    link.cta
                      ? cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-2 w-full')
                      : cn(
                          'w-full rounded-lg border border-transparent px-4 py-3 text-center text-base font-medium transition-colors',
                          isActive
                            ? 'border border-accent-border bg-accent-subtle font-semibold text-accent shadow-sm dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light'
                            : 'text-secondary-text hover:border-border-light hover:bg-light-surface hover:text-accent dark:text-dark-text dark:hover:border-border-dark dark:hover:bg-dark-surface dark:hover:text-accent-light'
                        )
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
