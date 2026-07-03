import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDown,
  ClipboardList,
  Compass,
  Handshake,
  Shield,
  Truck,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: formatTitle("Services"),
  description:
    "Discover Confidence Solution LTD. services from strategic development planning to premium high-rise delivery across Bangladesh.",
};

const process = [
  {
    title: "Discovery",
    icon: Compass,
    text: "Land potential, market demand, and project goals aligned from day one.",
  },
  {
    title: "Planning",
    icon: ClipboardList,
    text: "Scope, schedule, budget, and design pathways defined with clarity.",
  },
  {
    title: "Execution",
    icon: Truck,
    text: "Integrated construction delivery with milestone-based quality controls.",
  },
  {
    title: "Delivery",
    icon: Handshake,
    text: "Structured handover with complete snag closure and commissioning.",
  },
  {
    title: "Support",
    icon: Shield,
    text: "Post-handover guidance to protect long-term asset performance.",
  },
];

const faqs = [
  "How do you estimate cost and timeline for a new project?",
  "Can you manage design and construction together?",
  "How do you handle project changes after kickoff?",
  "What happens after final handover?",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Comprehensive development and construction services engineered for quality, certainty, and long-term value."
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3edae?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Services Overview"
              title="Integrated Capabilities for Modern Development"
              subtitle="From land strategy and design to construction and post-handover optimization."
            />
            <p className="leading-relaxed text-muted-foreground">
              Our teams combine project controls, engineering coordination, and
              field execution in one integrated operating model — improving
              predictability and protecting investment value across the full
              lifecycle.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Request a Consultation
            </Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="High-rise construction by Confidence Solution LTD."
            width={720}
            height={500}
            className="h-80 w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      <ServicesGrid />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Execute Projects"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <p className="font-label text-sm text-accent">0{idx + 1}</p>
                <item.icon className="mt-2 h-5 w-5 text-accent" />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f141d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Safety Standards"
            title="Non-Negotiable Safety Commitments"
            subtitle="Every site follows structured HSE systems backed by continuous supervision and local regulatory compliance."
            variant="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Daily toolbox talks",
              "Permit-to-work controls",
              "Incident response drills",
              "Independent audits",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            align="center"
          />
          <Accordion.Root
            type="single"
            collapsible
            className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item key={faq} value={`item-${index}`} className="px-5">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold">
                    {faq}
                    <ChevronDown className="h-4 w-4 shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  We tailor each engagement through a scoped discovery workshop,
                  then lock measurable milestones and communication cadence before
                  mobilization.
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
