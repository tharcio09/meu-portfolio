'use client';

import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
};

const projectsData: Project[] = [
  {
    title: "HelpFlow - Sistema de HelpDesk",
    description:
      "Aplicação Full-Stack para gestão de tickets, com autenticação (GitHub via NextAuth), DB (Prisma/Supabase) e autorização por papéis.",
    imageUrl: "/images/helpflow-screenshot.png",
    githubUrl: "https://github.com/tharcio09/helpflow",
    demoUrl: "https://helpflow.vercel.app/",
    tags: ["Next.js", "React", "Prisma", "Supabase", "NextAuth", "Tailwind"],
  },
  {
    title: "Minha Lista de Mercado (PWA)",
    description:
      "App Mobile-First focado em UX. Possui lista mestra inteligente, busca híbrida, organização automática por setores e integração com WhatsApp.",
    imageUrl: "/images/lista-mercado-screenshot.png",
    githubUrl: "https://github.com/tharcio09/lista-mercado",
    demoUrl: "https://lista-mercado-sage.vercel.app/",
    tags: ["React", "Vite", "PWA", "Tailwind CSS", "Local Storage"],
  },
  {
    title: "Crypto Dashboard",
    description:
      "Dashboard interativo que busca e exibe dados de criptomoedas da API CoinGecko, com filtro em tempo real e página de detalhes.",
    imageUrl: "/images/screenshot-crypto.png",
    githubUrl: "https://github.com/tharcio09/crypto-dashboard",
    demoUrl: "https://crypto-dashboard-five-sandy.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "API", "CoinGecko"],
  },
  {
    title: "Jogo da Velha com React",
    description:
      "Um clássico Jogo da Velha construído para demonstrar o uso de componentes, estado (useState) e lógica de eventos no React.",
    imageUrl: "/images/jogo-da-velha.png",
    githubUrl: "https://github.com/tharcio09/jogo-da-velha-react",
    demoUrl: "https://jogo-da-velha-react-neon.vercel.app/",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

const Projects = () => {
  return (
    <Section id="projetos" className="overflow-hidden">
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
        >
          Projetos
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto mb-6 opacity-60" />
        <p className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed">
          Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] py-4">
          {/* List 1 */}
          <div className="flex gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={`p1-${index}`} {...project} />
            ))}
          </div>
          {/* List 2 (Duplicate for Loop) */}
          <div className="flex gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={`p2-${index}`} {...project} />
            ))}
          </div>
          {/* List 3 (Extra Duplicate for smooth wide screens) */}
          <div className="flex gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={`p3-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
