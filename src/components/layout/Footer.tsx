import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyContact } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import confidenceLogo from "@/assets/logo/confidence.jpeg";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/60 bg-[#0f1724] text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <div className="relative h-14 w-44 overflow-hidden rounded-md border border-white/20 bg-white/5">
            <Image
              src={confidenceLogo}
              alt="Confidence Solution LTD. logo"
              fill
              className="object-cover"
              sizes="176px"
            />
          </div>
          <p className="font-display text-3xl leading-none text-white">
            Confidence Solution LTD.
          </p>
          <p className="max-w-xs text-sm leading-6 text-white/70">
            Residential real estate developer in West Dhanmondi, Dhaka — home to
            Manab Noor at 195 West Dhanmondi Modubazar.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="label-caps text-white">Quick Links</h3>
          <div className="space-y-2 text-sm text-white/75">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block transition-colors hover:text-highlight"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="label-caps text-white">Services</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-highlight"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm text-white/75">
          <h3 className="label-caps text-white">Contact</h3>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
            {companyContact.office}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-highlight" />
            <a
              href={`tel:${companyContact.phoneTel}`}
              className="transition-colors hover:text-white"
            >
              {companyContact.phoneDisplay}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-highlight" />
            <a
              href={`mailto:${companyContact.email}`}
              className="break-all transition-colors hover:text-white"
            >
              {companyContact.email}
            </a>
          </p>
          <p className="text-white/60">{companyContact.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Confidence Solution LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
