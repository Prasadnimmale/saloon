"use client";

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Bridal", href: "/bridal" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const isHome = pathname === "/";
  const isLight = !isHome || scrolled;

  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.96]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 0.08]);
  const bgColor = useMotionTemplate`rgba(250, 247, 242, ${bgOpacity})`;
  const borderColor = useMotionTemplate`rgba(43, 38, 34, ${borderOpacity})`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: prefersReducedMotion
            ? scrolled
              ? "rgba(250, 247, 242, 0.96)"
              : "transparent"
            : bgColor,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: prefersReducedMotion
            ? `1px solid rgba(43, 38, 34, ${scrolled ? 0.08 : 0})`
            : `1px solid ${borderColor}`,
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Lumière home"
          >
            <Sparkles className={`h-5 w-5 transition-transform duration-500 group-hover:rotate-12 ${isLight ? "text-gold-dark" : "text-gold-light"}`} />
            <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-500 ${isLight ? "text-charcoal" : "text-ivory"}`}>
              Lumière
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`group relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    pathname === link.href
                      ? isLight
                        ? "text-gold-dark"
                        : "text-gold-light"
                      : isLight
                        ? "text-brown hover:text-charcoal"
                        : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-500 group-hover:w-full ${
                      pathname === link.href ? "w-full" : "w-0"
                    } ${isLight ? "bg-gold-dark" : "bg-gold-light"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/#appointment"
              className={`hidden rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-500 lg:block ${
                isLight
                  ? "bg-charcoal text-ivory hover:bg-gold-dark hover:text-charcoal"
                  : "border border-ivory/30 bg-ivory/15 text-ivory backdrop-blur-sm hover:bg-ivory hover:text-charcoal"
              }`}
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-10 w-10 items-center justify-center transition-colors duration-500 lg:hidden ${
                isLight ? "text-charcoal" : "text-ivory"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col justify-center bg-ivory px-8 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, x: 30 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: mobileOpen ? 0.15 + i * 0.06 : 0, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="font-serif text-3xl text-charcoal"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: mobileOpen ? 0.5 : 0, duration: 0.4 }}
        >
          <Link
            href="/#appointment"
            className="mt-10 inline-block rounded-full bg-charcoal px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivory"
          >
            Book Appointment
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
