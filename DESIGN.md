---
name: Tharcio Santos — Portfolio
description: Design system editorial de engenharia para o portfólio de Tharcio Santos
colors:
  accent: '#0f766e'
  accent-hover: '#115e59'
  accent-light: '#5eead4'
  accent-light-hover: '#99f6e4'
  accent-subtle: '#e6f4f1'
  accent-subtle-dark: 'rgba(45, 212, 191, 0.12)'
  accent-border: '#99d5cb'
  accent-border-dark: '#2dd4bf'
  dark-bg: '#0b1114'
  dark-card: '#111a1e'
  dark-surface: '#172329'
  light-bg: '#f5f7f6'
  light-card: '#ffffff'
  light-surface: '#edf3f1'
  light-text: '#edf6f3'
  dark-text: '#9fb2ae'
  primary-text: '#12201f'
  secondary-text: '#52615f'
  border-light: '#dce5e2'
  border-dark: '#263438'
typography:
  display:
    fontFamily: 'var(--font-outfit), sans-serif'
    fontSize: 'clamp(2rem, 5vw, 3.5rem)'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.03em'
  headline:
    fontFamily: 'var(--font-outfit), sans-serif'
    fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)'
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-0.02em'
  title:
    fontFamily: 'var(--font-outfit), sans-serif'
    fontSize: '1.25rem'
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: '-0.01em'
  body:
    fontFamily: 'var(--font-inter), sans-serif'
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 'normal'
  label:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    fontSize: '0.6875rem'
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '0.05em'
rounded:
  sm: '4px'
  md: '6px'
  lg: '8px'
  xl: '12px'
  full: '9999px'
spacing:
  xs: '4px'
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  '2xl': '48px'
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '#ffffff'
    rounded: '{rounded.md}'
    padding: '10px 16px'
  button-primary-hover:
    backgroundColor: '{colors.accent-hover}'
  button-outline:
    backgroundColor: 'transparent'
    textColor: '{colors.primary-text}'
    rounded: '{rounded.md}'
    padding: '10px 16px'
  pill-accent:
    backgroundColor: '{colors.accent-subtle}'
    textColor: '{colors.accent}'
    rounded: '{rounded.sm}'
    padding: '4px 10px'
---

# Design System: Tharcio Santos — Portfolio

## Overview

**Creative North Star: "The Engineering Monolith"**

O design system do portfólio de Tharcio Santos materializa uma estética editorial sóbria, densa e precisa, inspirada em publicações técnicas de alta credibilidade e interfaces de engenharia de software contemporâneas. O sistema prioriza a comunicação imediata de autoridade técnica através de evidências concretas, organização modular e refinamento cirúrgico de micro-interações, evitando ornamentos supérfluos ou clichês gráficos.

A atmosfera visual é construída sobre superfícies profundas de ardósia mineral no tema escuro (`#0b1114`) e papel linho técnico no tema claro (`#f5f7f6`). A tipografia estabelece um diálogo coeso entre a personalidade moderna e geométrica dos títulos em **Outfit**, a legibilidade confortável de leitura em **Inter** e a precisão documental de dados e métricas em fontes monoespaçadas com índices indexados (`01`, `02`). A cor de acento Teal/Ciano atua como um feixe de precisão, guiando o foco sem poluir a interface.

**Key Characteristics:**

- Direção editorial e estruturada em blocos modulares com bordas nítidas de 1px.
- Contraste refinado e paridade perfeita entre os temas Dark e Light via tokens semânticos.
- Interatividade de alta fidelidade: transições suaves (150ms–300ms), suporte a gestos touch/swipe, preview em abas e lightbox em tela cheia.
- Rigor técnico e acessibilidade WCAG 2.1 AA com foco visível, navegação por teclado e respeito a `prefers-reduced-motion`.

## Colors

A paleta combina tons neutros de ardósia e papel técnico com toques estratégicos de Teal mineral e Ciano luminoso.

### Primary

- **Deep Technical Teal / Dark Accent** (`#0f766e` no light, `#5eead4` no dark): Utilizado cirurgicamente em botões de ação primária, links ativos, indicadores de progresso e focos visíveis.
- **Teal Hover State** (`#115e59` no light, `#99f6e4` no dark): Estado elevado para ações interativas ativas.
- **Teal Subtle Surface** (`#e6f4f1` no light, `rgba(45, 212, 191, 0.12)` no dark): Fundo suave para tags, pills de tecnologia e estados hover secundários.

### Neutral

- **Obsidian Slate / Dark Background** (`#0b1114`): Fundo principal do modo escuro, profundo e sem saturação excessiva.
- **Dark Card Surface** (`#111a1e`): Superfície de cartões, seções e abas no modo escuro.
- **Dark Elevated Surface** (`#172329`): Superfície de nível 2 para barras internas, badges secundários e trilhas de scroll.
- **Cool Linen / Light Background** (`#f5f7f6`): Fundo principal do modo claro, suave para os olhos.
- **Light Card Surface** (`#ffffff`): Cartões e componentes em plano principal no modo claro.
- **Light Elevated Surface** (`#edf3f1`): Superfície secundária e trilhas de componentes no modo claro.
- **Primary Text** (`#12201f` no light, `#edf6f3` no dark): Textos principais e títulos de alto contraste.
- **Secondary Text** (`#52615f` no light, `#9fb2ae` no dark): Textos explicativos, metadados e legendas.
- **Semantic Border** (`#dce5e2` no light, `#263438` no dark): Linhas de separação e contornos estruturais de 1px.

### Named Rules

**The 10% Precision Rule.** O acento Teal/Ciano cobre ≤10% de qualquer viewport (CTAs primários, estados ativos de navegação, anéis de foco e micro-indicadores). Sua raridade e contenção é o que confere autoridade e peso às ações.

**The Semantic Theme Parity Rule.** Toda cor de superfície ou texto deve possuir seu par semântico exato entre `light` e `dark`, garantindo contraste constante e ausência de quebras visuais ao alternar temas.

## Typography

**Display Font:** Outfit (com fallback sans-serif)
**Body Font:** Inter (com fallback sans-serif)
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas (monospace)

**Character:** Outfit confere presença estruturada e autoridade geométrica aos títulos; Inter oferece neutralidade e ritmo de leitura impecável; a tipografia monoespaçada ancora métricas, índices numéricos e status de produção.

### Hierarchy

- **Display** (Bold 700, `clamp(2rem, 5vw, 3.5rem)`, line-height: 1.15, letter-spacing: -0.03em): Título do Hero e declarações principais de impacto.
- **Headline** (Bold 700, `clamp(1.5rem, 3.5vw, 2.25rem)`, line-height: 1.2, letter-spacing: -0.02em): Títulos de seções (Projetos, Processo, Competências, Sobre).
- **Title** (Semibold 600, `1.25rem` / 20px, line-height: 1.3, letter-spacing: -0.01em): Títulos de cards de projetos, subtítulos de blocos e cabeçalhos de artigos.
- **Body** (Regular 400, `0.9375rem` / 15px, line-height: 1.6, max line-length: ~70ch): Parágrafos editoriais, justificativas técnicas e descrições de projetos.
- **Label** (Semibold 600, `0.6875rem` / 11px, letter-spacing: 0.05em, font-mono, uppercase): Numerações sequenciais (`01`, `02`), badges de categoria, status ("Online") e rótulos de dados.

### Named Rules

**The Dual-Type & Mono Metric Rule.** Títulos editoriais usam Outfit; textos corridos usam Inter; números ordinais e metadados de engenharia usam font-mono com prefixo de dois dígitos (`01 / 05`).

**The 70ch Editorial Line-Length Rule.** Parágrafos e blocos de texto corrido nunca ultrapassam 70 caracteres por linha, preservando o conforto de leitura em telas ultra-largas.

## Layout

O layout baseia-se em um grid responsivo contido em uma largura máxima centralizada de 1152px (`max-w-6xl`) com padding horizontal de 24px (`px-6` / `sm:px-6`).

- **Ritmo Vertical:** Seções principais utilizam espaçamento de `py-16 md:py-24` (64px a 96px). Seções editoriais intermediárias usam `py-12 md:py-16`. O Hero adota `pt-16 pb-10 md:pt-20 md:pb-12`.
- **Composição Modular:** Estruturas em grid de duas colunas assimétricas (`lg:grid-cols-[1.1fr_0.9fr]`) para vitrines de projeto, permitindo leitura simultânea do showcase visual e das decisões de arquitetura.
- **Navegação Sticky:** Navbar fixada no topo (`sticky top-0 z-50`) com background translúcido/sólido adaptativo e barra de leitura contínua com feedback de progresso via `scaleX`.

### Named Rules

**The Single-Container Anchor Rule.** Todo o conteúdo do portfólio permanece ancorado no container principal de 1152px, evitando larguras arbitrárias ou quebras de alinhamento visual entre seções adjacentes.

## Elevation & Depth

O sistema adota a filosofia de **Camadas Tonais (Tonal Layering)**: superfícies planas por padrão em repouso, onde a sensação de profundidade é comunicada por contrastes de planos (`bg-light-bg` vs `bg-light-card` / `bg-dark-bg` vs `bg-dark-card`) e contornos finos de 1px.

### Shadow Vocabulary

- **Interactive Hover Shadow** (`box-shadow: 0 1px 3px rgba(0,0,0,0.06)` no light / `0 1px 3px rgba(0,0,0,0.3)` no dark): Aplicado à Navbar e botões ao scrollar ou interagir.
- **Elevated Card Hover** (`box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08)`): Elevação discreta em cards interativos com leve translação vertical (`-translateY(2px)`).
- **Modal Lightbox Backing** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75)`): Profundidade máxima para exibição de telas em modal tela cheia.

### Named Rules

**The Flat-by-Default Tonal Rule.** Elementos descansam planos sobre suas superfícies. Sombras e elevações não são decorativas em repouso; elas surgem exclusivamente como resposta a estados interativos (hover, foco, ativação e modais).

## Shapes

A linguagem formal combina cantos ligeiramente suavizados com contornos precisos de 1px.

- **Botões e Campos de Ação:** Raio de curvatura suave de 6px (`rounded-md` / 6px).
- **Badges, Tags e Segmentos:** Raio compacto de 4px (`rounded-sm` / 4px).
- **Cards e Molduras de Showcase:** Raio estruturado de 8px a 12px (`rounded-lg` / `rounded-xl`).
- **Contornos e Molduras:** Linhas de borda de 1px sólidas presentes em todas as caixas delimitadoras (`border border-border-light dark:border-border-dark`).

### Named Rules

**The 1px Framing Rule.** Cada bloco autônomo de informação (cards, abas, molduras de imagem, blocos de código/decisão) possui um contorno explícito de 1px com o token semântico de borda, mantendo a sensação de blueprint técnico.

## Components

### Buttons

- **Shape:** Cantos suavizados (6px / `rounded-md`), tipografia semibold (14px).
- **Primary:** Fundo Teal (`#0f766e` light, `#5eead4` dark), texto de alto contraste, padding `10px 16px` (`h-10 px-4 py-2.5`), micro-interação `active:scale-[0.98]`.
- **Outline:** Fundo transparente, borda de 1px (`border-border-light` / `border-border-dark`), texto neutro, transição para fundo teal sutil em hover.
- **Ghost:** Sem borda, texto secundário, fundo teal sutil em hover.
- **Focus:** Anel de foco nítido de 2px com offset (`focus-visible:ring-2 focus-visible:ring-accent`).

### Pills & Badges

- **Accent Pill:** Fundo teal sutil (`#e6f4f1` / `rgba(45,212,191,0.12)`), borda de 1px (`#99d5cb` / `#2dd4bf`), texto teal em 12px font-medium.
- **Muted Pill:** Fundo neutro de superfície, borda neutra e texto secundário.

### Project Tabs & Showcase

- **Tab Bar:** Botões de abas horizontais com numeração monoespaçada (`01`, `02`), indicador de destaque com ponto verde e transição instantânea de painel.
- **Browser Window Showcase:** Moldura de navegador com barra superior e botões semáforo decorativos (vermelho, âmbar, verde), aspect ratio 16:9 fixo, barras de progresso clicáveis estilo stories e suporte a gestos touch/swipe.
- **Lightbox Modal:** Visualização de alta resolução em tela cheia com overlay escuro (`bg-slate-950/96`), controle por teclado (Esc, Setas) e swipe touch no mobile.

### Navigation & Top Bar

- **Navbar:** Sticky com logo monograma ("T"), links de navegação com underline dinâmico no item ativo (scroll spy), alternador de tema e menu mobile com focus trap.
- **ReadingProgressBar:** Linha de progresso no topo da página de 2px de altura preenchida proporcionalmente ao scroll da viewport via `scaleX`.

## Do's and Don'ts

### Do:

- **Do** usar sempre tokens semânticos (`border-border-light`, `bg-dark-card`, `text-primary-text`, `accent`) ao criar novas interfaces.
- **Do** manter a numeração monoespaçada de 2 dígitos (`01`, `02`) em listas ordenadas e etapas de processo.
- **Do** garantir contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande em ambos os temas.
- **Do** adicionar micro-interações táteis sutis (`active:scale-[0.98]` e transições de 150ms) em elementos clicáveis.
- **Do** respeitar `prefers-reduced-motion` desativando animações pesadas e transições contínuas.

### Don't:

- **Don't** utilizar mais de 10% de cobertura da tela com a cor de acento Teal/Ciano.
- **Don't** aplicar sombras pesadas ou difusas em elementos em repouso.
- **Don't** misturar fontes semânticas (não use Outfit no corpo ou Inter nos números ordinais de destaque).
- **Don't** criar componentes sem anel de foco visível (`focus-visible:ring-2`).
- **Don't** utilizar classes arbitrárias de cores fixas (como `bg-blue-600` ou `text-gray-900`) fora dos tokens semânticos definidos.
