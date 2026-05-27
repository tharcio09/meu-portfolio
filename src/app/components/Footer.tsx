import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="border-t border-border-light py-10 text-center transition-colors dark:border-border-dark"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-center space-x-6 mb-5">
          <a
            href="https://github.com/tharcio09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tharcio-santos-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tharciosantos09@gmail.com"
            aria-label="Enviar e-mail para Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-secondary-text dark:text-dark-text">
          Feito com <span className="text-accent dark:text-accent-light font-medium">Next.js</span>
          {' · '}
          <a
            href="https://github.com/tharcio09/meu-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 hover:decoration-accent dark:text-accent-light dark:decoration-accent-light/40 dark:hover:decoration-accent-light"
          >
            Ver código
          </a>
          {' · '}
          <span>© {new Date().getFullYear()} Tharcio Santos</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
