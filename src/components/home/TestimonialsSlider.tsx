"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { RevealTitle } from "@/components/ui/RevealTitle";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [loopLimit, setLoopLimit] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const calculateLoopLimit = () => {
      if (!trackRef.current) return;
      setLoopLimit(trackRef.current.scrollWidth / 2);
    };

    calculateLoopLimit();
    window.addEventListener("resize", calculateLoopLimit);
    return () => window.removeEventListener("resize", calculateLoopLimit);
  }, []);

  useAnimationFrame(() => {
    if (isDragging || loopLimit <= 0 || window.innerWidth < 1024) return;

    const current = x.get();
    const next = current <= -loopLimit ? 0 : current - 0.35;
    x.set(next);
  });

  return (
    <section className="section-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="label-caps text-primary">Testimonials</p>
          <RevealTitle
            text="Homeowners and investors trust our delivery"
            className="mx-auto mt-4 max-w-4xl text-[clamp(2.15rem,5.8vw,4rem)] font-light text-foreground"
          />
        </div>

        <div ref={containerRef} className="mt-12 overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{
              left: loopLimit > 0 ? -loopLimit : 0,
              right: 0,
            }}
            style={{ x }}
            className="flex w-max gap-5 pb-2"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {duplicatedTestimonials.map((item, index) => (
              <article
                key={`${item.author}-${index}`}
                className="w-[320px] shrink-0 rounded-2xl border border-border bg-white p-6 shadow-[0_18px_36px_rgba(0,0,0,0.08)] sm:w-[360px]"
              >
                <p className="font-display text-2xl italic leading-relaxed text-foreground/80">
                  “{item.quote}”
                </p>
                <div className="mt-5 flex items-center gap-1 text-[var(--highlight)]">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role} - {item.company}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
