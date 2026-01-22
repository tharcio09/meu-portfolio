'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeSwitcher } from './ThemeSwitcher';
import type { NavLink } from '../../data/constants';
import { navLinks } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-lg sticky top-0 z-50 p-4 border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm transition-all duration-300"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-neon-blue hover:text-neon-purple transition-colors"
          aria-label="Voltar para o início"
          title="Página inicial - Tharcio.dev"
        >
          Tharcio.dev
        </Link>

        {/* Links principais */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label={`Ir para a seção ${link.label}`}
              title={`Ir para a seção ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Ícones sociais */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeSwitcher />

          <a
            href="https://github.com/tharcio09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Tharcio Santos"
            title="GitHub de Tharcio Santos"
            className="text-2xl text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5 active:scale-90"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/tharcio-santos-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Tharcio Santos"
            title="LinkedIn de Tharcio Santos"
            className="text-2xl text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5 active:scale-90"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

          <a
            href="mailto:tharciosantos09@gmail.com"
            aria-label="Enviar e-mail para Tharcio Santos"
            title="Enviar e-mail para Tharcio Santos"
            className="text-2xl text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5 active:scale-90"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            className="text-neon-blue hover:text-neon-purple transition-colors"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile aberto */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 animate-fade-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-transform duration-200 hover:scale-110 active:scale-95 text-lg"
              aria-label={`Ir para a seção ${link.label}`}
              title={`Ir para a seção ${link.label}`}
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
