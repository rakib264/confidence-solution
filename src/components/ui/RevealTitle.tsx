"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type RevealTitleProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function RevealTitle({
  text,
  as: Tag = "h2",
  className,
}: RevealTitleProps) {
  const rootRef = useRef<HTMLHeadingElement | null>(null);
  const words = text.trim().split(/\s+/);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal-word]");
      gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 84%",
          },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <Tag
      ref={rootRef}
      className={cn(
        "font-display overflow-hidden leading-[1.02] tracking-tight",
        className,
      )}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          data-reveal-word
          className="mr-[0.22em] inline-block"
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
