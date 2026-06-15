import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { ArrowRightIcon, DocumentIcon } from '../ui/Icons';

const profileDetails = [
  { label: 'Foco', value: 'Frontend, backend e fullstack' },
  { label: 'Formação', value: 'ADS · Anhanguera' },
  { label: 'Entrega', value: 'Projetos publicados e em evolução' },
];

const Hero = () => {
  return (
    <Section
      id="home"
      spacing="hero"
      className="relative overflow-hidden border-b border-border-light dark:border-border-dark"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,118,110,0.08),transparent_42%)] dark:bg-[linear-gradient(135deg,rgba(45,212,191,0.07),transparent_42%)]"
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
            <span className="h-px w-10 bg-accent dark:bg-accent-light" aria-hidden="true" />
            Portfólio · Desenvolvimento web
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-primary-text dark:text-light-text sm:text-6xl md:text-7xl lg:text-[5rem]">
            Construo aplicações web com clareza, dados e evolução contínua.
          </h1>

          <div className="mt-7 grid gap-5 border-l-2 border-accent pl-5 dark:border-accent-light sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
              Tharcio Santos
            </p>
            <div>
              <h2 className="text-xl font-semibold text-primary-text dark:text-light-text md:text-2xl">
                Desenvolvedor Fullstack Júnior
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary-text dark:text-dark-text md:text-lg">
                Gosto de entender como as pessoas trabalham antes de transformar um problema em
                software. Hoje construo aplicações com interface, autenticação, banco de dados, APIs
                e deploy, enquanto busco minha primeira oportunidade em estágio ou posição júnior.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projetos" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
              Explorar projetos
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="/curriculo-tharcio-santos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              <DocumentIcon className="h-4 w-4" />
              Baixar currículo
            </a>
          </div>
        </div>

        <aside
          aria-label="Resumo profissional"
          className="border-t-2 border-accent bg-white/65 p-6 shadow-sm backdrop-blur-sm dark:border-accent-light dark:bg-dark-card/70"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
              Perfil em resumo
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Disponível
            </span>
          </div>

          <dl className="mt-6 divide-y divide-border-light border-y border-border-light dark:divide-border-dark dark:border-border-dark">
            {profileDetails.map((item) => (
              <div key={item.label} className="grid grid-cols-[5.5rem_1fr] gap-4 py-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-secondary-text dark:text-dark-text">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium leading-relaxed text-primary-text dark:text-light-text">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
            Interesse em sistemas internos, produtos web e aplicações que organizam processos reais.
          </p>
        </aside>
      </div>
    </Section>
  );
};

export default Hero;
