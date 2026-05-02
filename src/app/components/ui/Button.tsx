import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-dark-bg',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-text text-white hover:bg-slate-700 dark:bg-light-text dark:text-dark-bg dark:hover:bg-gray-200 shadow-sm',
        outline:
          'border border-gray-300 bg-transparent text-primary-text hover:border-cyan-600 hover:text-cyan-700 dark:border-gray-700 dark:text-light-text dark:hover:border-cyan-300 dark:hover:text-cyan-300 shadow-sm',
        ghost:
          'text-secondary-text hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-light-text',
      },
      size: {
        default: 'h-10 px-4 py-2.5',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-5 py-3',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
