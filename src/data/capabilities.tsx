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
      'Interfaces com React, Next.js e Tailwind CSS, pensadas para clareza, navegação fluida e boa experiência em desktop e mobile.',
  },
  {
    icon: <LuDatabase />,
    title: 'APIs, autenticação e dados',
    description:
      'Fluxos completos com login, CRUD, regras de negócio, Prisma, Supabase e integração entre frontend e backend.',
  },
  {
    icon: <LuRocket />,
    title: 'Deploy e produto no ar',
    description:
      'Projetos publicados, com código público, decisões técnicas documentadas e foco em entregar algo utilizável de ponta a ponta.',
  },
];
