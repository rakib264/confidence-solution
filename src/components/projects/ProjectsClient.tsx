"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { projects } from "@/lib/data/projects";

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
      <section className="sticky top-16 z-20 border-b border-border bg-card/95 py-4 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Input
            placeholder="Search residential projects by name or location"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {results.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-md"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={500}
                className="h-52 w-full object-cover"
              />
              <div className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">
                  Project {project.number} · Residential
                </p>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-muted-foreground">{project.location}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <p>{project.totalFloors} Floors</p>
                  <p>{project.numberOfApartments} Apartments</p>
                  <p>{project.landArea}</p>
                  <p>Completed {project.completionYear}</p>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {project.summary}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-2 inline-flex rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  View Project
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
