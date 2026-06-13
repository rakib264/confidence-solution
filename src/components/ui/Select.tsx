import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-[var(--radius)] border border-input bg-input/30 px-3 text-sm text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
