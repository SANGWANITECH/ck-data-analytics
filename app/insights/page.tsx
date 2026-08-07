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
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((step) => (
              <StaggerItem key={step.num}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[40px] font-bold leading-none text-emerald">
                      {step.num}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-btn bg-emerald-tint text-emerald">
                      <step.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="h3 text-navy">{step.title}</h3>
                  <p className="body-text text-warmgray">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

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
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

function ProjectCard({ project }: { project: (typeof insights)[0] }) {
  const statusLabel = {
    planned: "Planned",
    "in-progress": "In Progress",
    published: "Published",
  }[project.status];

  const statusClass = {
    planned: "bg-[rgba(0,0,0,0.05)] text-warmgray",
    "in-progress": "bg-[rgba(217,119,6,0.1)] text-gold",
    published: "bg-emerald-tint text-emerald",
  }[project.status];

  const content = (
    <div className="card-base card-hover flex h-full flex-col gap-4">
      <span className="inline-flex w-fit items-center px-3 py-1.5 rounded-pill bg-emerald-tint text-emerald text-[12px] font-semibold uppercase tracking-[0.05em]">
        {project.category}
      </span>
      <h3 className="h3 text-navy">{project.title}</h3>
      <p className="body-text text-warmgray text-[15px]">{project.description}</p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-pill text-[11px] font-semibold uppercase tracking-[0.05em] ${statusClass}`}
        >
          {statusLabel}
        </span>
        {project.href && (
          <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-emerald">
            Read more
            <ArrowRight className="h-4 w-4" />
          </span>
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

function EmptyState() {
  return (
    <Reveal className="flex flex-col items-center text-center gap-5 max-w-[480px] mx-auto py-8">
      <div className="relative flex items-center justify-center h-20 w-20">
        <span className="absolute inset-0 rounded-full bg-emerald/10 animate-ping [animation-duration:2.5s]" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-tint text-emerald">
          <FileSearch className="h-6 w-6" />
        </span>
      </div>
      <h3 className="h3 text-navy">No published research yet</h3>
      
       <a
        href="https://linkedin.com/company/ckdataanalytics"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-2"
      >
        Follow our progress on LinkedIn
      </a>
    </Reveal>
  );
}

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