<div align="center">

# Tharcio Santos — Portfólio

Desenvolvedor fullstack com projetos React, Next.js, TypeScript e Node.js em produção.

[Acessar portfólio](https://tharcio-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/) · [Email](mailto:tharciosantos09@gmail.com)

![Screenshot do portfólio de Tharcio Santos](./screenshot-portfolio.PNG)

</div>

---

## Sobre

Portfólio pessoal desenvolvido para apresentar projetos, stack técnica e trajetória profissional. O projeto segue uma proposta visual moderna com paleta indigo, suporte a tema claro/escuro, barra de progresso de scroll e animações de entrada — tudo construído com atenção à qualidade de código, acessibilidade e experiência do usuário.

---

## O que este projeto demonstra

Mais do que uma vitrine, este repositório reúne práticas aplicadas em front-end e engenharia de software:

- **Arquitetura Moderna:** Construção com Next.js 15 (App Router), separando dados, componentes e lógica de forma clara.
- **Sistema de Design próprio:** Paleta de cores customizada no Tailwind com tokens semânticos (`accent`, `border-light`, `dark-card`), animações e keyframes definidos no `tailwind.config.js`.
- **Componentização:** Componentes UI reutilizáveis com React e TypeScript — `Button`, `ProjectCard`, `Section` e outros.
- **Separação de Responsabilidades:** Conteúdo isolado na pasta `src/data`, permitindo atualizar textos e projetos sem tocar no JSX.
- **Acessibilidade e Responsividade:** Navegação por teclado, `aria-label`, foco visível e layout mobile-first com menu backdrop e bloqueio de scroll.
- **SEO Técnico:** Sitemap dinâmico, `robots.txt`, Open Graph, Twitter Card e `themeColor` por preferência de tema.
- **Integração Contínua (CI):** GitHub Actions validando lint, formatação Prettier e testes em cada push.
- **Qualidade de Código:** Testes unitários com Vitest e Testing Library, ESLint, Prettier e Husky com lint-staged para formatação automática no pre-commit.

---

## Projetos em Destaque

### HelpFlow

Sistema de help desk fullstack com autenticação por sessão, CRUD de tickets, controle de acesso por perfil, banco relacional e deploy em produção.

- **Stack:** Next.js, React, TypeScript, Prisma, Supabase, NextAuth
- **Links:** [Demo](https://helpflow.vercel.app/) · [Código](https://github.com/tharciosantos/helpflow)

### DevLinks

Plataforma para criar páginas de links personalizadas, com upload de imagens via Cloudinary, estado sincronizado com React Query e testes end-to-end com Cypress.

- **Stack:** React, Vite, TypeScript, Tailwind CSS, React Query, Cloudinary, Cypress
- **Links:** [Demo](https://frontend-api-weld.vercel.app/) · [Código](https://github.com/tharciosantos/devlinks-web) · [API](https://github.com/tharciosantos/devlinks-api)

### Lista de Mercado

PWA de lista de compras com funcionamento 100% offline após instalação, persistência via Local Storage e compartilhamento pelo WhatsApp.

- **Stack:** React, Vite, TypeScript, PWA, Tailwind CSS, Local Storage
- **Links:** [Demo](https://lista-mercado-sage.vercel.app/) · [Código](https://github.com/tharciosantos/lista-mercado)

### Crypto Dashboard

Dashboard para visualizar preços e variações de criptomoedas em tempo real consumindo a API pública da CoinGecko.

- **Stack:** Next.js, React, TypeScript, Tailwind CSS, CoinGecko API
- **Links:** [Demo](https://crypto-dashboard-five-sandy.vercel.app/) · [Código](https://github.com/tharciosantos/crypto-dashboard)

---

## Tecnologias

### Core

- [Next.js](https://nextjs.org/) 15.3 — App Router, SSR, Image Optimization, OG images
- [React](https://react.dev/) 19.1
- [TypeScript](https://www.typescriptlang.org/) 5.7
- [Tailwind CSS](https://tailwindcss.com/) 3.4

### Bibliotecas de UI

- `class-variance-authority`, `clsx` e `tailwind-merge` — composição de variantes e resolução de conflitos de classes.
- `next-themes` — suporte a tema claro, escuro e sistema.
- `react-icons` — ícones SVG.

### Qualidade e Testes

- **Vitest** e **Testing Library** — testes unitários comportamentais com simulação de interações assíncronas.
- **ESLint** e **Prettier** — padronização estática e formatação do código.
- **Husky** e **lint-staged** — formatação automática via Prettier no pre-commit.
- **GitHub Actions** — pipeline de CI que valida lint, formatação e testes em cada push.

---

## Decisões Técnicas

- **Tokens de design no Tailwind:** Em vez de usar as cores padrão do Tailwind, defini tokens semânticos (`accent`, `dark-bg`, `border-light`, etc.) no `tailwind.config.js`. Isso centraliza a identidade visual e torna a manutenção mais simples — mudar a paleta inteira requer alterar poucos valores.

- **Separação de Dados e Interface:** As informações estruturais (projetos, habilidades, experiências) vivem em `src/data`, desacopladas do JSX. O conteúdo pode ser atualizado sem risco de quebrar componentes.

- **Sistema de Componentes com CVA:** O componente `Button` usa `class-variance-authority` com `tailwind-merge`, centralizando variantes e resolvendo conflitos de classes sem duplicar strings CSS.

- **Testes Comportamentais:** Os testes usam `userEvent` em vez de disparo direto de eventos, simulando interações reais do usuário e aguardando mudanças assíncronas no DOM.

- **Deploy e CI:** Hospedado na Vercel com GitHub Actions como camada de validação — lint, formatação e testes rodam a cada push, garantindo que nada quebrado chegue à produção.

- **Pre-commit automático:** Husky + lint-staged executam o Prettier apenas nos arquivos staged antes de cada commit, eliminando inconsistências de formatação sem overhead manual.

---

## Estrutura de Pastas

```txt
meu-portfolio/
├── .github/workflows/       # Pipeline de CI (GitHub Actions)
├── .husky/                  # Hooks de pre-commit
├── public/                  # Assets estáticos (imagens, ícones, PDF, manifest)
├── src/
│   ├── app/                 # App Router — páginas, layout e rotas de erro
│   │   ├── components/      # Componentes reutilizáveis (sections e UI atômicos)
│   │   └── hooks/           # Hooks customizados do React
│   ├── data/                # Dados estáticos e constantes (projetos, skills, etc.)
│   └── lib/                 # Funções utilitárias
└── vitest.setup.ts          # Configuração global dos testes
```

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone https://github.com/tharciosantos/meu-portfolio.git
cd meu-portfolio
npm install
```

### Scripts Disponíveis

| Script                 | Descrição                                                                        |
| ---------------------- | -------------------------------------------------------------------------------- |
| `npm run dev`          | Inicia o servidor local de desenvolvimento.                                      |
| `npm run build`        | Compila a versão otimizada para produção.                                        |
| `npm start`            | Inicia o servidor com o build gerado.                                            |
| `npm run lint`         | Lista problemas de padronização com ESLint.                                      |
| `npm run lint:fix`     | Corrige problemas de lint automaticamente.                                       |
| `npm run format`       | Formata todos os arquivos via Prettier.                                          |
| `npm run format:check` | Verifica se todos os arquivos estão formatados corretamente (usado na pipeline). |
| `npm test`             | Executa os testes no modo watch.                                                 |
| `npm run test:run`     | Executa a suíte de testes uma única vez (ideal para CI).                         |
| `npm run test:watch`   | Executa os testes em modo interativo.                                            |

---

## Autor

**Tharcio Santos**

- [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
- [GitHub](https://github.com/tharciosantos)
- [Email](mailto:tharciosantos09@gmail.com)
- [Portfólio](https://tharcio-portfolio.vercel.app/)
