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
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { formatTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: formatTitle("Services"),
  description:
    "Discover Confidence Solution LTD. services from strategic development planning to turnkey construction delivery across the GCC.",
};

const process = [
  { title: "Discovery", icon: Compass, text: "Goals, site realities, and constraints aligned early." },
  { title: "Planning", icon: ClipboardList, text: "Scope, schedule, budget, and risk controls defined." },
  { title: "Execution", icon: Truck, text: "Coordinated field delivery with quality checkpoints." },
  { title: "Delivery", icon: Handshake, text: "Structured handover and performance validation." },
  { title: "Support", icon: Shield, text: "Post-delivery assistance and lifecycle recommendations." },
];

const faqs = [
  "How do you estimate cost and timeline for a new project?",
  "Can Confidence Solution LTD. manage design and construction together?",
  "How do you handle project changes after kickoff?",
  "What quality assurance processes do you follow?",
  "Do you work on live operational sites?",
  "How do you manage safety compliance?",
  "Can you support industrial and mission-critical facilities?",
  "What happens after final handover?",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Comprehensive development and construction services engineered for certainty, compliance, and value creation."
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3edae?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Services Overview"
              title="Integrated Capabilities for Modern Development"
              subtitle="Confidence Solution LTD. supports clients from strategy and design to construction and post-handover asset optimization."
            />
            <p className="text-muted-foreground">
              Our teams combine project controls, engineering coordination, and field execution in one integrated operating model. This improves predictability and protects investment value across the full lifecycle.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Confidence Solution LTD. services overview"
            width={720}
            height={500}
            className="h-80 w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Deliver" title="Service Portfolio" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-xl border border-border bg-card p-6 shadow-md">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  Request Consultation
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="How We Execute Projects" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((item, idx) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-md">
                <p className="font-mono text-sm text-primary">0{idx + 1}</p>
                <item.icon className="mt-2 h-5 w-5 text-primary" />
                <h3 className="mt-2 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Safety Standards"
            title="Non-Negotiable Safety Commitments"
            subtitle="Every site follows structured HSE systems backed by continuous supervision and regulatory compliance."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Daily toolbox talks", "Permit-to-work controls", "Incident response drills", "Independent audits"].map((item) => (
              <div key={item} className="rounded-xl border border-border/40 bg-card/5 p-4 text-sm text-background">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
          <Accordion.Root type="single" collapsible className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((faq, index) => (
              <Accordion.Item key={faq} value={`item-${index}`} className="px-5">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold">
                    {faq}
                    <ChevronDown className="h-4 w-4" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-sm text-muted-foreground">
                  Confidence Solution LTD. tailors each engagement through a scoped discovery and planning workshop, then locks measurable milestones, governance responsibilities, and communication cadence before mobilization.
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
