import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { ArrowRightIcon, DocumentIcon } from '../ui/Icons';

const profileDetails = [
  { label: 'Foco', value: 'Frontend, backend e Full Stack' },
  { label: 'Formação', value: 'ADS · Anhanguera' },
  { label: 'Entrega', value: 'Projetos publicados e em evolução' },
];

const stackItems = ['Next.js', 'TypeScript', 'React', 'Node.js', 'Supabase'];

const Hero = () => {
  return (
    <Section
      id="home"
      spacing="hero"
      className="relative overflow-hidden border-b border-border-light dark:border-border-dark"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.14),transparent_34%),linear-gradient(135deg,rgba(15,118,110,0.06),transparent_48%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_34%),linear-gradient(135deg,rgba(45,212,191,0.07),transparent_48%)]"
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
            <span className="h-px w-10 bg-accent dark:bg-accent-light" aria-hidden="true" />
            Portfólio · Desenvolvimento web
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-primary-text dark:text-light-text sm:text-6xl md:text-7xl lg:text-[4.5rem]">
            Construo aplicações web com clareza, dados e evolução contínua.
          </h1>

          <div className="mt-7 grid gap-5 border-l-2 border-accent pl-5 dark:border-accent-light sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
              Tharcio Santos
            </p>
            <div>
              <h2 className="text-xl font-semibold text-primary-text dark:text-light-text md:text-2xl">
                Desenvolvedor Full Stack Júnior
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
          aria-label="Painel de resumo profissional"
          className="border border-border-light bg-white/75 p-3 shadow-sm backdrop-blur-sm dark:border-border-dark dark:bg-dark-card/75 sm:p-5"
        >
          <div className="flex flex-col gap-3 border-b border-border-light pb-3 dark:border-border-dark sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-4">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent dark:text-accent-light">
                candidate/status
              </p>
              <h2 className="mt-2 text-lg font-bold text-primary-text dark:text-light-text">
                Perfil em resumo
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Disponível
            </span>
          </div>

          <dl className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3">
            {profileDetails.map((item) => (
              <div
                key={item.label}
                className="border border-border-light bg-light-card/80 p-2.5 dark:border-border-dark dark:bg-dark-surface/55 sm:p-3"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-text dark:text-dark-text">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold leading-relaxed text-primary-text dark:text-light-text">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-3 border border-border-light bg-light-surface/70 p-2.5 dark:border-border-dark dark:bg-dark-bg/45 sm:mt-4 sm:p-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-text dark:text-dark-text">
                Stack atual
              </p>
              <span className="font-mono text-[11px] text-accent dark:text-accent-light">
                web/product
              </span>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tecnologias em foco">
              {stackItems.map((item) => (
                <li
                  key={item}
                  className="border border-accent-border bg-accent-subtle px-2.5 py-1 text-xs font-medium text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">
            <div className="border border-border-light p-2.5 dark:border-border-dark sm:p-3">
              <p className="font-mono text-xl font-bold text-accent dark:text-accent-light">05</p>
              <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                projetos com código público
              </p>
            </div>
            <div className="border border-border-light p-2.5 dark:border-border-dark sm:p-3">
              <p className="font-mono text-xl font-bold text-accent dark:text-accent-light">01</p>
              <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                produto principal em produção
              </p>
            </div>
          </div>

          <p className="mt-3 border-l-2 border-accent pl-3 text-sm leading-relaxed text-secondary-text dark:border-accent-light dark:text-dark-text sm:mt-4">
            Interesse em sistemas internos, produtos web e aplicações que organizam processos reais.
          </p>
        </aside>
      </div>
    </Section>
  );
};

export default Hero;
