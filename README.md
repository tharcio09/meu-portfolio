<div align="center">

# Tharcio Santos - Portfólio

Desenvolvedor Fullstack em início de carreira, com projetos em React, Next.js, TypeScript e Node.js.

[Acessar portfólio](https://tharcio-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/) · [Email](mailto:tharciosantos09@gmail.com)

</div>

---

## Sobre

Este é meu portfólio pessoal, desenvolvido para apresentar meus projetos, minha stack e minha trajetória de transição para desenvolvimento web.

A versão atual segue uma proposta mais minimalista e profissional, com foco em:

- leitura rápida para recrutadores;
- projetos reais com deploy ativo;
- navegação simples e objetiva;
- apresentação clara das tecnologias utilizadas;
- layout responsivo com suporte a tema claro e escuro.

---

## Projetos em Destaque

| Projeto          | Descrição                                                                                                              | Stack                                                       | Links                                                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| HelpFlow         | Sistema de help desk com autenticação, CRUD de tickets, controle de acesso, banco relacional e deploy em produção.     | Next.js, React, TypeScript, Prisma, Supabase, NextAuth      | [Demo](https://helpflow.vercel.app/) · [Código](https://github.com/tharcio09/helpflow)                            |
| DevLinks         | Plataforma para criação e gerenciamento de páginas de links personalizadas, com upload de imagens e testes end-to-end. | React, Vite, Tailwind CSS, React Query, Cloudinary, Cypress | [Demo](https://frontend-api-weld.vercel.app/) · [Código](https://github.com/tharcio09/frontend-api)               |
| Lista de Mercado | PWA de lista de compras com funcionamento offline, persistência local e compartilhamento pelo WhatsApp.                | React, Vite, PWA, Tailwind CSS, Local Storage               | [Demo](https://lista-mercado-sage.vercel.app/) · [Código](https://github.com/tharcio09/lista-mercado)             |
| Crypto Dashboard | Dashboard para visualizar dados de criptomoedas consumindo a API da CoinGecko.                                         | Next.js, React, Tailwind CSS, CoinGecko API                 | [Demo](https://crypto-dashboard-five-sandy.vercel.app/) · [Código](https://github.com/tharcio09/crypto-dashboard) |

---

## Preview

![Preview do portfólio](./screenshot-portfolio.PNG)

---

## Tecnologias

### Core

- [Next.js](https://nextjs.org/) 15.3 — App Router, SSR, Image Optimization, OG images
- [React](https://react.dev/) 19.1
- [TypeScript](https://www.typescriptlang.org/) 5.7
- [Tailwind CSS](https://tailwindcss.com/) 3.4

### Bibliotecas

- [next-themes](https://github.com/pacocoursey/next-themes) — tema claro/escuro/sistema
- [react-icons](https://react-icons.github.io/react-icons/) — ícones (HeroIcons, Lucide, Simple Icons)
- [Vercel Analytics](https://vercel.com/analytics) — rastreamento de pageviews

### Qualidade e Testes

- [ESLint](https://eslint.org/) com `eslint-config-next` — análise estática de código
- [Prettier](https://prettier.io/) — formatação automática
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) — testes unitários

---

## Estrutura

```txt
meu-portfolio/
├── public/
│   ├── icons/
│   ├── images/
│   ├── curriculo-tharcio-santos.pdf
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── BackToTop.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   ├── ThemeSwitcher.tsx
│   │   │   ├── sections/
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Capabilities.tsx
│   │   │   │   ├── Contact.tsx
│   │   │   │   ├── Experience.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── Projects.tsx
│   │   │   └── ui/
│   │   │       ├── ProjectCard.tsx
│   │   │       └── Section.tsx
│   │   ├── hooks/
│   │   │   └── useScrollReveal.ts
│   │   ├── error.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   └── data/
│       ├── about.tsx
│       ├── capabilities.tsx
│       ├── constants.ts
│       ├── experience.ts
│       └── projects.ts
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vitest.config.ts
```

---

## Seções

- Hero com apresentação direta, currículo e chamada para projetos.
- Projetos com HelpFlow em destaque e outros projetos em cards.
- Sobre com resumo profissional, stack e formação.
- Trajetória com habilidades transferíveis de experiências anteriores.
- Contato com LinkedIn, email e GitHub.

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone https://github.com/tharcio09/meu-portfolio.git
cd meu-portfolio
npm install
```

### Scripts Disponíveis

| Script                 | Descrição                         |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento       |
| `npm run build`        | Build de produção                 |
| `npm start`            | Inicia o servidor de produção     |
| `npm run lint`         | Verifica problemas com ESLint     |
| `npm run lint:fix`     | Corrige problemas automaticamente |
| `npm run format`       | Formata o código com Prettier     |
| `npm run format:check` | Verifica formatação sem alterar   |
| `npm test`             | Executa os testes com Vitest      |

---

## Deploy

O projeto está hospedado na Vercel:

[tharcio-portfolio.vercel.app](https://tharcio-portfolio.vercel.app)

---

## Próximos Passos

- Revisar descrições dos projetos conforme novas funcionalidades forem adicionadas.
- Adicionar métricas reais quando houver dados de uso, testes ou evolução dos projetos.
- Manter o README sincronizado com mudanças de layout, stack e deploy.

---

## Autor

**Tharcio Santos**

- [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
- [GitHub](https://github.com/tharcio09)
- [Email](mailto:tharciosantos09@gmail.com)
- [Portfólio](https://tharcio-portfolio.vercel.app/)
