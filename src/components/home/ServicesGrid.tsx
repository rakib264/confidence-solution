import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Hammer,
  Paintbrush,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/data/services";

const icons = {
  Building2,
  Hammer,
  DraftingCompass,
  ClipboardCheck,
  Paintbrush,
  Factory,
};

export function ServicesGrid() {
  return (
    <section className="section-pattern bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-End Development and Construction Expertise"
          subtitle="From feasibility and design to final commissioning, Confidence Solution LTD. provides complete delivery capability across GCC asset classes."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Card key={service.slug} className="group p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
