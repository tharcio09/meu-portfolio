<div align="center">

# Tharcio Santos — Portfólio

Portfólio pessoal focado em aplicações web, projetos reais, processo de desenvolvimento, habilidades aplicadas e evolução incremental.

[Ver versão pública atual](https://tharcio-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/) · [Email](mailto:tharciosantos09@gmail.com)

![Screenshot do redesign editorial do portfólio de Tharcio Santos](./screenshot-portfolio.jpg)

</div>

---

## Sobre

Este projeto apresenta minha trajetória como estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Full Stack Júnior. O portfólio reúne aplicações publicadas, habilidades demonstradas em contexto e o processo que uso para evoluir cada projeto.

A interface segue uma direção editorial: hierarquia visual clara, leitura rápida, conteúdo organizado por evidências e uma paleta baseada em grafite, teal/ciano e superfícies neutras. Dark e light mode compartilham os mesmos tokens semânticos, com contraste, foco visível e estados interativos consistentes.

---

## Proposta Visual e Estrutura

- **Portfólio editorial:** projetos apresentados por problema, solução, entrega e decisões técnicas.
- **HelpFlow como case principal:** aplicação mais completa, com autenticação, regras de negócio, banco relacional e deploy.
- **ManutFlow como case complementar:** produto em produção com autenticação, isolamento de dados e gestão de manutenção.
- **Projetos complementares compactos:** DevLinks, Lista de Mercado e Crypto Dashboard aparecem como evidências adicionais.
- **Processo visível:** seção "Como eu trabalho" apresenta o fluxo de análise, escopo, implementação, teste e revisão.
- **Competências:** tecnologias organizadas por contexto de uso, em vez de uma lista genérica de ferramentas.

---

## O que este projeto demonstra

Mais do que uma vitrine, este repositório reúne práticas aplicadas em frontend e engenharia de software:

- **Arquitetura moderna:** Next.js 15 com App Router, componentes organizados por responsabilidade e dados compartilhados fora da interface quando apropriado.
- **Sistema de design próprio:** tokens semânticos no Tailwind para fundos, superfícies, textos, bordas e accent teal/ciano nos dois temas.
- **Componentização:** componentes reutilizáveis com React e TypeScript, como `Button`, `ProjectCard` e `Section`.
- **Conteúdo organizado:** projetos, habilidades, experiências e constantes vivem parcialmente em `src/data`; copies específicas de apresentação permanecem próximas das respectivas seções.
- **Acessibilidade e responsividade:** navegação por teclado, foco visível, atributos ARIA, focus trap no menu mobile e layouts adaptados para diferentes larguras.
- **Interatividade controlada:** Navbar como Client Component para scroll spy, menu mobile e alternância de tema. Animações de entrada com IntersectionObserver e CSS transitions, sem dependências externas.
- **Scroll reveal global:** componente `RevealOnScroll` reutilizável com IntersectionObserver, sem listeners redundantes de scroll.
- **Micro-interações:** cards com `hover:-translateY`, `hover:shadow-xl`, stagger animado e feedback visual com `scale` em botões.
- **Barra de progresso de leitura:** `ReadingProgressBar` fixa no topo que preenche conforme o scroll, usando `scaleX` para performance.
- **Filtro de projetos:** botões interativos por categoria (Todos / Destaque / Outros projetos) com animações de entrada.
- **Hero com gradiente animado e parallax:** Hero renderizado no servidor, com o fundo interativo isolado em um Client Component pequeno.
- **Performance:** imagens convertidas para WebP (redução de 72% no tamanho), ícones SVG locais, CSS crítico otimizado, Analytics carregado dinamicamente e chunk de devtools excluído do bundle de produção.
- **SEO técnico:** sitemap, `robots.txt`, Open Graph, Twitter Card e `themeColor` por preferência de tema.
- **Integração contínua:** GitHub Actions validando formatação, lint, tipos, testes e build.
- **Qualidade de código:** Vitest, Testing Library, ESLint, Prettier, Husky e lint-staged, com testes automatizados cobrindo componentes, hooks e dados.

### Metas Lighthouse

| Categoria      | Meta |
| -------------- | ---- |
| Performance    | ≥ 95 |
| Accessibility  | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO            | ≥ 95 |

Os resultados medidos devem ser atualizados apenas após uma nova auditoria da versão publicada.

---

## Projetos

### Case principal — HelpFlow

Sistema de help desk Full Stack para abertura, acompanhamento e gerenciamento de chamados internos, com autenticação por sessão, controle de acesso, banco relacional e aplicação publicada.

- **Stack:** Next.js, React, JavaScript, Prisma, Supabase, PostgreSQL, NextAuth, Zod, Vitest, Cypress
- **Links:** [Aplicação](https://helpflow.vercel.app/) · [Código](https://github.com/tharciosantos/helpflow)

### Case complementar — ManutFlow

Sistema completo para controle de equipamentos, ordens de manutenção, responsáveis, prioridades e histórico. Inclui autenticação com Supabase Auth, três camadas de segurança (proxy.ts, getUser(), RLS), cadastro e gestão de equipamentos, ordens de serviço com controle de status, filtros, busca textual e dashboard com indicadores.

- **Stack:** Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL
- **Links:** [Aplicação](https://manutflow.vercel.app) · [Código](https://github.com/tharciosantos/manutflow)

### Projetos complementares

#### DevLinks

Perfil personalizável com avatar, links dinâmicos, upload via Cloudinary, estado sincronizado com React Query e testes end-to-end com Cypress.

- **Stack:** React, Vite, JavaScript, Tailwind CSS, React Query, Cloudinary, Cypress, GitHub Actions
- **Links:** [Aplicação](https://devlinks-web-api.vercel.app/) · [Código](https://github.com/tharciosantos/devlinks-web) · [API](https://github.com/tharciosantos/devlinks-api)

#### Lista de Mercado

PWA mobile-first para organizar compras, com funcionamento offline, persistência local e compartilhamento pelo WhatsApp.

- **Stack:** React, Vite, PWA, Tailwind CSS, Local Storage
- **Links:** [Aplicação](https://lista-mercado-sage.vercel.app/) · [Código](https://github.com/tharciosantos/lista-mercado)

#### Crypto Dashboard

Dashboard para consulta de criptomoedas com busca, rotas dinâmicas, renderização client-side e tratamento de estados ao consumir a API da CoinGecko.

- **Stack:** Next.js, React, CoinGecko API
- **Links:** [Aplicação](https://crypto-dashboard-five-sandy.vercel.app/) · [Código](https://github.com/tharciosantos/crypto-dashboard)

---

## Seções do Portfólio

1. **Hero:** posicionamento profissional, objetivo e acesso aos projetos e currículo.
2. **Projetos:** HelpFlow, ManutFlow e projetos complementares.
3. **Processo:** fluxo geral de análise, escopo, implementação, validação e evolução incremental.
4. **Competências:** frontend, backend, banco de dados, testes, PWA e evolução.
5. **Sobre:** formação, experiência prévia e objetivo profissional.
6. **Experiência:** habilidades transferidas e experiências anteriores.
7. **Contato:** email, LinkedIn, GitHub e currículo.

---

## Tecnologias

### Core

- [Next.js](https://nextjs.org/) 15 — App Router, renderização, Image Optimization e OG images
- [React](https://react.dev/) 19.1
- [TypeScript](https://www.typescriptlang.org/) 5.7
- [Tailwind CSS](https://tailwindcss.com/) 3.4

### Interface e infraestrutura

- `class-variance-authority`, `clsx` e `tailwind-merge` — variantes e composição de classes.
- `next-themes` — suporte a tema claro, escuro e preferência do sistema.
- Ícones SVG locais — componentes reutilizáveis sem biblioteca externa de ícones.
- `@vercel/analytics` — métricas de uso carregadas dinamicamente.

### Qualidade e testes

- **Vitest** e **Testing Library** — testes unitários e comportamentais.
- **ESLint** e **Prettier** — análise estática e formatação.
- **Husky** e **lint-staged** — formatação automática no pre-commit.
- **GitHub Actions** — pipeline com formatação, lint, verificação de tipos, testes e build.

---

## Decisões Técnicas

- **Tokens de design no Tailwind:** cores semânticas como `accent`, `dark-bg`, `light-surface` e `border-light` centralizam a paleta grafite + teal/ciano e mantêm os temas consistentes.
- **Dados e interface:** informações reutilizadas por diferentes componentes ficam em `src/data`; textos editoriais específicos permanecem nos componentes das seções para manter contexto e legibilidade.
- **Sistema de componentes com CVA:** `Button` usa `class-variance-authority` com `tailwind-merge` para centralizar variantes e estados.
- **Navbar interativa:** `Navbar.tsx` é um Server Component que importa `NavbarClient.tsx` (Client Component). Esta separação mantém o scroll spy, menu mobile e alternador de tema no cliente, enquanto o wrapper permanece no servidor.
- **RevealOnScroll:** componente client wrapper reutilizável que usa `useScrollReveal` para animar elementos ao scroll. Substituiu observers duplicados em Capabilities e Process.
- **ReadingProgressBar:** barra de progresso fixa no topo atualizada por `ref` e `requestAnimationFrame`, sem renderização React a cada evento de scroll.
- **Filtro de projetos:** `ProjectsFilter.tsx` como Client Component com `useState` para filtro por categoria, enquanto `Projects.tsx` permanece como Server Component renderizando o conteúdo estático.
- **Hero com animação CSS:** conteúdo renderizado no servidor e parallax isolado em `HeroParallaxBackground`, limitado por `requestAnimationFrame` e compatível com `prefers-reduced-motion`.
- **Ícones SVG locais:** os ícones vivem em `src/app/components/ui/Icons.tsx`, reduzindo dependências.
- **CSS crítico otimizado:** o build usa `optimizeCss` com `critters` para reduzir bloqueios na renderização inicial.
- **Analytics dinâmico:** o Analytics da Vercel é isolado em um componente client carregado dinamicamente.
- **Bundle de produção otimizado:** `IgnorePlugin` exclui o chunk `next-devtools` (820 KB) do bundle de produção, reduzindo o First Load JS de 358 KB para 134 KB.
- **Testes comportamentais:** os testes usam `userEvent` para simular interações mais próximas do uso real.
- **CI:** GitHub Actions executa formatação, lint, TypeScript, testes e build antes da integração com `main`.
- **Pre-commit automático:** Husky e lint-staged executam o Prettier apenas nos arquivos staged.

---

## Estrutura de Pastas

```txt
meu-portfolio/
├── .github/workflows/       # Pipeline de CI
├── .husky/                  # Hooks de pre-commit
├── public/                  # Imagens (WebP), ícones, PDF e manifest
├── src/
│   ├── app/                 # App Router, páginas, layout e rotas auxiliares
│   │   ├── components/      # Navbar, Footer, seções e componentes de UI
│   │   │   ├── __tests__/   # Testes de componentes
│   │   │   ├── sections/    # Seções do portfólio (Hero, Projects, etc.)
│   │   │   └── ui/          # Componentes reutilizáveis (Button, Icons, etc.)
│   │   └── hooks/           # Hooks customizados (useScrollReveal, useActiveSection)
│   ├── data/                # Projetos, habilidades, experiências e constantes
│   │   └── __tests__/       # Testes de dados
│   └── lib/                 # Funções utilitárias (cn)
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

```bash
npm run dev
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

## Checklist Antes de Abrir PR

Antes de abrir um PR ou fazer merge, rode as validações locais:

```bash
npm run format:check
npm run lint
npx tsc --noEmit
npm run test:run
npm run build
npm audit --audit-level=moderate
```

Não use `npm audit fix --force` sem revisão, pois o npm pode sugerir mudanças incompatíveis com a stack atual.

---

## Autor

**Tharcio Santos**

- [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
- [GitHub](https://github.com/tharciosantos)
- [Email](mailto:tharciosantos09@gmail.com)
- [Versão pública atual do portfólio](https://tharcio-portfolio.vercel.app/)
