import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full rounded-[var(--radius)] border border-input bg-input/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
});
