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
      'Recebimento e análise de solicitações de manutenção de equipamentos.',
      'Elaboração de relatórios de parada e acompanhamento de processos de manutenção.',
      'Organização e controle de registros e documentações técnicas.',
      'Comunicação com equipes operacionais para acompanhamento de demandas e prazos.',
    ],
  },
  {
    role: 'Auxiliar Mecânico',
    company: 'Komaq Manutenção e Serviços',
    period: '01/2022 - 05/2022',
    description: [
      'Diagnóstico e resolução de problemas técnicos, identificando causas e definindo soluções.',
      'Organização de ferramentas e recursos para melhorar eficiência operacional.',
      'Trabalho em equipe em ambiente técnico, seguindo procedimentos e padrões.',
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experiencia">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight">
          Experiência Profissional
        </h2>
        <p className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-2xl mx-auto leading-relaxed">
          Atuei em funções administrativas e operacionais que fortaleceram minha
          organização, análise e trabalho em equipe.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {experiencesData.map((exp) => (
          <div
            key={exp.company}
            className="rounded-2xl bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800 p-6 md:p-7"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-text dark:text-light-text">
                  {exp.role}
                </h3>
                <p className="text-sm md:text-base text-secondary-text dark:text-dark-text">
                  {exp.company}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs md:text-sm text-secondary-text dark:text-dark-text">
                <FaBriefcase className="text-cyan-500" aria-hidden />
                {exp.period}
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-secondary-text dark:text-dark-text">
              {exp.description.map((desc) => (
                <li key={desc} className="leading-relaxed">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;