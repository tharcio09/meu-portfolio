'use client';

import { useState } from 'react';
import type { Project } from '@/data/projects';
import { buttonVariants } from '../ui/Button';
import { Pill } from '../ui/Pill';
import { ExternalLinkIcon, GithubIcon } from '../ui/Icons';
import { ProjectScreenShowcase } from '../ui/ProjectScreenShowcase';
import { cn } from '@/lib/utils';

type ProjectTabsProps = {
  projects: Project[];
};

export function ProjectTabs({ projects }: ProjectTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = projects[activeIndex] ?? projects[0];

  return (
    <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 w-full min-w-0">
      {/* Barra de Abas de Projetos */}
      <div
        role="tablist"
        aria-label="Projetos em destaque e complementares"
        className="flex overflow-x-auto pb-2.5 gap-1.5 sm:gap-2 border-b border-border-light dark:border-border-dark scrollbar-none snap-x touch-pan-x w-full min-w-0"
      >
        {projects.map((p, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={p.shortTitle}
              role="tab"
              aria-selected={isActive}
              aria-controls={`project-panel-${idx}`}
              id={`project-tab-${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                'group flex shrink-0 items-center gap-1.5 sm:gap-2 border px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold transition-all duration-200 cursor-pointer min-h-[36px] sm:min-h-[40px]',
                isActive
                  ? 'border-accent bg-accent text-white shadow-sm dark:border-accent-light dark:bg-accent-light dark:text-dark-bg'
                  : 'border-border-light bg-white text-secondary-text hover:border-accent/40 hover:text-accent dark:border-border-dark dark:bg-dark-card dark:text-dark-text dark:hover:border-accent-light/40 dark:hover:text-accent-light'
              )}
            >
              <span
                className={cn(
                  'font-mono text-[10px] sm:text-[11px]',
                  isActive
                    ? 'text-white/80 dark:text-dark-bg/80'
                    : 'text-accent dark:text-accent-light'
                )}
              >
                0{idx + 1}
              </span>
              <span className="whitespace-nowrap">{p.shortTitle}</span>
              {p.kind === 'featured' && (
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full shrink-0',
                    isActive ? 'bg-white dark:bg-dark-bg' : 'bg-emerald-500'
                  )}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Painel do Projeto Ativo */}
      <article
        role="tabpanel"
        id={`project-panel-${activeIndex}`}
        aria-labelledby={`project-tab-${activeIndex}`}
        className="grid gap-6 sm:gap-8 border border-border-light bg-white/50 p-3 sm:p-6 shadow-sm dark:border-border-dark dark:bg-dark-card/50 lg:grid-cols-[1.1fr_0.9fr] lg:items-start w-full min-w-0 overflow-hidden"
      >
        {/* Coluna do Showcase Visual e Ações Rápidas */}
        <div className="space-y-3.5 sm:space-y-4 w-full min-w-0">
          <ProjectScreenShowcase
            key={current.shortTitle}
            screens={current.screens ?? []}
            title={current.title}
            defaultImageUrl={current.imageUrl}
            defaultImageAlt={current.imageAlt}
          />

          {/* Botões de Ação */}
          <div className="grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
            <a
              href={current.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full border-border-light bg-white hover:bg-light-surface dark:border-border-dark dark:bg-dark-card dark:hover:bg-dark-surface min-h-[44px]'
              )}
            >
              <GithubIcon className="h-4 w-4" />
              Ver código
            </a>
            {current.demoUrl && (
              <a
                href={current.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'primary', size: 'lg' }),
                  'w-full min-h-[44px]'
                )}
              >
                <ExternalLinkIcon className="h-4 w-4" />
                {current.demoLabel ?? 'Acessar aplicação'}
              </a>
            )}
          </div>
        </div>

        {/* Coluna de Detalhes Técnicos */}
        <div className="space-y-3.5 sm:space-y-4 w-full min-w-0 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
            <p className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light shrink-0">
              Projeto 0{activeIndex + 1} de 0{projects.length}
            </p>
            {current.metrics && (
              <div className="flex flex-wrap gap-1 sm:gap-1.5 min-w-0">
                {current.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="border border-border-light bg-light-surface px-1.5 sm:px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-semibold text-secondary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-primary-text dark:text-light-text sm:text-3xl truncate">
              {current.shortTitle}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-secondary-text dark:text-dark-text">
              {current.description}
            </p>
          </div>

          {/* Decisões e Responsabilidade */}
          {(current.responsibility || current.decision) && (
            <div className="grid gap-2 sm:gap-2.5 grid-cols-1 min-w-0">
              {current.responsibility && (
                <div className="border border-border-light bg-white/70 p-2.5 sm:p-3 dark:border-border-dark dark:bg-dark-card/70 min-w-0">
                  <dt className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                    Minha responsabilidade
                  </dt>
                  <dd className="mt-1 text-[11px] sm:text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                    {current.responsibility}
                  </dd>
                </div>
              )}
              {current.decision && (
                <div className="border border-border-light bg-white/70 p-2.5 sm:p-3 dark:border-border-dark dark:bg-dark-card/70 min-w-0">
                  <dt className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                    Decisão técnica
                  </dt>
                  <dd className="mt-1 text-[11px] sm:text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                    {current.decision}
                  </dd>
                </div>
              )}
            </div>
          )}

          {/* Evidências Implementadas */}
          {current.evidence && current.evidence.length > 0 && (
            <div className="border-l-2 border-accent pl-3 sm:pl-3.5 dark:border-accent-light min-w-0">
              <p className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary-text dark:text-light-text">
                Implementado
              </p>
              <ul className="mt-1 sm:mt-1.5 grid gap-1 text-[11px] sm:text-xs text-secondary-text dark:text-dark-text min-w-0">
                {current.evidence.slice(0, 4).map((item) => (
                  <li key={item} className="break-words">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Destaque Técnico para Projetos Secundários */}
          {current.technicalHighlight && (
            <div className="border-l-2 border-accent pl-3 sm:pl-3.5 dark:border-accent-light min-w-0">
              <p className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary-text dark:text-light-text">
                Destaque técnico
              </p>
              <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                {current.technicalHighlight}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 min-w-0">
            {current.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          {/* Acesso Rápido */}
          {current.demoNote && (
            <div className="flex items-center gap-2 border border-border-light bg-light-surface p-2 sm:p-2.5 text-[11px] sm:text-xs text-secondary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text min-w-0">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="break-words min-w-0">
                <strong className="font-semibold text-primary-text dark:text-light-text">
                  Acesso rápido:
                </strong>{' '}
                {current.demoNote}
              </span>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
