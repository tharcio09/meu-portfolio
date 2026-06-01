import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { buttonVariants } from './Button';
import { cn } from '@/lib/utils';

type CasePoint = {
  label: string;
  value: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  tags: string[];
  featured?: boolean;
  highlights?: string[];
  badge?: string;
  casePoints?: CasePoint[];
  outcome?: string;
  technicalHighlight?: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  demoLabel,
  tags,
  featured = false,
  highlights,
  badge,
  casePoints,
  outcome,
  technicalHighlight,
}: ProjectCardProps) => {
  if (featured) {
    return (
      <article
        className="grid overflow-hidden rounded-xl border border-border-light bg-white shadow-sm hover:shadow-md dark:border-border-dark dark:bg-dark-card lg:grid-cols-[0.95fr_1.05fr]"
        style={{
          transitionProperty: 'box-shadow',
          transitionDuration: '300ms',
          transitionTimingFunction: 'ease',
        }}
      >
        <div className="relative min-h-72 border-b border-border-light bg-light-surface p-4 dark:border-border-dark dark:bg-dark-surface lg:border-b-0 lg:border-r">
          {/* Barra de browser falsa */}
          <div className="absolute left-4 right-4 top-4 z-10 flex h-8 items-center gap-2 rounded-t-md border border-b-0 border-border-light bg-white px-3 dark:border-border-dark dark:bg-dark-card">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 truncate text-xs text-secondary-text dark:text-dark-text">
              helpflow.vercel.app
            </span>
          </div>
          <div className="relative mt-8 h-full min-h-64 overflow-hidden rounded-b-md border border-border-light bg-white dark:border-border-dark dark:bg-dark-card">
            <Image
              src={imageUrl}
              alt={`Preview do projeto ${title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain p-3"
              quality={82}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-dark-surface dark:text-dark-text">
              Projeto principal
            </span>
            {badge && (
              <span className="rounded-md bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent dark:bg-accent-subtle-dark dark:text-accent-light">
                {badge}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-primary-text dark:text-light-text">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
              {description}
            </p>
            {technicalHighlight && (
              <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                <span className="font-semibold text-accent dark:text-accent-light">
                  Decisão técnica:
                </span>{' '}
                {technicalHighlight}
              </p>
            )}
          </div>

          {casePoints && casePoints.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3">
              {casePoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-lg border border-border-light bg-light-surface/60 p-3 dark:border-border-dark dark:bg-dark-surface/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                    {point.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                    {point.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {highlights && highlights.length > 0 && (
            <ul className="space-y-2 text-sm text-secondary-text dark:text-dark-text">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border-light px-2.5 py-1 text-xs font-medium text-secondary-text dark:border-border-dark dark:text-dark-text"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-border-light pt-5 dark:border-border-dark sm:flex-row">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              <FaGithub className="text-base" />
              Código
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'primary' }))}
              >
                <FaExternalLinkAlt className="text-sm" />
                {demoLabel ?? 'Demo'}
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-accent-border dark:border-border-dark dark:bg-dark-card dark:hover:border-accent-border-dark"
      style={{
        transitionProperty: 'transform, box-shadow, border-color',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease',
      }}
    >
      <div className="relative h-48 overflow-hidden border-b border-border-light bg-light-surface p-3 dark:border-border-dark dark:bg-dark-surface">
        <div className="absolute left-3 right-3 top-3 z-10 flex h-7 items-center gap-1.5 rounded-t-md border border-b-0 border-border-light bg-white px-2 dark:border-border-dark dark:bg-dark-card">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="relative mt-7 h-[calc(100%-1.75rem)] overflow-hidden rounded-b-md border border-border-light bg-white dark:border-border-dark dark:bg-dark-card">
          <Image
            src={imageUrl}
            alt={`Preview do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            quality={78}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {outcome && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
            {outcome}
          </p>
        )}
        <h3 className="text-xl font-bold tracking-tight text-primary-text transition-colors group-hover:text-accent dark:text-light-text dark:group-hover:text-accent-light">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
          {description}
        </p>
        {technicalHighlight && (
          <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
            <span className="font-semibold text-accent dark:text-accent-light">
              Destaque técnico:
            </span>{' '}
            {technicalHighlight}
          </p>
        )}

        {casePoints && casePoints.length > 0 && (
          <div className="mt-4 space-y-2">
            {casePoints.slice(0, 2).map((point) => (
              <div key={point.label} className="flex gap-2 text-xs">
                <span className="font-semibold text-accent dark:text-accent-light shrink-0">
                  {point.label}:
                </span>
                <span className="text-secondary-text dark:text-dark-text line-clamp-1">
                  {point.value}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border-light px-2.5 py-1 text-xs font-medium text-secondary-text dark:border-border-dark dark:text-dark-text"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-border-light pt-5 dark:border-border-dark sm:flex-row">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }), 'flex-1')}
          >
            <FaGithub className="text-base" />
            Código
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'primary' }), 'flex-1')}
            >
              <FaExternalLinkAlt className="text-sm" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
