"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

const serviceOptions = [
  "Research Services",
  "Data Collection",
  "Data Analysis",
  "Technology Solutions",
  "General Inquiry",
];

const inputClass =
  "w-full rounded-btn border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3.5 text-[16px] text-charcoal placeholder:text-[#a8a29e] transition-shadow duration-200 focus:outline-none focus:border-emerald focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)]";

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="navy"
        label="GET IN TOUCH"
        title="Let's Work Together"
        description="Tell us about your project. We typically respond within 24 hours."
      />

      <ContactSection />
    </>
  );
}

function ContactSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    service: serviceOptions[4],
    description: "",
  });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `New Project Inquiry: ${form.fullName || "Website Visitor"}${
      form.organization ? ` (${form.organization})` : ""
    }`;

    const bodyLines = [
      `Name: ${form.fullName}`,
      `Organization: ${form.organization}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Service Interest: ${form.service}`,
      "",
      "Project Description:",
      form.description,
    ].filter(Boolean);

    const mailto = `mailto:ckdataanalytics@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card-base flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </Field>
        <Field label="Organization" required>
          <input
            type="text"
            required
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            placeholder="Company or institution"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email Address" required>
          <input
            type="email"
            inputMode="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@organization.com"
            className={inputClass}
          />
        </Field>
        <Field label="Phone Number">
          <input
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="Optional"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Service Interest">
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={`${inputClass} appearance-none bg-no-repeat bg-[right_16px_center] bg-[length:16px] pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2357534e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          }}
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Project Description" required>
        <textarea
          required
          rows={5}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="Tell us what you are trying to learn or achieve"
          className={`${inputClass} resize-none`}
        />
      </Field>

      <button type="submit" className="btn-primary justify-center w-full sm:w-auto mt-2">
        Send Message
        <Send className="h-4 w-4" />
      </button>

      <p className="text-[13px] text-warmgray">
        {sent
          ? "Your email app should now be open with your message ready to send."
          : "We respect your privacy. Your information will never be shared."}
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-semibold text-navy">
        {label}
        {required && <span className="text-emerald"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="card-base flex flex-col gap-6">
        <h3 className="h3 text-navy">Contact Information</h3>

        <InfoRow
          icon={Mail}
          label="Email"
          value="ckdataanalytics@gmail.com"
          href="mailto:ckdataanalytics@gmail.com"
        />
        <InfoRow
          icon={Phone}
          label="Phone"
          value="099 112 7401"
          href="tel:+265991127401"
        />
        <InfoRow
          icon={Phone}
          label="Phone (alt.)"
          value="088 219 6892"
          href="tel:+265882196892"
        />
        <InfoRow
          icon={MapPin}
          label="Location"
          value="Blantyre, Malawi. Serving national and regional clients."
        />
      </div>

      <div className="card-base flex flex-col gap-4">
        <h3 className="h3 text-navy">Download Our Profile</h3>
        <p className="text-[14px] text-warmgray leading-relaxed">
          Learn more about our services and capabilities.
        </p>
         <a
          href="/CK-Data-Analytics-Company-Profile.pdf"
          download
          className="btn-secondary w-fit"
        >
          Download Company Profile (PDF)
        </a>
      </div>

      <div className="card-base flex flex-col gap-3 bg-navy border-none">
        <span className="label-light">Connect</span>
        <p className="text-[14px] text-white/70 leading-relaxed">
          Follow CK Data & Analytics for updates on published research and
          ongoing studies.
        </p>

         <a
          href="https://linkedin.com/company/ckdataanalytics"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] font-semibold text-emerald hover:underline w-fit"
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-btn bg-emerald-tint text-emerald">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <div className="flex flex-col gap-0.5 pt-1.5">
        <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-warmgray">
          {label}
        </span>
        <span className="text-[15px] text-charcoal">{value}</span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="group -m-2 rounded-btn p-2 transition-colors hover:bg-emerald-tint/40">
      {content}
    </a>
  ) : (
    content
  );
}