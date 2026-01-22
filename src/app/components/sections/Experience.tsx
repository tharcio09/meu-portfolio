'use client';

import { FaBriefcase } from 'react-icons/fa';
import Section from '../ui/Section';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

const experiencesData: ExperienceItem[] = [
  {
    role: 'Auxiliar Administrativo',
    company: 'EPOS - Empresa Portuguesa de Obras Subterrânea',
    period: '05/2023 - 10/2023',
    description: [
      'Gestão e priorização de demandas técnicas (backlog), garantindo a organização do fluxo de trabalho e cumprimento de prazos críticos.',
      'Análise de dados e elaboração de relatórios estratégicos para apoiar a tomada de decisão da gestão e otimizar processos.',
      'Comunicação assertiva e colaboração direta com equipes multidisciplinares para resolução ágil de problemas operacionais.',
    ],
  },
  {
    role: 'Auxiliar Mecânico',
    company: 'Komaq Manutenção e Serviços',
    period: '01/2022 - 05/2022',
    description: [
      'Desenvolvimento de pensamento analítico e atenção aos detalhes através do diagnóstico e resolução de problemas técnicos complexos.',
      'Atuação em ambiente colaborativo, focando na eficiência da equipe e na comunicação clara durante a execução de tarefas.',
      'Organização rigorosa de recursos e ferramentas, implementando métodos para otimizar o tempo de execução dos reparos.',
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experiencia">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight">
          Experiência Profissional
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent rounded-full mx-auto mb-6 opacity-60" />
        <p className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed">
          Minha trajetória profissional e competências desenvolvidas
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="hidden md:block absolute left-12 h-full w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue opacity-40"></div>

        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="relative pb-12 md:pl-32 group"
          >
            <div 
              className="absolute left-1/2 md:left-0 -top-2 md:top-2 transform -translate-x-1/2 md:-translate-x-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-full border-4 border-neon-blue shadow-neon-blue z-20 group-hover:scale-115 group-hover:rotate-[360deg] transition-all duration-500"
            >
              <FaBriefcase className="text-neon-blue text-lg md:text-xl" />
            </div>

            <div
              className="relative pt-8 md:pt-0 md:ml-8 p-5 md:p-8 rounded-2xl bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md shadow-xl border border-neon-blue/20 dark:border-neon-blue/30 hover:border-neon-blue/50 dark:hover:border-neon-blue/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(39,215,254,0.2)]"
            >
              <p className="text-xs md:text-sm lg:text-base text-neon-purple font-bold mb-2">{exp.period}</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1 md:mt-2 mb-2 text-primary-text dark:text-light-text">{exp.role}</h3>
              <p className="text-base md:text-lg lg:text-xl text-secondary-text dark:text-dark-text mb-3 md:mb-4 font-medium">{exp.company}</p>
              <ul className="list-disc pl-5 md:pl-6 space-y-2 md:space-y-3 text-sm md:text-base text-secondary-text dark:text-dark-text">
                {exp.description.map((desc, i) => (
                  <li 
                    key={i}
                    className="leading-relaxed"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;