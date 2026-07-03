import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { companyContact } from "@/lib/data/company";
import { formatTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: formatTitle("Contact"),
  description:
    "Contact Confidence Solution LTD. at 195 West Dhanmondi Modubazar, Dhaka. Call 01788889476 to discuss your next development.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Confidence Solution LTD."
        subtitle="Visit our Dhanmondi office or call us to discuss your development scope, investment goals, and delivery timeline."
        image="https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ContactForm />
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Office",
                value: companyContact.office,
              },
              {
                icon: Phone,
                title: "Phone",
                value: companyContact.phoneDisplay,
                href: `tel:${companyContact.phoneTel}`,
              },
              {
                icon: Mail,
                title: "Email",
                value: companyContact.email,
                href: `mailto:${companyContact.email}`,
              },
              {
                icon: Clock3,
                title: "Working Hours",
                value: companyContact.hours,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-md"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <ContactMap />
          </div>
        </div>
      </section>
    </>
  );
}
