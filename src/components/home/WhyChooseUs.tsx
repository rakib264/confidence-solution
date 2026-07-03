import {
  Building2,
  Clock3,
  Handshake,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RevealTitle } from "@/components/ui/RevealTitle";

const features = [
  {
    title: "Prime Urban Landbank",
    description:
      "Prime residential locations in West Dhanmondi and surrounding Dhaka neighborhoods.",
    icon: ShieldCheck,
  },
  {
    title: "High-Rise Execution Mastery",
    description:
      "Dedicated vertical construction systems ensure structural precision and premium finishes floor by floor.",
    icon: Building2,
  },
  {
    title: "Design-Led Development",
    description:
      "Architecture, interiors, and engineering teams work as one to create timeless, market-leading assets.",
    icon: Sparkles,
  },
  {
    title: "Transparent Project Governance",
    description:
      "Live milestone tracking, procurement controls, and QA checkpoints keep every stakeholder aligned.",
    icon: Landmark,
  },
  {
    title: "On-Time Handover Culture",
    description:
      "Disciplined delivery programs minimize schedule drift and bring families and businesses into their spaces faster.",
    icon: Clock3,
  },
  {
    title: "Long-Term Client Partnerships",
    description:
      "Repeat investors and homeowners choose us for dependable service from planning through post-handover care.",
    icon: Handshake,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0f141d] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="label-caps-on-dark">Why Choose Us</p>
          <RevealTitle
            text="Confidence that rises with every floor"
            className="mt-4 text-[clamp(2.2rem,5.8vw,4rem)] font-medium text-white"
          />
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            We combine premium architectural thinking with disciplined project
            execution to deliver luxury residences and corporate towers that
            stand apart in Bangladesh&apos;s most valuable locations.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((item, index) => (
            <article
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-white/14 bg-white/[0.03] p-5 backdrop-blur-[1px]"
            >
              <div className="icon-box-on-dark shrink-0">
                <item.icon className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {index + 1}. {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
