import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { formatTitle } from "@/lib/utils";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: formatTitle("Projects"),
  description: "Explore Confidence Solution LTD.'s portfolio of landmark residential, commercial, institutional, and infrastructure projects across Saudi Arabia and GCC.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="A portfolio of landmark delivery across sectors and scales."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />
      <ProjectsClient />
    </>
  );
}
