'use client';

import { useCountUp } from '@/app/hooks/useCountUp';

const Counter = ({ target, label }: { target: number; label: string }) => {
  const { ref, count } = useCountUp(target);
  return (
    <div ref={ref} className="border border-border-light p-2.5 dark:border-border-dark sm:p-3">
      <p className="font-mono text-xl font-bold text-accent dark:text-accent-light">
        {String(count).padStart(2, '0')}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
        {label}
      </p>
    </div>
  );
};

export default Counter;
