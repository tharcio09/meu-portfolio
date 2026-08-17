import type { ReactNode } from 'react';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import Section from '../ui/Section';
import { EMAIL, redesSociais, RESUME_URL } from '@/data/constants';
import { CopyEmailButton } from '../ui/CopyEmailButton';
import { DocumentIcon, GithubIcon, LinkedinIcon, MailIcon } from '../ui/Icons';

const icones: Record<string, ReactNode> = {
  LinkedIn: <LinkedinIcon className="h-5 w-5" />,
  GitHub: <GithubIcon className="h-5 w-5" />,
};

const Contact = () => {
  return (
    <Section id="contato" spacing="editorial">
      <RevealOnScroll className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Contato
            </div>
            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Vamos conversar sobre uma oportunidade
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-text dark:text-dark-text">
              Estou aberto a oportunidades de estágio ou posições júnior em desenvolvimento de
              software, com interesse em frontend, backend ou full stack e em times onde eu possa
              aprender, contribuir e evoluir com projetos reais.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 border-l-2 border-accent pl-4 dark:border-accent-light">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Disponível para contratação</span>
              </div>
              <p className="text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                Interesse em{' '}
                <strong className="text-primary-text dark:text-light-text">Estágio</strong> ou{' '}
                <strong className="text-primary-text dark:text-light-text">
                  Desenvolvimento Júnior
                </strong>{' '}
                · Atuação Remota, Híbrida ou Presencial (Caeté / BH e região).
              </p>
            </div>
          </div>

          <div className="border border-border-light bg-white p-4 shadow-sm dark:border-border-dark dark:bg-dark-card md:p-5">
            <div className="border-b border-border-light pb-4 dark:border-border-dark">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-accent-light">
                Canais de contato
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex flex-col gap-4 border border-border-light bg-light-card p-3 dark:border-border-dark dark:bg-dark-surface sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center border border-border-light bg-white text-xl text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light"
                  >
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-primary-text dark:text-light-text">
                      E-mail
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
                  className="group flex items-center justify-between gap-4 border border-border-light bg-light-card p-3 transition-all hover:border-accent hover:text-accent dark:border-border-dark dark:bg-dark-surface dark:hover:border-accent-light dark:hover:text-accent-light"
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center border border-border-light bg-white text-xl text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light"
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
                  <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1 dark:text-accent-light">
                    {link.action} →
                  </span>
                </a>
              ))}

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border border-border-light bg-light-card p-3 transition-all hover:border-accent hover:text-accent dark:border-border-dark dark:bg-dark-surface dark:hover:border-accent-light dark:hover:text-accent-light"
              >
                <span className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center border border-border-light bg-white text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light"
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
                <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1 dark:text-accent-light">
                  Abrir →
                </span>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
};

export default Contact;
