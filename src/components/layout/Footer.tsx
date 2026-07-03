import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { companyContact } from "@/lib/data/company";
import confidenceLogo from "@/assets/logo/confidence.jpeg";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  // { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const coreServices = [
  "Real Estate Development",
  "High-Rise Construction",
  "Interior Fit-Out",
  "Architecture & Design",
  "Project Management",
  "Land Acquisition & Advisory",
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
            Building Tomorrow&apos;s Skyline, Today - premium high-rise living and
            corporate developments across Bangladesh.
          </p>
          <div className="flex gap-3">
            {[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white/80 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
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
            {coreServices.map((service) => (
              <li key={service}>{service}</li>
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
              className="transition-colors hover:text-white"
            >
              {companyContact.email}
            </a>
          </p>
          <div className="space-y-2 pt-2">
            <p className="label-caps text-white">Newsletter</p>
            <div className="group flex overflow-hidden rounded-full border border-white/25 bg-white/5 transition-colors focus-within:border-primary">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/45 focus:outline-none"
              />
              <button className="bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform group-hover:translate-x-0.5">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Confidence Solution LTD. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="transition-colors hover:text-highlight">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/contact" className="transition-colors hover:text-highlight">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
