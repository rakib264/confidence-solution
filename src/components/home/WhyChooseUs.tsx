import { ShieldCheck, Timer, UserRoundCheck, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Institutional Safety Governance",
    description: "Structured HSE frameworks and proactive risk controls across all sites.",
    icon: ShieldCheck,
  },
  {
    title: "On-Schedule Program Delivery",
    description: "Milestone-controlled execution with transparent reporting and early risk escalation.",
    icon: Timer,
  },
  {
    title: "Licensed Multidisciplinary Engineers",
    description: "Experienced specialists in civil, structural, MEP, and development management.",
    icon: UserRoundCheck,
  },
  {
    title: "Investor-Grade Commercial Clarity",
    description: "Transparent BOQ control, variation governance, and financial visibility.",
    icon: Wallet,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pattern grid bg-foreground lg:grid-cols-2">
      <div className="px-4 py-16 text-background sm:px-6 lg:px-12">
        <SectionHeading
          eyebrow="Why Confidence Solution LTD."
          title="Complex Developments. Predictable Outcomes."
          subtitle="We combine strategic planning, engineering excellence, and execution rigor so stakeholders get certainty across scope, schedule, and quality."
        />
        <blockquote className="mt-8 border-l-4 border-primary pl-4 font-serif text-2xl italic text-neutral-100">
          “Our mission is to deliver landmark projects across the Kingdom with trust, precision, and enduring value.”
        </blockquote>
      </div>
      <div className="grid gap-6 px-4 py-16 sm:px-6 lg:px-12">
        {features.map((item) => (
          <article key={item.title} className="flex gap-4 rounded-xl border border-border/40 bg-card/5 p-5">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/20 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-background">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral-200">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
