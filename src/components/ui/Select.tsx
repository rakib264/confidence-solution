import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-xl border border-input bg-white/80 px-3.5 text-sm text-foreground shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] transition-all focus:border-primary/60 focus:bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
