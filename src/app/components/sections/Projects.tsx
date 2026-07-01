import Image from 'next/image';
import { projects } from '@/data/projects';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import ProjectCard from '../ui/ProjectCard';
import Section from '../ui/Section';
import { ExternalLinkIcon, GithubIcon } from '../ui/Icons';

const Projects = () => {
  const featuredProject = projects.find((project) => project.kind === 'featured');
  const buildingProject = projects.find((project) => project.kind === 'building');
  const secondaryProjects = projects.filter((project) => project.kind === 'secondary');

  return (
    <Section
      id="projetos"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
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
            técnicas. HelpFlow representa a entrega mais completa; ManutFlow mostra o processo de
            construção em andamento.
          </p>
        </div>

        {featuredProject && featuredProject.imageUrl && (
          <article className="grid gap-8 border-b border-border-light py-10 dark:border-border-dark lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="relative overflow-hidden border border-border-light bg-white/70 p-3 shadow-sm dark:border-border-dark dark:bg-dark-card/70 sm:p-5">
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
                <Image
                  src={featuredProject.imageUrl}
                  alt={featuredProject.imageAlt ?? `Screenshot do projeto ${featuredProject.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain p-2"
                  quality={82}
                />
              </div>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
                Case principal · 01
              </p>
              <h3 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-primary-text dark:text-light-text">
                {featuredProject.shortTitle}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-secondary-text dark:text-dark-text">
                {featuredProject.description}
              </p>

              {featuredProject.casePoints && (
                <dl className="mt-7 grid gap-3">
                  {featuredProject.casePoints.map((point) => (
                    <div
                      key={point.label}
                      className="grid gap-2 border border-border-light bg-white/55 p-3 dark:border-border-dark dark:bg-dark-card/55 sm:grid-cols-[5.5rem_1fr] sm:gap-5"
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
                {featuredProject.tags.map((tag) => (
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
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'border-slate-400 bg-white/70 hover:bg-light-surface dark:border-slate-600 dark:bg-dark-card dark:hover:bg-dark-surface'
                  )}
                >
                  <GithubIcon className="h-4 w-4" />
                  Ver código
                </a>
                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    {featuredProject.demoLabel}
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {buildingProject && (
          <article className="grid gap-8 border-b border-border-light py-10 dark:border-border-dark lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                  Projeto em construção · 02
                </p>
                <span className="border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
                  Em desenvolvimento
                </span>
              </div>
              <h3 className="mt-5 text-4xl font-bold tracking-[-0.03em] text-primary-text dark:text-light-text">
                {buildingProject.shortTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-dark-text md:text-lg">
                {buildingProject.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {buildingProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border-light bg-white/55 px-2.5 py-1 text-xs font-medium text-secondary-text dark:border-border-dark dark:bg-dark-card/55 dark:text-dark-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={buildingProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline' }), 'mt-7')}
              >
                <GithubIcon className="h-4 w-4" />
                Acompanhar no GitHub
              </a>
            </div>

            <div className="border border-border-light bg-white/70 p-5 shadow-sm dark:border-border-dark dark:bg-dark-card/70 md:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-border-light pb-4 dark:border-border-dark">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
                  Registro de evolução
                </p>
                <span className="font-mono text-xs text-secondary-text dark:text-dark-text">
                  build / ongoing
                </span>
              </div>
              {buildingProject.casePoints && (
                <ol className="mt-2 divide-y divide-border-light dark:divide-border-dark">
                  {buildingProject.casePoints.map((point, index) => (
                    <li key={point.label} className="grid grid-cols-[2rem_1fr] gap-4 py-5">
                      <span className="font-mono text-xs text-amber-700 dark:text-amber-300">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                          {point.label}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                          {point.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </article>
        )}

        <div className="pt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
                Outros projetos
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-primary-text dark:text-light-text">
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
      </div>
    </Section>
  );
};

export default Projects;
