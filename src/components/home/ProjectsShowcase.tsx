"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectCategories, projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const reducedMotion = useReducedMotion();
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        activeCategory === "All" ? true : project.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <section className="section-pattern bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Landmark Developments Built for the Region"
          subtitle="Explore signature Confidence Solution LTD. projects delivered across Saudi Arabia and the GCC."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-sm font-medium",
                activeCategory === category && "border-primary bg-primary text-primary-foreground",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={600}
                height={420}
                className="h-72 w-full object-cover"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-85 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-neutral-100">
                <p className="text-xs uppercase tracking-widest text-accent">{project.location}</p>
                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                <Link href={`/projects/${project.slug}`} className="mt-3 inline-flex rounded-[var(--radius)] bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  View Landmark
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="rounded-[var(--radius)] border border-primary px-6 py-3 font-semibold text-primary">
            View All Landmark Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
