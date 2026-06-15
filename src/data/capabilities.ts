export type Capability = {
  title: string;
  description: string;
  technologies: string[];
  usedIn: string[];
};

export const capabilities: Capability[] = [
  {
    title: 'Interface',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'Construção de interfaces responsivas, componentes reutilizáveis e páginas organizadas para aplicações web.',
    usedIn: ['HelpFlow', 'ManutFlow', 'Portfólio', 'Crypto Dashboard'],
  },
  {
    title: 'Backend e dados',
    technologies: ['Node.js', 'APIs REST', 'Prisma', 'Supabase', 'PostgreSQL'],
    description:
      'Criação de fluxos com autenticação, persistência de dados, regras de negócio e integração com banco relacional.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    title: 'Qualidade e entrega',
    technologies: ['Git', 'GitHub', 'Cypress', 'Vercel', 'SEO', 'Testes manuais'],
    description:
      'Organização do fluxo de desenvolvimento, versionamento, validação de funcionalidades, deploy e melhoria de visibilidade do projeto.',
    usedIn: ['DevLinks', 'Portfólio', 'HelpFlow'],
  },
];
