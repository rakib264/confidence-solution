import { GsapCounter } from "@/components/ui/GsapCounter";
import { companyStats } from "@/lib/data/company";

export function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-[#090e16] py-[4.5rem] text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(49,84,155,0.22),rgba(17,24,39,0.9),rgba(14,98,120,0.22))] opacity-90 [background-size:180%_180%] [@keyframes_slowShift{0%{background-position:0%_50%}50%{background-position:100%_50%}100%{background-position:0%_50%}}] animate-[slowShift_18s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {companyStats.map((item) => (
            <article key={item.label} className="text-center">
              <p className="font-display text-[clamp(3rem,7vw,5rem)] font-medium leading-none text-highlight">
                <GsapCounter end={item.value} suffix={item.suffix} duration={2.5} />
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
