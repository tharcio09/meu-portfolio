
'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';


const projectsData = [
  {
    title: 'Jogo da Velha com React',
    description: 'Um clássico Jogo da Velha construído para demonstrar o uso de componentes, estado (useState) e lógica de eventos no React.',
    imageUrl: '/images/jogo-da-velha.png',
    githubUrl: 'https://github.com/tharcio09/jogo-da-velha-react',
    demoUrl: 'https://jogo-da-velha-react-neon.vercel.app/',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'HelpFlow - Sistema de HelpDesk',
    description: 'Aplicação Full-Stack para gestão de tickets, com autenticação (GitHub via NextAuth), DB (Prisma/Supabase) e autorização por papéis.',
    imageUrl: '/images/helpflow-screenshot.png',
    githubUrl: 'https://github.com/tharcio09/helpflow',
    demoUrl: 'https://helpflow.vercel.app/', 
    tags: ['Next.js', 'React', 'Prisma', 'Supabase', 'NextAuth', 'Tailwind'],
  },
  {
    title: 'Crypto Dashboard',
    description: 'Dashboard interativo que busca e exibe dados de criptomoedas da API CoinGecko, com filtro em tempo real e página de detalhes.',
    imageUrl: '/images/screenshot-crypto.png',
    githubUrl: 'https://github.com/tharcio09/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'API', 'CoinGecko'],
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;