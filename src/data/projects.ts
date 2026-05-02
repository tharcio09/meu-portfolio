export type Project = {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    demoUrl?: string;
    demoLabel?: string;
    tags: string[];
    featured?: boolean;
    highlights?: string[];
    badge?: string;
    outcome?: string;
    casePoints?: {
        label: string;
        value: string;
    }[];
};

export const projects: Project[] = [
    {
        title: 'HelpFlow — Sistema de Help Desk',
        description:
            'Sistema fullstack para organizar chamados internos com login, painel de gestão, status, prioridade e banco relacional. O projeto cobre o fluxo completo: interface, regra de negócio, autenticação, persistência e deploy.',
        casePoints: [
            {
                label: 'Problema',
                value: 'Registrar e priorizar solicitações internas sem perder histórico.',
            },
            {
                label: 'Solução',
                value: 'Painel autenticado com CRUD de tickets, status e prioridade.',
            },
            {
                label: 'Entrega',
                value: 'Deploy na Vercel, Supabase com Prisma e código público.',
            },
        ],
        highlights: [
            'Autenticação por sessão com controle de acesso',
            'CRUD completo de tickets com status e prioridade',
            'Banco relacional, deploy ativo e interface responsiva',
        ],
        badge: 'Auth + banco + deploy',
        imageUrl: '/images/helpflow-screenshot.png',
        githubUrl: 'https://github.com/tharcio09/helpflow',
        demoUrl: 'https://helpflow.vercel.app/',
        demoLabel: 'Acessar demo completa',
        tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth'],
        featured: true,
    },
    {
        title: 'DevLinks: Perfil e Linktree',
        description:
            'Plataforma fullstack para criar páginas de links personalizadas, com upload de imagens, estado sincronizado e testes end-to-end.',
        outcome: 'Perfil editável + upload + testes',
        imageUrl: '/images/screenshot-devlinks.png',
        githubUrl: 'https://github.com/tharcio09/frontend-api',
        demoUrl: 'https://frontend-api-weld.vercel.app/',
        tags: ['React', 'Vite', 'Tailwind CSS', 'React Query', 'Cloudinary', 'Cypress'],
    },
    {
        title: 'Lista de Mercado — PWA',
        description:
            'Aplicativo de lista de compras mobile-first que funciona offline, salva no dispositivo e compartilha pelo WhatsApp.',
        outcome: 'Offline + local storage + compartilhamento',
        imageUrl: '/images/lista-mercado-screenshot.png',
        githubUrl: 'https://github.com/tharcio09/lista-mercado',
        demoUrl: 'https://lista-mercado-sage.vercel.app/',
        tags: ['React', 'Vite', 'PWA', 'Tailwind CSS', 'Local Storage'],
    },
    {
        title: 'Crypto Dashboard',
        description:
            'Dashboard para acompanhar dados de criptomoedas em tempo real, consumindo a API da CoinGecko com interface responsiva.',
        outcome: 'Dashboard + API externa + dados em tempo real',
        imageUrl: '/images/screenshot-crypto.png',
        githubUrl: 'https://github.com/tharcio09/crypto-dashboard',
        demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'CoinGecko API'],
    },
];