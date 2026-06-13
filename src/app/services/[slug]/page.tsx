import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/data/services";
import { formatTitle } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: formatTitle("Service Not Found") };
  return {
    title: formatTitle(service.title),
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
        image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">What We Deliver</h2>
          <p className="text-muted-foreground">
            Confidence Solution LTD. tailors this service through a structured delivery model that aligns development strategy, technical coordination, and execution governance. We define measurable outcomes early, track performance transparently, and adapt quickly as project conditions evolve.
          </p>
          <ul className="space-y-3 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
            {service.deliverables.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Link href="/contact" className="inline-flex rounded-[var(--radius)] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Speak with a Delivery Advisor
          </Link>
        </div>
      </section>
    </>
  );
}
