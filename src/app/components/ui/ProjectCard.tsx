import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
}: ProjectCardProps) => {
  if (featured) {
    return (
      <article className="grid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-zinc-950 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-64 border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900 md:border-b-0 md:border-r">
          <Image
            src={imageUrl}
            alt={`Preview do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 48vw"
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 p-6 md:p-8">
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-semibold text-primary-text transition-colors hover:border-cyan-700 hover:text-cyan-700 dark:border-gray-700 dark:text-light-text dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              <FaGithub className="text-base" />
              Código
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-text px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg dark:hover:bg-gray-200"
              >
                <FaExternalLinkAlt className="text-sm" />
                {demoLabel ?? "Demo"}
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-zinc-950">
      <div className="relative h-44 border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900">
        <Image
          src={imageUrl}
          alt={`Preview do projeto ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold tracking-normal text-primary-text transition-colors group-hover:text-cyan-700 dark:text-light-text dark:group-hover:text-cyan-300">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-secondary-text dark:text-gray-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
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
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-semibold text-primary-text transition-colors hover:border-cyan-700 hover:text-cyan-700 dark:border-gray-700 dark:text-light-text dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            <FaGithub className="text-base" />
            Código
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary-text px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg dark:hover:bg-gray-200"
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
