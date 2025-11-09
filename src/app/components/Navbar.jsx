'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeSwitcher } from './ThemeSwitcher';
import { navLinks } from '../../data/constants';
import { motion } from 'framer-motion';

// ✅ Nova API do Framer Motion
const MotionLink = motion.create(Link);

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
        >
          Tharcio.dev
        </Link>

        {/* Links principais */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <MotionLink
              key={link.href}
              href={link.href}
              className="text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Ir para a seção ${link.label}`}
            >
              {link.label}
            </MotionLink>
          ))}
        </div>

        {/* Ícones sociais */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeSwitcher />

          {[
            { href: 'https://github.com/tharcio09', icon: <FaGithub /> },
            { href: 'https://www.linkedin.com/in/tharcio-santos-dev/', icon: <FaLinkedin /> },
            { href: 'mailto:tharciosantos09@gmail.com', icon: <FaEnvelope /> },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
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
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile aberto */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <MotionLink
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neon-blue hover:text-neon-purple dark:text-neon-blue dark:hover:text-neon-purple transition-colors text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Ir para a seção ${link.label}`}
            >
              {link.label}
            </MotionLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
