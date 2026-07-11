'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { NavLink } from '../../data/constants';
import { navLinks, SECTION_IDS, sectionIdFromHref } from '../../data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileNav } from './MobileNav';
import { useActiveSection } from '@/app/hooks/useScrollReveal';

const navLinkClass = (isActive: boolean) =>
  cn(
    'relative text-sm font-medium transition-colors',
    isActive
      ? 'font-semibold text-accent dark:text-accent-light'
      : 'text-secondary-text hover:text-accent dark:text-dark-text dark:hover:text-accent-light',
    isActive &&
      'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent dark:after:bg-accent-light'
  );

const Navbar = () => {
  const activeSection = useActiveSection(SECTION_IDS);
  const mainLinks = navLinks.filter((link) => link.cta !== true);
  const ctaLink = navLinks.find((link) => link.cta === true);
  const isCtaActive = ctaLink ? activeSection === sectionIdFromHref(ctaLink.href) : false;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b px-6 py-3 transition-all duration-150',
        scrolled
          ? 'border-border-light bg-light-bg shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:border-border-dark dark:bg-dark-bg dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
          : 'border-border-light/0 bg-light-bg dark:border-border-dark/0 dark:bg-dark-bg'
      )}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-base font-bold tracking-[-0.02em] text-primary-text transition-colors hover:text-accent dark:text-light-text dark:hover:text-accent-light"
          aria-label="Tharcio.dev — voltar para o início"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center border border-accent bg-accent text-xs font-extrabold text-white transition-colors group-hover:bg-accent-hover dark:border-accent-light dark:bg-accent-light dark:text-dark-bg dark:group-hover:bg-accent-light-hover">
            T
          </span>
          <span>
            Tharcio<span className="text-accent dark:text-accent-light">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {mainLinks.map((link: NavLink) => {
            const isActive = activeSection === sectionIdFromHref(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(isActive)}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
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
                isCtaActive &&
                  'border-accent text-accent dark:border-accent-light dark:text-accent-light'
              )}
              aria-current={isCtaActive ? 'page' : undefined}
            >
              {ctaLink.label}
            </Link>
          )}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcher />
          <MobileNav links={navLinks} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
