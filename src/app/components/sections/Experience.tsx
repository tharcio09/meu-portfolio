import Section from '../ui/Section';
import { experienciasAnteriores } from '@/data/experience';

const Experience = () => {
  if (experienciasAnteriores.length === 0) return null;

  return (
    <Section id="experiencia" spacing="compact">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent dark:text-accent-light">Trajetória</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-text dark:text-light-text md:text-4xl">
            Experiência aplicada ao desenvolvimento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-dark-text">
            Antes da programação, atuei em funções operacionais e administrativas que exigiam
            organização, manutenção de processos, diagnóstico de problemas e comunicação com
            diferentes pessoas. Hoje aplico essas habilidades ao desenvolvimento: entender o
            cenário, investigar causas, registrar decisões e construir soluções com clareza.
          </p>
        </div>

        {/* Timeline vertical compacta */}
        <div className="mt-8 relative">
          {/* Linha vertical */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px bg-border-light dark:bg-border-dark"
            aria-hidden="true"
          />

          <div className="space-y-6 pl-10">
            {experienciasAnteriores.map((item) => (
              <article key={item.role} className="relative">
                {/* Ponto na timeline */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-white dark:bg-dark-bg"
                />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="font-semibold text-primary-text dark:text-light-text">
                    {item.role}
                    <span className="ml-2 font-normal text-accent dark:text-accent-light">
                      · {item.org}
                    </span>
                  </h3>
                  <span className="shrink-0 text-xs tabular-nums text-secondary-text dark:text-dark-text">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
