"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { closeMobileMenu, toggleMobileMenu } from "@/lib/store/uiSlice";
import { cn } from "@/lib/utils";
import confidenceLogo from "@/assets/logo/confidence.jpeg";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-all",
        scrolled && "shadow-md",
      )}
    >
      <nav className={cn("mx-auto flex max-w-7xl items-center px-4 transition-all sm:px-6 lg:px-8", scrolled ? "h-16" : "h-20")}>
        <Link href="/" className="mr-8 flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-md border border-border bg-card">
            <Image
              src={confidenceLogo}
              alt="Confidence Solution LTD. logo"
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div>
            <p className="font-serif text-lg font-bold leading-none text-foreground">Confidence Solution LTD.</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Development & Real Estate</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="tel:+966558002450"
            aria-label="Call Confidence Solution LTD."
            className="grid h-10 w-10 place-items-center rounded-[var(--radius)] border border-border bg-card text-primary transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md">
            Request Proposal
          </Link>
        </div>

        <button
          className="ml-auto grid h-10 w-10 place-items-center rounded-[var(--radius)] border border-border lg:hidden"
          aria-label="Toggle mobile menu"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="h-[calc(100vh-5rem)] space-y-4 border-t border-border bg-card p-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-[var(--radius)] px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
              onClick={() => dispatch(closeMobileMenu())}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex rounded-[var(--radius)] bg-primary px-4 py-2 font-semibold text-primary-foreground"
            onClick={() => dispatch(closeMobileMenu())}
          >
            Request Proposal
          </Link>
        </div>
      ) : null}
    </header>
  );
}
