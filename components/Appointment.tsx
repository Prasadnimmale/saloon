"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const serviceOptions = [
  "Haircut & Styling",
  "Hair Color",
  "Hair Treatments",
  "Facial & Skincare",
  "Makeup",
  "Bridal Makeup",
  "Manicure & Pedicure",
  "Spa & Relaxation",
];

const inputClasses =
  "w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/40 outline-none transition-all duration-300 focus:border-gold-light focus:ring-2 focus:ring-gold/20";

export default function Appointment() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="appointment" className="relative overflow-hidden bg-charcoal py-28 lg:py-36">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — heading */}
          <div>
            <ScrollReveal>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-light">
                <span className="h-px w-10 bg-gold-light/60" />
                Book Your Visit
              </p>
            </ScrollReveal>
            <h2 className="font-serif text-4xl leading-[1.12] text-ivory sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Ready for your next
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block italic text-gold-light"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  beauty moment?
                </motion.span>
              </span>
            </h2>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/70">
                Reserve your appointment and let us craft an experience made
                entirely around you. We&apos;ll confirm your booking within a
                few hours.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex items-center gap-3 text-gold-light">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm text-ivory/80">Open all days · 10 AM – 8 PM</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            {submitted ? (
              <div className="rounded-2xl border border-gold/30 bg-ivory/5 p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                  <Sparkles className="h-7 w-7 text-gold-light" />
                </div>
                <h3 className="font-serif text-3xl text-ivory">Request Received</h3>
                <p className="mt-4 text-base leading-relaxed text-ivory/70">
                  Thank you for booking with Lumière. We&apos;ll confirm your
                  appointment within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-ivory/10 bg-ivory/5 p-8 backdrop-blur-sm lg:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required type="text" placeholder="Your Name" className={inputClasses} aria-label="Name" />
                  <input required type="tel" placeholder="Phone Number" className={inputClasses} aria-label="Phone" />
                </div>
                <input type="email" placeholder="Email Address" className={inputClasses} aria-label="Email" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <select required defaultValue="" className={`${inputClasses} appearance-none`} aria-label="Service">
                    <option value="" disabled className="bg-charcoal">Select Service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-charcoal">{s}</option>
                    ))}
                  </select>
                  <input required type="date" className={`${inputClasses} [color-scheme:dark]`} aria-label="Preferred date" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <select defaultValue="" className={`${inputClasses} appearance-none`} aria-label="Preferred time">
                    <option value="" disabled className="bg-charcoal">Preferred Time</option>
                    {["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"].map((t) => (
                      <option key={t} value={t} className="bg-charcoal">{t}</option>
                    ))}
                  </select>
                  <input type="text" placeholder="Message (optional)" className={inputClasses} aria-label="Message" />
                </div>
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gold-light px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all duration-500 hover:bg-ivory"
                >
                  Book Your Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
