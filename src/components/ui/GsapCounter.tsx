"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type GsapCounterProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
};

const formatter = new Intl.NumberFormat("en-US");

export function GsapCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
  className,
}: GsapCounterProps) {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          const rounded =
            decimals > 0
              ? Number(counter.value.toFixed(decimals))
              : Math.round(counter.value);
          const formatted =
            decimals > 0
              ? rounded.toLocaleString("en-US", {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
                })
              : formatter.format(rounded);
          if (valueRef.current) {
            valueRef.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <span ref={rootRef} className={className}>
      <span ref={valueRef}>
        {prefix}
        {formatter.format(0)}
        {suffix}
      </span>
    </span>
  );
}
