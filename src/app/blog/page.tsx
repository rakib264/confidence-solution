import type { Metadata } from "next";
import { BlogClient } from "@/components/blog/BlogClient";
import { PageHero } from "@/components/ui/PageHero";
import { formatTitle } from "@/lib/utils";

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
        image="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1800&q=80"
      />
      <BlogClient />
    </>
  );
}
