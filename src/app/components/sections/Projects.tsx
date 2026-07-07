'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import ProjectCard from '../ui/ProjectCard';
import Section from '../ui/Section';
import { ExternalLinkIcon, GithubIcon } from '../ui/Icons';

type FilterKind = 'all' | 'featured' | 'secondary';

const filters: { kind: FilterKind; label: string }[] = [
  { kind: 'all', label: 'Todos' },
  { kind: 'featured', label: 'Destaque' },

  { kind: 'secondary', label: 'Secundários' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKind>('all');

  const featuredProjects = projects.filter((project) => project.kind === 'featured');
  const secondaryProjects = projects.filter((project) => project.kind === 'secondary');

  const showFeatured = activeFilter === 'all' || activeFilter === 'featured';
  const showSecondary = activeFilter === 'all' || activeFilter === 'secondary';

  return (
    <Section
      id="projetos"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <RevealOnScroll className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-b border-border-light pb-8 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              Trabalho selecionado
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Projetos
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end md:text-lg">
            Cada projeto parte de um problema concreto e combina interface, dados e decisões
            técnicas. HelpFlow e ManutFlow são sistemas completos em produção, com autenticação,
            banco de dados e deploy na Vercel.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 pt-6 md:pt-8">
          {filters.map(({ kind, label }) => (
            <button
              key={kind}
              onClick={() => setActiveFilter(kind)}
              className={cn(
                'border px-3 py-1.5 text-xs font-semibold transition-all duration-200',
                activeFilter === kind
                  ? 'border-accent bg-accent text-white shadow-sm dark:border-accent-light dark:bg-accent-light dark:text-dark-bg'
                  : 'border-border-light bg-transparent text-secondary-text hover:border-accent hover:text-accent dark:border-border-dark dark:text-dark-text dark:hover:border-accent-light dark:hover:text-accent-light'
              )}
              aria-pressed={activeFilter === kind}
            >
              {label}
            </button>
          ))}
        </div>

        {showFeatured &&
          featuredProjects.map((project, index) => (
            <article
              className={cn(
                'grid gap-8 border-b border-border-light py-10 animate-fade-up dark:border-border-dark lg:grid-cols-[1.15fr_0.85fr] lg:items-center'
              )}
              key={project.title}
            >
              <div className="relative overflow-hidden border border-border-light bg-white p-3 shadow-sm dark:border-border-dark dark:bg-dark-card sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-4 border-b border-border-light pb-3 text-xs dark:border-border-dark">
                  <span className="font-mono font-semibold uppercase tracking-[0.16em] text-secondary-text dark:text-dark-text">
                    Produto em produção
                  </span>
                  <span className="inline-flex items-center gap-2 border border-emerald-300 bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    Online
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-white dark:bg-dark-card">
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt ?? `Screenshot do projeto ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-contain p-2"
                      quality={82}
                    />
                  )}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
                  Case {index === 0 ? 'principal' : 'secundário'} · 0{index + 1}
                </p>
                <h3 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-primary-text dark:text-light-text">
                  {project.shortTitle}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-secondary-text dark:text-dark-text">
                  {project.description}
                </p>

                {project.casePoints && (
                  <dl className="mt-7 grid gap-3">
                    {project.casePoints.map((point) => (
                      <div
                        key={point.label}
                        className="grid gap-2 border border-border-light bg-white p-3 dark:border-border-dark dark:bg-dark-card sm:grid-cols-[5.5rem_1fr] sm:gap-5"
                      >
                        <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                          {point.label}
                        </dt>
                        <dd className="text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                          {point.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-accent-border bg-accent-subtle px-2.5 py-1 text-xs font-medium text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'border-slate-400 bg-white hover:bg-light-surface dark:border-slate-600 dark:bg-dark-card dark:hover:bg-dark-surface'
                    )}
                  >
                    <GithubIcon className="h-4 w-4" />
                    Ver código
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      {project.demoLabel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

        {showSecondary && (
          <div className="pt-10 animate-fade-up" key="secondary-projects">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-primary-text dark:text-light-text">
                  Outros projetos
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                Uma seleção compacta de aplicações que exploram upload, testes, PWA, estados
                assíncronos e consumo de APIs.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {secondaryProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        )}
      </RevealOnScroll>
    </Section>
  );
};

export default Projects;
