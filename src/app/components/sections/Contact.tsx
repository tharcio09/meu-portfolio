import type { ReactNode } from 'react';
import { HiMail, HiArrowRight } from 'react-icons/hi';
import Section from '../ui/Section';
import { EMAIL, redesSociais } from '@/data/constants';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { CopyEmailButton } from '../ui/CopyEmailButton';

const icones: Record<string, ReactNode> = {
  LinkedIn: <SiLinkedin aria-hidden="true" />,
  GitHub: <SiGithub aria-hidden="true" />,
};

const Contact = () => {
  return (
    <Section
      id="contato"
      spacing="compact"
      className="border-t border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-medium text-accent dark:text-accent-light">Contato</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-text dark:text-light-text md:text-4xl">
              Quer falar sobre uma oportunidade?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-dark-text">
              Pronto para contribuir como desenvolvedor júnior em times que valorizam entrega real.
              Posso colaborar com frontend, integrações, APIs e manutenção de produtos em produção.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-6')}
            >
              Entrar em contato
              <HiArrowRight className="text-base" aria-hidden="true" />
            </a>
          </div>

          <div className="divide-y divide-border-light overflow-hidden rounded-xl border border-border-light bg-white shadow-sm dark:divide-border-dark dark:border-border-dark dark:bg-dark-card">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-xl text-accent dark:bg-accent-subtle-dark dark:text-accent-light"
                >
                  <HiMail />
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
                className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-light-surface dark:hover:bg-dark-surface"
              >
                <span className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-xl text-accent dark:bg-accent-subtle-dark dark:text-accent-light"
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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
