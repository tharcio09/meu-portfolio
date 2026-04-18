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

  /* ── FEATURED: layout horizontal ── */
  if (featured) {
    return (
      <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-cyan-500/50 hover:border-cyan-500 bg-light-card dark:bg-dark-card shadow-sm hover:shadow-lg transition-all duration-300 ease-out">

        {/* Imagem — topo no mobile, esquerda no desktop */}
        <div className="relative h-56 md:h-auto md:w-[44%] flex-shrink-0 overflow-hidden">
        <Image
            src={imageUrl}
            alt={`Preview do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 44vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Conteúdo — direita no desktop */}
        <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">

          {/* Badge de destaque */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1">
              ⭐ Projeto Principal
            </span>
          </div>

          <h3 className="text-2xl font-heading font-bold text-primary-text dark:text-light-text leading-snug">
            {title}
          </h3>

          {/* Descrição sem line-clamp */}
          <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-text">
            {description}
          </p>

          {/* Bullet points de prova técnica */}
          {highlights && highlights.length > 0 && (
            <ul className="space-y-1.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-secondary-text dark:text-gray-300">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Micro-seal de credencial */}
          {badge && (
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                ✓ {badge}
              </span>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/10 text-cyan-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botões */}
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700/50 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-base font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/50 bg-white/90 dark:bg-zinc-900/60 hover:bg-cyan-100 dark:hover:bg-zinc-800 hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              <FaGithub className="text-xl" />
              Ver código
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl w-full sm:w-auto transition-all duration-300 hover:-translate-y-1"
              >
                <FaExternalLinkAlt className="text-lg" />
                {demoLabel ?? "Ver demo"}
              </a>
            )}
          </div>

        </div>
      </div>
    );
  }

  /* ── REGULAR: layout vertical ── */
  return (
    <div className="flex flex-col h-full w-full overflow-hidden rounded-2xl bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/40">

      {/* Imagem com scroll reveal no hover */}
      <div className="relative h-40 w-full overflow-hidden group/img cursor-pointer">
        <Image
          src={imageUrl}
          alt={`Preview do projeto ${title}`}
          width={800}
          height={500}
          className="w-full h-auto transition-transform duration-[2500ms] ease-in-out group-hover/img:-translate-y-[45%]"
        />

        {/* Gradient hint que aparece no hover */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {/* Topo: escurece levemente ao revelar */}
          <div className="h-8 bg-gradient-to-b from-black/0 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
          {/* Base: hint de scroll */}
          <div className="flex items-center justify-center gap-1.5 pb-2 opacity-0 group-hover/img:opacity-0 transition-opacity duration-150">
            <span className="text-[10px] text-white/70 bg-black/40 rounded-full px-2 py-0.5 backdrop-blur-sm">
              👁 ver preview
            </span>
          </div>
        </div>

      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold mb-2 truncate text-primary-text dark:text-light-text transition-colors duration-300 group-hover:text-neon-blue">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-text line-clamp-3 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/10 text-cyan-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 border-t border-gray-200 dark:border-gray-700/50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/50 bg-white/90 dark:bg-zinc-900/60 hover:bg-cyan-100 dark:hover:bg-zinc-800 hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md w-full"
          >
            <FaGithub className="text-xl" />
            Ver código
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl w-full transition-all duration-300 hover:-translate-y-1"
            >
              <FaExternalLinkAlt className="text-lg" />
              Ver demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;