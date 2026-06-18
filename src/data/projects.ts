export type Project = {
  title: string;
  shortTitle: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  tags: string[];
  kind: 'featured' | 'building' | 'secondary';
  highlights?: string[];
  outcome?: string;
  technicalHighlight?: string;
  casePoints?: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    title: 'HelpFlow — Sistema de Help Desk',
    shortTitle: 'HelpFlow',
    description:
      'Sistema full stack para abertura, acompanhamento e gerenciamento de chamados internos.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Organizar solicitações, responsáveis, prioridades e histórico de atendimento.',
      },
      {
        label: 'Solução',
        value: 'Painel autenticado com criação e gerenciamento de chamados, status e prioridade.',
      },
      {
        label: 'Entrega',
        value: 'Aplicação em produção com persistência relacional e código público.',
      },
    ],
    highlights: [
      'Autenticação com NextAuth',
      'CRUD de chamados e dashboard',
      'Supabase, PostgreSQL e Prisma',
    ],
    technicalHighlight:
      'Um fluxo completo de produto: autenticação, regras de negócio, banco relacional, interface e deploy.',
    imageUrl: '/images/helpflow-screenshot.png',
    imageAlt:
      'Interface do HelpFlow mostrando painel de gestão de chamados com lista de tickets, status e prioridade',
    githubUrl: 'https://github.com/tharciosantos/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Acessar aplicação',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth'],
    kind: 'featured',
  },
  {
    title: 'ManutFlow — Controle de Manutenção',
    shortTitle: 'ManutFlow',
    description:
      'Sistema em desenvolvimento para controle de equipamentos, ordens de manutenção, responsáveis, prioridades e histórico.',
    casePoints: [
      {
        label: 'Estado atual',
        value: 'Dashboard inicial, rotas e cadastro/listagem de equipamentos.',
      },
      {
        label: 'Base técnica',
        value: 'Supabase com PostgreSQL, RLS habilitado e API de health check.',
      },
      {
        label: 'Evolução',
        value: 'Estrutura para ordens de serviço, autenticação e crescimento por domínio.',
      },
    ],
    highlights: ['Construção incremental', 'Organização por domínio', 'Banco no Supabase'],
    githubUrl: 'https://github.com/tharciosantos/manutflow',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    kind: 'building',
  },
  {
    title: 'DevLinks — Perfil e Linktree',
    shortTitle: 'DevLinks',
    description:
      'Perfil personalizável com avatar, links dinâmicos, upload de imagem e estado sincronizado.',
    technicalHighlight: 'Cloudinary, React Query e testes E2E com Cypress.',
    outcome: 'Upload + estado sincronizado + E2E',
    imageUrl: '/images/screenshot-devlinks.png',
    imageAlt: 'Interface do DevLinks exibindo página de perfil com links personalizados',
    githubUrl: 'https://github.com/tharciosantos/devlinks-web',
    demoUrl: 'https://devlinks-web-api.vercel.app/',
    tags: ['React', 'React Query', 'Cloudinary', 'Cypress'],
    kind: 'secondary',
  },
  {
    title: 'Lista de Mercado — PWA',
    shortTitle: 'Lista de Mercado',
    description:
      'PWA mobile-first para organizar compras com funcionamento offline e compartilhamento.',
    technicalHighlight: 'Uso offline, organização por setores e compartilhamento via WhatsApp.',
    outcome: 'Offline + instalável + compartilhável',
    imageUrl: '/images/lista-mercado-screenshot.png',
    imageAlt: 'Interface mobile da Lista de Mercado com itens de compras',
    githubUrl: 'https://github.com/tharciosantos/lista-mercado',
    demoUrl: 'https://lista-mercado-sage.vercel.app/',
    tags: ['React', 'Vite', 'PWA', 'Tailwind CSS'],
    kind: 'secondary',
  },
  {
    title: 'Crypto Dashboard',
    shortTitle: 'Crypto Dashboard',
    description:
      'Dashboard para consulta de criptomoedas com busca, detalhes e tratamento de estados.',
    technicalHighlight: 'SSR, API externa, rotas dinâmicas e estados de loading/erro.',
    outcome: 'SSR + API externa + rotas dinâmicas',
    imageUrl: '/images/screenshot-crypto.png',
    imageAlt: 'Dashboard de criptomoedas exibindo preços e variações',
    githubUrl: 'https://github.com/tharciosantos/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    tags: ['Next.js', 'React', 'TypeScript', 'API externa'],
    kind: 'secondary',
  },
];
