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
        group w-[350px] flex-shrink-0 overflow-hidden rounded-2xl
        bg-light-card dark:bg-dark-card
        border border-gray-200 dark:border-gray-800
        shadow-sm transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:border-neon-blue/40
      "
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Preview do projeto ${title}`}
          fill
          sizes="350px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h3
          className="
            text-xl font-heading font-bold mb-2 truncate
            text-primary-text dark:text-light-text
            transition-colors duration-300 group-hover:text-neon-blue
          "
        >
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-text line-clamp-2 mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="
                text-[10px] font-medium px-2 py-0.5 rounded-full
                border border-neon-blue/20
                bg-neon-blue/5 dark:bg-neon-blue/10
                text-neon-blue
              "
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-[10px] text-secondary-text px-1">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-3 flex gap-3 border-t border-gray-200 dark:border-gray-700/50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código do projeto ${title}`}
            className="
              flex-1 flex items-center justify-center gap-2
              px-3 py-2 rounded-lg text-sm font-semibold
              border border-cyan-500/50 text-cyan-500 dark:text-cyan-400
              transition-all duration-300
              hover:bg-cyan-500/10 hover:border-cyan-400
              active:scale-95
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
                shadow-md transition-all duration-300
                bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-[length:200%_auto]
                hover:bg-right hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]
                active:scale-95
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
