import Link from 'next/link';
import type { NavLink } from '../../data/constants';
import { navLinks } from '../../data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileNav } from './MobileNav';

const Navbar = () => {
  const mainLinks = navLinks.filter((link) => link.cta !== true);
  const ctaLink = navLinks.find((link) => link.cta === true);

  return (
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
          {mainLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          {ctaLink && (
            <Link href={ctaLink.href} className={cn(buttonVariants({ variant: 'outline' }))}>
              {ctaLink.label}
            </Link>
          )}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcher />
          <MobileNav links={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
