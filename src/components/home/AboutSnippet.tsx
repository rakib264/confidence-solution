import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSnippet() {
  return (
    <section className="section-pattern bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80"
            alt="Confidence Solution LTD. engineering team on site"
            width={720}
            height={640}
            className="h-[500px] w-full rounded-xl object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute -bottom-5 left-6 rounded-lg bg-primary px-5 py-4 text-primary-foreground shadow-xl">
            <p className="font-mono text-3xl font-bold">30+</p>
            <p className="text-xs uppercase tracking-widest">Years Experience</p>
          </div>
        </div>
        <div className="space-y-6">
          <SectionHeading
            eyebrow="About Confidence Solution LTD."
            title="Premium Real Estate and Construction Leadership"
            subtitle="We combine engineering precision, investment intelligence, and delivery discipline to transform strategic developments across Saudi Arabia and the GCC."
          />
          <p className="text-muted-foreground">
            Confidence Solution LTD. has delivered high-value projects across residential compounds, commercial districts, and institutional assets for decades. Our operating model is built for scale, governance, and predictable execution.
          </p>
          <p className="text-muted-foreground">
            Every project is managed through clear milestones, integrated controls, and transparent reporting. The outcome is stronger investor confidence, faster approvals, and long-term asset performance aligned with Vision 2030 priorities.
          </p>
          <div className="space-y-3">
            {[
              "Landmark projects across the Kingdom and GCC",
              "Trusted by investors, developers, and government bodies",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
              </p>
            ))}
          </div>
          <Link href="/about" className="inline-flex rounded-[var(--radius)] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
