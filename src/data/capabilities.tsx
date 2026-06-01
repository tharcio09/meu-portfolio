import type { ReactNode } from 'react';
import { LuCode, LuDatabase, LuRocket } from 'react-icons/lu';

export type Capacidade = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const capacidades: Capacidade[] = [
  {
    icon: <LuCode />,
    title: 'Frontend responsivo',
    description:
      'Interfaces com React, Next.js e Tailwind CSS, com atenção a responsividade, clareza visual e navegação simples.',
  },
  {
    icon: <LuDatabase />,
    title: 'Autenticação, dados e APIs',
    description:
      'Implementação de fluxos com login, CRUD, banco de dados, Prisma, Supabase e integração entre frontend e backend.',
  },
  {
    icon: <LuRocket />,
    title: 'Deploy e evolução do produto',
    description:
      'Publicação de projetos, documentação de decisões técnicas e melhoria contínua a partir de uso real e revisão do código.',
  },
];
