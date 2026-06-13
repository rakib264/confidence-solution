"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import "swiper/css";

export function TestimonialsSlider() {
  return (
    <section className="section-pattern bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by Investors, Developers, and Public Stakeholders"
          subtitle="Our partners value Confidence Solution LTD. for governance discipline, quality execution, and dependable outcomes."
          align="center"
        />
        <div className="mt-12">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} spaceBetween={20} breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}>
            {testimonials.map((item) => (
              <SwiperSlide key={item.author}>
                <article className="h-full rounded-xl border border-border bg-card p-6 shadow-md">
                  <p className="font-serif text-base italic text-muted-foreground">“{item.quote}”</p>
                  <div className="mt-5 flex items-center gap-1 text-accent">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <Image src={item.avatar} alt={item.author} width={46} height={46} className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold">{item.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
