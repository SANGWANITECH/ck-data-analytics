import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HeroReveal, Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { GeometricPattern } from "@/components/site/geometric-pattern";
import { ServiceIcon } from "@/components/site/service-icon";
import { SectionHeader } from "@/components/site/section-header";
import { StatCounter } from "@/components/site/stat-counter";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { whyComparisons } from "@/content/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyCKData />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-[72px]">
      <div className="absolute inset-0 -z-10 opacity-90">
        <GeometricPattern pattern="hero" />
      </div>
      <div className="container-page grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:py-28 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6 sm:gap-7">
          <HeroReveal delay={0}>
            <span className="label">{site.tagline}</span>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="display max-w-[640px] text-balance text-navy">
              Reliable data. Trusted insights. Better decisions.
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <p className="body-text max-w-[520px] text-warmgray">
              CK Data & Analytics is a Malawian research and data solutions
              firm. We help government, NGOs, and private sector partners turn
              questions into evidence, and evidence into decisions.
            </p>
          </HeroReveal>
          <HeroReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/services/"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Explore our services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/insights/"
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                View our work
              </Link>
            </div>
          </HeroReveal>
        </div>

        <HeroReveal delay={0.25} className="relative">
          <div className="w-full max-w-[420px] rounded-card border border-[rgba(0,0,0,0.08)] bg-card p-6 sm:p-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] mx-auto">
            <StatCard />
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}

function StatCard() {
  const stats = [
    { value: "4", label: "Service areas" },
    { value: "1", label: "Sectors served" },
    { value: "2", label: "Studies in progress" },
    { value: "100%", label: "Local context" },
  ];
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="label">Snapshot</span>
        <span className="h-2 w-2 rounded-full bg-gold" />
      </div>
      <div className="grid grid-cols-2 gap-5 sm:gap-6 py-6 sm:py-8">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
      <div className="rounded-btn border border-[rgba(0,0,0,0.08)] bg-paper p-4 sm:p-5">
        <p className="text-[13px] sm:text-[14px] leading-[1.6] text-charcoal">
          From study design to field collection to analysis, built for
          Malawi, not bolted on.
        </p>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="bg-navy py-8 sm:py-10">
      <div className="container-page flex flex-col items-center gap-5 sm:gap-6 text-center">
        <Reveal>
          <p className="max-w-[680px] text-[15px] sm:text-[16px] leading-[1.6] text-white/75">
            Trusted by government institutions, NGOs, and private sector
            partners across Malawi.
          </p>
        </Reveal>
        <Stagger className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3" gap={0.06}>
          {site.sectors.map((sector) => (
            <StaggerItem key={sector}>
              <span className="inline-flex items-center rounded-pill border border-white/15 bg-white/5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.1em] text-white/85">
                {sector}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <SectionHeader
          label="What we do"
          title="Four ways we help you act on evidence"
          description="Each service stands on its own, but most projects draw on several, so your data moves cleanly from collection to decision."
        />
        <Stagger className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <Link
                href="/services/"
                className="card-base card-hover group flex h-full flex-col gap-5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-btn bg-emerald-50 text-emerald transition-transform duration-300 group-hover:scale-105">
                  <ServiceIcon icon={s.icon} className="h-6 w-6" />
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="h3 text-navy">{s.shortTitle || s.title}</h3>
                  <p className="body-text text-warmgray text-[15px]">{s.shortDescription || s.description}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-emerald transition-transform group-hover:translate-x-1">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function WhyCKData() {
  return (
    <section className="section-pad bg-card">
      <div className="container-page grid grid-cols-1 gap-12 lg:gap-20 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <span className="label">Why CK Data</span>
          <h2 className="h2 text-balance text-navy">
            Malawi has no shortage of data. The gap is in turning it into
            decisions.
          </h2>
          <p className="body-text text-warmgray">
            Surveys are run, reports are written, and datasets sit unused.
            Institutions that need evidence most often lack the time, tools, or
            expertise to analyse what they already hold. CK Data &
            Analytics exists to close that gap, with rigorous methods, the
            right technology, and a focus on outputs people can actually use.
          </p>
          <p className="body-text text-warmgray">
            We are local, built for Malawian contexts, and committed to
            open-source tools so your team keeps control of its own data.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-base overflow-hidden p-0">
            <div className="grid grid-cols-2 border-b border-[rgba(0,0,0,0.08)] bg-paper">
              <div className="p-4 sm:p-5">
                <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-warmgray">
                  The challenge
                </span>
              </div>
              <div className="border-l border-[rgba(0,0,0,0.08)] p-4 sm:p-5">
                <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-emerald">
                  Our solution
                </span>
              </div>
            </div>
            <Stagger className="flex flex-col">
              {whyComparisons.map((row, i) => (
                <StaggerItem key={i}>
                  <div className="grid grid-cols-2 border-b border-[rgba(0,0,0,0.06)] last:border-b-0">
                    <div className="p-4 sm:p-5 text-[13px] sm:text-[14px] leading-[1.55] text-warmgray">
                      {row.challenge}
                    </div>
                    <div className="flex items-start gap-2 sm:gap-2.5 border-l border-[rgba(0,0,0,0.08)] p-4 sm:p-5 text-[13px] sm:text-[14px] leading-[1.55] text-charcoal">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <span>{row.solution}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-6 sm:gap-7 rounded-card border border-[rgba(0,0,0,0.08)] bg-navy px-6 sm:px-8 py-12 sm:py-16 text-center md:px-16">
          <span className="label-light">Get in touch</span>
          <h2 className="h2 max-w-[640px] text-balance text-white">
            Ready to make decisions based on reliable evidence?
          </h2>
          <p className="max-w-[480px] text-[15px] sm:text-[16px] leading-[1.6] text-white/70">
            Tell us about your project, your questions, or the data you already
            hold. We will help you figure out the most useful next step.
          </p>
          <Link href="/contact/" className="btn-primary w-full sm:w-auto justify-center">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}