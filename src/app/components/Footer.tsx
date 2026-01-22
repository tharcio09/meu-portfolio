'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-light-card/90 dark:bg-dark-card/90 backdrop-blur-lg text-center py-10 border-t border-gray-200/30 dark:border-gray-800/30 transition-all duration-300"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/tharcio09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Tharcio Santos"
            className="text-2xl text-neon-blue dark:text-neon-blue hover:text-neon-purple dark:hover:text-neon-purple transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5 active:scale-90"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tharcio-santos-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Tharcio Santos"
            className="text-2xl text-neon-blue dark:text-neon-blue hover:text-neon-purple dark:hover:text-neon-purple transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5 active:scale-90"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tharciosantos09@gmail.com"
            aria-label="Enviar e-mail para Tharcio Santos"
            className="text-2xl text-neon-blue dark:text-neon-blue hover:text-neon-purple dark:hover:text-neon-purple transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5 active:scale-90"
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
