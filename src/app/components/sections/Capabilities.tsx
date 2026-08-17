import type { ReactNode } from 'react';
import { capabilities } from '@/data/capabilities';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { pillVariants } from '../ui/Pill';
import { CodeIcon, DatabaseIcon, RocketIcon, CheckIcon } from '../ui/Icons';

const pillarIcons: Record<string, ReactNode> = {
  'Frontend & UI': <CodeIcon className="h-4 w-4" />,
  'Backend & Segurança': <RocketIcon className="h-4 w-4" />,
  'Bancos de Dados & Infra': <DatabaseIcon className="h-4 w-4" />,
  'Testes & Versionamento': <CheckIcon className="h-4 w-4" />,
};

const Capabilities = () => {
  return (
    <Section
      id="habilidades"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Competências
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-4xl">
              Stack e tecnologias
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end">
            Tecnologias aplicadas em produção, organizadas em 4 pilares: interfaces, segurança de
            APIs, bancos relacionais e testes automatizados.
          </p>
        </div>

        <RevealOnScroll className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between border border-border-light bg-white/60 p-4 shadow-sm transition-all duration-200 hover:border-accent/40 dark:border-border-dark dark:bg-dark-card/60"
            >
              <div>
                <div className="flex items-center gap-2.5 border-b border-border-light pb-3 dark:border-border-dark">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-border-light bg-white text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light"
                  >
                    {pillarIcons[item.title]}
                  </span>
                  <h3 className="text-sm font-bold tracking-tight text-primary-text dark:text-light-text">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3.5">
                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label={`Tecnologias de ${item.title}`}
                  >
                    {item.technologies.map((technology) => (
                      <li
                        key={technology}
                        className={cn(pillVariants({ variant: 'accent', size: 'sm' }))}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {item.usedIn.length > 0 && (
                <p className="mt-4 border-t border-border-light pt-2.5 text-[11px] text-secondary-text dark:border-border-dark dark:text-dark-text">
                  <span className="font-semibold text-primary-text dark:text-light-text">
                    Aplicado em:
                  </span>{' '}
                  {item.usedIn.join(' · ')}
                </p>
              )}
            </article>
          ))}
        </RevealOnScroll>
      </div>
    </Section>
  );
};

export default Capabilities;
