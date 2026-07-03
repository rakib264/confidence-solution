"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { RevealTitle } from "@/components/ui/RevealTitle";
import { projects } from "@/lib/data/projects";
import { allProjectImages } from "@/lib/utils/project-image";
import type { Project } from "@/lib/types";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const specs = [
    { label: "Floors", value: String(project.totalFloors) },
    { label: "Flats", value: String(project.numberOfApartments) },
    ...(project.landArea
      ? [{ label: "Land", value: project.landArea }]
      : []),
    { label: "Completed", value: String(project.completionYear) },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141820] shadow-[0_24px_48px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] duration-500 hover:border-white/20 hover:shadow-[0_32px_64px_rgba(0,0,0,0.36)]"
    >
      <ProjectImageCarousel
        images={allProjectImages(project)}
        title={project.title}
        variant="card"
        overlay={
          <>
            <div className="absolute inset-x-0 top-0 flex items-start p-4 sm:p-5">
              <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                Project {project.number}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-14 p-4 sm:bottom-16 sm:p-5 lg:bottom-20">
              <h3 className="font-display text-[clamp(1.6rem,3.5vw,2.1rem)] font-medium leading-tight text-white">
                {project.title}
              </h3>
              <p className="mt-1.5 line-clamp-1 text-xs text-white/65 sm:text-sm">
                {project.location}
              </p>
            </div>
          </>
        }
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-white/70">
          {project.summary}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                {spec.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-white/90">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:border-white/25 group-hover:bg-white group-hover:text-foreground"
        >
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export function ProjectsShowcase() {
  if (projects.length === 0) return null;

  return (
    <section className="bg-[#0f1115] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="label-caps-on-dark">Our Projects</p>
          <RevealTitle
            text="Quality residential living, delivered with care"
            className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] text-white"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="mt-10 flex justify-center md:mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
