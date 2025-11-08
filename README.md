# 💻 Tharcio Santos - Portfólio Profissional

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/Framer_Motion-12.23-0055FF?style=for-the-badge&logo=framer)

**Portfólio moderno e interativo desenvolvido com Next.js, apresentando um design dark futurista com elementos neon**

[🌐 **Acesse o site ao vivo**](https://tharcio-portfolio.vercel.app/) • [📧 **Entre em contato**](mailto:tharciosantos09@gmail.com)

</div>

---

## 📖 Sobre o Projeto

Este é o meu portfólio pessoal profissional, desenvolvido para apresentar minha trajetória, habilidades técnicas e projetos como Desenvolvedor Full-Stack. O site foi construído com foco em uma experiência visual impactante, combinando um design dark futurista com cores neon (azul e roxo), animações suaves e um layout totalmente responsivo.

O projeto reflete minhas habilidades em desenvolvimento moderno, utilizando as mais recentes tecnologias do ecossistema React e Next.js, com atenção especial à performance, acessibilidade e experiência do usuário.

## ✨ Destaques e Recursos

### 🎨 Design e Visual
- **Estilo Dark Futurista**: Design moderno com paleta de cores neon (azul e roxo)
- **Glassmorphism**: Efeitos de vidro fosco aplicados em cards e componentes
- **Partículas Interativas**: Fundo animado com partículas usando tsparticles
- **Gradientes Neon**: Efeitos de brilho e gradientes personalizados em elementos-chave
- **Tema Claro/Escuro**: Suporte completo a ambos os temas com transições suaves

### 🎭 Animações e Interatividade
- **Animações Suaves**: Transições e animações de entrada usando Framer Motion
- **Scroll Reveal**: Elementos aparecem suavemente ao fazer scroll
- **Hover Effects**: Microinterações em cards, botões e links
- **Typing Effect**: Efeito de digitação no texto de boas-vindas
- **Stagger Animations**: Animações sequenciais em listas e grids

### 📱 Responsividade e Performance
- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Lazy Loading**: Carregamento otimizado de componentes e imagens
- **Otimizações SEO**: Metadados completos para melhor indexação
- **PWA Ready**: Configuração para Progressive Web App
- **Performance Otimizada**: Build otimizado para produção

### 🛠️ Funcionalidades
- **Seção Hero**: Apresentação impactante com animações de entrada
- **Sobre Mim**: Informações pessoais e perfil profissional
- **Experiência Profissional**: Timeline visual da trajetória profissional
- **Projetos**: Grid de projetos com cards interativos
- **Contato**: Formulário funcional integrado com EmailJS
- **Navegação Suave**: Scroll suave entre seções

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15.5.6](https://nextjs.org/)** - Framework React com SSR e SSG
- **[React 19.1.0](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first

### Animações e Efeitos
- **[Framer Motion 12.23](https://www.framer.com/motion/)** - Biblioteca de animações
- **[tsparticles 3.9](https://particles.js.org/)** - Sistema de partículas interativas

### Utilitários
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[EmailJS](https://www.emailjs.com/)** - Envio de emails via formulário
- **[react-hot-toast](https://react-hot-toast.com/)** - Notificações toast
- **[react-icons](https://react-icons.github.io/react-icons/)** - Ícones SVG
- **[Vercel Analytics](https://vercel.com/analytics)** - Analytics do site

### Ferramentas de Desenvolvimento
- **ESLint** (linting de código)
- **PostCSS** (processamento de CSS)
- **Autoprefixer** (compatibilidade de navegadores)

## 📸 Preview

![Screenshot do Portfólio](screenshot-portfolio.PNG)

*Design dark futurista com elementos neon e animações suaves*

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes
- Conta no EmailJS (para o formulário de contato)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/tharcio09/tharcioport.git
   cd tharcioport
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

   > 💡 Para obter suas credenciais do EmailJS, acesse [emailjs.com](https://www.emailjs.com/) e crie uma conta gratuita.

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse no navegador:**
   
   Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

### Build para Produção

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
tharcioport/
├── public/
│   ├── images/          # Imagens dos projetos e perfil
│   ├── icons/           # Ícones PWA
│   └── manifest.json    # Manifesto PWA
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── sections/    # Componentes de seções
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
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.js        # Layout principal
│   │   └── page.js          # Página inicial
│   └── data/
│       └── constants.js     # Constantes e dados
├── tailwind.config.js       # Configuração do Tailwind
├── next.config.mjs          # Configuração do Next.js
└── package.json             # Dependências do projeto
```

## 🎯 Seções do Portfólio

### 🏠 Hero
Seção inicial com apresentação pessoal, efeito de digitação e call-to-action destacado.

### 👤 Sobre Mim
Informações pessoais, foto de perfil com efeito 3D, habilidades técnicas e certificados.

### 💼 Experiência Profissional
Timeline visual da trajetória profissional com animações de entrada.

### 🚀 Projetos
Grid responsivo de projetos com cards interativos, links para repositórios e demos.

### 📧 Contato
Formulário funcional integrado com EmailJS para envio de mensagens em tempo real.

## 🌐 Deploy

O projeto está hospedado na **Vercel** e pode ser acessado em:

**[https://tharcioport.vercel.app/](https://tharcioport.vercel.app/)**

### Deploy na Vercel

1. Faça push do código para o GitHub
2. Importe o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático a cada push

## 📝 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## 👨‍💻 Autor

**Tharcio Santos**

Desenvolvedor Full-Stack focado em React, Next.js e Node.js.

## 📫 Contato

- **LinkedIn**: [linkedin.com/in/tharcio-santos-dev](https://www.linkedin.com/in/tharcio-santos-dev/)
- **GitHub**: [github.com/tharcio09](https://github.com/tharcio09)
- **Email**: [tharciosantos09@gmail.com](mailto:tharciosantos09@gmail.com)
- **Portfólio**: [tharcio-port.vercel.app](https://tharcio-portfolio.vercel.app/)

---

<div align="center">

**Desenvolvido com ❤️ por Tharcio Santos**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
