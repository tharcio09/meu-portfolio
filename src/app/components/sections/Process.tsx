import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const processSteps = [
  {
    step: 'Entendimento',
    detail: 'Defino o problema, os usuários e o fluxo principal antes das decisões técnicas.',
  },
  {
    step: 'Planejamento',
    detail: 'Divido o trabalho em entregas menores e organizo dados, regras e responsabilidades.',
  },
  {
    step: 'Implementação',
    detail: 'Construo interface, regras de negócio e persistência de forma incremental.',
  },
  {
    step: 'Validação',
    detail: 'Verifico fluxos, estados de carregamento e erro, responsividade e acessibilidade.',
  },
  {
    step: 'Qualidade',
    detail: 'Executo testes, TypeScript, lint e revisão do diff antes de consolidar a entrega.',
  },
  {
    step: 'Entrega e evolução',
    detail: 'Publico a aplicação, valido o ambiente e registro os próximos passos do produto.',
  },
];

const Process = () => {
  return (
    <Section id="processo" spacing="editorial" className="">
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
            Organizo o desenvolvimento em etapas pequenas, do entendimento do problema à entrega.
            Cada etapa reduz incertezas e mantém o projeto funcional, testável e pronto para
            evoluir.
          </p>
        </div>

        <RevealOnScroll as="ol" className="grid gap-4 sm:grid-cols-2 relative">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className={cn(
                'group relative flex flex-col justify-between border-l-2 border-accent bg-white/70 p-4 shadow-sm transition-all duration-300 ease-out dark:border-accent-light dark:bg-dark-card/70 sm:p-5',
                'hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:hover:bg-dark-card',
                'border-t border-r border-b border-border-light dark:border-border-dark',
                index === processSteps.length - 1 &&
                  processSteps.length % 2 !== 0 &&
                  'sm:col-span-2'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-border-light pb-2.5 dark:border-border-dark">
                  <span className="inline-flex items-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                    Passo {index + 1}
                  </span>
                  <span className="font-mono text-xs font-semibold text-secondary-text/60 dark:text-dark-text/60">
                    0{index + 1} / 06
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-primary-text dark:text-light-text">
                  {item.step}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
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
