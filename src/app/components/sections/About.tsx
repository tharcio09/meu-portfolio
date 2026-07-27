import Image from 'next/image';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import Section from '../ui/Section';

const About = () => {
  return (
    <Section id="sobre-mim" spacing="editorial" className="">
      <RevealOnScroll className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <div className="mt-6 border border-border-light bg-white p-3 shadow-sm dark:border-border-dark dark:bg-dark-card lg:max-w-64 lg:p-4">
              <div className="flex items-center justify-between gap-3 border-b border-border-light pb-3 dark:border-border-dark">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                  Perfil
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  Disponível
                </span>
              </div>

              <div className="mt-3 grid grid-cols-[5.5rem_1fr] gap-4 lg:block">
                <div className="relative aspect-square overflow-hidden border border-border-light bg-light-surface dark:border-border-dark dark:bg-dark-card">
                  <Image
                    src="/images/profile.webp"
                    alt="Foto de Tharcio Santos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 88px, 224px"
                  />
                </div>
                <div className="border-l-2 border-accent pl-3 dark:border-accent-light lg:mt-4">
                  <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                    Tharcio Santos
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                    Desenvolvedor Full Stack em formação, com projetos publicados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Sobre mim
            </h2>

            <div className="mt-7 text-base leading-relaxed text-secondary-text dark:text-dark-text">
              <p>
                Curso Análise e Desenvolvimento de Sistemas na Anhanguera, com conclusão prevista
                para julho de 2027. Em projetos próprios, aplico frontend, backend, bancos de dados,
                autenticação e deploy.
              </p>
            </div>

            <div className="mt-8">
              <article className="border border-border-light bg-white p-4 dark:border-border-dark dark:bg-dark-card md:p-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-accent-light">
                  Formação
                </p>
                <h3 className="mt-3 text-xl font-bold text-primary-text dark:text-light-text">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-secondary-text dark:text-dark-text">
                      Instituição
                    </dt>
                    <dd className="mt-1 font-semibold text-primary-text dark:text-light-text">
                      Anhanguera
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-secondary-text dark:text-dark-text">
                      Status
                    </dt>
                    <dd className="mt-1 font-semibold text-primary-text dark:text-light-text">
                      Cursando
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-secondary-text dark:text-dark-text">
                      Conclusão
                    </dt>
                    <dd className="mt-1 font-semibold text-primary-text dark:text-light-text">
                      Julho de 2027
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
};

export default About;
