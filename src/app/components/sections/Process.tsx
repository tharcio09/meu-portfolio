import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const processSteps = [
  {
    step: 'Entendimento',
    detail: 'Mapeio o problema real, os perfis de usuários e o fluxo operacional antes do código.',
  },
  {
    step: 'Arquitetura',
    detail: 'Modelo entidades, permissões de acesso (RBAC/RLS) e contratos de API seguros.',
  },
  {
    step: 'Construção',
    detail: 'Desenvolvo a interface e a lógica de negócio com TypeScript e componentes limpos.',
  },
  {
    step: 'Qualidade & Entrega',
    detail: 'Aplico testes automatizados, validação de acessibilidade e deploy contínuo.',
  },
];

const Process = () => {
  return (
    <Section
      id="processo"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 border-b border-border-light pb-6 dark:border-border-dark md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Método
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-4xl">
              Como eu trabalho
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-secondary-text dark:text-dark-text md:justify-self-end">
            Organizo o desenvolvimento em etapas pequenas e previsíveis, do entendimento do problema
            à entrega com testes e deploy.
          </p>
        </div>

        <RevealOnScroll as="ol" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className={cn(
                'flex flex-col justify-between border border-border-light bg-white/60 p-4 shadow-sm transition-all duration-200 hover:border-accent/50 dark:border-border-dark dark:bg-dark-card/60'
              )}
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-light pb-2 text-xs dark:border-border-dark">
                  <span className="font-mono font-bold text-accent dark:text-accent-light">
                    0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text dark:text-dark-text">
                    Fase
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-primary-text dark:text-light-text">
                  {item.step}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </RevealOnScroll>
      </div>
    </Section>
  );
};

export default Process;
