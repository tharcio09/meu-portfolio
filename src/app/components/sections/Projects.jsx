// ./src/app/components/sections/Projects.jsx
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
  // Adicione mais projetos aqui no futuro
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
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