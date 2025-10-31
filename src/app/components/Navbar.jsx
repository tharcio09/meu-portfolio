
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeSwitcher } from './ThemeSwitcher';
import { navLinks } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-light-bg/70 dark:bg-dark-bg/70 backdrop-blur-sm sticky top-0 z-50 p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-neon-blue hover:text-neon-purple transition-colors">
          Tharcio.dev
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-primary-text dark:text-light-text hover:text-neon-blue transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeSwitcher />
          <a href="https://github.com/tharcio09" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary-text dark:text-light-text hover:text-neon-blue"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tharcio-santos/" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary-text dark:text-light-text hover:text-neon-blue"><FaLinkedin /></a>
          <a href="mailto:tharciosantos09@gmail.com" className="text-2xl text-primary-text dark:text-light-text hover:text-neon-blue"><FaEnvelope /></a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-primary-text dark:text-light-text hover:text-neon-blue transition-colors text-lg"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-6 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 w-full justify-center">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary-text dark:text-light-text hover:text-neon-blue"><FaGithub /></a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary-text dark:text-light-text hover:text-neon-blue"><FaLinkedin /></a>
            <a href="mailto:tharciosantos09@gmail.com" className="text-2xl text-primary-text dark:text-light-text hover:text-neon-blue"><FaEnvelope /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;