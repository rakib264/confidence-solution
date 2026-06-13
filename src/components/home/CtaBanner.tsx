import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-black text-neutral-50 md:text-5xl">Ready to Build with Confidence Solution LTD.?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-100 md:text-base">
          Partner with Confidence Solution LTD. for landmark development delivery, institutional governance, and premium outcomes from concept to handover.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-[var(--radius)] bg-background px-5 py-3 text-sm font-semibold text-neutral-900">
            Start Your Development
          </Link>
          <Link href="/projects" className="rounded-[var(--radius)] border border-neutral-100/70 px-5 py-3 text-sm font-semibold text-neutral-50">
            Explore GCC Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
