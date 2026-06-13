"use client";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { clients } from "@/lib/data/clients";

const grouped = Object.entries(
  clients.reduce<Record<string, number>>((acc, client) => {
    acc[client.industry] = (acc[client.industry] || 0) + 1;
    return acc;
  }, {}),
).map(([name, value]) => ({ name, value }));

export function ClientsClient() {
  const isClient = typeof window !== "undefined";

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {clients.map((client) => (
            <article key={client.name} className="rounded-xl border border-border bg-card p-5 shadow-md">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/15 font-black text-primary">{client.logoText}</div>
              <h3 className="mt-3 font-bold">{client.name}</h3>
              <p className="mt-1 inline-flex rounded-full bg-muted px-2 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {client.industry}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">“{client.testimonial}”</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="h-80 rounded-xl border border-border bg-card p-4">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-muted-foreground">Portfolio Sector Breakdown</p>
            {isClient ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={grouped}>
                  <XAxis dataKey="name" tick={{ fill: "var(--foreground)", fontSize: 12 }} />
                  <YAxis allowDecimals={false} tick={{ fill: "var(--foreground)", fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" radius={8}>
                    {grouped.map((entry) => (
                      <Cell key={entry.name} fill="var(--primary)" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="grid h-full place-items-center text-sm text-muted-foreground">Loading chart...</div>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black">Featured Partner Testimonials</h3>
            {clients.slice(0, 3).map((client) => (
              <div key={client.name} className="rounded-xl border border-border bg-card p-4">
                <p className="font-semibold">{client.name}</p>
                <p className="text-sm text-muted-foreground">{client.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
