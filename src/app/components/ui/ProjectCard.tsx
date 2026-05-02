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
}: ProjectCardProps) => {
  if (featured) {
    return (
      <article className="grid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-zinc-950 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-72 border-b border-gray-200 bg-slate-100 p-4 dark:border-gray-800 dark:bg-zinc-900 lg:border-b-0 lg:border-r">
          <div className="absolute left-4 right-4 top-4 z-10 flex h-8 items-center gap-2 rounded-t-md border border-b-0 border-gray-200 bg-white px-3 dark:border-gray-800 dark:bg-zinc-950">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 truncate text-xs text-secondary-text dark:text-gray-500">
              helpflow.vercel.app
            </span>
          </div>
          <div className="relative mt-8 h-full min-h-64 overflow-hidden rounded-b-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-950">
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
            <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-zinc-900 dark:text-gray-300">
              Projeto principal
            </span>
            {badge && (
              <span className="rounded-md bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300">
                {badge}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-normal text-primary-text dark:text-light-text">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-gray-400">
              {description}
            </p>
          </div>

          {casePoints && casePoints.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3">
              {casePoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-md border border-gray-200 bg-gray-50/60 p-3 dark:border-gray-800 dark:bg-zinc-900/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-normal text-cyan-700 dark:text-cyan-300">
                    {point.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-text dark:text-gray-400">
                    {point.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {highlights && highlights.length > 0 && (
            <ul className="space-y-2 text-sm text-secondary-text dark:text-gray-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-gray-200 px-2.5 py-1 text-xs font-medium text-secondary-text dark:border-gray-800 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-gray-200 pt-5 dark:border-gray-800 sm:flex-row">
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
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-zinc-950">
      <div className="relative h-48 overflow-hidden border-b border-gray-200 bg-slate-100 p-3 dark:border-gray-800 dark:bg-zinc-900">
        <div className="absolute left-3 right-3 top-3 z-10 flex h-7 items-center gap-1.5 rounded-t-md border border-b-0 border-gray-200 bg-white px-2 dark:border-gray-800 dark:bg-zinc-950">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="relative mt-7 h-[calc(100%-1.75rem)] overflow-hidden rounded-b-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-950">
          <Image
            src={imageUrl}
            alt={`Preview do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
            quality={78}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {outcome && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-cyan-700 dark:text-cyan-300">
            {outcome}
          </p>
        )}
        <h3 className="text-xl font-bold tracking-normal text-primary-text transition-colors group-hover:text-cyan-700 dark:text-light-text dark:group-hover:text-cyan-300">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-secondary-text dark:text-gray-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-gray-200 px-2.5 py-1 text-xs font-medium text-secondary-text dark:border-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-gray-200 pt-5 dark:border-gray-800 sm:flex-row">
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
