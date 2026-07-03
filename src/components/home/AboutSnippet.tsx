import Image from "next/image";
import Link from "next/link";
import { RevealTitle } from "@/components/ui/RevealTitle";
import { MotionCounter } from "@/components/ui/MotionCounter";
import { companyStats } from "@/lib/data/company";

export function AboutSnippet() {
  return (
    <section className="section-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 top-8 z-10 h-36 w-36 rounded-full border border-primary/30" />
            <div className="absolute -bottom-7 right-6 z-10 rounded-full border border-white/55 bg-black/45 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
              West Dhanmondi
            </div>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80"
              alt="Premium high-rise living by Confidence Solution LTD."
              width={900}
              height={980}
              className="h-[500px] w-full rounded-2xl object-cover shadow-[0_28px_70px_rgba(0,0,0,0.22)] lg:h-[620px]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>

          <div className="space-y-6">
            <p className="label-caps text-primary">About Confidence Solution LTD.</p>
            <RevealTitle
              text="Building iconic addresses for Bangladesh's next generation"
              className="text-[clamp(2.2rem,5vw,4rem)] font-medium text-foreground"
            />
            <p className="text-base leading-8 text-muted-foreground">
              Confidence Solution LTD. is a Dhanmondi-based real estate developer
              focused on quality residential buildings in Dhaka.
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              Our flagship project, Manab Noor at 195 West Dhanmondi Modubazar,
              delivers 16 flats across 7 floors on a 6 katha plot — completed
              in 2018.
            </p>
            <blockquote className="border-l-2 border-primary/70 pl-4 font-display text-2xl italic text-foreground/80">
              &quot;Every skyline deserves timeless design, uncompromising quality,
              and homes that inspire generations.&quot;
            </blockquote>
            <Link
              href="/about"
              className="group relative inline-flex pb-1 text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              Our Story
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 bg-white px-5 py-8 shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((item) => (
              <article key={item.label} className="text-center sm:text-left">
                <p className="font-display text-5xl font-light text-foreground">
                  <MotionCounter end={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
