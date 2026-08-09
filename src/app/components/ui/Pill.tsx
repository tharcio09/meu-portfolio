import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const pillVariants = cva('inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium', {
  variants: {
    variant: {
      accent:
        'border border-accent-border bg-accent-subtle text-accent dark:border-accent-border-dark dark:bg-accent-subtle-dark dark:text-accent-light',
      muted:
        'border border-border-light text-secondary-text dark:border-border-dark dark:text-dark-text',
    },
    size: {
      sm: 'px-2 py-0.5',
      md: 'px-2.5 py-1',
    },
  },
  defaultVariants: {
    variant: 'accent',
    size: 'md',
  },
});

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <span ref={ref} className={cn(pillVariants({ variant, size, className }))} {...props} />;
  }
);
Pill.displayName = 'Pill';

export { Pill, pillVariants };
