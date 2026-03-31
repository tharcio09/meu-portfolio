import { HiArrowRight, HiDocumentText } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Section from "../ui/Section";

const Hero = () => {
  return (
    <Section id="home" className="flex flex-col justify-center min-h-screen">
      <div className="text-center space-y-8 max-w-4xl mx-auto z-10 px-4">
        <p className="text-sm md:text-base text-secondary-text dark:text-cyan-200/80 tracking-wide uppercase">
          Desenvolvedor Web em formação
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-primary-text dark:text-light-text">Tharcio Santos</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
          Desenvolvimento Web com React e Next.js
        </h2>

        <p className="text-base md:text-lg text-secondary-text dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, focado em
          desenvolvimento web com <strong className="text-cyan-400">React</strong>,{" "}
          <strong className="text-cyan-400">Next.js</strong> e{" "}
          <strong>TypeScript</strong>. Busco minha primeira oportunidade de estágio em tecnologia para aprender com uma equipe e contribuir em projetos reais.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#projetos"
            className="group px-8 py-3 w-full sm:w-auto rounded-full text-white font-semibold text-base md:text-lg
                       bg-cyan-500 hover:bg-cyan-600
                       transition-colors duration-200
                       flex items-center justify-center gap-2"
          >
            Ver Projetos
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-6 text-gray-400 text-sm md:text-base">

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
            href="/curriculo-tharcio-santos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <HiDocumentText className="text-xl" />
            <span>Currículo (PDF)</span>
          </a>

        </div>
      </div>
    </Section>
  );
};

export default Hero;
