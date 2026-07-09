'use client';

import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import Section from '../ui/Section';

const processSteps = [
  {
    step: 'Schema do banco',
    detail: 'Modelei o banco com Prisma definindo User, Ticket e Comment com relacionamentos.',
  },
  {
    step: 'API com rotas',
    detail: 'Criei endpoints REST com Next.js para CRUD de tickets, autenticação e filtros.',
  },
  {
    step: 'Autenticação',
    detail: 'Implementei login com NextAuth, roles CLIENT/AGENT e proteção de rotas.',
  },
  {
    step: 'Interface',
    detail: 'Construí o painel com React, formulários validados e estados de carregamento.',
  },
  {
    step: 'Testes',
    detail: 'Escrevi testes unitários com Vitest e E2E com Cypress no fluxo principal.',
  },
  {
    step: 'Deploy',
    detail: 'Publiquei no Vercel com variáveis de ambiente e banco no Supabase.',
  },
];

const Process = () => {
  const { ref, visible } = useScrollReveal<HTMLOListElement>(0.12);

  return (
    <Section id="processo" spacing="editorial" className="">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Processo
          </div>
          <h2 className="mt-5 max-w-md text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
            Como eu Trabalho
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-text dark:text-dark-text">
            No HelpFlow, dividi o desenvolvimento em etapas pequenas e incrementais. Cada etapa gera
            código funcional e testável antes de avançar para a próxima.
          </p>
        </div>

        <ol ref={ref} className="grid gap-3 sm:grid-cols-2">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className={cn(
                'grid min-h-20 grid-cols-[auto_1fr] items-start gap-3 border border-border-light bg-white p-4 shadow-sm dark:border-border-dark dark:bg-dark-card',
                'transition-all duration-300 ease-out',
                'hover:-translate-y-1 hover:border-accent-border hover:shadow-xl dark:hover:border-accent-border-dark',
                visible ? 'animate-fade-up opacity-0' : 'opacity-0',
                index === processSteps.length - 1 &&
                  processSteps.length % 2 !== 0 &&
                  'sm:col-span-2'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-accent-light">
                Passo {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                  {item.step}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Process;
