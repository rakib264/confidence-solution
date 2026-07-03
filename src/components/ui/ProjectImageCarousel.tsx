"use client";

import { useId, useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  FreeMode,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/lib/types";
import { projectImageKey } from "@/lib/utils/project-image";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";

type ProjectImageCarouselProps = {
  images: ProjectImage[];
  title: string;
  variant?: "hero" | "card";
  className?: string;
  onExpand?: (index: number) => void;
  overlay?: ReactNode;
};

function CarouselImage({
  image,
  alt,
  priority,
  sizes,
  kenBurns,
}: {
  image: ProjectImage;
  alt: string;
  priority?: boolean;
  sizes: string;
  kenBurns?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover object-center",
          kenBurns && "carousel-kenburns",
        )}
        sizes={sizes}
      />
    </div>
  );
}

function ThumbButton({
  image,
  alt,
  active,
  onClick,
  layout,
}: {
  image: ProjectImage;
  alt: string;
  active: boolean;
  onClick: () => void;
  layout: "horizontal" | "vertical";
}) {
  return (
    <button
      type="button"
      aria-label={alt}
      onClick={onClick}
      className={cn(
        "group/thumb relative overflow-hidden transition-all duration-500",
        layout === "vertical"
          ? "aspect-[4/5] w-full rounded-xl"
          : "aspect-[5/4] w-[4.5rem] shrink-0 rounded-lg sm:w-[5.25rem]",
        active
          ? "ring-2 ring-[var(--highlight)] ring-offset-2 ring-offset-[#0a0e14] brightness-100"
          : "opacity-55 ring-1 ring-white/10 brightness-90 hover:opacity-85",
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover/thumb:scale-105"
        sizes="96px"
      />
      {active ? (
        <span className="absolute inset-0 bg-[var(--highlight)]/10" />
      ) : null}
    </button>
  );
}

export function ProjectImageCarousel({
  images,
  title,
  variant = "hero",
  className,
  onExpand,
  overlay,
}: ProjectImageCarouselProps) {
  const uid = useId();
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const isHero = variant === "hero";
  const singleImage = images.length === 1;
  const progress = ((activeIndex + 1) / images.length) * 100;

  const goTo = (index: number) => {
    if (!mainSwiper) return;
    if (mainSwiper.params.loop) {
      mainSwiper.slideToLoop(index);
      return;
    }
    mainSwiper.slideTo(index);
  };

  const stage = (
    <div
      className={cn(
        "relative overflow-hidden",
        isHero
          ? "h-[62vh] rounded-none sm:h-[68vh] lg:h-[74vh] lg:rounded-[1.35rem]"
          : "aspect-[5/4] rounded-t-2xl sm:aspect-[4/3]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-[15] shadow-[inset_0_0_120px_rgba(0,0,0,0.28)]" />

      <Swiper
        modules={isHero ? [EffectCreative, Autoplay] : [EffectFade, Autoplay]}
        onSwiper={setMainSwiper}
        effect={isHero ? "creative" : "fade"}
        creativeEffect={
          isHero
            ? {
                prev: {
                  shadow: false,
                  translate: ["-14%", 0, -220],
                  scale: 0.9,
                  opacity: 0.45,
                },
                next: {
                  translate: ["14%", 0, -220],
                  scale: 0.9,
                  opacity: 0.45,
                },
              }
            : undefined
        }
        fadeEffect={!isHero ? { crossFade: true } : undefined}
        speed={isHero ? 980 : 820}
        loop={!singleImage}
        autoplay={
          singleImage
            ? false
            : {
                delay: isHero ? 6000 : 4200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={cn(
            "h-full w-full",
            isHero && "h-[62vh] sm:h-[68vh] lg:h-[74vh]",
        )}
      >
        {images.map((image, index) => (
          <SwiperSlide key={projectImageKey(image, index)}>
            <div className="relative h-full w-full">
              <CarouselImage
                image={image}
                alt={`${title} photo ${index + 1}`}
                priority={index === 0}
                kenBurns={!singleImage}
                sizes={isHero ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              />
              <div
                className={cn(
                  "absolute inset-0",
                  isHero
                    ? "bg-[linear-gradient(180deg,rgba(8,12,18,0.15)_0%,rgba(8,12,18,0.35)_42%,rgba(8,12,18,0.92)_100%)]"
                    : "bg-[linear-gradient(180deg,transparent_35%,rgba(10,14,20,0.88)_100%)]",
                )}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {overlay ? (
        <div className="pointer-events-none absolute inset-0 z-20">{overlay}</div>
      ) : null}

      {!singleImage ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => mainSwiper?.slidePrev()}
            className={cn(
              "absolute top-1/2 z-30 grid -translate-y-1/2 place-items-center rounded-2xl border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-black/50",
              isHero
                ? "left-4 h-12 w-12 sm:left-6 sm:h-14 sm:w-14"
                : "left-3 h-10 w-10 opacity-0 group-hover/carousel:opacity-100",
            )}
          >
            <ChevronLeft className={isHero ? "h-5 w-5" : "h-4 w-4"} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => mainSwiper?.slideNext()}
            className={cn(
              "absolute top-1/2 z-30 grid -translate-y-1/2 place-items-center rounded-2xl border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-black/50",
              isHero
                ? "right-4 h-12 w-12 sm:right-6 sm:h-14 sm:w-14"
                : "right-3 h-10 w-10 opacity-0 group-hover/carousel:opacity-100",
            )}
          >
            <ChevronRight className={isHero ? "h-5 w-5" : "h-4 w-4"} />
          </button>
        </>
      ) : null}

      <div
        className={cn(
          "absolute z-30 flex items-center gap-2",
          isHero ? "right-5 top-5 sm:right-7 sm:top-7" : "right-3 top-3",
        )}
      >
        <div className="rounded-2xl border border-white/12 bg-black/35 px-3 py-2 backdrop-blur-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
            Gallery
          </p>
          <p className="mt-0.5 font-display text-sm text-white">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="text-white/45"> / </span>
            {String(images.length).padStart(2, "0")}
          </p>
        </div>
        {onExpand ? (
          <button
            type="button"
            aria-label="Open gallery"
            onClick={() => onExpand(activeIndex)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-black/35 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/30 hover:bg-black/50 sm:h-12 sm:w-12"
          >
            <Expand className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {!singleImage ? (
        <div className="absolute inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6 sm:pb-5">
          <div className="h-px w-full bg-white/12">
            <div
              className="h-px bg-[var(--highlight)] transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {!isHero && images.length <= 8 ? (
            <div className="mt-3 flex justify-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={`${uid}-seg-${index}`}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    activeIndex === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/35 hover:bg-white/60",
                  )}
                />
              ))}
            </div>
          ) : !isHero ? (
            <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              Swipe to explore
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );

  if (isHero) {
    return (
      <div
        className={cn(
          "project-carousel project-carousel--hero group/carousel",
          className,
        )}
      >
        <div className="lg:rounded-[1.85rem] lg:border lg:border-white/10 lg:bg-[#080c12] lg:p-3 lg:shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="min-w-0 flex-1">{stage}</div>

            {!singleImage ? (
              <div className="hidden max-h-[74vh] w-[5.5rem] shrink-0 flex-col gap-2 overflow-y-auto px-1 py-1 lg:flex xl:w-[6.25rem]">
                {images.map((image, index) => (
                  <ThumbButton
                    key={`${projectImageKey(image, index)}-v`}
                    image={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    active={activeIndex === index}
                    onClick={() => goTo(index)}
                    layout="vertical"
                  />
                ))}
              </div>
            ) : null}
          </div>

          {!singleImage ? (
            <div className="mt-3 px-1 lg:hidden">
              <Swiper
                modules={[FreeMode]}
                freeMode
                slidesPerView="auto"
                spaceBetween={8}
                className="project-carousel-thumbs-mobile"
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={`${projectImageKey(image, index)}-m`}
                    className="!w-auto"
                  >
                    <ThumbButton
                      image={image}
                      alt={`${title} thumbnail ${index + 1}`}
                      active={activeIndex === index}
                      onClick={() => goTo(index)}
                      layout="horizontal"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "project-carousel project-carousel--card group/carousel",
        className,
      )}
    >
      {stage}
    </div>
  );
}
