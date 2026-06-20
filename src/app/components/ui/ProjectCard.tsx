import Image from 'next/image';
import type { Project } from '@/data/projects';
import { ExternalLinkIcon, GithubIcon } from './Icons';

const ProjectCard = ({
  shortTitle,
  description,
  imageUrl,
  imageAlt,
  githubUrl,
  demoUrl,
  tags,
  outcome,
  technicalHighlight,
}: Project) => {
  return (
    <article className="group grid min-h-full grid-rows-[auto_1fr] overflow-hidden border border-border-light bg-white/75 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-border hover:shadow-lg dark:border-border-dark dark:bg-dark-card/75 dark:hover:border-accent-border-dark">
      {imageUrl && (
        <div className="relative aspect-[2/1] overflow-hidden border-b border-border-light bg-light-surface dark:border-border-dark dark:bg-dark-surface md:aspect-[16/9]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? `Screenshot do projeto ${shortTitle}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            quality={78}
          />
        </div>
      )}

      <div className="flex flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          {outcome && (
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
              {outcome}
            </p>
          )}
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light"
            aria-hidden="true"
          />
        </div>
        <h4 className="mt-3 text-xl font-bold tracking-tight text-primary-text dark:text-light-text">
          {shortTitle}
        </h4>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
          {description}
        </p>
        {technicalHighlight && (
          <p className="mt-3 line-clamp-2 border-l-2 border-accent pl-3 text-xs leading-relaxed text-secondary-text dark:border-accent-light dark:text-dark-text md:mt-4">
            {technicalHighlight}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-border-light px-2 py-0.5 text-xs font-medium text-secondary-text dark:border-border-dark dark:text-dark-text"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 border-t border-border-light pt-4 dark:border-border-dark md:pt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border-light px-3 py-2 text-sm font-semibold text-primary-text hover:border-accent hover:text-accent dark:border-border-dark dark:text-light-text dark:hover:border-accent-light dark:hover:text-accent-light"
          >
            <GithubIcon className="h-4 w-4" />
            Código
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent bg-accent px-3 py-2 text-sm font-semibold text-white hover:bg-accent-hover dark:border-accent-light dark:bg-accent-light dark:text-dark-bg dark:hover:bg-accent-light-hover"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
