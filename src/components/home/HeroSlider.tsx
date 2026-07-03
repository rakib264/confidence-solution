"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const slides = [
  {
    label: "RESIDENTIAL · DHANMONDI",
    title: "Manab Noor",
    body: "A 7-storey residential building with 16 flats on 6 katha at 195 West Dhanmondi Modubazar — completed in 2018.",
    project: "Manab Noor",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=2200&q=80",
  },
];

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const progressRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const autoplayRef = useRef<gsap.core.Timeline | null>(null);
  const activeIndexRef = useRef(0);

  const resetProgressBars = (targetIndex: number) => {
    progressRefs.current.forEach((bar, index) => {
      if (!bar) return;
      gsap.set(bar, {
        scaleX: index < targetIndex ? 1 : 0,
        transformOrigin: "left center",
      });
    });
  };

  const startAutoplay = (index: number) => {
    const progressBar = progressRefs.current[index];
    const image = imageRefs.current[index];
    const nextIndex = (index + 1) % slides.length;
    if (!progressBar || !image) return;

    autoplayRef.current?.kill();
    gsap.killTweensOf([progressBar, image]);

    gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(image, { scale: 1.02 });

    autoplayRef.current = gsap.timeline({
      defaults: { ease: "none" },
      onComplete: () => moveToSlide(nextIndex),
    });

    autoplayRef.current
      .to(progressBar, { scaleX: 1, duration: 6 }, 0)
      .to(image, { scale: 1.12, duration: 6 }, 0);
  };

  const moveToSlide = (nextIndex: number) => {
    const currentIndex = activeIndexRef.current;
    if (nextIndex === currentIndex) return;

    const currentSlide = slideRefs.current[currentIndex];
    const nextSlide = slideRefs.current[nextIndex];
    const nextImage = imageRefs.current[nextIndex];

    if (!currentSlide || !nextSlide || !nextImage) return;

    autoplayRef.current?.kill();
    gsap.killTweensOf([currentSlide, nextSlide, nextImage]);

    gsap.set(nextSlide, { zIndex: 2 });
    gsap.set(nextImage, { scale: 1.02 });

    gsap.to(currentSlide, {
      opacity: 0,
      duration: 1.1,
      ease: "power2.inOut",
      onComplete: () => gsap.set(currentSlide, { zIndex: 1 }),
    });
    gsap.fromTo(
      nextSlide,
      { opacity: 0 },
      { opacity: 1, duration: 1.1, ease: "power2.inOut" },
    );

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    resetProgressBars(nextIndex);
    startAutoplay(nextIndex);
  };

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      gsap.set(slide, {
        opacity: index === 0 ? 1 : 0,
        zIndex: index === 0 ? 2 : 1,
      });
    });
    progressRefs.current.forEach((bar) => {
      if (!bar) return;
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
    });
    activeIndexRef.current = 0;
    startAutoplay(0);

    return () => {
      autoplayRef.current?.kill();
    };
    // GSAP timeline is intentionally initialized once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGSAP(
    () => {
      imageRefs.current.forEach((image) => {
        if (!image) return;
        gsap.to(image, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="group relative min-h-screen overflow-hidden pt-20"
    >
      <div className="absolute right-6 top-28 z-30 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-sm text-white/80 backdrop-blur md:right-10">
        {(activeIndex + 1).toString().padStart(2, "0")} /{" "}
        {slides.length.toString().padStart(2, "0")}
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.title}
          ref={(element) => {
            slideRefs.current[index] = element;
          }}
          className="absolute inset-0"
        >
          <div
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.68)_12%,rgba(0,0,0,0.45)_52%,rgba(0,0,0,0.2)_100%)]" />

          <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <p className="label-caps-on-dark">{slide.label}</p>
              <h1 className="font-display text-[clamp(3rem,9vw,6rem)] font-medium leading-[0.98] text-white">
                {slide.title}
              </h1>
              <p className="max-w-xl text-[15px] leading-relaxed text-white/75 md:text-lg">
                {slide.body}
              </p>
              <p className="font-label text-[12px] font-medium uppercase tracking-[0.22em] text-white/80">
                {slide.project}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/contact"
                  className="hidden rounded-full border border-white/75 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-foreground sm:inline-flex"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 backdrop-blur transition-all group-hover:opacity-100 md:grid"
        onClick={() =>
          moveToSlide((activeIndex - 1 + slides.length) % slides.length)
        }
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 backdrop-blur transition-all group-hover:opacity-100 md:grid"
        onClick={() => moveToSlide((activeIndex + 1) % slides.length)}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-4 bottom-8 z-30 flex gap-3 sm:inset-x-6 lg:inset-x-8">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            aria-label={`Go to slide ${index + 1}`}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
            onClick={() => moveToSlide(index)}
          >
            <span
              ref={(element) => {
                progressRefs.current[index] = element;
              }}
              className="block h-full w-full origin-left bg-primary"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
