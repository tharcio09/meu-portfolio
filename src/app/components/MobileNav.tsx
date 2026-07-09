'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { sectionIdFromHref, type NavLink } from '../../data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { CloseIcon, MenuIcon } from './ui/Icons';

type MobileNavProps = {
  links: NavLink[];
  activeSection?: string;
};

const MOBILE_MENU_ID = 'mobile-navigation-menu';

export function MobileNav({ links, activeSection = '' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      triggerButtonRef.current?.focus({ preventScroll: true });
      closeTimeoutRef.current = null;
    }, 200);
  }, []);

  const handleOpen = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

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

  useEffect(() => {
    if (!isOpen) return;

    const frame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <button
        ref={triggerButtonRef}
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls={MOBILE_MENU_ID}
        className={cn(
          'relative z-[60] inline-flex h-10 w-10 items-center justify-center border transition-colors',
          isOpen
            ? 'border-accent bg-accent text-white shadow-lg shadow-accent/20 ring-2 ring-accent-border hover:bg-accent-hover dark:border-accent-light dark:bg-accent-light dark:text-dark-bg dark:ring-accent-light/30 dark:hover:bg-accent-light-hover'
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
          id={MOBILE_MENU_ID}
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
              const isFirstLink = link.href === links[0]?.href;

              return (
                <Link
                  key={link.href}
                  ref={isFirstLink ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={handleClose}
                  className={
                    link.cta
                      ? cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-2 w-full')
                      : cn(
                          'w-full border border-transparent px-4 py-3 text-center text-base font-medium transition-colors',
                          isActive
                            ? 'border border-accent-border bg-accent-subtle font-semibold text-accent shadow-sm dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light'
                            : 'text-secondary-text hover:border-border-light hover:bg-light-surface hover:text-accent dark:text-dark-text dark:hover:border-border-dark dark:hover:bg-dark-surface dark:hover:text-accent-light'
                        )
                  }
                  aria-current={isActive ? 'location' : undefined}
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
