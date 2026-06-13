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
    "Learn how Confidence Solution LTD. delivers landmark developments with engineering excellence, investor confidence, and regional impact.",
};

const timeline = [
  { year: "1993", text: "Confidence Solution LTD. established to serve high-value real estate and construction programs." },
  { year: "2004", text: "Expanded into major commercial, hospitality, and mixed-use delivery across the Kingdom." },
  { year: "2015", text: "Introduced integrated digital project controls, BIM coordination, and institutional QA governance." },
  { year: "2020", text: "Aligned strategic delivery frameworks with Saudi Vision 2030 transformation priorities." },
  { year: "2026", text: "Trusted development and construction partner across Saudi Arabia and wider GCC markets." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Confidence Solution LTD."
        subtitle="Decades of engineering excellence, institutional delivery discipline, and enduring trust."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Company Story"
              title="From Regional Specialist to GCC Delivery Leader"
              subtitle="Confidence Solution LTD. grew by combining technical rigor with investor-focused execution."
            />
            <p className="text-muted-foreground">
              Confidence Solution LTD. began with a commitment to premium construction quality and evolved into a full-scale development and delivery organization serving landmark residential and commercial assets.
            </p>
            <p className="text-muted-foreground">
              Today our multidisciplinary teams integrate strategy, architecture, engineering, and project controls to deliver resilient developments aligned with long-term investment performance.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Gem, title: "Integrity", text: "We do what we commit to." },
              { icon: Lightbulb, title: "Innovation", text: "We solve complexity with systems." },
              { icon: Award, title: "Excellence", text: "We chase precision in every detail." },
            ].map((item) => (
              <Card key={item.title} className="p-5">
                <item.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <TeamSection extended />

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Milestones" title="Our Journey" align="center" />
          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="grid items-start gap-4 md:grid-cols-[120px_1fr]">
                <p className="font-mono text-2xl font-bold text-primary">{item.year}</p>
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Certifications & Awards" title="Recognized for Governance, Quality, and Delivery" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["ISO 9001 Quality", "ISO 45001 HSE", "Vision 2030 Partner Program", "GCC Real Estate Excellence"].map((item) => (
              <Card key={item} className="grid h-28 place-items-center p-4 text-center font-semibold">
                {item}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
