import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-black tracking-wide transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-purple-500 to-blue-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] skeuo hover:-translate-y-1 active:skeuo-inset active:translate-y-0",
        secondary:
          "border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--foreground)] skeuo hover:-translate-y-1 hover:border-purple-500/30 active:skeuo-inset active:translate-y-0",
        ghost: "text-zinc-500 hover:text-[var(--foreground)] hover:bg-[var(--glass-border)] active:scale-95",
      },
      size: {
        default: "h-12 px-6 py-2",
        lg: "h-14 px-8 text-base",
        sm: "h-10 rounded-xl px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
