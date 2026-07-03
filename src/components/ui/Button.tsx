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
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]";
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_16px_36px_-18px_var(--primary)] hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_var(--primary)]",
    outline:
      "border border-primary/60 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
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
