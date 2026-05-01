'use client';

import { useEffect } from 'react';

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Aqui você poderia logar o erro para um serviço como Sentry
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                Algo deu errado
            </p>
            <h1 className="text-4xl font-bold text-primary-text dark:text-light-text">
                Erro inesperado
            </h1>
            <p className="max-w-md text-center text-secondary-text dark:text-gray-400">
                Ocorreu um problema ao carregar esta página. Tente novamente.
            </p>
            <button
                onClick={reset}
                className="rounded-md bg-primary-text px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg"
            >
                Tentar novamente
            </button>
        </div>
    );
}