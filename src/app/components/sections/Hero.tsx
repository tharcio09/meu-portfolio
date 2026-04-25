import { HiArrowRight, HiDocumentText } from "react-icons/hi";
import Section from "../ui/Section";

const proofItems = [
  "4 projetos com deploy ativo",
  "React, Next.js, TypeScript e Node.js",
  "Autenticação, banco relacional, APIs e PWA",
];

const Hero = () => {
  return (
    <Section
      id="home"
      spacing="hero"
      className="border-b border-gray-200/80 dark:border-gray-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
            Desenvolvedor Fullstack em início de carreira
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-normal text-primary-text dark:text-light-text md:text-7xl">
            Tharcio Santos
          </h1>
          <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-primary-text dark:text-light-text md:text-3xl">
            Construindo aplicações web do backend ao frontend.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-text dark:text-gray-300">
            Desenvolvo projetos com React, Next.js e Node.js, conectando interface,
            autenticação, banco relacional e deploy em produção. Busco minha primeira
            oportunidade para contribuir com aplicações reais, aprendendo rápido e
            entregando com organização, clareza e boa execução.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-text px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg dark:hover:bg-gray-200"
          >
            Ver projetos
            <HiArrowRight className="text-base" />
          </a>
          <a
            href="/curriculo-tharcio-santos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-primary-text transition-colors hover:border-cyan-600 hover:text-cyan-700 dark:border-gray-700 dark:text-light-text dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            <HiDocumentText className="text-base" />
            Baixar currículo
          </a>
        </div>

        <dl className="mt-12 grid gap-4 border-t border-gray-200 pt-6 text-sm text-secondary-text dark:border-gray-800 dark:text-gray-400 md:grid-cols-3">
          {proofItems.map((item) => (
            <div key={item}>
              <dt className="sr-only">Destaque</dt>
              <dd>{item}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default Hero;
