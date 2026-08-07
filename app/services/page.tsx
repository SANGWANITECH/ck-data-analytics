import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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

      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <CTASection />
    </>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const reversed = index % 2 !== 0;
  const bgClass = index % 2 === 0 ? "bg-paper" : "bg-card";

  return (
    <section className={`section-pad ${bgClass}`}>
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <Reveal
            className={`flex flex-col gap-6 ${reversed ? "lg:order-2" : ""}`}
          >
            {/* Mobile: inline icon + label */}
            <div className="flex items-center gap-3 lg:hidden">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-tint text-emerald">
                <ServiceIcon icon={service.icon} className="h-5 w-5" />
              </span>
              <span className="label">{service.label}</span>
            </div>

            {/* Desktop: label only */}
            <span className="label hidden lg:inline-block">{service.label}</span>

            <h2 className="h2 text-navy">{service.title}</h2>
            <p className="body-text text-warmgray">{service.description}</p>

            <div className="flex flex-col gap-3 mt-2">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-emerald-tint flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-emerald" />
                  </span>
                  <span className="text-[15px] text-charcoal leading-relaxed">
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center px-3 py-1.5 rounded-pill bg-emerald-tint text-emerald text-[12px] font-semibold uppercase tracking-[0.05em]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Visual — Desktop only */}
          <Reveal
            delay={0.1}
            className={`hidden lg:block ${reversed ? "lg:order-1" : ""}`}
          >
            <div className="aspect-[4/3] rounded-card border border-[rgba(0,0,0,0.08)] bg-white p-8 flex items-center justify-center relative overflow-hidden text-emerald">
              <ServiceVisual icon={service.id} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ icon }: { icon: string }) {
  if (icon === "analytics") {
    return <AnalyticsChart />;
  }

  const visuals: Record<string, React.ReactNode> = {
    research: (
      <svg viewBox="0 0 200 160" className="w-full h-full max-w-[200px]" fill="none">
        <rect x="20" y="20" width="160" height="120" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <line x1="40" y1="50" x2="160" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="40" y1="70" x2="140" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <line x1="40" y1="90" x2="150" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="40" y1="110" x2="120" y2="110" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <circle cx="170" cy="130" r="8" fill="currentColor" opacity="0.15" />
        <circle cx="170" cy="130" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    collection: (
      <svg viewBox="0 0 200 160" className="w-full h-full max-w-[200px]" fill="none">
        <rect x="60" y="20" width="80" height="120" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <circle cx="100" cy="55" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M100 70 L100 110" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="60" cy="130" r="6" fill="currentColor" opacity="0.2" />
        <circle cx="140" cy="130" r="6" fill="currentColor" opacity="0.2" />
        <circle cx="100" cy="130" r="6" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    technology: (
      <svg viewBox="0 0 200 160" className="w-full h-full max-w-[200px]" fill="none">
        <rect x="30" y="30" width="140" height="100" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <rect x="50" y="50" width="100" height="60" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <circle cx="100" cy="80" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M90 80 L100 70 L110 80" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {visuals[icon] || visuals.research}
    </div>
  );
}

function CTASection() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-page">
        <Reveal className="flex flex-col items-center text-center gap-6">
          <h2 className="h2 text-white max-w-[600px] text-balance">
            Discuss your project with us
          </h2>
          <p className="body-text text-white/70 max-w-[480px]">
            Not sure which services you need? We will help you figure out the right approach.
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