import Link from "next/link";
import { ArrowRight, FileSearch, Search, LineChart } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { ProcessFlowLine } from "@/components/site/process-flow-line";
import { insights } from "@/content/insights";

const methodology = [
  {
    num: "01",
    icon: Search,
    title: "Design",
    description:
      "We define the research question, sampling approach, and instruments before any data is collected.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Collect",
    description:
      "Trained enumerators gather data using digital tools, with quality checks built into every step.",
  },
  {
    num: "03",
    icon: LineChart,
    title: "Analyze",
    description:
      "Clean, verified data becomes a report or dashboard, built to be understood and acted on.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        variant="navy"
        label="INSIGHTS & PUBLICATIONS"
        title="Our Work"
        description="Evidence-based research and data stories from our projects."
      />
      <Methodology />
      <FeaturedWork />
      <CTASection />
    </>
  );
}

/* ======================= METHODOLOGY ======================= */
function Methodology() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <Reveal className="text-center mb-14 flex flex-col items-center gap-4">
          <span className="label">How we work</span>
          <h2 className="h2 text-navy max-w-[560px] text-balance">
            Every project follows the same disciplined process
          </h2>
        </Reveal>

        <div className="relative">
          <ProcessFlowLine />

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {methodology.map((step) => (
              <StaggerItem key={step.num}>
                <div className="group relative flex flex-col gap-5 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.12)]">
                  <div className="flex items-center gap-4">
                    <span className="text-[42px] font-bold leading-none text-emerald transition-transform duration-300 group-hover:scale-105">
                      {step.num}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald transition-all duration-300 group-hover:bg-emerald group-hover:text-white">
                      <step.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div>
                    <h3 className="h3 text-navy mb-2">{step.title}</h3>
                    <p className="body-text text-warmgray text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ======================= FEATURED WORK ======================= */
function FeaturedWork() {
  return (
    <section className="section-pad bg-card">
      <div className="container-page">
        <Reveal className="text-center mb-14 flex flex-col items-center gap-4">
          <span className="label">Featured work</span>
          <h2 className="h2 text-navy max-w-[560px] text-balance">
            Published research and ongoing studies
          </h2>
        </Reveal>

        {insights.length === 0 ? (
          <EmptyState />
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {insights.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}

/* ======================= PROJECT CARD ======================= */
function ProjectCard({ project }: { project: (typeof insights)[0] }) {
  const statusLabel = {
    planned: "Planned",
    "in-progress": "In Progress",
    published: "Published",
  }[project.status];

  const statusClass = {
    planned: "bg-[rgba(0,0,0,0.05)] text-warmgray",
    "in-progress": "bg-[rgba(217,119,6,0.12)] text-amber-700",
    published: "bg-emerald-50 text-emerald",
  }[project.status];

  const content = (
    <div className="group relative flex h-full flex-col gap-5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/35 hover:shadow-[0_22px_44px_-20px_rgba(15,23,42,0.15)]">
      {/* Category + Status */}
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald text-[12px] font-semibold uppercase tracking-[0.04em]">
          {project.category}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] ${statusClass}`}
        >
          {statusLabel}
        </span>
      </div>

      {/* Title + Description */}
      <div className="flex flex-col gap-3">
        <h3 className="h3 text-navy transition-colors duration-300 group-hover:text-emerald">
          {project.title}
        </h3>
        <p className="body-text text-warmgray text-[15px] leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-1">
        {project.href ? (
          <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-emerald transition-all duration-300 group-hover:gap-2.5">
            Read more
            <ArrowRight className="h-4 w-4" />
          </span>
        ) : (
          <span className="text-[13px] text-warmgray/70">Coming soon</span>
        )}
      </div>
    </div>
  );

  return project.href ? (
    <Link href={project.href} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}

/* ======================= EMPTY STATE ======================= */
function EmptyState() {
  return (
    <Reveal className="flex flex-col items-center text-center gap-6 max-w-[480px] mx-auto py-10">
      <div className="relative flex items-center justify-center h-20 w-20">
        <span className="absolute inset-0 rounded-full bg-emerald/10 animate-ping [animation-duration:2.5s]" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald">
          <FileSearch className="h-6 w-6" />
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="h3 text-navy">No published research yet</h3>
        <p className="body-text text-warmgray text-[15px]">
          We’re currently working on our first studies. Follow us for updates.
        </p>
      </div>

      <a
        href="https://linkedin.com/company/ckdataanalytics"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-1"
      >
        Follow our progress on LinkedIn
      </a>
    </Reveal>
  );
}

/* ======================= CTA ======================= */
function CTASection() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-page">
        <Reveal className="flex flex-col items-center text-center gap-6">
          <h2 className="h2 text-white max-w-[600px] text-balance">
            Have a research question of your own?
          </h2>
          <p className="body-text text-white/70 max-w-[480px]">
            Tell us what you are trying to learn, and we will help you design
            the right study to answer it.
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