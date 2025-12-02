"use client";

import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Section id="projetos">
      <motion.div className="text-center mb-20">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Projetos
        </motion.h2>
        <motion.div
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent rounded-full mx-auto mb-6 opacity-60"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.6, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
        </motion.p>
      </motion.div>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
