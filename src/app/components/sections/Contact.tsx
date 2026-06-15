import type { ReactNode } from 'react';
import Section from '../ui/Section';
import { EMAIL, redesSociais } from '@/data/constants';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { CopyEmailButton } from '../ui/CopyEmailButton';
import { ArrowRightIcon, DocumentIcon, GithubIcon, LinkedinIcon, MailIcon } from '../ui/Icons';

const icones: Record<string, ReactNode> = {
  LinkedIn: <LinkedinIcon className="h-5 w-5" />,
  GitHub: <GithubIcon className="h-5 w-5" />,
};

const RESUME_URL = '/curriculo-tharcio-santos.pdf';

const Contact = () => {
  return (
    <Section
      id="contato"
      spacing="editorial"
      className="border-t border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Contato
            </div>
            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Vamos conversar sobre uma oportunidade.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-secondary-text dark:text-dark-text">
              <p>
                Estou aberto a oportunidades de estágio ou posições júnior em desenvolvimento web.
              </p>
              <p>
                Tenho interesse em atuar com frontend, backend ou fullstack, principalmente em times
                onde eu possa aprender, contribuir e evoluir com projetos reais.
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-6')}
            >
              Entrar em contato
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="divide-y divide-border-light border-y border-border-light dark:divide-border-dark dark:border-border-dark">
            <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center border border-border-light text-xl text-accent dark:border-border-dark dark:text-accent-light"
                >
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-primary-text dark:text-light-text">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-secondary-text dark:text-dark-text">
                    {EMAIL}
                  </span>
                </span>
              </span>

              <div className="flex shrink-0 gap-2">
                <CopyEmailButton />

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center text-sm font-semibold text-accent hover:underline dark:text-accent-light"
                >
                  Abrir
                </a>
              </div>
            </div>

            {redesSociais.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent dark:hover:text-accent-light"
              >
                <span className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center border border-border-light text-xl text-accent dark:border-border-dark dark:text-accent-light"
                  >
                    {icones[link.label]}
                  </span>
                  <span>
                    <span className="block font-semibold text-primary-text dark:text-light-text">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-secondary-text dark:text-dark-text">
                      {link.description}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-accent dark:text-accent-light">
                  {link.action} →
                </span>
              </a>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent dark:hover:text-accent-light"
            >
              <span className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center border border-border-light text-accent dark:border-border-dark dark:text-accent-light"
                >
                  <DocumentIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-primary-text dark:text-light-text">
                    Currículo
                  </span>
                  <span className="mt-1 block text-sm text-secondary-text dark:text-dark-text">
                    Formação, experiência e informações profissionais.
                  </span>
                </span>
              </span>
              <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-accent dark:text-accent-light">
                Abrir →
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
