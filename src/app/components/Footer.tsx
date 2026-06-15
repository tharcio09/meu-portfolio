import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/data/constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './ui/Icons';

const Footer = () => {
  return (
    <footer
      className="border-t border-border-light py-8 transition-colors dark:border-border-dark"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold text-primary-text dark:text-light-text">
            Tharcio Santos — Desenvolvedor Fullstack Júnior
          </p>
          <p className="mt-2 text-sm text-secondary-text dark:text-dark-text">
            Projetos reais, aprendizado contínuo e construção de sistemas web.
          </p>
          <p className="mt-4 text-xs text-secondary-text dark:text-dark-text">
            © {new Date().getFullYear()} Tharcio Santos
            {' · '}
            <a
              href={`${GITHUB_URL}/meu-portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline dark:text-accent-light"
            >
              Ver código
            </a>
          </p>
        </div>

        <div className="flex gap-5">
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
      </div>
    </footer>
  );
};

export default Footer;
