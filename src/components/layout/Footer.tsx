import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import confidenceLogo from "@/assets/logo/confidence.jpeg";

export function Footer() {
  return (
    <footer className="mt-20 bg-foreground text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="relative h-16 w-44 overflow-hidden rounded-md border border-border/40 bg-card/10">
            <Image
              src={confidenceLogo}
              alt="Confidence Solution LTD. logo"
              fill
              className="object-cover"
              sizes="176px"
            />
          </div>
          <p className="font-serif text-lg font-bold text-neutral-100">Confidence Solution LTD.</p>
          <p className="text-sm text-neutral-300">
            Premium real estate development and building construction across Saudi Arabia and the wider GCC region.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Quick Links</h3>
          <div className="space-y-2 text-sm text-neutral-300">
            {["About", "Projects", "Services", "Blog", "Clients", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="block hover:text-accent">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Services</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>Real Estate Development</li>
            <li>Design & Build Delivery</li>
            <li>Commercial Asset Construction</li>
            <li>Project & Investor Management</li>
          </ul>
        </div>
        <div className="space-y-3 text-sm text-neutral-300">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Contact</h3>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Riyadh, Kingdom of Saudi Arabia</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +966 55 800 2450</p>
          <div className="flex gap-3 pt-2">
            {[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
              <span key={i} className="grid h-9 w-9 place-items-center rounded-[var(--radius)] border border-neutral-400/35 text-neutral-200">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-400/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-neutral-300 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Confidence Solution LTD. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
