import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
