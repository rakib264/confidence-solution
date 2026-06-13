import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import { PageHero } from "@/components/ui/PageHero";
import { CommentForm } from "@/components/blog/CommentForm";
import { formatTitle } from "@/lib/utils";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: formatTitle("Article Not Found") };
  return {
    title: formatTitle(post.title),
    description: post.excerpt,
    openGraph: {
      images: [post.thumbnail],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} • ${post.date} • by ${post.author}`}
        image={post.thumbnail}
      />
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
          <article className="prose prose-neutral max-w-none">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="mb-5 text-base leading-8 text-muted-foreground">{paragraph}</p>
            ))}
            <blockquote className="border-l-4 border-primary pl-4 font-serif text-lg italic text-muted-foreground">
              Landmark outcomes are shaped by early strategic decisions, disciplined governance, and transparent communication.
            </blockquote>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-bold">About the Author</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.author} is part of Confidence Solution LTD.&apos;s editorial and delivery strategy team, focused on translating field intelligence into practical guidance for investors, developers, and public stakeholders.
              </p>
              <div className="mt-4 flex gap-2">
                {[FaXTwitter, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                  <span key={i} className="grid h-9 w-9 place-items-center rounded-md border border-border">
                    <Icon className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <CommentForm />
            </div>
          </article>
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Recent Posts</h3>
              <div className="mt-4 space-y-3">
                {blogPosts.slice(0, 4).map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="block text-sm font-medium hover:text-primary">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Related Posts</h3>
              <div className="mt-4 space-y-4">
                {related.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="block overflow-hidden rounded-lg border border-border">
                    <Image src={item.thumbnail} alt={item.title} width={500} height={280} className="h-28 w-full object-cover" />
                    <p className="p-3 text-sm font-semibold">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
