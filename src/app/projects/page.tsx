import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { formatTitle } from "@/lib/utils";
import { ProjectsClient } from "@/components/projects/ProjectsClient";
import shah1 from "@/assets/shah-residence/shah-1.jpeg";

export const metadata: Metadata = {
  title: formatTitle("Projects"),
  description:
    "Explore Manab Noor and Shah Residence, Confidence Solution LTD.'s residential projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Manab Noor and Shah Residence — our residential developments."
        image={shah1}
      />
      <ProjectsClient />
    </>
  );
}
