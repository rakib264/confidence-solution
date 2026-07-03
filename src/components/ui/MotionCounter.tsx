"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type MotionCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
};

const formatter = new Intl.NumberFormat("en-US");

export function MotionCounter({
  end,
  suffix = "",
  prefix = "",
}: MotionCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, end, {
      duration: 1.9,
      ease: "easeOut",
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });

    return () => controls.stop();
  }, [end, inView]);

  return (
    <span ref={ref}>
      {prefix}
      {formatter.format(displayValue)}
      {suffix}
    </span>
  );
}
