"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const bars = [
  { x: 20, height: 40, opacity: 0.15 },
  { x: 60, height: 70, opacity: 0.25 },
  { x: 100, height: 100, opacity: 0.35 },
  { x: 140, height: 85, opacity: 0.2 },
];

export function AnalyticsChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 160"
      className="w-full h-full max-w-[200px] text-emerald"
      fill="none"
    >
      {bars.map((bar, i) => (
        <motion.rect
          key={bar.x}
          x={bar.x}
          width={30}
          rx={2}
          fill="currentColor"
          opacity={bar.opacity}
          initial={{ height: 0, y: 140 }}
          animate={inView ? { height: bar.height, y: 140 - bar.height } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <line
        x1="10"
        y1="140"
        x2="190"
        y2="140"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}