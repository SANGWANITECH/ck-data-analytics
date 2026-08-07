"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const match = value.match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numericTarget, {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, numericTarget]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-[36px] font-bold leading-none text-gold">
        {display}
        {suffix}
      </span>
      <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-warmgray">
        {label}
      </span>
    </div>
  );
}