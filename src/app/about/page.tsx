import type { Metadata } from "next";
import { Award, Gem, Lightbulb } from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StatsBar } from "@/components/home/StatsBar";
import { TeamSection } from "@/components/home/TeamSection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { formatTitle } from "@/lib/utils";
import manab1 from "@/assets/manab-noor/manab-1.jpeg";

export const metadata: Metadata = {
  title: formatTitle("About Us"),
  description:
    "Learn about Confidence Solution LTD. and our residential projects Manab Noor and Shah Residence.",
};

const timeline = [
  {
    year: "2022",
    text: "Confidence Solution LTD. began operations as a residential real estate developer.",
  },
  {
    year: "2024",
    text: "Expanded project delivery with a strong focus on quality and planned handovers.",
  },
  {
    year: "2026",
    text: "Now serving residents with 8 years of continuous development experience since 2018.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Confidence Solution LTD."
        subtitle="Building Tomorrow's Skyline, Today through premium design, disciplined execution, and lasting trust."
        image={manab1}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Company Story"
              title="A Real Estate Developer Building Quality Homes"
              subtitle="Design excellence, engineering discipline, and dependable project governance."
            />
            <p className="leading-relaxed text-muted-foreground">
              Confidence Solution LTD. is a real estate developer focused on
              thoughtfully planned residential buildings.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Since 2018, we have been delivering residential projects with a
              focus on construction quality, disciplined execution, and trusted
              handover standards.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Gem, title: "Integrity", text: "We do what we commit to." },
              { icon: Lightbulb, title: "Innovation", text: "We solve complexity with systems." },
              { icon: Award, title: "Excellence", text: "We chase precision in every detail." },
            ].map((item) => (
              <Card key={item.title} className="p-5">
                <item.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <TeamSection />

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Milestones" title="Our Journey" align="center" />
          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid items-start gap-4 md:grid-cols-[120px_1fr]"
              >
                <p className="font-display text-2xl font-medium text-accent">
                  {item.year}
                </p>
                <Card className="p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
