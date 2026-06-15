const evidenceItems = [
  { index: '01', title: 'Projetos publicados', detail: 'Código público e aplicações disponíveis' },
  { index: '02', title: 'Fluxos completos', detail: 'Autenticação, CRUD e banco relacional' },
  { index: '03', title: 'Integrações reais', detail: 'APIs, persistência e estados de interface' },
  { index: '04', title: 'Entrega contínua', detail: 'Testes, deploy e evolução incremental' },
];

const EvidenceStrip = () => {
  return (
    <section
      aria-labelledby="evidencias-title"
      className="border-b border-border-light px-6 dark:border-border-dark"
    >
      <h2 id="evidencias-title" className="sr-only">
        Evidências técnicas
      </h2>
      <dl className="mx-auto grid max-w-6xl divide-y divide-border-light dark:divide-border-dark sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
        {evidenceItems.map((item) => (
          <div
            key={item.index}
            className="grid grid-cols-[2rem_1fr] gap-3 py-4 sm:px-5 first:pl-0 last:pr-0"
          >
            <dt className="text-xs font-semibold text-accent dark:text-accent-light">
              {item.index}
            </dt>
            <dd>
              <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                {item.detail}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default EvidenceStrip;
