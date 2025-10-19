// components/sections/Experience.jsx
'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

// SEUS DADOS REAIS - BASTA PREENCHER OS NOMES E DATAS
const experiencesData = [
  {
    role: 'Auxiliar Administrativo',
    company: 'EPOS - Empresa Portuguesa de Obras Subterrâneas',
    period: '05/2023 - 10/2023',
    description: [
      'Análise e processamento de solicitações técnicas, definindo prioridades e documentando requisitos para a equipe.',
      'Criação de relatórios para rastrear a performance de sistemas, utilizando dados para apoiar a tomada de decisão técnica.',
      'Colaboração direta com equipes técnicas, fornecendo documentação e suporte para otimizar o fluxo de trabalho.',
    ],
  },
  {
    role: 'Auxiliar Mecânico',
    company: 'Komaq Manutenção e Serviços',
    period: '01/2022 - 05/2022',
    description: [
      'Execução de diagnósticos e reparos em sistemas complexos, seguindo especificações técnicas para garantir a funcionalidade.',
      'Trabalho colaborativo em um ambiente técnico, oferecendo suporte prático para alcançar os objetivos da equipe.',
      'Gerenciamento de componentes e recursos essenciais para garantir a execução eficiente dos projetos.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experiência Profissional</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-9 top-0 h-full w-0.5 bg-neon-purple/50"></div>
          
          {experiencesData.map((exp, index) => (
            <div key={index} className="relative pl-20 pb-8">
              <div className="absolute left-0 top-1.5 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-light-card dark:bg-dark-card rounded-full border-2 border-neon-purple">
                <FaBriefcase className="text-neon-blue" />
              </div>
              
              <div className="p-5 rounded-lg bg-light-card dark:bg-dark-card shadow-md dark:shadow-none">
                <p className="text-sm text-neon-purple font-semibold">{exp.period}</p>
                <h3 className="text-xl font-bold mt-1 text-primary-text dark:text-light-text">{exp.role}</h3>
                <p className="text-md text-secondary-text dark:text-dark-text mb-3">{exp.company}</p>
                <ul className="list-disc pl-5 space-y-1 text-secondary-text dark:text-dark-text">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;