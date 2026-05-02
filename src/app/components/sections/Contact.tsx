'use client';

import { useState } from 'react';
import { HiMail, HiCheck, HiDuplicate, HiArrowRight } from 'react-icons/hi';
import Section from '../ui/Section';
import { EMAIL, redesSociais } from '@/data/constants';
import { Button, buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const icones: Record<string, React.ReactNode> = {
  LinkedIn: <SiLinkedin />,
  GitHub: <SiGithub />,
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section
      id="contato"
      spacing="compact"
      className="border-t border-gray-200/80 dark:border-gray-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Contato</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-primary-text dark:text-light-text md:text-4xl">
              Quer falar sobre uma oportunidade?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-gray-300">
              Estou disponível para estágio ou vaga júnior em desenvolvimento web/fullstack. Posso
              contribuir com frontend, integrações, APIs e manutenção de produtos reais.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-6')}
            >
              Enviar email
              <HiArrowRight className="text-base" />
            </a>
          </div>

          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-800 dark:border-gray-800 dark:bg-zinc-950">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-4">
                <span className="text-xl text-cyan-700 dark:text-cyan-300">
                  <HiMail />
                </span>
                <span>
                  <span className="block font-semibold text-primary-text dark:text-light-text">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-secondary-text dark:text-gray-400">
                    {EMAIL}
                  </span>
                </span>
              </span>

              <div className="flex shrink-0 gap-2">
                <Button
                  onClick={handleCopyEmail}
                  aria-label={copied ? 'Email copiado' : 'Copiar email'}
                  variant="outline"
                  size="sm"
                  className={cn(
                    'h-8 px-3 text-xs gap-1.5',
                    copied &&
                      'border-green-300 bg-green-50 text-green-700 hover:border-green-300 hover:bg-green-50 hover:text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400 dark:hover:border-green-800 dark:hover:bg-green-950/30'
                  )}
                >
                  {copied ? (
                    <>
                      <HiCheck className="text-sm" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <HiDuplicate className="text-sm" />
                      Copiar
                    </>
                  )}
                </Button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
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
                className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900"
              >
                <span className="flex items-center gap-4">
                  <span className="text-xl text-cyan-700 dark:text-cyan-300">
                    {icones[link.label]}
                  </span>
                  <span>
                    <span className="block font-semibold text-primary-text dark:text-light-text">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-secondary-text dark:text-gray-400">
                      {link.description}
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  {link.action}
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
