import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { TeamCard } from "@/components/site/team-card";
import { team } from "@/content/team";

const principles = [
  {
    num: "01",
    title: "Build reputation before revenue",
    description:
      "In the first year, credibility is our most important currency. Quality work speaks louder than any marketing.",
  },
  {
    num: "02",
    title: "Quality over quantity",
    description:
      "One excellent research report published publicly is worth more than ten mediocre ones. We never submit work we are not proud of.",
  },
  {
    num: "03",
    title: "Systems over dependency",
    description:
      "The company should function even when one person is unavailable. Processes, templates, and documentation keep us running.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT US"
        title="Evidence for Progress"
        description="Building Malawi's most trusted research and data solutions company."
      />

      <VisionMission />
      <OurStory />
      <TeamSection />
    </>
  );
}

function VisionMission() {
  return (
    <section className="section-pad bg-card">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="card-base border-l-4 border-l-emerald h-full">
              <span className="label block mb-4">Our Vision</span>
              <h3 className="h2 text-navy mb-4">Leading Research in Malawi</h3>
              <p className="body-text text-warmgray">
                To become a leading Malawian research and data solutions company
                providing reliable information and insights that support
                effective decision-making and national development.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-base border-l-4 border-l-emerald h-full">
              <span className="label block mb-4">Our Mission</span>
              <h3 className="h2 text-navy mb-4">Transforming Data into Knowledge</h3>
              <p className="body-text text-warmgray">
                To collect, analyze, and transform data into valuable knowledge
                through professional research, statistical expertise, and
                technology-driven solutions that serve Malawi and the wider
                region.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page max-w-[720px] mx-auto text-center">
        <Reveal className="flex flex-col gap-6">
          <span className="label">Our Story</span>
          <h2 className="h2 text-navy">From observation to action</h2>
          <div className="flex flex-col gap-5 text-left">
            <p className="body-text text-warmgray">
              CK Data & Analytics was founded by a team of university-trained
              statisticians and technologists who recognized a critical gap in
              Malawi: organizations needed reliable, locally-grounded data to
              support planning and decision-making, but access to quality
              research services was limited and expensive.
            </p>
            <p className="body-text text-warmgray">
              We set out to build a company that combines fieldwork capability,
              statistical rigor, and digital technology all under one roof.
              Our team brings together expertise in research methodology, data
              science, and information technology.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="section-pad bg-card">
      <div className="container-page">
        <Reveal className="text-center mb-14">
          <span className="label block mb-4">Our Team</span>
          <h2 className="h2 text-navy">The people behind the data</h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                initials={member.initials}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-page">
        <Reveal className="text-center mb-14">
          <span className="label-light block mb-4">How We Work</span>
          <h2 className="h2 text-white">Our Operating Principles</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <span className="text-[48px] font-bold leading-none text-emerald">
                  {p.num}
                </span>
                <h3 className="text-[20px] font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-white/70">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}