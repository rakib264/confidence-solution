import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "light" | "dark";
};

export function Badge({
  className,
  variant = "light",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest",
        variant === "dark"
          ? "border border-white/25 bg-white/10 text-white/90"
          : "bg-primary/10 text-primary",
        className,
      )}
      {...props}
    />
  );
}
