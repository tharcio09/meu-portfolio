import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { ArrowRightIcon, DocumentIcon } from '../ui/Icons';
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
        <div className="stagger-1 animate-fade-up opacity-0 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-text dark:text-dark-text">
          <span className="h-px w-10 bg-accent dark:bg-accent-light" aria-hidden="true" />
          Portfólio · Desenvolvimento web
        </div>

        <div className="mt-7">
          <h1
            className="text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-primary-text dark:text-light-text sm:text-6xl md:text-7xl lg:text-[4.5rem]"
            style={{
              textShadow: '0 0 60px rgba(15,118,110,0.12), 0 0 120px rgba(15,118,110,0.06)',
            }}
          >
            Desenvolvo aplicações web full stack com autenticação, APIs e deploy.
          </h1>
        </div>

        <div className="stagger-3 animate-fade-up opacity-0 mt-7 max-w-2xl">
          <p className="text-base leading-relaxed text-secondary-text dark:text-dark-text md:text-lg">
            Gosto de entender como as pessoas trabalham antes de transformar um problema em
            software. Busco minha primeira oportunidade em estágio ou posição júnior.
          </p>
        </div>

        <div className="stagger-4 animate-fade-up opacity-0 mt-6 flex flex-wrap items-center gap-3">
          {stackItems.map((item) => (
            <span
              key={item}
              className="border border-accent-border bg-accent-subtle px-2.5 py-1 text-xs font-medium text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="stagger-5 animate-fade-up opacity-0 mt-8 flex flex-col gap-3 sm:flex-row">
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
    </Section>
  );
};

export default Hero;
