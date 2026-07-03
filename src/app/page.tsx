import type { Metadata } from "next";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Confidence Solution LTD. | Home",
  description:
    "Confidence Solution LTD. — a real estate developer focused on quality residential buildings.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSnippet />
      <ServicesGrid />
      <ProjectsShowcase />
      <StatsBar />
      <TestimonialsSlider />
      <CtaBanner />
    </>
  );
}
