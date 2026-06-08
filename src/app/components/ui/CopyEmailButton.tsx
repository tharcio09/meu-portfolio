'use client';

import { useState } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { EMAIL } from '@/data/constants';
import { CheckIcon, CopyIcon } from './Icons';

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Button
      onClick={handleCopyEmail}
      aria-label={copied ? 'Email copiado' : 'Copiar email'}
      variant="outline"
      size="sm"
      className={cn(
        'h-8 px-3 text-xs gap-1.5',
        copied &&
          'border-green-300 bg-green-50 text-green-700 hover:border-green-300 hover:bg-green-50 hover:text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400'
      )}
    >
      {copied ? (
        <>
          <CheckIcon className="h-3.5 w-3.5" />
          Copiado
        </>
      ) : (
        <>
          <CopyIcon className="h-3.5 w-3.5" />
          Copiar
        </>
      )}
    </Button>
  );
};
