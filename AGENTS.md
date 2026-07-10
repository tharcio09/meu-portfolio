# Tharcio Santos — Portfólio

Guia de contexto completo para agentes de IA trabalharem neste projeto.

## Stack

- **Framework:** Next.js 15.x (App Router)
- **Linguagem:** TypeScript strict (target ES2017), React 19.1.0
- **Estilização:** Tailwind CSS 3 com tema customizado (light/dark via `next-themes`, `attribute="class"`)
- **Testes:** Vitest + React Testing Library (jsdom, globals: true)
- **Lint/Formatação:** ESLint (next/core-web-vitals + prettier) + Prettier
  - semi: true, singleQuote: true, tabWidth: 2, printWidth: 100
- **Git Hooks:** Husky + lint-staged (pré-commit: `npx lint-staged`)
- **CI:** GitHub Actions (`.github/workflows/ci.yml`) — quality → build-and-test
- **Utilitários:** `class-variance-authority`, `clsx`, `tailwind-merge`, `@vercel/analytics`
- **Alias:** `@/` → `./src/*`

## Estrutura de pastas

```
src/
├── app/
│   ├── components/
│   │   ├── sections/     # Hero, Projects, Process, Capabilities, About, Experience, Contact
│   │   └── ui/            # Button, ProjectCard, Section, RevealOnScroll, ReadingProgressBar, Icons
│   ├── hooks/             # useScrollReveal, useActiveSection
│   ├── layout.tsx         # RootLayout com ThemeProvider, Navbar, Footer, SEO, Schema.org
│   ├── page.tsx           # Home (Hero → Projects → Process → Capabilities → About → Experience → Contact → ClientAnalytics)
│   ├── error.tsx          # Tratamento de erros
│   ├── not-found.tsx      # Página 404
│   ├── globals.css        # Tailwind directives, scrollbar, prefers-reduced-motion
│   ├── opengraph-image.tsx# Imagem OG dinâmica
│   ├── robots.ts          # Config robots.txt
│   └── sitemap.ts         # Sitemap estático
├── data/                  # about.ts, capabilities.ts, constants.ts, experience.ts, projects.ts
│   └── __tests__/         # Testes dos dados
└── lib/                   # utils.ts (função cn)
```

## Tipos de dados

### Project (`src/data/projects.ts`)

```typescript
type Project = {
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
  casePoints?: { label: string; value: string }[];
  outcome?: string;
  technicalHighlight?: string;
};
```

### Capability (`src/data/capabilities.ts`)

```typescript
type Capability = {
  title: string;
  description: string;
  technologies: string[];
  usedIn: string[];
};
```

### ExperienciaAnterior (`src/data/experience.ts`)

```typescript
type ExperienciaAnterior = {
  period: string;
  role: string;
  org: string;
  summary: string;
};
```

### Constantes (`src/data/constants.ts`)

```typescript
EMAIL = 'tharciosantos09@gmail.com';
GITHUB_URL = 'https://github.com/tharciosantos';
LINKEDIN_URL = 'https://www.linkedin.com/in/tharcio-santos-dev/';
SECTION_IDS = [
  'projetos',
  'processo',
  'habilidades',
  'sobre-mim',
  'experiencia',
  'contato',
] as const;

navLinks = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Processo' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#sobre-mim', label: 'Sobre' },
  { href: '#contato', label: 'Contato' }, // CTA
];
```

## Hooks

### `useScrollReveal<T>(threshold = 0.12)`

- Detecta quando um elemento entra na viewport via IntersectionObserver
- Respeita `prefers-reduced-motion` (marca como visível imediatamente)
- Retorna `{ ref, visible }`

### `useActiveSection(ids: readonly string[])`

- Scroll spy: rastreia qual seção está ativa baseado na posição do scroll
- Usa IntersectionObserver com `rootMargin: '-40% 0px -55% 0px'`
- Retorna o `id` da seção ativa (string)

## Convenções de código

### Componentes

- **`'use client'`** apenas quando necessário (hooks, interatividade, eventos)
- **forwardRef + displayName** em componentes de UI reutilizáveis (ex: Button)
- **Props estendem** `React.HTMLAttributes<HTMLElement>` + `VariantProps` para componentes nativos
- **cn()** para combinar classes: `cn(buttonVariants({ variant, size }), className)`
- **cva (class-variance-authority)** para variantes de estilo (variant, size)
- Componentes de seção sem `'use client'` quando possível (server components)

### Utilitários

- `cn(...inputs)` — combina `clsx` + `tailwind-merge` para classes condicionais
- `buttonVariants({ variant, size })` — cva com variantes:
  - variant: `'default'` | `'outline'` | `'ghost'`
  - size: `'sm'` | `'default'` | `'lg'`

### Ícones disponíveis

`src/app/components/ui/Icons.tsx` exporta:
ArrowRightIcon, ArrowUpIcon, DocumentIcon, MenuIcon, CloseIcon,
SunIcon, MoonIcon, MailIcon, GithubIcon, LinkedinIcon,
ExternalLinkIcon, CheckIcon, CopyIcon, CodeIcon, DatabaseIcon,
RocketIcon, TechBadgeIcon (requer prop `label`)

## Estilos

### Tema

- **next-themes** com `attribute="class"` (suporte ao sistema)
- Classes condicionais: `dark:` para tema escuro

### Cores customizadas (tailwind.config.js)

- **Background:** `bg-dark-bg` (#0b1114), `bg-dark-card` (#111a1e), `bg-light-bg` (#f5f7f6)
- **Texto:** `text-primary-text` (#12201f), `text-light-text` (#edf6f3), `text-secondary-text` (#52615f)
- **Bordas:** `border-border-light` (#dce5e2), `border-border-dark` (#263438)
- **Accent:** `accent` (#0f766e), `accent-hover`, `accent-light`, `accent-subtle`, `accent-border`

### Fontes

- **Sans/body:** Inter (`var(--font-inter)`)
- **Heading:** Outfit (`var(--font-outfit)`)
- Definidas em `layout.tsx` via `next/font/google`

### Animações customizadas

- `fade-in`, `fade-up`, `fade-down` — entrada com opacidade e translate
- `scale-x-in` — escala horizontal
- `ping` — efeito pulsante
- `stagger-in` — entrada em cascata
- `reveal-up` — revelação com translateY
- `gradient-shift` — deslocamento de gradiente
- **Stagger classes:** `stagger-1` a `stagger-5` (100ms delay cada)

### Componentes de animação

- **RevealOnScroll:** wrapper que aplica animação ao entrar na viewport
  - Props: `children`, `className`, `as` (tag HTML, padrão `div`), `delay`
- **prefers-reduced-motion:** todas as animações desativadas quando ativo

## Navegação (Navbar)

- **Navbar** (`src/app/components/Navbar.tsx`):
  - `'use client'`
  - Detecta scroll para alterar estilo (borda/fundo) via estado `scrolled`
  - Usa `useActiveSection` para destacar link da seção visível
  - Links de navegação de `navLinks` (constants.ts)
  - Botão CTA filtrado do array de links
  - `ThemeSwitcher` para alternar light/dark
  - `MobileNav` para menu responsivo em telas pequenas

## Acessibilidade

- **Skip link:** `.skip-link` que aparece ao receber foco (pular navegação)
- **Focus-visible:** anel de foco estilizado com variável `accent` / `accent-light`
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` desativa animações
- **ARIA:** labels e atributos nos componentes interativos
- **Scrollbar customizada:** para webkit (modo claro/escuro)

## SEO

- **Metadata** completa no layout: title (template `%s | Tharcio Santos`), description, keywords, authors, Open Graph, Twitter cards
- **Schema.org** JSON-LD: Person, WebSite, ProfilePage
- **Sitemap:** `sitemap.ts` com URLs principais
- **Robots:** `robots.ts` (permite tudo)
- **Open Graph image:** `opengraph-image.tsx` dinâmico

## CI/CD e Quality Gates

### GitHub Actions (`.github/workflows/ci.yml`)

Executado em push/PR para `main` com Node.js 20:

**Job 1 — quality:**

1. `npm ci` (install)
2. `npm run format:check` (Prettier — verificação)
3. `npm run lint` (ESLint)
4. `npx tsc --noEmit` (Type check)

**Job 2 — build-and-test** (após quality):

1. `npm run test:run` (Vitest)
2. `npm run build` (Next.js build)

### Husky + lint-staged

- **pre-commit:** `npx lint-staged` (formata e faz lint dos arquivos staged)

## Scripts

```bash
npm run dev          # next dev
npm run build        # next build
npm run start        # next start
npm run test         # vitest (watch mode)
npm run test:run     # vitest (run once)
npm run lint         # eslint src
npm run format       # prettier --write .
npm run format:check # prettier --check .
```

## Consistência de conteúdo

- A conclusão de Análise e Desenvolvimento de Sistemas está prevista para **julho de 2027**.
- O **ManutFlow está em produção** e deve ser apresentado de forma consistente no portfólio,
  currículo e README.
- Antes de publicar, conferir datas, status dos projetos, URLs de demonstração e informações
  profissionais em todas as superfícies públicas.
