"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export function BlogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchedCategory = category === "All" || post.category === category;
        const matchedQuery = `${post.title} ${post.excerpt}`
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchedCategory && matchedQuery;
      }),
    [category, query],
  );

  const [featured, ...others] = filtered;

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {featured ? (
          <article className="grid overflow-hidden rounded-xl border border-border bg-card shadow-md md:grid-cols-2">
            <Image src={featured.thumbnail} alt={featured.title} width={900} height={560} className="h-full min-h-72 w-full object-cover" />
            <div className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-widest text-primary">{featured.category}</p>
              <h2 className="text-3xl font-black">{featured.title}</h2>
              <p className="text-sm text-muted-foreground">{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="inline-flex rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Read Featured Insight</Link>
            </div>
          </article>
        ) : null}

        <div className="sticky top-16 z-20 mt-8 space-y-3 rounded-xl border border-border bg-card/95 p-4 backdrop-blur">
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights..." />
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                className={cn(
                  "rounded-full border border-border px-4 py-2 text-sm font-medium",
                  item === category && "border-primary bg-primary text-primary-foreground",
                )}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {others.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
              <Image src={post.thumbnail} alt={post.title} width={620} height={420} className="h-52 w-full object-cover" />
              <div className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">{post.category}</p>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary">Read Insight</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
