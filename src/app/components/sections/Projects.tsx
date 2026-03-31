"use client";

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
    title: "HelpFlow — Sistema de Help Desk",
    description:
      "Projeto pessoal de desenvolvimento web onde implementei um sistema de tickets, explorando autenticação com NextAuth, integração com banco de dados utilizando Prisma e Supabase, além de conceitos iniciais de autorização.",
    imageUrl: "/images/helpflow-screenshot.png",
    githubUrl: "https://github.com/tharcio09/helpflow",
    demoUrl: "https://helpflow.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "NextAuth"],
  },
  {
    title: "Lista de Mercado — PWA",
    description:
      "Aplicação mobile-first desenvolvida como projeto pessoal, com foco em experiência do usuário. Trabalha conceitos de PWA, organização de dados no Local Storage e compartilhamento via WhatsApp.",
    imageUrl: "/images/lista-mercado-screenshot.png",
    githubUrl: "https://github.com/tharcio09/lista-mercado",
    demoUrl: "https://lista-mercado-sage.vercel.app/",
    tags: ["React", "Vite", "PWA", "Tailwind CSS", "Local Storage"],
  },
  {
    title: "Crypto Dashboard",
    description:
      "Projeto front-end para consumo de API, onde desenvolvi um dashboard interativo consumindo dados da CoinGecko, com filtros em tempo real e página de detalhes.",
    imageUrl: "/images/screenshot-crypto.png",
    githubUrl: "https://github.com/tharcio09/crypto-dashboard",
    demoUrl: "https://crypto-dashboard-five-sandy.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "API REST"],
  },
  {
    title: "Aplicação Front-end: Autenticação JWT & Dashboard",
    description:
      "Uma Single Page Application (SPA) robusta e moderna, desenvolvida para demonstrar o consumo seguro de uma API RESTful.",
    imageUrl: "/images/screenshot-api.PNG",
    githubUrl: "https://github.com/tharcio09/frontend-api",
    demoUrl: "https://frontend-api-weld.vercel.app/",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

const Projects = () => {
  return (
    <Section id="projetos">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight">
          Projetos
        </h2>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto mb-6 opacity-60" />

        <p className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed">
          Projetos desenvolvidos para praticar e consolidar meus conhecimentos
          em desenvolvimento web
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
