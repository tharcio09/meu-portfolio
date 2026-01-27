"use client";

import Section from "../ui/Section";

const Contact = () => {
  return (
    <Section id="contato">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text dark:text-light-text tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-base md:text-lg text-secondary-text dark:text-dark-text max-w-xl mx-auto leading-relaxed">
            Se você viu potencial nos meus projetos ou deseja conversar sobre uma
            oportunidade, estou disponível pelos canais abaixo.
          </p>
        </div>

        <div className="space-y-4 bg-light-card/80 dark:bg-dark-card/60 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                LinkedIn
              </p>
              <p className="text-sm text-secondary-text dark:text-dark-text">
                Ideal para conversar sobre vagas, networking e carreira.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/tharcio-santos-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold
                         bg-cyan-500 hover:bg-cyan-600 text-white transition-colors duration-200"
            >
              Abrir LinkedIn
            </a>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800" />

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                Email
              </p>
              <p className="text-sm text-secondary-text dark:text-dark-text">
                Para mensagens mais detalhadas ou propostas formais.
              </p>
            </div>
            <a
              href="mailto:tharciosantos09@gmail.com"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold
                         border border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10
                         transition-colors duration-200"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
