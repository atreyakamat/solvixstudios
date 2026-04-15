import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:opacity-95",
        secondary:
          "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        ghost: "text-zinc-300 hover:text-white hover:bg-white/10",
      },
      size: {
        default: "h-11 px-5 py-2",
        lg: "h-12 px-6 text-base",
        sm: "h-9 rounded-lg px-3",
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
