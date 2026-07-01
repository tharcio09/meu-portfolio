import { experienciasAnteriores, trajectorySkills } from '@/data/experience';
import Section from '../ui/Section';

const Experience = () => {
  if (experienciasAnteriores.length === 0) return null;

  return (
    <Section
      id="experiencia"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-border-light pb-8 dark:border-border-dark md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Trajetória
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Experiência que também constrói software.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end md:text-lg">
            Antes da programação, atuei em rotinas administrativas e de manutenção. Essas
            experiências formaram uma base de organização, análise e comunicação que hoje aplico ao
            desenvolvimento de sistemas.
          </p>
        </div>

        <div className="grid gap-10 pt-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-text dark:text-light-text">
              Base que levo para tecnologia
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {trajectorySkills.map((skill, index) => (
                <li
                  key={skill}
                  className={`flex min-h-16 flex-col gap-2 border border-border-light bg-white/70 p-3 text-sm text-secondary-text shadow-sm dark:border-border-dark dark:bg-dark-card/70 dark:text-dark-text transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-border hover:shadow-lg dark:hover:border-accent-border-dark${index === trajectorySkills.length - 1 && trajectorySkills.length % 2 !== 0 ? ' col-span-2' : ''}`}
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light">
                    Habilidade {index + 1}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-text dark:text-light-text">
              Experiências anteriores
            </h3>
            <div className="mt-4 grid gap-3">
              {experienciasAnteriores.map((item, index) => (
                <article
                  key={`${item.role}-${item.org}`}
                  className="grid gap-3 border border-border-light bg-white/70 p-4 shadow-sm dark:border-border-dark dark:bg-dark-card/70 transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-border hover:shadow-lg dark:hover:border-accent-border-dark sm:grid-cols-[4.5rem_1fr_auto] sm:gap-5"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-accent-light">
                    Experiência {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary-text dark:text-light-text">
                      {item.role} · {item.org}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                      {item.summary}
                    </p>
                  </div>
                  <p className="text-xs tabular-nums text-secondary-text dark:text-dark-text sm:text-right">
                    {item.period}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
