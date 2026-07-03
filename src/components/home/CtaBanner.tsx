import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light text-neutral-50">
          Let&apos;s shape Bangladesh&apos;s next skyline.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-100 md:text-base">
          Schedule a consultation with Confidence Solution LTD. to discuss your
          upcoming residential or corporate development.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-neutral-900"
          >
            Schedule a Visit
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-neutral-100/70 px-6 py-3 text-sm font-semibold text-neutral-50"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
