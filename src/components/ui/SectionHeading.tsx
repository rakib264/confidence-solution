import { SectionHeadingProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className={cn("max-w-2xl text-sm text-muted-foreground md:text-base", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
