import Link from 'next/link';
import { buttonVariants } from './components/ui/Button';
import { cn } from '@/lib/utils';
import Section from './components/ui/Section';

export default function NotFound() {
  return (
    <Section id="not-found" spacing="editorial">
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold text-primary-text dark:text-light-text">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-primary-text dark:text-light-text">
          Página não encontrada
        </h2>
        <p className="mt-2 max-w-md text-secondary-text dark:text-dark-text">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-6')}>
          Voltar para a home
        </Link>
      </div>
    </Section>
  );
}
