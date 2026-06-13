import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-[var(--radius)] border border-input bg-input/30 px-3 text-sm text-foreground placeholder:text-muted-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);
