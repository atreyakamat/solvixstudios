import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 text-sm text-[var(--foreground)] placeholder:text-zinc-500 outline-none transition-all focus-visible:ring-2 focus-visible:ring-purple-400/60 focus-visible:border-purple-500/50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
