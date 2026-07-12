'use client';

import { type ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

type FilterKind = 'all' | 'featured' | 'secondary';

const filters: { kind: FilterKind; label: string }[] = [
  { kind: 'all', label: 'Todos' },
  { kind: 'featured', label: 'Destaque' },
  { kind: 'secondary', label: 'Outros projetos' },
];

type ProjectsFilterProps = {
  featuredContent: ReactNode;
  secondaryContent: ReactNode;
};

export function ProjectsFilter({ featuredContent, secondaryContent }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKind>('all');

  const showFeatured = activeFilter === 'all' || activeFilter === 'featured';
  const showSecondary = activeFilter === 'all' || activeFilter === 'secondary';

  return (
    <>
      <div className="flex flex-wrap gap-2 pt-6 md:pt-8">
        {filters.map(({ kind, label }) => (
          <button
            key={kind}
            onClick={() => setActiveFilter(kind)}
            className={cn(
              'border px-3 py-1.5 text-xs font-semibold transition-all duration-200',
              activeFilter === kind
                ? 'border-accent bg-accent text-white shadow-sm dark:border-accent-light dark:bg-accent-light dark:text-dark-bg'
                : 'border-border-light bg-transparent text-secondary-text hover:border-accent hover:text-accent dark:border-border-dark dark:text-dark-text dark:hover:border-accent-light dark:hover:text-accent-light'
            )}
            aria-pressed={activeFilter === kind}
          >
            {label}
          </button>
        ))}
      </div>

      {showFeatured && featuredContent}
      {showSecondary && secondaryContent}
    </>
  );
}
