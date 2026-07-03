import type { Metadata } from "next";
import { Award, Gem, Lightbulb } from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StatsBar } from "@/components/home/StatsBar";
import { TeamSection } from "@/components/home/TeamSection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { formatTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: formatTitle("About Us"),
  description:
    "Learn how Confidence Solution LTD. delivers premium high-rise residences, corporate towers, and mixed-use landmarks across Bangladesh.",
};

const timeline = [
  {
    year: "2018",
    text: "Completed Manab Noor — a 7-storey residential building with 16 flats on 6 katha at 195 West Dhanmondi Modubazar.",
  },
  {
    year: "2024",
    text: "Confidence Solution LTD. strengthened operations from our Dhanmondi office to serve residents and future developments.",
  },
  {
    year: "2026",
    text: "Continuing to maintain Manab Noor and build on our experience in West Dhanmondi residential development.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Confidence Solution LTD."
        subtitle="Building Tomorrow's Skyline, Today through premium design, disciplined execution, and lasting trust."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Company Story"
              title="A Focused Developer Building Quality in Dhaka"
              subtitle="Design excellence, engineering discipline, and dependable project governance."
            />
            <p className="leading-relaxed text-muted-foreground">
              Confidence Solution LTD. is a Dhanmondi-based real estate developer
              focused on thoughtfully planned residential buildings in Dhaka.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our delivered project, Manab Noor, stands at 195 West Dhanmondi
              Modubazar with 7 floors, 16 flats, and 6 katha of land — completed
              in 2018.
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
