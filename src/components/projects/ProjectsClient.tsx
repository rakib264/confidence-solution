"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { projectCategories, projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const reducedMotion = useReducedMotion();
  const results = useMemo(
    () =>
      projects.filter((project) => {
        const matchedCategory = category === "All" || project.category === category;
        const matchedQuery = `${project.title} ${project.location}`
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchedCategory && matchedQuery;
      }),
    [category, query],
  );

  return (
    <>
      <section className="sticky top-16 z-20 border-b border-border bg-card/95 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((item) => (
              <button
                key={item}
                className={cn(
                  "rounded-full border border-border px-4 py-2 text-sm font-medium",
                  category === item && "border-primary bg-primary text-primary-foreground",
                )}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <Input
            placeholder="Search landmark projects by name or location"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
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
                <p className="text-xs uppercase tracking-widest text-primary">{project.category}</p>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-muted-foreground">{project.location}</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">{project.description[0]}</p>
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
