/**
 * Dados das capacidades/competências aplicadas.
 * iconName corresponde a um identificador usado em Capabilities.tsx para selecionar
 * o ícone Lucide correto — mantendo JSX fora da camada de dados.
 */
export type Capacidade = {
  iconName: string;
  title: string;
  description: string;
};

export const capacidades: Capacidade[] = [
  {
    iconName: 'LuCode',
    title: 'Frontend responsivo',
    description:
      'Interfaces com React, Next.js e Tailwind CSS, com atenção a responsividade, clareza visual e navegação simples.',
  },
  {
    iconName: 'LuDatabase',
    title: 'Autenticação, dados e APIs',
    description:
      'Implementação de fluxos com login, CRUD, banco de dados, Prisma, Supabase e integração entre frontend e backend.',
  },
  {
    iconName: 'LuRocket',
    title: 'Deploy e evolução do produto',
    description:
      'Publicação de projetos, documentação de decisões técnicas e melhoria contínua a partir de uso real e revisão do código.',
  },
];
