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
        "min-h-32 w-full rounded-xl border border-input bg-white/80 px-3.5 py-2.5 text-sm text-foreground shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] transition-all focus:border-primary/60 focus:bg-white placeholder:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
});
