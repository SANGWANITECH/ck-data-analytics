"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ServiceIcon } from "@/components/site/service-icon";
import { AnalyticsChart } from "@/components/site/analytics-chart";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="navy"
        label="OUR SERVICES"
        title="What We Do"
        description="End-to-end research and data solutions tailored to your needs. From field collection to final report, we handle the complexity so you can focus on decisions."
      />
      <ServicesTabs />
      <CTASection />
    </>
  );
}

/* ======================= TABS + CONTENT ======================= */
function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        {/* Tabs */}
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center mb-12 sm:mb-16 scrollbar-hide">
            {services.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  className={`shrink-0 flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-emerald text-white border-emerald shadow-[0_8px_20px_-6px_rgba(5,150,105,0.45)]"
                      : "bg-white text-warmgray border-[rgba(0,0,0,0.1)] hover:border-emerald/50 hover:text-emerald"
                  }`}
                >
                  <ServiceIcon icon={s.icon} className="h-4 w-4" />
                  {s.shortTitle || s.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Content */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald">
                    <ServiceIcon icon={active.icon} className="h-5 w-5" />
                  </span>
                  <span className="label">{active.label}</span>
                </div>

                <h2 className="h2 text-navy">{active.title}</h2>

                <p className="body-text text-warmgray leading-relaxed">
                  {active.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-col gap-3.5 mt-2">
                  {active.capabilities.map((cap, i) => (
                    <motion.div
                      key={cap}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-emerald" strokeWidth={2.5} />
                      </span>
                      <span className="text-[15px] text-charcoal leading-relaxed">
                        {cap}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {active.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald text-[12px] font-semibold tracking-wide"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_-30px_rgba(15,23,42,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-transparent pointer-events-none" />
                <ServiceVisual id={active.id} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ======================= VISUALS ======================= */
function ServiceVisual({ id }: { id: string }) {
  if (id === "analytics") {
    return <AnalyticsChart />;
  }

  const visuals: Record<string, React.ReactNode> = {
    research: (
      <svg viewBox="0 0 240 180" className="w-full h-full max-w-[260px]" fill="none">
        {/* Document */}
        <rect x="40" y="28" width="160" height="124" rx="10" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
        <rect x="40" y="28" width="160" height="28" rx="10" fill="currentColor" opacity="0.06" />
        
        {/* Lines */}
        <line x1="60" y1="78" x2="180" y2="78" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <line x1="60" y1="98" x2="160" y2="98" stroke="currentColor" strokeWidth="1.5" opacity="0.28" />
        <line x1="60" y1="118" x2="170" y2="118" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <line x1="60" y1="138" x2="140" y2="138" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />

        {/* Magnifier */}
        <circle cx="175" cy="135" r="18" stroke="currentColor" strokeWidth="1.8" opacity="0.45" />
        <line x1="188" y1="148" x2="202" y2="162" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        
        {/* Accent dots */}
        <circle cx="70" cy="42" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="82" cy="42" r="3" fill="currentColor" opacity="0.25" />
        <circle cx="94" cy="42" r="3" fill="currentColor" opacity="0.15" />
      </svg>
    ),

    collection: (
      <svg viewBox="0 0 240 180" className="w-full h-full max-w-[260px]" fill="none">
        {/* Phone / Device */}
        <rect x="78" y="22" width="84" height="136" rx="12" stroke="currentColor" strokeWidth="1.6" opacity="0.3" />
        <rect x="88" y="38" width="64" height="90" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.22" />
        
        {/* Screen content */}
        <rect x="96" y="48" width="48" height="6" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="96" y="62" width="36" height="6" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="96" y="76" width="42" height="6" rx="2" fill="currentColor" opacity="0.18" />
        
        {/* Signal waves */}
        <path d="M175 55 C185 65, 185 85, 175 95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" fill="none" />
        <path d="M185 45 C200 60, 200 90, 185 105" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="none" />
        
        {/* Location pin */}
        <circle cx="120" cy="115" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="120" cy="115" r="3" fill="currentColor" opacity="0.5" />
        
        {/* Bottom dots */}
        <circle cx="105" cy="145" r="3.5" fill="currentColor" opacity="0.25" />
        <circle cx="120" cy="145" r="3.5" fill="currentColor" opacity="0.4" />
        <circle cx="135" cy="145" r="3.5" fill="currentColor" opacity="0.25" />
      </svg>
    ),

    technology: (
      <svg viewBox="0 0 240 180" className="w-full h-full max-w-[260px]" fill="none">
        {/* Outer frame */}
        <rect x="35" y="30" width="170" height="120" rx="12" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
        
        {/* Inner screen */}
        <rect x="50" y="48" width="140" height="75" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
        
        {/* Circuit / nodes */}
        <circle cx="80" cy="75" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <circle cx="120" cy="65" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <circle cx="160" cy="80" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <circle cx="145" cy="105" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        
        {/* Connecting lines */}
        <line x1="86" y1="75" x2="114" y2="65" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <line x1="126" y1="65" x2="154" y2="80" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <line x1="80" y1="81" x2="100" y2="94" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <line x1="120" y1="71" x2="100" y2="94" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <line x1="160" y1="86" x2="145" y2="99" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        
        {/* Bottom bar */}
        <rect x="90" y="138" width="60" height="6" rx="3" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full flex items-center justify-center text-emerald"
    >
      {visuals[id] || visuals.research}
    </motion.div>
  );
}

/* ======================= CTA ======================= */
function CTASection() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-page">
        <Reveal className="flex flex-col items-center text-center gap-6">
          <h2 className="h2 text-white max-w-[600px] text-balance">
            Discuss your project with us
          </h2>
          <p className="body-text text-white/70 max-w-[480px]">
            Not sure which services you need? We will help you figure out the
            right approach.
          </p>
          <Link href="/contact/" className="btn-primary mt-2">
            Contact our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}