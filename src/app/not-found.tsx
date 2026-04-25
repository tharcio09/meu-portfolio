import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-primary-text dark:text-light-text">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-primary-text dark:text-light-text">
        Página não encontrada
      </h2>
      <p className="mt-2 max-w-md text-secondary-text dark:text-gray-400">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-primary-text px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg dark:hover:bg-gray-200"
      >
        Voltar para a home
      </Link>
    </div>
  );
}
