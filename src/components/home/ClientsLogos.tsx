import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";

export function ClientsLogos() {
  return (
    <section className="section-pattern bg-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Trusted Across the GCC" title="Partners Who Develop With Confidence Solution LTD." align="center" />
        <div className="mt-10 overflow-hidden">
          <div className="flex min-w-max animate-[marquee_24s_linear_infinite] gap-4 [@keyframes_marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}]">
            {[...clients, ...clients].map((client, i) => (
              <div key={`${client.name}-${i}`} className="grid h-20 w-44 place-items-center rounded-lg border border-border bg-card text-xl font-black text-primary">
                {client.logoText}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
