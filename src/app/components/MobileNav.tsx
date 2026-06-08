'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import type { NavLink } from '../../data/constants';
import { CloseIcon, MenuIcon } from './ui/Icons';

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
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
        className="text-primary-text transition-colors hover:text-accent dark:text-light-text dark:hover:text-accent-light"
      >
        {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

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
          className="fixed left-0 right-0 top-[65px] z-50 border-b border-border-light bg-light-bg/98 pb-4 backdrop-blur-md dark:border-border-dark dark:bg-dark-bg/98 md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transform: isClosing ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div className="flex flex-col items-center space-y-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className="text-base font-medium text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
