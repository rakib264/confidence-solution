"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ end, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-4xl font-bold md:text-5xl">
        {inView ? <CountUp end={end} duration={2.3} /> : 0}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest opacity-90">{label}</p>
    </div>
  );
}
