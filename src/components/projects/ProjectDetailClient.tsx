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

export function ProjectDetailClient({ project }: { project: Project }) {
  const [index, setIndex] = useState(-1);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  });
  const relatedProjects = useMemo(
    () =>
      projects
        .filter((item) => item.slug !== project.slug && item.category === project.category)
        .slice(0, 3),
    [project.category, project.slug],
  );

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src={project.thumbnail} alt={project.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-12 sm:px-6 lg:px-8">
          <div>
            <p className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              {project.category}
            </p>
            <h1 className="mt-3 text-4xl font-black text-background md:text-5xl">{project.title}</h1>
            <p className="mt-2 text-background/80">{project.location}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="space-y-6">
            {project.description.map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground">{paragraph}</p>
            ))}

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-bold">Challenges</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.challenges.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-bold">Solutions</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.solutions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, imgIndex) => (
                <button key={img} className="relative h-44 overflow-hidden rounded-lg" onClick={() => setIndex(imgIndex)}>
                  <Image src={img} alt={`${project.title} gallery ${imgIndex + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 50vw" />
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              {isLoaded ? (
                <GoogleMap
                  center={project.coordinates}
                  zoom={13}
                  mapContainerStyle={{ width: "100%", height: "320px" }}
                  options={{ disableDefaultUI: true, zoomControl: true }}
                >
                  <MarkerF position={project.coordinates} title={project.title} />
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project Info</h3>
              <div className="mt-3 space-y-3 text-sm">
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Area:</strong> {project.areaSqFt} sqft</p>
                <p><strong>Duration:</strong> {project.duration}</p>
                <p><strong>Completion:</strong> {project.completionDate}</p>
                <p><strong>Category:</strong> {project.category}</p>
              </div>
              <button className="mt-4 w-full rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Download Brochure
              </button>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Share</h3>
              <div className="mt-3 flex gap-2">
                {[FaXTwitter, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                  <button key={i} className="grid h-9 w-9 place-items-center rounded-md border border-border">
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

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black">Related Projects</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-xl border border-border bg-card">
                <Image src={item.thumbnail} alt={item.title} width={600} height={360} className="h-44 w-full object-cover" />
                <div className="space-y-2 p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                  <Link href={`/projects/${item.slug}`} className="text-sm font-semibold text-primary">View Details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={project.gallery.map((src) => ({ src }))}
      />
    </>
  );
}
