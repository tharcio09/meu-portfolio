import { capabilities } from '@/data/capabilities';
import Section from '../ui/Section';

const Capabilities = () => {
  return (
    <Section
      id="habilidades"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end md:pb-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Competências
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Habilidades aplicadas
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end md:text-lg">
            Tecnologias apresentadas pelo contexto em que são usadas: da construção da interface à
            persistência de dados, validação e entrega do produto.
          </p>
        </div>

        <div className="grid divide-y divide-border-light border-b border-border-light dark:divide-border-dark dark:border-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="py-5 md:py-6 lg:px-7 lg:py-7 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs font-semibold text-accent dark:text-accent-light">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-text dark:text-dark-text">
                  Contexto de uso
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-primary-text dark:text-light-text md:mt-5">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text md:mt-3 lg:min-h-24">
                {item.description}
              </p>

              <div className="mt-4 md:mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-text dark:text-light-text">
                  Tecnologias
                </h4>
                <ul
                  className="mt-2 flex flex-wrap gap-1.5 md:mt-3 md:gap-2"
                  aria-label={`Tecnologias de ${item.title}`}
                >
                  {item.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-border-light px-2.5 py-1 text-xs font-medium text-secondary-text dark:border-border-dark dark:text-dark-text"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 border-t border-border-light pt-3 dark:border-border-dark md:mt-6 md:pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-text dark:text-light-text">
                  Usado em
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.usedIn.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Capabilities;
