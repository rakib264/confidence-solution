import type { Metadata } from "next";
import { BlogClient } from "@/components/blog/BlogClient";
import { PageHero } from "@/components/ui/PageHero";
import { formatTitle } from "@/lib/utils";
import manab2 from "@/assets/manab-noor/manab-2.jpeg";

export const metadata: Metadata = {
  title: formatTitle("Blog"),
  description:
    "Read Confidence Solution LTD. insights on Bangladesh real estate strategy, high-rise delivery, and design excellence.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Confidence Solution LTD. Insights"
        subtitle="Editorial intelligence, technical guidance, and Bangladesh delivery lessons from our leadership teams."
        image={manab2}
      />
      <BlogClient />
    </>
  );
}
