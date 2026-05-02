import Section from '../ui/Section';
import { capacidades } from '@/data/capabilities';



const Capabilities = () => {
  return (
    <Section
      id="entregas"
      spacing="compact"
      className="border-b border-gray-200/80 dark:border-gray-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">O que eu entrego</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-primary-text dark:text-light-text md:text-4xl">
            Aplicações que saem do código e chegam ao usuário.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-gray-300">
            Meu foco é construir features completas: da interface ao banco, com deploy ativo e
            atenção aos detalhes que tornam o projeto utilizável.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capacidades.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-zinc-950"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-xl text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary-text dark:text-light-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-gray-400">
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
