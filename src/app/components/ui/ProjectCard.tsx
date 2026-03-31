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
        flex flex-col h-full w-full overflow-hidden rounded-2xl
        bg-light-card dark:bg-dark-card
        border border-gray-200 dark:border-gray-800
        shadow-sm transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/40
      "
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

      <div className="p-5 flex flex-col flex-1">
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

        {/* Botões do Projeto */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 border-t border-gray-200 dark:border-gray-700/50">
          {/* Botão Repositório */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2 py-3 px-4
              rounded-xl text-base font-semibold text-cyan-600 dark:text-cyan-400
              border border-cyan-500/50 bg-white/90 dark:bg-zinc-900/60
              hover:bg-cyan-100 dark:hover:bg-zinc-800 hover:border-cyan-500
              transition-all duration-300 shadow-sm hover:shadow-md w-full
            "
          >
            <FaGithub className="text-xl" />
            Repositório
          </a>

          {/* Botão Demo Condicional */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2 py-3 px-4
                rounded-xl text-base font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-blue-500 
                hover:from-cyan-600 hover:to-blue-600
                shadow-lg hover:shadow-xl w-full
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <FaExternalLinkAlt className="text-lg" />
              Projeto Online
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;