// ./src/app/components/sections/About.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- (INÍCIO DA MUDANÇA) ---
// 1. Removemos o SiVscode da primeira linha
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiNodedotjs, SiReact,
  SiNextdotjs, SiMysql, SiMongodb, SiGit, SiGithub,
  SiPostman, SiNotion
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';


const skills = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiGit />, name: 'Git' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <VscCode />, name: 'VS Code' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <SiNotion />, name: 'Notion' },
];

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 relative w-64 h-64 mx-auto"
          >
            <Image
              src="/images/profile.png"
              alt="Foto de Tharcio Santos"
              fill={true}
              className="rounded-full border-4 border-neon-purple shadow-lg object-cover"
            />
          </motion.div>

          <div className="md:col-span-3 text-secondary-text dark:text-dark-text leading-relaxed">
            <p className="mb-4">
              Olá! Sou o Tharcio, um desenvolvedor web apaixonado por tecnologia e estudante de Análise e Desenvolvimento de Sistemas. Minha jornada na programação é movida pela curiosidade e pelo prazer de criar soluções que realmente funcionam.
            </p>

            <p>
              Atualmente, estou focado em aprofundar minhas habilidades em todo o ecossistema JavaScript, com foco em Node.js para o back-end e React/Next.js para o front-end, além de bancos de dados como MySQL. Acredito que a melhor forma de aprender é construindo, por isso dedico meu tempo à criação de projetos pessoais. Sou um profissional proativo e dedicado, buscando uma oportunidade de estágio para colaborar com uma equipe, aprender com desenvolvedores experientes e transformar meu conhecimento em valor real.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-primary-text dark:text-light-text text-center">
            Minhas Ferramentas
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 bg-light-card dark:bg-dark-card rounded-lg w-24 shadow-md dark:shadow-none"
              >
                <div className="text-4xl text-neon-blue mb-2">{skill.icon}</div>
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;