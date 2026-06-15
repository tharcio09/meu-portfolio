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
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-teal-300">
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

        <ol className="grid border-t border-border-light dark:border-border-dark sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="grid min-h-20 grid-cols-[2.5rem_1fr] items-center gap-3 border-b border-border-light py-5 dark:border-border-dark sm:px-5 sm:odd:border-r"
            >
              <span className="font-mono text-xs font-semibold text-accent dark:text-teal-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-semibold text-primary-text dark:text-light-text">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Process;
