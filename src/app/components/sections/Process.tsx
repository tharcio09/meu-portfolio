import Section from '../ui/Section';

const processSteps = [
  'Análise do problema',
  'Escopo pequeno',
  'Implementação incremental',
  'Teste manual',
  'Revisão',
  'Commit descritivo',
  'Próximo ciclo',
];

const Process = () => {
  return (
    <Section
      id="processo"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Processo
          </div>
          <h2 className="mt-5 max-w-md text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
            Como eu trabalho
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-text dark:text-dark-text">
            Gosto de entender o problema antes de implementar e evoluir projetos em pequenas
            tarefas. Meu fluxo passa por análise, definição de escopo, implementação incremental,
            teste manual, revisão, commit descritivo e planejamento da próxima melhoria.
          </p>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-3 border border-border-light bg-white/70 p-4 shadow-sm dark:border-border-dark dark:bg-dark-card/70"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-accent-light">
                step/{String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-semibold text-primary-text dark:text-light-text">{step}</p>
              <span
                className="h-2 w-2 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Process;
