import Section from '../ui/Section';

type PreviousRole = {
  period: string;
  role: string;
  org: string;
  summary: string;
};

const previousRoles: PreviousRole[] = [
  {
    period: "Mai/2023 – Out/2023",
    role: "Auxiliar Administrativo",
    org: "EPOS",
    summary:
      "Organização de demandas internas e documentação de processos operacionais.",
  },
  {
    period: "Jan/2022 – Mai/2022",
    role: "Auxiliar Mecânico",
    org: "Komaq",
    summary:
      "Diagnóstico técnico de equipamentos com foco em análise de causa raiz.",
  },
];

const Experience = () => {
  if (previousRoles.length === 0) return null;

  return (
    <Section id="experiencia" spacing="compact">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
            Trajetória
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-primary-text dark:text-light-text md:text-4xl">
            De onde vim.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-gray-300">
            Antes da programação, atuei em outras áreas. Estou em transição de carreira
            e buscando evoluir em desenvolvimento web — os projetos apresentados mostram
            o que venho construindo nesse caminho.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {previousRoles.map((item) => (
            <article
              key={item.role}
              className="flex flex-col gap-1 rounded-lg border border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800"
            >
              <div>
                <h3 className="font-semibold text-primary-text dark:text-light-text">
                  {item.role}
                  <span className="ml-2 font-normal text-cyan-700 dark:text-cyan-400">
                    · {item.org}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-secondary-text dark:text-gray-400">
                  {item.summary}
                </p>
              </div>
              <span className="shrink-0 text-xs tabular-nums text-secondary-text dark:text-gray-500">
                {item.period}
              </span>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
