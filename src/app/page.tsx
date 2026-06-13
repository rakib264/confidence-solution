import type { Metadata } from "next";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ClientsLogos } from "@/components/home/ClientsLogos";
import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "Confidence Solution LTD. | Home",
  description:
    "Confidence Solution LTD. delivers premium real estate and construction projects aligned with Saudi Vision 2030 across the Kingdom and GCC.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSnippet />
      <ServicesGrid />
      <StatsBar />
      <ProjectsShowcase />
      <WhyChooseUs />
      <TestimonialsSlider />
      <TeamSection />
      <ClientsLogos />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
