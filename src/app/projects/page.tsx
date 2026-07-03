import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { formatTitle } from "@/lib/utils";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: formatTitle("Projects"),
  description:
    "Explore Manab Noor, Confidence Solution LTD.'s residential project at 195 West Dhanmondi Modubazar.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Manab Noor — our residential development at 195 West Dhanmondi Modubazar."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />
      <ProjectsClient />
    </>
  );
}
