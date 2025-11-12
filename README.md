
<div align="center">

# 💻 Tharcio Santos — Portfólio Profissional  
### Desenvolvedor Full-Stack | React • Next.js • Tailwind • Node.js  

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff0055?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://tharcio-portfolio.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)](https://tharcio-portfolio.vercel.app/)

**Portfólio moderno e interativo desenvolvido com Next.js, apresentando um design dark futurista com elementos neon.**

[🌐 **Acesse o site ao vivo**](https://tharcio-portfolio.vercel.app/) • [📧 **Entre em contato**](mailto:tharciosantos09@gmail.com)

</div>

---

## ⚡ Resumo Rápido

| Seção | Link |
|-------|------|
| 🧑‍💻 **Demo Online** | [tharcio-portfolio.vercel.app](https://tharcio-portfolio.vercel.app) |
| 🧠 **Stack Principal** | Next.js • React • Tailwind • Framer Motion |
| 💬 **Contato** | [tharciosantos09@gmail.com](mailto:tharciosantos09@gmail.com) |
| 📂 **Repositório** | [github.com/tharcio09/tharcioport](https://github.com/tharcio09/tharcioport) |

---

## 📖 Sobre o Projeto

Este é o meu portfólio profissional, desenvolvido para apresentar minha trajetória, habilidades técnicas e projetos como **Desenvolvedor Full-Stack**.  

O site combina um **design dark futurista com cores neon (azul e roxo)**, animações suaves e uma experiência totalmente responsiva.  
Ele reflete meu estilo como desenvolvedor — moderno, criativo e com foco em **performance, UX e impacto visual**.

---

## ✨ Destaques e Recursos

### 🎨 Design e Visual
- **Estilo Dark Futurista** com paleta neon (azul e roxo)
- **Glassmorphism**: efeitos de vidro fosco em componentes
- **Partículas Interativas** (tsparticles)
- **Gradientes Neon** e brilhos dinâmicos
- **Tema Claro/Escuro** com transições suaves

### 🎭 Animações e Interatividade
- Animações de entrada com **Framer Motion**
- **Scroll Reveal** e **Hover Effects**
- **Typing Effect** no texto de boas-vindas
- **Animações Sequenciais (Stagger)** em grids e listas

### 📱 Responsividade e Performance
- Layout **100% responsivo**
- **Lazy Loading** para imagens e componentes
- **SEO otimizado** com metadados completos
- **PWA Ready** e **build otimizado** para produção

### 🛠️ Funcionalidades Principais
- **Seção Hero** com CTA animado  
- **Sobre Mim** com perfil e habilidades  
- **Timeline Profissional** animada  
- **Grid de Projetos Interativo**  
- **Formulário de Contato funcional (EmailJS)**  
- **Scroll suave** entre seções  

---

## ✅ Checklist de Recursos

- [x] Tema dark/light com transição suave  
- [x] Fundo animado com partículas  
- [x] Efeito de digitação e animações de entrada  
- [x] Formulário funcional via EmailJS  
- [x] Deploy automatizado na Vercel  
- [x] Performance otimizada e responsiva  

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15.5.6](https://nextjs.org/)** — Framework React com SSR e SSG  
- **[React 19.1.0](https://react.dev/)** — Biblioteca para interfaces reativas  
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Estilização moderna e rápida  

### Animações e Efeitos
- **[Framer Motion 12.23](https://www.framer.com/motion/)** — Animações fluidas  
- **[tsparticles 3.9](https://particles.js.org/)** — Fundo de partículas interativas  

### Utilitários
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Gerenciamento de tema  
- **[EmailJS](https://www.emailjs.com/)** — Envio de emails via formulário  
- **[react-hot-toast](https://react-hot-toast.com/)** — Notificações  
- **[react-icons](https://react-icons.github.io/react-icons/)** — Ícones SVG  
- **[Vercel Analytics](https://vercel.com/analytics)** — Métricas de uso  

---

## 📁 Estrutura do Projeto

```

tharcioport/
├── public/
│   ├── images/          # Imagens e ícones
│   ├── icons/           # Ícones PWA
│   └── manifest.json    # Manifesto PWA
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── sections/    # Seções principais
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   └── Contact.jsx
│   │   │   ├── ui/          # Componentes de UI
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── Section.jsx
│   │   │   │   └── TypingEffect.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ParticlesBackground.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── data/
│       └── constants.js
├── tailwind.config.js
├── next.config.mjs
└── package.json

````

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+  
- npm ou yarn  
- Conta no EmailJS (para o formulário)

### Instalação

```bash
git clone https://github.com/tharcio09/tharcioport.git
cd tharcioport
npm install
````

Crie o arquivo `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

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

> *Design dark futurista com elementos neon e animações suaves.*

---

## 🧠 Aprendizados Técnicos

Durante o desenvolvimento deste portfólio, aprofundei conhecimentos em:

* Otimização de imagens e lazy loading no Next.js
* Controle de tema dinâmico com `next-themes`
* Uso avançado do Framer Motion para transições fluidas
* Boas práticas de acessibilidade e performance em React

---

## 🌐 Deploy

Hospedado na **Vercel**
🔗 [https://tharcio-portfolio.vercel.app](https://tharcio-portfolio.vercel.app)

### Deploy Manual

1. Faça push para o GitHub
2. Importe o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático a cada push

---

## 👨‍💻 Autor

**Tharcio Santos**
Desenvolvedor Full-Stack focado em React, Next.js e Node.js.

📫 **Contato**

* [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
* [GitHub](https://github.com/tharcio09)
* [Email](mailto:tharciosantos09@gmail.com)
* [Portfólio](https://tharcio-portfolio.vercel.app/)

---

## 🪪 Licença

Distribuído sob a licença **MIT**.
Veja `LICENSE` para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ por [Tharcio Santos](https://github.com/tharcio09)**
⭐ Se este projeto foi útil, considere deixar uma estrela!

</div>
```

---

