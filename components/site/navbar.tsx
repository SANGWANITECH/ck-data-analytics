"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { Logo } from "./logo";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home", num: "01" },
  { href: "/services/", label: "Services", num: "02" },
  { href: "/about/", label: "About", num: "03" },
  { href: "/insights/", label: "Insights", num: "04" },
  { href: "/contact/", label: "Contact", num: "05" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-[rgba(0,0,0,0.08)] bg-white transition-all duration-300",
          scrolled && "shadow-[0_6px_20px_-12px_rgba(15,23,42,0.16)]"
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between">
          <Link href="/" className="shrink-0" aria-label="CK Data and Analytics home">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative rounded-md px-4 py-2 text-[14px] font-semibold transition-colors",
                    active ? "text-emerald" : "text-warmgray hover:text-navy"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 bg-emerald rounded-full transition-all duration-300",
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact/" className="btn-primary text-sm py-2.5 px-5">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[360px] bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer Header — Clean, no logo repetition */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(0,0,0,0.08)]">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-lightgray">
                  Menu
                </span>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy hover:bg-paper transition-colors"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item, i) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center gap-4 py-4 border-b border-[rgba(0,0,0,0.06)] transition-colors",
                          active ? "text-emerald" : "text-navy hover:text-emerald"
                        )}
                      >
                        <span className={cn(
                          "text-[11px] font-bold tracking-widest transition-colors",
                          active ? "text-emerald" : "text-lightgray group-hover:text-emerald"
                        )}>
                          {item.num}
                        </span>
                        <span className="text-xl font-semibold">
                          {item.label}
                        </span>
                        {active && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-emerald" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="px-6 py-8 border-t border-[rgba(0,0,0,0.08)] bg-paper"
              >
                <Link
                  href="/contact/"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center mb-6"
                >
                  Get in Touch
                </Link>

                <div className="space-y-3">
                  <a
                    href="mailto:info@ckdataanalytics.com"
                    className="flex items-center gap-3 text-sm text-warmgray hover:text-emerald transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    info@ckdataanalytics.com
                  </a>
                  <p className="flex items-center gap-3 text-sm text-warmgray">
                    <span className="h-4 w-4 shrink-0 rounded-full border border-warmgray/30 flex items-center justify-center text-[8px] font-bold">
                      MW
                    </span>
                    Lilongwe, Malawi
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}