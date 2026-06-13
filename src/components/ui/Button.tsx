"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  icon?: ReactNode;
  loading?: boolean;
};

export function Button({
  className,
  variant = "primary",
  children,
  icon,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-95";
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-md hover:shadow-xl hover:scale-[1.01]",
    outline:
      "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : icon}
      {children}
    </button>
  );
}
