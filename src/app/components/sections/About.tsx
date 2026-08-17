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

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* Coluna Esquerda: Perfil + Formação Acadêmica + Habilidades Transferidas */}
          <div className="space-y-3.5">
            {/* Card de Perfil */}
            <div className="border border-border-light bg-white/60 p-4 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <div className="flex items-center justify-between gap-3 border-b border-border-light pb-2.5 dark:border-border-dark">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Desenvolvedor
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  Disponível
                </span>
              </div>

              <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-xl border-2 border-border-light bg-light-surface shadow-md dark:border-border-dark dark:bg-dark-card">
                  <Image
                    src="/images/profile.webp"
                    alt="Foto de Tharcio Santos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, 128px"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-text dark:text-light-text">
                    Tharcio Santos
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-secondary-text dark:text-dark-text">
                    Desenvolvedor Full Stack Júnior
                  </p>
                  <p className="text-xs font-mono text-accent dark:text-accent-light">
                    Caeté / BH e Região · Remoto
                  </p>
                </div>
              </div>
            </div>

            {/* Card de Formação Acadêmica */}
            <div className="border border-border-light bg-white/60 p-4 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Formação Acadêmica
              </p>
              <h4 className="mt-1 text-sm font-bold text-primary-text dark:text-light-text">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <div className="mt-2.5 grid grid-cols-3 gap-2 border-t border-border-light pt-2.5 text-xs dark:border-border-dark">
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

            {/* Habilidades Transferidas */}
            <div className="border border-border-light bg-white/60 p-4 shadow-sm dark:border-border-dark dark:bg-dark-card/60">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Habilidades transferidas
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {trajectorySkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border-light bg-light-surface px-2 py-0.5 font-mono text-xs text-secondary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita: Experiências Profissionais */}
          <div>
            <div className="mb-3.5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Experiências Profissionais
              </p>
            </div>

            <div className="space-y-3">
              {experienciasAnteriores.map((item) => (
                <article
                  key={`${item.role}-${item.org}`}
                  className="border border-border-light bg-white/60 p-4 shadow-sm transition-all duration-200 hover:border-accent/40 dark:border-border-dark dark:bg-dark-card/60"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="text-sm font-bold text-primary-text dark:text-light-text">
                      {item.role} · {item.org}
                    </h4>
                    <span className="shrink-0 font-mono text-xs text-secondary-text dark:text-dark-text">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
};

export default About;
