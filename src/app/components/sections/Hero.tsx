import { buttonVariants } from '../ui/Button';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/data/constants';
import { cn } from '@/lib/utils';
import { Pill } from '../ui/Pill';
import Section from '../ui/Section';
import { ArrowRightIcon, DocumentIcon, GithubIcon, LinkedinIcon } from '../ui/Icons';
import { HeroParallaxBackground } from '../ui/HeroParallaxBackground';

const stackItems = ['Next.js', 'TypeScript', 'React', 'Node.js', 'Supabase'];

const Hero = () => {
  return (
    <Section
      id="home"
      spacing="hero"
      className="relative overflow-hidden border-b border-border-light dark:border-border-dark"
    >
      <HeroParallaxBackground />

      <div className="mx-auto max-w-4xl">
        <div className="stagger-1 animate-fade-up opacity-0 mb-6 inline-flex items-center gap-2 border border-emerald-300 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Disponível para Estágio / Júnior · Full Stack</span>
        </div>

        <div className="stagger-1 animate-fade-up opacity-0 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
          <span className="h-px w-10 bg-accent dark:bg-accent-light" aria-hidden="true" />
          Desenvolvedor Full Stack · Sistemas, APIs e Bancos de Dados
        </div>

        <div className="mt-7">
          <h1
            className="text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-primary-text dark:text-light-text sm:text-6xl md:text-7xl lg:text-[4.5rem]"
            style={{
              textShadow: '0 0 60px rgba(15,118,110,0.12), 0 0 120px rgba(15,118,110,0.06)',
            }}
          >
            Desenvolvo sistemas completos, da interface aos dados.
          </h1>
        </div>

        <div className="stagger-3 animate-fade-up opacity-0 mt-7 max-w-2xl">
          <p className="text-base leading-relaxed text-secondary-text dark:text-dark-text md:text-lg">
            Com projetos publicados e experiência técnica autônoma, construo aplicações web focadas
            em usabilidade, controle de acesso seguro e cobertura consistente de testes.
          </p>
        </div>

        <div className="stagger-4 animate-fade-up opacity-0 mt-6 flex flex-wrap items-center gap-3">
          {stackItems.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>

        <div className="stagger-5 animate-fade-up opacity-0 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projetos"
            className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group shadow-md')}
          >
            Explorar projetos
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'group')}
          >
            <DocumentIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5" />
            Baixar currículo
          </a>

          <div className="flex items-center gap-2 sm:ml-1">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Tharcio Santos"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'h-11 w-11 border-border-light bg-white hover:border-accent hover:text-accent dark:border-border-dark dark:bg-dark-card dark:hover:border-accent-light dark:hover:text-accent-light'
              )}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Tharcio Santos"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'h-11 w-11 border-border-light bg-white hover:border-accent hover:text-accent dark:border-border-dark dark:bg-dark-card dark:hover:border-accent-light dark:hover:text-accent-light'
              )}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Faixa de Métricas Rápidas */}
        <div className="stagger-6 animate-fade-up opacity-0 mt-12 grid grid-cols-1 gap-3 border-t border-border-light pt-8 dark:border-border-dark sm:grid-cols-3 sm:gap-4">
          <div className="border border-border-light bg-white/70 p-3.5 shadow-sm dark:border-border-dark dark:bg-dark-card/70">
            <span className="font-mono text-xl font-bold tracking-tight text-primary-text dark:text-light-text sm:text-2xl">
              2 Sistemas
            </span>
            <p className="mt-1 text-xs text-secondary-text dark:text-dark-text">
              Full stack em produção com simulador interativo
            </p>
          </div>

          <div className="border border-border-light bg-white/70 p-3.5 shadow-sm dark:border-border-dark dark:bg-dark-card/70">
            <span className="font-mono text-xl font-bold tracking-tight text-accent dark:text-accent-light sm:text-2xl">
              220+ Testes
            </span>
            <p className="mt-1 text-xs text-secondary-text dark:text-dark-text">
              Automatizados cobrindo fluxos críticos e APIs
            </p>
          </div>

          <div className="border border-border-light bg-white/70 p-3.5 shadow-sm dark:border-border-dark dark:bg-dark-card/70">
            <span className="font-mono text-xl font-bold tracking-tight text-primary-text dark:text-light-text sm:text-2xl">
              Segurança
            </span>
            <p className="mt-1 text-xs text-secondary-text dark:text-dark-text">
              Isolamento em camadas (RBAC e Supabase RLS)
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
