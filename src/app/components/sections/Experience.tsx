import { experienciasAnteriores, trajectorySkills } from '@/data/experience';
import Section from '../ui/Section';

const Experience = () => {
  if (experienciasAnteriores.length === 0) return null;

  return (
    <Section id="experiencia" spacing="editorial">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-border-light pb-8 dark:border-border-dark md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-text dark:text-light-text">
              Base que levo para tecnologia
            </h3>
            <ul className="mt-4 grid grid-cols-2 border-t border-border-light dark:border-border-dark">
              {trajectorySkills.map((skill, index) => (
                <li
                  key={skill}
                  className="grid min-h-16 grid-cols-[1.75rem_1fr] items-center gap-2 border-b border-border-light py-3 text-sm text-secondary-text dark:border-border-dark dark:text-dark-text odd:pr-3 even:border-l even:pl-3"
                >
                  <span className="font-mono text-[10px] font-semibold text-accent dark:text-accent-light">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-text dark:text-light-text">
              Experiências anteriores
            </h3>
            <div className="mt-4 border-t border-border-light dark:border-border-dark">
              {experienciasAnteriores.map((item, index) => (
                <article
                  key={`${item.role}-${item.org}`}
                  className="grid gap-3 border-b border-border-light py-5 dark:border-border-dark sm:grid-cols-[2.5rem_1fr_auto] sm:gap-5"
                >
                  <span className="font-mono text-xs font-semibold text-accent dark:text-accent-light">
                    {String(index + 1).padStart(2, '0')}
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
