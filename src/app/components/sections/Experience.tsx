import Section from '../ui/Section';

const transferableSkills = [
  {
    title: 'Análise de problemas',
    description:
      'Experiência prévia com diagnóstico, priorização e entendimento da causa antes da solução.',
  },
  {
    title: 'Organização e documentação',
    description:
      'Vivência com registro de informações, relatórios técnicos e acompanhamento de demandas.',
  },
  {
    title: 'Comunicação com equipes',
    description:
      'Contato com áreas operacionais, alinhamento de prazos e clareza na troca de informações.',
  },
];

const Experience = () => {
  return (
    <Section id="experiencia" spacing="compact">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
            Trajetória
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-primary-text dark:text-light-text md:text-4xl">
            Experiências anteriores que fortalecem minha forma de desenvolver.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-gray-300">
            Antes da programação, atuei em funções técnicas e administrativas. Esse contexto
            reforçou habilidades úteis para desenvolvimento: entender o problema, organizar
            informações e comunicar decisões com clareza.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {transferableSkills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-lg border border-gray-200 p-5 dark:border-gray-800"
            >
              <h3 className="font-bold text-primary-text dark:text-light-text">
                {skill.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-text dark:text-gray-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
