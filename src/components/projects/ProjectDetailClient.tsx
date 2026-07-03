"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link2 } from "lucide-react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Lightbox from "yet-another-react-lightbox";
import { Project } from "@/lib/types";
import { projects } from "@/lib/data/projects";
import { toast } from "sonner";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const projectSpecs = (project: Project) => [
  { label: "Land Area", value: project.landArea },
  { label: "Total Floors", value: `${project.totalFloors} Stories` },
  { label: "Apartments", value: `${project.numberOfApartments} Flats` },
  { label: "Completion Year", value: String(project.completionYear) },
];

export function ProjectDetailClient({ project }: { project: Project }) {
  const [index, setIndex] = useState(-1);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  });
  const relatedProjects = useMemo(
    () => projects.filter((item) => item.slug !== project.slug),
    [project.slug],
  );

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-12 sm:px-6 lg:px-8">
          <div>
            <p className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              Project {project.number}
            </p>
            <h1 className="mt-3 text-4xl font-black text-background md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-background/80">{project.location}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {projectSpecs(project).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {spec.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-black">Project Gallery</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Professional views of the development, interiors, and surrounding
                environment.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((img, imgIndex) => (
                  <button
                    key={img}
                    className="relative h-44 overflow-hidden rounded-lg"
                    onClick={() => setIndex(imgIndex)}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} photo ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, 50vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              {isLoaded ? (
                <GoogleMap
                  center={project.coordinates}
                  zoom={13}
                  mapContainerStyle={{ width: "100%", height: "320px" }}
                  options={{ disableDefaultUI: true, zoomControl: true }}
                >
                  <MarkerF
                    position={project.coordinates}
                    title={project.title}
                  />
                </GoogleMap>
              ) : (
                <div className="grid h-80 place-items-center bg-muted text-sm text-muted-foreground">
                  Map loading...
                </div>
              )}
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Project Details
              </h3>
              <div className="mt-3 space-y-3 text-sm">
                <p>
                  <strong>Project:</strong> Project {project.number}
                </p>
                <p>
                  <strong>Name:</strong> {project.title}
                </p>
                <p>
                  <strong>Location:</strong> {project.location}
                </p>
                <p>
                  <strong>Land Area:</strong> {project.landArea}
                </p>
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
              <button className="mt-4 w-full rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Download Brochure
              </button>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Share
              </h3>
              <div className="mt-3 flex gap-2">
                {[FaXTwitter, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                  <button
                    key={i}
                    className="grid h-9 w-9 place-items-center rounded-md border border-border"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
                <button
                  className="grid h-9 w-9 place-items-center rounded-md border border-border"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Project link copied.");
                  }}
                >
                  <Link2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black">Our Other Project</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {relatedProjects.map((item) => (
                <article
                  key={item.slug}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={600}
                    height={360}
                    className="h-44 w-full object-cover"
                  />
                  <div className="space-y-2 p-4">
                    <p className="text-xs uppercase tracking-widest text-primary">
                      Project {item.number}
                    </p>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.location}
                    </p>
                    <Link
                      href={`/projects/${item.slug}`}
                      className="text-sm font-semibold text-primary"
                    >
                      View Details
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
        slides={project.gallery.map((src) => ({ src }))}
      />
    </>
  );
}
