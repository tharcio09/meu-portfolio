import { capabilities } from '@/data/capabilities';
import Section from '../ui/Section';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const Capabilities = () => {
  return (
    <Section id="habilidades" spacing="editorial" className="">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end md:pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Competências
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text sm:text-4xl md:text-5xl">
              Stack e competências
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end md:text-lg">
            Tecnologias apresentadas pelo contexto em que são usadas: da construção da interface à
            persistência de dados, validação e entrega do produto.
          </p>
        </div>

        <RevealOnScroll className="grid gap-4 pt-6 md:grid-cols-2 md:pt-8 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="flex min-h-full flex-col border border-border-light bg-white p-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-border hover:shadow-xl dark:border-border-dark dark:bg-dark-card dark:hover:border-accent-border-dark sm:p-4 md:p-5"
            >
              <h3 className="text-lg font-bold tracking-tight text-primary-text dark:text-light-text sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                {item.description}
              </p>

              <div className="mt-4">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-secondary-text dark:text-dark-text">
                  Tecnologias
                </h4>
                <ul
                  className="mt-2 flex flex-wrap gap-1.5"
                  aria-label={`Tecnologias de ${item.title}`}
                >
                  {item.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-accent-border bg-accent-subtle px-2 py-0.5 text-xs font-medium text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              {item.usedIn.length > 0 && (
                <div className="mt-auto pt-4">
                  <p className="text-xs text-secondary-text dark:text-dark-text">
                    {item.usedIn.join(' · ')}
                  </p>
                </div>
              )}
            </article>
          ))}
        </RevealOnScroll>
      </div>
    </Section>
  );
};

export default Capabilities;
