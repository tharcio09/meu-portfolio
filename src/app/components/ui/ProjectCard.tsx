"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  tags,
}: ProjectCardProps) => {
  return (
    <div
      className="
        group w-full overflow-hidden rounded-2xl
        bg-light-card dark:bg-dark-card
        border border-gray-200 dark:border-gray-800
        shadow-sm transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/40
      "
    >
      {/* Image */}
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir repositório do projeto ${title} no GitHub`}
      >
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Preview do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </a>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir repositório do projeto ${title} no GitHub`}
          className="block"
        >
          <h3
            className="
              text-xl font-heading font-bold mb-2 truncate
              text-primary-text dark:text-light-text
              transition-colors duration-300 group-hover:text-neon-blue
            "
          >
            {title}
          </h3>
        </a>

        <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-text line-clamp-2 mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[10px] font-medium px-2 py-0.5 rounded-full
                border border-cyan-500/20
                bg-cyan-500/5 dark:bg-cyan-500/10
                text-cyan-500
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-3 flex gap-3 border-t border-gray-200 dark:border-gray-700/50">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código do projeto ${title}`}
            className="
              flex-1 flex items-center justify-center gap-2
              px-3 py-2 rounded-lg text-sm font-semibold
              border border-cyan-500/50 text-cyan-600 dark:text-cyan-400
              transition-colors duration-200
              hover:bg-cyan-500/10 hover:border-cyan-500
            "
          >
            <FaGithub className="text-lg" />
            Código
          </a>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demonstração do projeto ${title}`}
              className="
                flex-1 flex items-center justify-center gap-2
                px-3 py-2 rounded-lg text-sm font-semibold text-white
                bg-cyan-500 hover:bg-cyan-600
                shadow-sm transition-colors duration-200
              "
            >
              <FaExternalLinkAlt className="text-sm" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
