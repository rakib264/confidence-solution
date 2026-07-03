"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { LeafletMap } from "@/components/ui/LeafletMap";
import { Project } from "@/lib/types";
import { projects } from "@/lib/data/projects";
import {
  allProjectImages,
  projectImageSrc,
} from "@/lib/utils/project-image";

const projectSpecs = (project: Project) =>
  [
    project.landArea ? { label: "Land Area", value: project.landArea } : null,
    { label: "Total Floors", value: `${project.totalFloors} Stories` },
    { label: "Apartments", value: `${project.numberOfApartments} Flats` },
    { label: "Completion Year", value: String(project.completionYear) },
  ].filter((item): item is { label: string; value: string } => item !== null);

export function ProjectDetailClient({ project }: { project: Project }) {
  const [index, setIndex] = useState(-1);
  const relatedProjects = useMemo(
    () => projects.filter((item) => item.slug !== project.slug),
    [project.slug],
  );
  const allImages = useMemo(() => allProjectImages(project), [project]);
  const lightboxSlides = useMemo(
    () => allImages.map((src) => ({ src: projectImageSrc(src) })),
    [allImages],
  );

  return (
    <>
      <section className="bg-[#0f1115] pt-24 sm:pt-28 lg:pt-32">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <ProjectImageCarousel
            images={allImages}
            title={project.title}
            variant="hero"
            onExpand={(slideIndex) => setIndex(slideIndex)}
            overlay={
              <div className="flex h-full items-end px-4 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
                <div className="max-w-3xl">
                  <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                    Project {project.number} · Residential
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] text-white">
                    {project.title}
                  </h1>
                  <p className="mt-3 flex items-start gap-2 text-sm text-white/75 sm:text-base">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    {project.location}
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:px-8">
          <article className="space-y-10">
            <div className="space-y-4">
              <p className="label-caps text-primary">Overview</p>
              <p className="text-lg leading-8 text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projectSpecs(project).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    {spec.label}
                  </p>
                  <p className="mt-2 font-display text-2xl font-medium">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            <LeafletMap
              center={project.coordinates}
              zoom={15}
              markerLabel={project.title}
            />
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Project Details
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <p>
                  <strong>Name:</strong> {project.title}
                </p>
                <p>
                  <strong>Location:</strong> {project.location}
                </p>
                {project.landArea ? (
                  <p>
                    <strong>Land Area:</strong> {project.landArea}
                  </p>
                ) : null}
                <p>
                  <strong>Total Floors:</strong> {project.totalFloors}
                </p>
                <p>
                  <strong>Apartments:</strong> {project.numberOfApartments}
                </p>
                <p>
                  <strong>Completion Year:</strong> {project.completionYear}
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-medium">Our Other Project</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedProjects.map((item) => (
                <article
                  key={item.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <ProjectImageCarousel
                    images={allProjectImages(item)}
                    title={item.title}
                    variant="card"
                  />
                  <div className="space-y-2 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">
                      Project {item.number}
                    </p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.location}
                    </p>
                    <Link
                      href={`/projects/${item.slug}`}
                      className="inline-flex text-sm font-semibold text-primary"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={lightboxSlides}
      />
    </>
  );
}
