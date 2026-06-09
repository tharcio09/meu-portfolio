export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  tags: string[];
  featured?: boolean;
  highlights?: string[];
  badge?: string;
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
    description:
      'Sistema full stack para organizar chamados internos com login, painel de gestão, status, prioridade e banco relacional.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Registrar, priorizar e acompanhar solicitações internas sem perder histórico.',
      },
      {
        label: 'Solução',
        value: 'Painel autenticado com CRUD de tickets, status, prioridade e histórico.',
      },
      {
        label: 'Entrega',
        value: 'Deploy na Vercel, Supabase com Prisma e código público.',
      },
    ],
    highlights: [
      'Autenticação por sessão com NextAuth e controle de acesso por perfil',
      'CRUD completo de tickets com status, prioridade e histórico',
      'Banco relacional com Supabase + Prisma e interface responsiva',
    ],
    technicalHighlight:
      'Usei autenticação com controle de acesso e persistência relacional para cobrir o fluxo completo de gestão de chamados.',
    badge: 'Auth + banco + deploy',
    imageUrl: '/images/helpflow-screenshot.png',
    imageAlt:
      'Interface do HelpFlow mostrando painel de gestão de chamados com lista de tickets, status e prioridade',
    githubUrl: 'https://github.com/tharciosantos/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Acessar demo completa',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth'],
    featured: true,
  },
  {
    title: 'DevLinks — Perfil e Linktree',
    description:
      'Plataforma para criar páginas de links personalizadas, com perfil editável, upload de imagem e estado sincronizado.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Centralizar links de redes sociais e portfólio em uma página editável.',
      },
      {
        label: 'Solução',
        value: 'Perfil personalizável com avatar, links dinâmicos e persistência de estado.',
      },
    ],
    technicalHighlight:
      'Upload via Cloudinary, sincronização com React Query e testes E2E do fluxo principal.',
    outcome: 'Edição em tempo real + upload + testes E2E',
    imageUrl: '/images/screenshot-devlinks.png',
    imageAlt:
      'Interface do DevLinks exibindo página de perfil com links personalizados e avatar do usuário',
    githubUrl: 'https://github.com/tharciosantos/devlinks-web',
    demoUrl: 'https://devlinks-web-api.vercel.app/',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'React Query', 'Cloudinary', 'Cypress'],
  },
  {
    title: 'Lista de Mercado — PWA',
    description:
      'Aplicativo mobile-first para lista de compras, com uso offline, persistência local e compartilhamento pelo WhatsApp.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Acessar e atualizar uma lista de compras mesmo sem internet.',
      },
      {
        label: 'Solução',
        value:
          'Aplicação instalável que salva dados no dispositivo e permite compartilhar a lista.',
      },
    ],
    technicalHighlight:
      'PWA instalável com funcionamento offline, Local Storage e experiência otimizada para celular.',
    outcome: 'Offline + instalável + compartilhamento',
    imageUrl: '/images/lista-mercado-screenshot.png',
    imageAlt:
      'Interface mobile-first do aplicativo Lista de Mercado com itens de compras e opção de compartilhamento',
    githubUrl: 'https://github.com/tharciosantos/lista-mercado',
    demoUrl: 'https://lista-mercado-sage.vercel.app/',
    tags: ['React', 'Vite', 'TypeScript', 'PWA', 'Tailwind CSS', 'Local Storage'],
  },
  {
    title: 'Crypto Dashboard',
    description:
      'Dashboard responsivo para acompanhar preços e variações de criptomoedas usando a API pública da CoinGecko.',
    casePoints: [
      {
        label: 'Problema',
        value: 'Consultar dados de cripto sem alternar entre múltiplas plataformas.',
      },
      {
        label: 'Solução',
        value: 'Interface unificada com dados atualizados via CoinGecko API.',
      },
    ],
    technicalHighlight:
      'Consumo de API externa com estados de loading, erro e atualização de dados na interface.',
    outcome: 'API externa + dados em tempo real + responsivo',
    imageUrl: '/images/screenshot-crypto.png',
    imageAlt:
      'Dashboard de criptomoedas exibindo tabela de preços e variações em tempo real via CoinGecko API',
    githubUrl: 'https://github.com/tharciosantos/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'CoinGecko API'],
  },
];
