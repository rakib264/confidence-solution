"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  MapPinned,
  Paintbrush,
} from "lucide-react";
import { motion } from "framer-motion";
import { RevealTitle } from "@/components/ui/RevealTitle";
import { services } from "@/lib/data/services";

const icons = {
  Building2,
  Hammer,
  DraftingCompass,
  ClipboardCheck,
  Paintbrush,
  MapPinned,
};

export function ServicesGrid() {
  return (
    <section className="bg-[#101010] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="label-caps-on-dark">Our Services</p>
          <RevealTitle
            text="Integrated expertise for premium developments"
            className="mx-auto mt-4 max-w-4xl text-[clamp(2.25rem,6vw,4rem)] font-medium text-white"
          />
          <div className="mx-auto mt-6 h-px w-32 bg-white/25" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.article
                key={service.slug}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#1a1a1a] p-6 shadow-[0_24px_40px_rgba(0,0,0,0.25)]"
              >
                <span className="absolute left-0 top-0 h-full w-1 origin-bottom scale-y-0 bg-[var(--highlight)] transition-transform duration-300 group-hover:scale-y-100" />
                <div className="icon-box-on-dark mb-5">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="link-on-dark mt-5 inline-flex items-center gap-1 text-sm"
                >
                  Explore{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
