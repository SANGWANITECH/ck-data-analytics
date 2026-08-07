"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ProcessFlowLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 4"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 right-0 top-[42px] hidden md:block w-full h-1"
      aria-hidden="true"
    >
      <motion.line
        x1="17"
        y1="2"
        x2="83"
        y2="2"
        stroke="#059669"
        strokeWidth="0.3"
        strokeDasharray="1.6 1.6"
        strokeLinecap="round"
        opacity="0.45"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}