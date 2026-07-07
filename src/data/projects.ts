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
      'Autenticação com NextAuth e roles CLIENT/AGENT',
      'CRUD completo com validação Zod e rate limiting',
      'Testes Vitest e Cypress E2E',
    ],
    technicalHighlight:
      'Um fluxo completo de produto: autenticação, regras de negócio, banco relacional, interface e deploy.',
    imageUrl: '/images/helpflow-screenshot.png',
    imageAlt:
      'Interface do HelpFlow mostrando painel de gestão de chamados com lista de tickets, status e prioridade',
    githubUrl: 'https://github.com/tharciosantos/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Acessar aplicação',
    tags: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Supabase', 'NextAuth'],
    kind: 'featured',
  },
  {
    title: 'ManutFlow — Controle de Manutenção',
    shortTitle: 'ManutFlow',
    description:
      'Sistema completo para cadastro de equipamentos, abertura de ordens de serviço e dashboard com indicadores de status e prioridade.',
    casePoints: [
      {
        label: 'Problema',
        value:
          'Empresas precisam controlar manutenção de equipamentos, registrar ordens de serviço e acompanhar prioridades.',
      },
      {
        label: 'Solução',
        value:
          'Sistema full stack com autenticação, CRUD de equipamentos e ordens, dashboard com auto-refresh e histórico de alterações.',
      },
      {
        label: 'Segurança',
        value: 'Três camadas: proxy.ts (Edge), getUser() (API) e Row Level Security (banco).',
      },
    ],
    highlights: [
      'Autenticação Supabase Auth com 3 camadas de segurança',
      'Breadcrumbs, auto-refresh e loading skeletons',
      'Isolamento de dados por usuário (RLS + user_id)',
    ],
    technicalHighlight:
      'Autenticação em 3 camadas (proxy.ts, getUser(), RLS), isolamento de dados por user_id e deploy na Vercel.',
    imageUrl: '/images/manutflow-screenshot.png',
    imageAlt: 'Dashboard do ManutFlow com indicadores de equipamentos e ordens de serviço',
    githubUrl: 'https://github.com/tharciosantos/manutflow',
    demoUrl: 'https://manutflow.vercel.app',
    demoLabel: 'Acessar sistema',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    kind: 'featured',
  },
  {
    title: 'DevLinks — Perfil e Linktree',
    shortTitle: 'DevLinks',
    description:
      'Página de perfil com links personalizados, upload de avatar e dados sincronizados entre cliente e servidor.',
    technicalHighlight:
      'Upload de imagem via Cloudinary, cache e invalidação com React Query, e testes end-to-end com Cypress no fluxo principal.',
    outcome: 'Upload · sincronização · testes E2E',
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
      'Aplicação mobile para organizar compras por setores, funcionar sem internet e compartilhar a lista via WhatsApp.',
    technicalHighlight:
      'PWA com service worker para uso offline, persistência local e compartilhamento da lista via WhatsApp.',
    outcome: 'PWA · offline-first · compartilhamento',
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
      'Consulta de preços e variações de criptomoedas com busca, páginas de detalhe e tratamento de estados de carregamento e erro.',
    technicalHighlight:
      'Consumo de API externa com rotas dinâmicas, busca client-side e estados assíncronos — loading, erro e exibição de dados.',
    outcome: 'API externa · rotas dinâmicas · estados assíncronos',
    imageUrl: '/images/screenshot-crypto.png',
    imageAlt: 'Dashboard de criptomoedas exibindo preços e variações',
    githubUrl: 'https://github.com/tharciosantos/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    tags: ['Next.js', 'React', 'API externa'],
    kind: 'secondary',
  },
];
