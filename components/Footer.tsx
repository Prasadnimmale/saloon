"use client";

import { Facebook, Instagram, Sparkles, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Bridal", href: "#bridal" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Haircut & Styling",
  "Hair Color",
  "Bridal Makeup",
  "Facial & Skincare",
  "Spa & Relaxation",
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-deep-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold-light" />
              <span className="font-serif text-2xl font-semibold tracking-wide">Lumière</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              A luxury salon & beauty studio in the heart of Mumbai. Where
              modern beauty meets personalized care.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-500 hover:border-gold-light hover:bg-gold-light hover:text-charcoal"
                >
                  <s.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-ivory/60 transition-colors duration-300 hover:text-gold-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleClick("#services")}
                    className="text-sm text-ivory/60 transition-colors duration-300 hover:text-gold-light"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
              Opening Hours
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-ivory/60">
              <li className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span className="text-ivory/85">10 AM – 8 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-ivory/85">9 AM – 9 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-ivory/85">10 AM – 6 PM</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ivory/60">Bridal trials by appointment</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Lumière Salon & Beauty Studio. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40">
            Your beauty. Your signature.
          </p>
        </div>
      </div>
    </footer>
  );
}
