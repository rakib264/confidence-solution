"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    tag: "Vision 2030 Aligned Delivery",
    title: "Landmark Projects Across the Kingdom",
    body: "Confidence Solution LTD. delivers residential, commercial, and institutional assets with institutional-grade governance and engineering depth.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
  },
  {
    tag: "Decades of Engineering Excellence",
    title: "End-to-End Construction and Development",
    body: "From planning and approvals to final handover, our multidisciplinary teams execute with precision for Saudi and GCC investors.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
  },
  {
    tag: "Trusted by Public & Private Stakeholders",
    title: "Built for Investors, Developers, and Government Bodies",
    body: "We align design intent, commercial outcomes, and schedule certainty so every development moves from concept to confidence.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
  },
];

export function HeroSlider() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="pt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500 }}
        className="h-[80vh] min-h-[620px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-full">
              <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={reducedMotion ? undefined : { opacity: 0, y: 26 }}
                  animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl space-y-6 rounded-xl bg-black/40 p-6 shadow-2xl backdrop-blur-[2px] md:p-8"
                >
                  <p className="inline-flex rounded-full border border-primary/60 bg-primary/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-100">
                    {slide.tag}
                  </p>
                  <h1 className="font-serif text-5xl font-black leading-tight text-white drop-shadow-lg md:text-6xl">{slide.title}</h1>
                  <p className="max-w-xl text-base text-neutral-100 drop-shadow md:text-lg">{slide.body}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/projects" className="rounded-[var(--radius)] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                      Explore Landmark Projects
                    </Link>
                    <Link href="/contact" className="rounded-[var(--radius)] border border-neutral-200/80 bg-black/25 px-5 py-3 text-sm font-semibold text-neutral-100">
                      Talk to Confidence Solution LTD.
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
