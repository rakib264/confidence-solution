import type { Metadata } from "next";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "Confidence Solution LTD. | Home",
  description:
    "Building Tomorrow's Skyline, Today - Confidence Solution LTD. develops premium high-rise residences, corporate towers, and mixed-use landmarks across Bangladesh.",
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
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
