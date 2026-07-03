"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { closeMobileMenu, toggleMobileMenu } from "@/lib/store/uiSlice";
import { cn } from "@/lib/utils";
import confidenceLogo from "@/assets/logo/confidence.jpeg";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);

      if (currentY <= 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 8) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [dispatch, pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: visible ? 0 : -112 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-neutral-900/10 bg-white/90 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            : "border-white/15 bg-transparent",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center px-4 transition-all sm:px-6 lg:px-8",
            scrolled ? "h-[4.5rem]" : "h-24",
          )}
        >
          <Link href="/" className="flex min-w-0 flex-1 items-center gap-2.5 sm:mr-8 sm:flex-initial sm:gap-3">
            <div
              className={cn(
                "relative h-10 w-10 shrink-0 overflow-hidden rounded-full border transition-colors sm:h-11 sm:w-11",
                scrolled
                  ? "border-neutral-900/15 bg-card"
                  : "border-white/40 bg-black/20",
              )}
            >
              <Image
                src={confidenceLogo}
                alt="Confidence Solution LTD. logo"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div className="min-w-0">
              <p
                className={cn(
                  "truncate font-display text-[15px] font-semibold leading-tight sm:text-2xl sm:leading-none",
                  scrolled ? "text-foreground" : "text-white",
                )}
              >
                Confidence Solution LTD.
              </p>
              <p
                className={cn(
                  "label-caps mt-0.5 hidden text-[9px] sm:block sm:mt-1",
                  scrolled ? "text-muted-foreground" : "text-white/75",
                )}
              >
                Building Tomorrow&apos;s Skyline
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative pb-1 text-[14px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                    active && "after:scale-x-100",
                    scrolled
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_-14px_var(--primary)] transition-all hover:-translate-y-0.5"
            >
              Schedule a Visit
            </Link>
          </div>

          <button
            className={cn(
              "ml-2 grid h-10 w-10 shrink-0 place-items-center rounded-full border sm:ml-auto lg:hidden",
              scrolled
                ? "border-neutral-900/15 bg-white/70 text-foreground"
                : "border-white/40 bg-black/20 text-white",
            )}
            aria-label="Toggle mobile menu"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close mobile menu"
              className="absolute inset-0 bg-black/55"
              onClick={() => dispatch(closeMobileMenu())}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-neutral-950/95 px-7 pb-10 pt-7 text-white backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl">Menu</p>
                <button
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25"
                  aria-label="Close menu"
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 space-y-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + index * 0.07, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-2xl font-medium text-white/90"
                      onClick={() => dispatch(closeMobileMenu())}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-auto"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  Schedule a Visit
                </Link>
              </motion.div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
