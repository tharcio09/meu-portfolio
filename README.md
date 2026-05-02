<div align="center">

# Tharcio Santos - Portfólio

Desenvolvedor Full Stack em formação, focado em criar aplicações web reais com React, Next.js, TypeScript e Node.js.

[Acessar portfólio](https://tharcio-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/) · [Email](mailto:tharciosantos09@gmail.com)

</div>

---

## Sobre

Este é meu portfólio pessoal, desenvolvido para apresentar meus projetos, minha stack e minha trajetória de transição para o desenvolvimento web. A versão atual segue uma proposta minimalista e profissional, com foco em navegação simples, organização de código e apresentação clara das tecnologias utilizadas.

---

## O que este projeto demonstra

Mais do que uma vitrine, este repositório reúne práticas que venho estudando e aplicando em front-end e engenharia de software:

- **Arquitetura Moderna:** Construção com Next.js 15 (App Router).
- **Componentização:** Criação de componentes UI reutilizáveis com React e TypeScript.
- **Separação de Responsabilidades:** Isolamento dos dados da interface (uso da pasta `src/data`).
- **Componentes com variantes:** Composição de estilos reutilizáveis e resolução de conflitos de classes com Tailwind.
- **Acessibilidade e Responsividade:** Navegação suportada por teclado, states visuais de foco e layout mobile-first com Tailwind CSS.
- **SEO Técnico:** Geração dinâmica de sitemap, robots.txt e tags Open Graph.
- **Integração Contínua (CI):** Automação com GitHub Actions para validação de testes e lint em cada push.
- **Qualidade de Software:** Testes unitários comportamentais com Vitest e Testing Library.

---

## Projetos em Destaque

### HelpFlow

Sistema de help desk com autenticação, CRUD de tickets, controle de acesso, banco relacional e deploy em produção.

- **Stack:** Next.js, React, TypeScript, Prisma, Supabase, NextAuth
- **Links:** [Demo](https://helpflow.vercel.app/) · [Código](https://github.com/tharcio09/helpflow)

### DevLinks

Plataforma para criação e gerenciamento de páginas de links personalizadas, com upload de imagens e testes end-to-end.

- **Stack:** React, Vite, Tailwind CSS, React Query, Cloudinary, Cypress
- **Links:** [Demo](https://frontend-api-weld.vercel.app/) · [Código](https://github.com/tharcio09/frontend-api)

### Lista de Mercado

PWA de lista de compras com funcionamento offline, persistência local e compartilhamento pelo WhatsApp.

- **Stack:** React, Vite, PWA, Tailwind CSS, Local Storage
- **Links:** [Demo](https://lista-mercado-sage.vercel.app/) · [Código](https://github.com/tharcio09/lista-mercado)

### Crypto Dashboard

Dashboard para visualizar dados de criptomoedas consumindo a API da CoinGecko.

- **Stack:** Next.js, React, Tailwind CSS, CoinGecko API
- **Links:** [Demo](https://crypto-dashboard-five-sandy.vercel.app/) · [Código](https://github.com/tharcio09/crypto-dashboard)

---

## Tecnologias

### Core

- [Next.js](https://nextjs.org/) 15.3 — App Router, SSR, Image Optimization, OG images
- [React](https://react.dev/) 19.1
- [TypeScript](https://www.typescriptlang.org/) 5.7
- [Tailwind CSS](https://tailwindcss.com/) 3.4

### Bibliotecas de UI

- `class-variance-authority`, `clsx` e `tailwind-merge` — composição de variantes, classes reutilizáveis e resolução de conflitos do Tailwind.
- `next-themes` — suporte a tema claro, escuro e sistema.
- `react-icons` — pacote de ícones SVG.

### Qualidade e Testes

- **Vitest** e **Testing Library** — O projeto possui testes unitários configurados focando no comportamento do usuário (como simulação de interações assíncronas), validando que a interface responda corretamente aos eventos esperados.
- **ESLint** e **Prettier** — Padronização estática e formatação do código.
- **GitHub Actions** — Pipeline de Integração Contínua (CI) que valida o código contra regras estáticas e falhas de teste.

---

## Decisões Técnicas

Durante o desenvolvimento deste portfólio, adotei algumas decisões arquiteturais focando na clareza e manutenção do código:

- **Separação de Dados e Interface:** Extraí as informações estruturais (como lista de projetos e habilidades) para a pasta `src/data`. Isso permite atualizar o conteúdo do site sem necessidade de tocar ou quebrar o JSX visual.
- **Sistema de Componentes:** Adotei a biblioteca `cva` com `tailwind-merge` para os componentes base (como os botões). Isso centralizou a regra de estilos, permitindo criar variantes e focar em acessibilidade sem duplicar grandes strings CSS pelo código.
- **Testes Comportamentais:** Nos testes configurados com Vitest, utilizo `userEvent` em vez do disparo comum de eventos, para simular a interação o mais próximo possível da realidade do navegador, aguardando as alterações dinâmicas no DOM de forma assíncrona.
- **Deploy e CI:** O projeto é hospedado na Vercel para tirar proveito do ecossistema de compilação do Next.js. O GitHub Actions funciona como uma camada de validação em pushes e pull requests, ajudando a identificar falhas de lint, formatação e testes antes da publicação ou integração de novas alterações.

---

## Estrutura de Pastas (Resumo)

```txt
meu-portfolio/
├── .github/workflows/       # Pipeline de Integração Contínua (CI)
├── public/                  # Assets públicos (imagens, pdf, metadados)
├── src/
│   ├── app/                 # App Router (Páginas e rotas de erro)
│   │   ├── components/      # Componentes UI reutilizáveis (Sections e Atômicos)
│   │   └── hooks/           # Lógicas customizadas do React
│   ├── data/                # Dicionário estático de dados e constantes
│   └── lib/                 # Funções utilitárias auxiliares
└── vitest.setup.ts          # Configurações globais dos testes do Vitest
```

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

| Script                 | Descrição                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`          | Inicia o servidor local de desenvolvimento.                                        |
| `npm run build`        | Compila a versão otimizada da aplicação para produção.                             |
| `npm start`            | Inicia o servidor com o build gerado.                                              |
| `npm run lint`         | Analisa e lista os problemas de padronização com ESLint.                           |
| `npm run lint:fix`     | Tenta corrigir os problemas de linting automaticamente.                            |
| `npm run format`       | Formata o código do projeto forçadamente via Prettier.                             |
| `npm run format:check` | Confirma se todos os arquivos estão formatados corretamente (usado pela pipeline). |
| `npm test`             | Executa os testes do Vitest no modo watch.                                         |
| `npm run test:run`     | Executa a suíte de testes apenas uma vez (ideal para CI).                          |
| `npm run test:watch`   | Atalho explícito para executar os testes em modo interativo.                       |

---

## Próximos Passos (Evolução)

- Ampliar a cobertura de testes para outros componentes atômicos.
- Adicionar Cypress ou Playwright para criação de testes End-to-End (E2E).
- Adicionar hooks de pre-commit com Husky para reforçar lint, formatação e testes antes dos commits.

---

## Autor

**Tharcio Santos**

- [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
- [GitHub](https://github.com/tharcio09)
- [Email](mailto:tharciosantos09@gmail.com)
- [Portfólio](https://tharcio-portfolio.vercel.app/)
