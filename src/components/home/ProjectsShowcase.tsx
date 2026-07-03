"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RevealTitle } from "@/components/ui/RevealTitle";
import { projects } from "@/lib/data/projects";

export function ProjectsShowcase() {
  const featuredProject = projects[0];

  if (!featuredProject) return null;

  return (
    <section className="bg-[#0f1115] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="label-caps-on-dark">Our Project</p>
          <RevealTitle
            text="Manab Noor — residential living in West Dhanmondi"
            className="max-w-4xl text-[clamp(2.25rem,5.8vw,4.2rem)] font-medium text-white"
          />
        </div>

        <motion.article
          key={featuredProject.slug}
          layout
          layoutId={`project-card-${featuredProject.slug}`}
          className="group relative mt-8 overflow-hidden rounded-2xl border border-white/15"
        >
          <div className="relative aspect-[16/8] min-h-[320px]">
            <Image
              src={featuredProject.thumbnail}
              alt={featuredProject.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/50 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full max-w-xl flex-col justify-center p-6 sm:p-10">
              <p className="label-caps-on-dark text-[10px]">
                Project {featuredProject.number} · Residential
              </p>
              <h3 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.02] text-white">
                {featuredProject.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
                {featuredProject.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/35 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85">
                  {featuredProject.totalFloors} Floors
                </span>
                <span className="rounded-full border border-white/35 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85">
                  {featuredProject.numberOfApartments} Flats
                </span>
                <span className="rounded-full border border-white/35 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85">
                  {featuredProject.landArea}
                </span>
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
          >
            View Project Details
          </Link>
        </div>
      </div>
    </section>
  );
}
