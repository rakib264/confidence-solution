import type { Metadata } from "next";
import { ClientsClient } from "@/components/clients/ClientsClient";
import { PageHero } from "@/components/ui/PageHero";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { formatTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: formatTitle("Clients"),
  description:
    "See Confidence Solution LTD.'s trusted partnerships across Bangladesh's residential, commercial, and mixed-use development sectors.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Clients & Partners"
        subtitle="Our trusted relationships are built on delivery discipline, premium quality, and repeatable outcomes."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Our Trusted Partners</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Confidence Solution LTD. supports long-term stakeholder growth with
            delivery models tailored to each sector&apos;s operational demands,
            compliance environment, and investment profile.
          </p>
        </div>
      </section>
      <ClientsClient />
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Become a Partner</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tell us about your organization, development priorities, and partnership goals.</p>
          <form className="mt-6 space-y-3 rounded-xl border border-border bg-card p-5">
            <Input placeholder="Company name" />
            <Input placeholder="Business email" />
            <Textarea placeholder="Partnership details" />
            <Button type="submit">Submit Inquiry</Button>
          </form>
        </div>
      </section>
    </>
  );
}
