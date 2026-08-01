import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-primary-soft)]",
        secondary:
          "bg-[var(--color-surface)] text-[var(--color-fg)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]",
        ghost: "text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)]",
        gold: "bg-[var(--color-gold)] text-[var(--color-bg)] hover:bg-[var(--color-gold-soft)]",
        outline:
          "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-fg)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-[var(--radius-sm)] px-3",
        lg: "h-12 rounded-[var(--radius-lg)] px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  ),
);
Button.displayName = "Button";
