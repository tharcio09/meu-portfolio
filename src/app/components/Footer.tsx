import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/data/constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './ui/Icons';

const Footer = () => {
  return (
    <footer
      className="border-t border-border-light py-10 text-center transition-colors dark:border-border-dark"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-center space-x-6 mb-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
          >
            <GithubIcon className="h-5 w-5" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${EMAIL}`}
            aria-label="Enviar e-mail para Tharcio Santos"
            className="text-xl text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-secondary-text dark:text-dark-text">
          Feito com <span className="text-accent dark:text-accent-light font-medium">Next.js</span>
          {' · '}
          <a
            href={`${GITHUB_URL}/meu-portfolio`}
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
