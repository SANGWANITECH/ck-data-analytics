import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./reveal";

const serviceLinks = [
  { href: "/services/", label: "Research" },
  { href: "/services/", label: "Data Collection" },
  { href: "/services/", label: "Analytics" },
  { href: "/services/", label: "Technology" },
];

const companyLinks = [
  { href: "/about/", label: "About" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page py-16">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/logo2.png"
                  alt="CK Data and Analytics"
                  width={200}
                  height={60}
                  className="h-22 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-white/50 leading-relaxed mb-2">
                Evidence for Progress
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                Professional research and data solutions for organizations
                driving development in Malawi.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-6">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://linkedin.com/company/ckdataanalytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61593348146353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ckdataanalytics@gmail.com"
                    className="text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            © 2026 CK Data & Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://ram-techs.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-emerald transition-colors duration-200"
            >
              Powered by RamTech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}