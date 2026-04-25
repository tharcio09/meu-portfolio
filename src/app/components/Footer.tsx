'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="border-t border-gray-200/80 py-8 text-center transition-colors dark:border-gray-800"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/tharcio09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-cyan-700 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tharcio-santos-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-cyan-700 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tharciosantos09@gmail.com"
            aria-label="Enviar e-mail para Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-cyan-700 dark:text-gray-400 dark:hover:text-cyan-300"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-secondary-text dark:text-dark-text text-sm">
          &copy; {new Date().getFullYear()} Tharcio Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
