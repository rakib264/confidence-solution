import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data/blog";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="section-pattern bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights & Articles"
          title="Development Intelligence for Better Investment Decisions"
          subtitle="Explore practical insights from Confidence Solution LTD. on design, engineering, construction, and market-aligned delivery."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
              <Image src={post.thumbnail} alt={post.title} width={640} height={360} className="h-52 w-full object-cover" />
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">{post.category}</p>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary">
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
