import Image from 'next/image';
import { experienciasAnteriores, trajectorySkills } from '@/data/experience';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import Section from '../ui/Section';

const About = () => {
  return (
    <Section
      id="sobre-mim"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <RevealOnScroll className="mx-auto max-w-6xl">
        <div className="grid gap-4 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Perfil & Trajetória
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-4xl">
              Sobre mim
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end">
            Graduando em Análise e Desenvolvimento de Sistemas com experiência prática autônoma em
            suporte e manutenção de TI, unindo método investigativo à construção de software.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Coluna Esquerda: Perfil em Destaque + Formação Acadêmica */}
          <div className="space-y-5">
            {/* Card Principal de Perfil */}
            <div className="border border-border-light bg-white/60 p-5 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <div className="flex items-center justify-between gap-3 border-b border-border-light pb-3 dark:border-border-dark">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Desenvolvedor
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Disponível
                </span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                <div className="relative mx-auto sm:mx-0 h-32 w-32 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-border-light bg-light-surface shadow-md dark:border-border-dark dark:bg-dark-card">
                  <Image
                    src="/images/profile.webp"
                    alt="Foto de Tharcio Santos"
                    fill
                    quality={95}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 128px, 144px"
                  />
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-text dark:text-light-text">
                    Tharcio Santos
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-secondary-text dark:text-dark-text">
                    Desenvolvedor Full Stack Júnior
                  </p>
                  <p className="font-mono text-xs text-accent dark:text-accent-light">
                    Caeté / BH e Região · Remoto
                  </p>
                </div>
              </div>
            </div>

            {/* Card de Formação Acadêmica */}
            <div className="border border-border-light bg-white/60 p-5 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <div className="flex items-center justify-between border-b border-border-light pb-2.5 dark:border-border-dark">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Formação Acadêmica
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text dark:text-dark-text">
                  Ensino Superior
                </span>
              </div>
              <h4 className="mt-3 text-sm sm:text-base font-bold text-primary-text dark:text-light-text">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-border-light pt-3 text-xs dark:border-border-dark">
                <div>
                  <span className="block font-mono text-[10px] uppercase text-secondary-text dark:text-dark-text">
                    Instituição
                  </span>
                  <span className="font-semibold text-primary-text dark:text-light-text">
                    Anhanguera
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-secondary-text dark:text-dark-text">
                    Status
                  </span>
                  <span className="font-semibold text-primary-text dark:text-light-text">
                    Cursando
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-secondary-text dark:text-dark-text">
                    Conclusão
                  </span>
                  <span className="font-semibold text-primary-text dark:text-light-text">
                    Julho de 2027
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Linha do Tempo de Experiências & Habilidades Transferidas */}
          <div className="space-y-6">
            <div className="border border-border-light bg-white/60 p-5 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <div className="mb-5 flex items-center justify-between border-b border-border-light pb-2.5 dark:border-border-dark">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Experiências Profissionais
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text dark:text-dark-text">
                  Trajetória
                </span>
              </div>

              {/* Timeline Contínua */}
              <div className="relative pl-6 sm:pl-7 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border-light dark:before:bg-border-dark">
                {experienciasAnteriores.map((item) => (
                  <article key={`${item.role}-${item.org}`} className="group relative">
                    {/* Node / Marcador da Timeline */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-[20px] sm:-left-[24px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-white transition-colors duration-200 group-hover:bg-accent dark:bg-dark-card"
                    />

                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h4 className="text-sm font-bold text-primary-text dark:text-light-text transition-colors duration-200 group-hover:text-accent dark:group-hover:text-accent-light">
                        {item.role} · {item.org}
                      </h4>
                      <span className="shrink-0 font-mono text-xs text-secondary-text dark:text-dark-text">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Habilidades Transferidas */}
            <div className="border border-border-light bg-white/60 p-5 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <div className="flex items-center justify-between border-b border-border-light pb-2.5 dark:border-border-dark">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Habilidades transferidas
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text dark:text-dark-text">
                  Competências
                </span>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {trajectorySkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border-light bg-light-surface px-2.5 py-1 font-mono text-xs text-secondary-text transition-colors duration-200 hover:border-accent/40 dark:border-border-dark dark:bg-dark-surface dark:text-dark-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
};

export default About;
