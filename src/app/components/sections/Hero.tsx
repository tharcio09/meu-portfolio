import { HiArrowRight, HiDocumentText } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Section from "../ui/Section";

const Hero = () => {
  return (
    <Section id="home" className="flex flex-col justify-center min-h-screen">
      <div className="text-center space-y-8 max-w-4xl mx-auto z-10 px-4">

        {/* Tagline / Identidade */}
        <p className="text-sm md:text-base text-secondary-text dark:text-cyan-200/80 tracking-widest uppercase">
          Fullstack Developer · React · Next.js · Node.js
        </p>

        {/* Nome */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-primary-text dark:text-light-text">Tharcio Santos</span>
        </h1>

        {/* Headline principal */}
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
          Construindo aplicações web — do backend ao frontend.
        </h2>

        {/* Bio orientada a valor */}
        <div className="space-y-3 text-base md:text-lg text-secondary-text dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          <p>
            Desenvolvo aplicações com{" "}
            <strong className="text-cyan-400">React</strong>,{" "}
            <strong className="text-cyan-400">Next.js</strong> e{" "}
            <strong className="text-cyan-400">Node.js</strong>, trabalhando com autenticação,
            banco de dados relacional e deploy.
          </p>
          <p>
            Antes da programação, tive experiência prática com diagnóstico e resolução de
            problemas, o que fortaleceu minha forma de pensar:{" "}
            <strong>entender bem o problema antes de implementar a solução.</strong>
          </p>
        </div>

        {/* Bloco de credibilidade */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-secondary-text dark:text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-cyan-400">✦</span> 4 projetos com deploy ativo
          </span>
          <span className="hidden sm:block text-gray-600 dark:text-gray-700">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-cyan-400">✦</span> Testes automatizados com Cypress
          </span>
          <span className="hidden sm:block text-gray-600 dark:text-gray-700">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-cyan-400">✦</span> Auth + BD real em produção
          </span>
        </div>

        {/* CTAs — hierarquia: 2 botões de peso visual igual */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#projetos"
            className="group px-8 py-3 w-full sm:w-auto rounded-full text-white font-semibold text-base
                       bg-cyan-500 hover:bg-cyan-600
                       transition-colors duration-200
                       flex items-center justify-center gap-2"
          >
            Ver Projetos
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/curriculo-tharcio-santos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 w-full sm:w-auto rounded-full font-semibold text-base
                       border border-cyan-500 text-cyan-500 dark:text-cyan-400
                       hover:bg-cyan-500/10
                       transition-colors duration-200
                       flex items-center justify-center gap-2"
          >
            <HiDocumentText className="text-lg" />
            Baixar Currículo
          </a>
        </div>

        {/* Links terciários */}
        <div className="flex justify-center gap-6 pt-2 text-gray-400 text-sm md:text-base">
          <a
            href="https://github.com/tharcio09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <SiGithub className="text-xl" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/tharcio-santos-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <SiLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <span>Contato</span>
          </a>
        </div>

      </div>
    </Section>
  );
};

export default Hero;
