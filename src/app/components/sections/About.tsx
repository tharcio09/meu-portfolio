import Image from 'next/image';
import Section from '../ui/Section';

const About = () => {
  return (
    <Section
      id="sobre-mim"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-teal-300">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Sobre mim
            </div>

            <div className="mt-6 grid grid-cols-[5.5rem_1fr] gap-5 lg:block">
              <div className="relative aspect-square overflow-hidden border border-border-light bg-light-surface dark:border-border-dark dark:bg-dark-card lg:max-w-56">
                <Image
                  src="/images/profile.png"
                  alt="Foto de Tharcio Santos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 88px, 224px"
                />
              </div>
              <div className="lg:mt-6">
                <p className="text-sm font-semibold text-primary-text dark:text-light-text">
                  Tharcio Santos
                </p>
                <p className="mt-1 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                  Estudante de ADS e desenvolvedor fullstack júnior.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] text-primary-text dark:text-light-text md:text-5xl">
              Projetos práticos, base operacional e vontade de evoluir.
            </h2>

            <div className="mt-7 grid gap-5 text-base leading-relaxed text-secondary-text dark:text-dark-text md:grid-cols-2">
              <p>
                Sou estudante de Análise e Desenvolvimento de Sistemas e venho construindo projetos
                próprios para consolidar fundamentos de frontend, backend, banco de dados,
                autenticação, APIs, deploy e organização de código.
              </p>
              <p>
                Busco uma oportunidade de estágio ou posição júnior em desenvolvimento web, com
                abertura para atuar em frontend, backend ou fullstack.
              </p>
              <p className="md:col-span-2">
                Antes da área de tecnologia, tive experiências em rotinas administrativas e
                manutenção, onde desenvolvi organização, atenção a processos, comunicação entre
                áreas e investigação de problemas. Hoje aplico essa base na construção de sistemas
                web com foco em clareza, estrutura e evolução contínua.
              </p>
            </div>

            <div className="mt-8 grid border-y border-border-light dark:border-border-dark md:grid-cols-[1.25fr_0.75fr] md:divide-x md:divide-border-light dark:md:divide-border-dark">
              <article className="py-6 md:pr-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-teal-300">
                  Formação
                </p>
                <h3 className="mt-3 text-xl font-bold text-primary-text dark:text-light-text">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-secondary-text dark:text-dark-text">
                      Instituição
                    </dt>
                    <dd className="mt-1 font-semibold text-primary-text dark:text-light-text">
                      Anhanguera
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-secondary-text dark:text-dark-text">
                      Status
                    </dt>
                    <dd className="mt-1 font-semibold text-primary-text dark:text-light-text">
                      Cursando
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-secondary-text dark:text-dark-text">
                      Conclusão
                    </dt>
                    <dd className="mt-1 font-semibold text-primary-text dark:text-light-text">
                      Junho de 2027
                    </dd>
                  </div>
                </dl>
              </article>

              <article className="border-t border-border-light py-6 dark:border-border-dark md:border-t-0 md:pl-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-teal-300">
                  Certificação
                </p>
                <h3 className="mt-3 text-xl font-bold text-primary-text dark:text-light-text">
                  NLW Connect
                </h3>
                <p className="mt-1 text-sm text-secondary-text dark:text-dark-text">
                  Rocketseat · Concluído
                </p>
                <a
                  href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline dark:text-teal-300"
                >
                  Ver credencial →
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
