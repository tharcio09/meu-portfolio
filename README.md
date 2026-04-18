<div align="center">

# 💻 Tharcio Santos — Portfólio Profissional  
### Desenvolvedor Full-Stack | React • Next.js • TypeScript • Tailwind • Node.js  

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://tharcio-portfolio.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)](https://tharcio-portfolio.vercel.app/)

**Portfólio minimalista desenvolvido com Next.js e TypeScript, focado em clareza, projetos reais e fácil leitura para recrutadores.**

[🌐 **Acesse o site ao vivo**](https://tharcio-portfolio.vercel.app/) • [📧 **Entre em contato**](mailto:tharciosantos09@gmail.com)

</div>

---

## ⚡ Resumo Rápido

| Seção | Link |
|-------|------|
| 🧑‍💻 **Demo Online** | [tharcio-portfolio.vercel.app](https://tharcio-portfolio.vercel.app) |
| 🧠 **Stack Principal** | Next.js • React • TypeScript • Tailwind |
| 💬 **Contato** | [tharciosantos09@gmail.com](mailto:tharciosantos09@gmail.com) |
| 📂 **Repositório** | [github.com/tharcio09/tharcioport](https://github.com/tharcio09/meu-portfolio) |

---

## 📖 Sobre o Projeto

Este é o meu portfólio profissional, desenvolvido para apresentar minha trajetória, habilidades técnicas e projetos como **Desenvolvedor Web** com foco em React, Next.js e Node.js.

O site tem um visual **clean e responsivo**, com foco em conteúdo: quem sou, o que sei fazer, projetos reais e como entrar em contato.  
O objetivo é facilitar a avaliação técnica de recrutadores, priorizando **clareza, organização e boas práticas**.

---

## ✨ Destaques e Recursos

### 🎨 Design e Visual
- **Layout minimalista**, com foco em leitura e hierarquia tipográfica
- Paleta simples: **1 cor principal (ciano)** + tons neutros em modo claro/escuro
- Espaçamentos generosos e poucas informações por tela

### 🎭 Animações e Interatividade

- Animações sutis em hovers e interações importantes (botões, navegação)
- Transição suave de tema claro/escuro

### 📱 Responsividade e Performance
- Layout **100% responsivo**
- Imagens otimizadas com `next/image`
- **SEO básico** com metadados configurados
- Pronto para deploy na **Vercel**

### 🛠️ Funcionalidades Principais
- **Seção Hero** com apresentação direta e dois CTAs: Ver Projetos e Baixar Currículo
- **Sobre Mim** com resumo, stack (com hierarquia visual) e trajetória
- **Trajetória & Contexto** com experiências anteriores e habilidades transferíveis
- **Projetos** com HelpFlow em destaque (layout horizontal + bullets técnicos) e scroll reveal nas imagens
- **Contato** com canais diretos para LinkedIn, e-mail e GitHub

---

## ✅ Checklist de Recursos

- [x] Tema dark/light com transição suave  
- [x] Layout responsivo e focado em conteúdo  
- [x] Deploy automatizado na Vercel  
- [x] Componentes principais em **TypeScript**  

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 16.0.7](https://nextjs.org/)** — Framework React com SSR e SSG  
- **[React 19.1.0](https://react.dev/)** — Biblioteca para interfaces reativas  
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança e manutenção do código  
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Estilização moderna e rápida  


### Utilitários
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Gerenciamento de tema  
- **[react-icons](https://react-icons.github.io/react-icons/)** — Ícones SVG  
- **[Vercel Analytics](https://vercel.com/analytics)** — Métricas de uso  

---

## 📁 Estrutura do Projeto

```

tharcioport/
├── public/
│ ├── images/ # Imagens e ícones
│ ├── icons/ # Ícones PWA
│ └── manifest.json # Manifesto PWA
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── sections/ # Seções principais
│ │ │ │ ├── Hero.tsx
│ │ │ │ ├── About.tsx
│ │ │ │ ├── Experience.tsx
│ │ │ │ ├── Projects.tsx
│ │ │ │ └── Contact.tsx
│ │ │ ├── ui/ # Componentes de UI
│ │ │ │ ├── ProjectCard.tsx
│ │ │ │ ├── Section.tsx
│ │ │ │ ├── ThemeProvider.tsx
│ │ │ │ └── ThemeSwitcher.tsx
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── not-found.tsx
│ │ └── page.tsx
│ └── data/
│ └── constants.ts
├── tailwind.config.js
├── next.config.mjs
└── package.json

```


---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+  
- npm ou yarn  

### Instalação

```bash
git clone https://github.com/tharcio09/tharcioport.git
cd tharcioport
npm install
````

Execute o servidor:

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
npm run build
npm start
```


---

## 📸 Preview

![Screenshot do Portfólio](screenshot-portfolio.PNG)

> *Design clean com modo escuro/claro, paleta ciano e hierarquia visual focada em conversão.*

---

## 🧠 Aprendizados Técnicos

Durante o desenvolvimento deste portfólio, aprofundei conhecimentos em:

- Otimização de imagens e lazy loading no Next.js  
- Controle de tema dinâmico com `next-themes`  

- Boas práticas de acessibilidade e performance em React  
- Migração gradual de um projeto Next.js de **JavaScript para TypeScript** (tipagem de props, estados e dados)  

---

## 🌐 Deploy

Hospedado na **Vercel**  
🔗 https://tharcio-portfolio.vercel.app

### Deploy Manual

1. Faça push para o GitHub  
2. Importe o repositório na [Vercel](https://vercel.com)  
3. Configure as variáveis de ambiente  
4. Deploy automático a cada push  

---

## 👨‍💻 Autor

**Tharcio Santos**  
Desenvolvedor Full-Stack focado em React, Next.js, TypeScript e Node.js.

📫 **Contato**

- [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
- [GitHub](https://github.com/tharcio09)
- [Email](mailto:tharciosantos09@gmail.com)
- [Portfólio](https://tharcio-portfolio.vercel.app/)

---

<div align="center">

**Desenvolvido com ❤️ por [Tharcio Santos](https://github.com/tharcio09)**  
⭐ Se este projeto foi útil, considere deixar uma estrela!

</div>
