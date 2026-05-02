import Image from 'next/image';
import Section from '../ui/Section';
import { LuAward, LuGraduationCap } from 'react-icons/lu';
import { skills } from '@/data/about';

const About = () => {
  return (
    <Section id="sobre-mim" spacing="compact">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:items-start">
        <div>
          <div className="relative aspect-square max-w-64 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900">
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
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Sobre</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-primary-text dark:text-light-text md:text-4xl">
            Desenvolvedor em formação, com foco em produto funcional.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary-text dark:text-gray-300">
            <p>
              Venho construindo aplicações web completas para praticar o ciclo real de
              desenvolvimento: interface, regra de negócio, autenticação, banco de dados e
              publicação em produção.
            </p>
            <p>
              Meus projetos mostram experiência prática com CRUD, APIs, PWA, testes, responsividade
              e integrações modernas usando React, Next.js, TypeScript, Prisma e Supabase.
            </p>
            <p>
              Busco contribuir em times que valorizem organização, aprendizado contínuo e entrega
              consistente. Gosto de entender o problema antes de escrever código e transformar isso
              em interfaces claras.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-normal text-primary-text dark:text-light-text">
              Stack e ferramentas
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-medium ${skill.featured
                    ? 'border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950/30 dark:text-cyan-300'
                    : 'border-gray-200 text-secondary-text dark:border-gray-800 dark:text-gray-400'
                    }`}
                >
                  <span className="text-sm">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
              <LuGraduationCap className="text-xl text-cyan-700 dark:text-cyan-300" />
              <h4 className="mt-3 font-bold text-primary-text dark:text-light-text">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <p className="mt-1 text-sm text-secondary-text dark:text-gray-400">
                Anhanguera · Em andamento
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
              <LuAward className="text-xl text-cyan-700 dark:text-cyan-300" />
              <h4 className="mt-3 font-bold text-primary-text dark:text-light-text">NLW Connect</h4>
              <p className="mt-1 text-sm text-secondary-text dark:text-gray-400">
                Rocketseat · Concluído
              </p>
              <a
                href="https://app.rocketseat.com.br/certificates/861a62ff-782a-4bec-9f04-df3def1002cb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
              >
                Ver credencial
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
