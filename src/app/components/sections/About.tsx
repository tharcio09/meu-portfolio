import Image from 'next/image';
import Section from '../ui/Section';

const About = () => {
  return (
    <Section id="sobre-mim" spacing="compact">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:items-start">
        <div>
          <div className="relative aspect-square max-w-64 overflow-hidden rounded-xl border border-border-light bg-light-surface shadow-sm dark:border-border-dark dark:bg-dark-card">
            <Image
              src="/images/profile.png"
              alt="Foto de Tharcio Santos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-accent dark:text-accent-light">Sobre</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-text dark:text-light-text md:text-4xl">
            Evolução prática através de projetos publicados.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary-text dark:text-dark-text">
            <p>
              Venho desenvolvendo projetos próprios para praticar o ciclo completo de uma aplicação
              web: entender o problema, construir a interface, integrar dados, implementar
              autenticação quando necessário e publicar em produção.
            </p>
            <p>
              Minha experiência anterior em ambientes operacionais reforçou uma forma de trabalho
              que levo para o desenvolvimento: observar o contexto, organizar informações,
              diagnosticar causas e comunicar decisões com clareza.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border-light p-5 dark:border-border-dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Formação
              </p>
              <h4 className="mt-3 font-bold text-primary-text dark:text-light-text">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <p className="mt-1 text-sm text-secondary-text dark:text-dark-text">
                Anhanguera · Em andamento
              </p>
            </div>
            <div className="rounded-lg border border-border-light p-5 dark:border-border-dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Certificação
              </p>
              <h4 className="mt-3 font-bold text-primary-text dark:text-light-text">NLW Connect</h4>
              <p className="mt-1 text-sm text-secondary-text dark:text-dark-text">
                Rocketseat · Concluído
              </p>
              <a
                href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-accent hover:underline dark:text-accent-light"
              >
                Ver credencial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
