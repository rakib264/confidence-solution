import { SectionHeadingProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      <p
        className={cn(
          isDark ? "label-caps-on-dark" : "label-caps text-primary",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-tight",
          isDark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-sm leading-7 md:text-base",
            isDark ? "text-white/70" : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
