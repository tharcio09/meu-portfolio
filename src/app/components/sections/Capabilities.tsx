import Section from '../ui/Section';
import { capacidades } from '@/data/capabilities';

const Capabilities = () => {
  return (
    <Section
      id="habilidades"
      spacing="compact"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent dark:text-accent-light">O que eu entrego</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-text dark:text-light-text md:text-4xl">
            Aplicações que saem do código e chegam ao usuário.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-dark-text">
            Meu foco é construir features completas: da interface ao banco, com deploy ativo e
            atenção aos detalhes que tornam o projeto utilizável de verdade.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capacidades.map((item) => (
            <article
              key={item.title}
              className="group rounded-xl border border-border-light bg-white p-6 shadow-sm hover:shadow-md hover:border-accent-border hover:-translate-y-1 dark:border-border-dark dark:bg-dark-card dark:hover:border-accent-border-dark"
              style={{
                transitionProperty: 'transform, box-shadow, border-color',
                transitionDuration: '300ms',
                transitionTimingFunction: 'ease',
              }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-subtle text-xl text-accent dark:bg-accent-subtle-dark dark:text-accent-light transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary-text dark:text-light-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Capabilities;
