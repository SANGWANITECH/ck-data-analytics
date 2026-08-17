"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StatCounter } from "@/components/site/stat-counter";

interface Stat {
  value: string;
  label: string;
  detail: string;
}

export function StatCardInteractive({ stats }: { stats: Stat[] }) {
  const [active, setActive] = useState<number | null>(null);
  const activeStat = active !== null ? stats[active] : null;

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="label">Snapshot</span>
        <span className="h-2 w-2 rounded-full bg-gold" />
      </div>

      <div className="grid grid-cols-2 gap-5 sm:gap-6 py-6 sm:py-8">
        {stats.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            className={`flex flex-col gap-1 rounded-btn -m-2 p-2 text-left transition-colors duration-200 ${
              active === i ? "bg-emerald-tint" : "hover:bg-paper"
            }`}
          >
            <StatCounter value={s.value} label={s.label} />
          </button>
        ))}
      </div>

      <div className="rounded-btn border border-[rgba(0,0,0,0.08)] bg-paper p-4 sm:p-5 min-h-[64px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={active === null ? "default" : activeStat?.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-[13px] sm:text-[14px] leading-[1.6] text-charcoal"
          >
            {activeStat
              ? activeStat.detail
              : "From study design to field collection to analysis, built for Malawi, not bolted on. Tap a number to learn more."}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}