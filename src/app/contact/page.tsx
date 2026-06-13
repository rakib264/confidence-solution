import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { formatTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: formatTitle("Contact"),
  description:
    "Contact Confidence Solution LTD. to discuss your next development, request a consultation, and align delivery strategy.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Confidence Solution LTD."
        subtitle="Let’s discuss your development scope, investment goals, and delivery timeline."
        image="https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ContactForm />
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Address", value: "King Abdullah Road, Riyadh, Saudi Arabia" },
              { icon: Phone, title: "Phone", value: "+966 55 800 2450" },
              { icon: Mail, title: "Email", value: "hello@confidencesolutionltd.com" },
              { icon: Clock3, title: "Working Hours", value: "Sun - Thu, 8:30 AM - 6:30 PM" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-md">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
            <ContactMap />
          </div>
        </div>
      </section>
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Our Offices</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Main HQ", value: "Riyadh, Saudi Arabia" },
              { title: "Western Region Office", value: "Jeddah, Saudi Arabia" },
              { title: "GCC Coordination Office", value: "Dubai, United Arab Emirates" },
            ].map((office) => (
              <div key={office.title} className="rounded-xl border border-border bg-card p-5 shadow-md">
                <p className="font-bold">{office.title}</p>
                <p className="text-sm text-muted-foreground">{office.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
