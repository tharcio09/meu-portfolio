'use client';

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
      className="group bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-800 hover:border-neon-blue/40 transition-all duration-300 ease-out hover:-translate-y-2 w-[350px] flex-shrink-0"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Screenshot do projeto ${title}`}
          fill={true}
          sizes="350px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-heading font-bold mb-2 text-primary-text dark:text-light-text group-hover:text-neon-blue transition-colors duration-300 truncate">
          {title}
        </h3>
        <p className="text-secondary-text dark:text-dark-text flex-grow mb-3 leading-relaxed text-sm line-clamp-2">
          {description}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-neon-blue/5 dark:bg-neon-blue/10 text-neon-blue border border-neon-blue/20 px-2 py-0.5 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
             <span className="text-[10px] text-secondary-text px-1">+{tags.length - 4}</span>
          )}
        </div>

        <div className="mt-auto flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código do projeto ${title}`}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-bold transition-all duration-300
                       border border-cyan-500/50 text-cyan-500 dark:text-cyan-400
                       hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-white
                       active:scale-95 text-sm"
          >
            <FaGithub className="text-lg" />
            <span>Código</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demonstração do projeto ${title}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white font-bold shadow-md transition-all duration-300
                         bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-[length:200%_auto]
                         hover:bg-right hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]
                         active:scale-95 text-sm"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
