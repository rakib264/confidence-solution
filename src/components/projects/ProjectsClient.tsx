"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { projects } from "@/lib/data/projects";
import { allProjectImages } from "@/lib/utils/project-image";

export function ProjectsClient() {
  const [query, setQuery] = useState("");
  const reducedMotion = useReducedMotion();
  const results = useMemo(
    () =>
      projects.filter((project) =>
        `${project.title} ${project.location}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <>
      <section className="border-b border-border bg-card/95 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Input
              placeholder="Search residential projects by name or location"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className={query ? "pr-12" : undefined}
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:px-8">
          {results.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <ProjectImageCarousel
                images={allProjectImages(project)}
                title={project.title}
                variant="card"
                overlay={
                  <div className="absolute inset-x-0 bottom-10 p-5 sm:bottom-12">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
                      Project {project.number}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-medium text-white">
                      {project.title}
                    </h2>
                  </div>
                }
              />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm text-muted-foreground">{project.location}</p>
                <div className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
                  <div className="rounded-xl border border-border/70 bg-muted/40 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Floors
                    </p>
                    <p className="mt-0.5 font-medium">{project.totalFloors}</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-muted/40 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Flats
                    </p>
                    <p className="mt-0.5 font-medium">
                      {project.numberOfApartments}
                    </p>
                  </div>
                  {project.landArea ? (
                    <div className="rounded-xl border border-border/70 bg-muted/40 px-3 py-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Land
                      </p>
                      <p className="mt-0.5 font-medium">{project.landArea}</p>
                    </div>
                  ) : null}
                  <div className="rounded-xl border border-border/70 bg-muted/40 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Completed
                    </p>
                    <p className="mt-0.5 font-medium">{project.completionYear}</p>
                  </div>
                </div>
                <p className="mt-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
