"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, Mail, Phone, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  "w-full border-b border-beige bg-transparent py-3 text-sm text-charcoal placeholder:text-muted-brown/60 outline-none transition-colors duration-300 focus:border-gold-dark";

export default function AppointmentPage() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="bg-ivory">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-charcoal pt-24">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative px-6 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-light"
          >
            <Sparkles className="h-4 w-4" />
            Book Your Visit
          </motion.p>
          <h1 className="font-serif text-4xl leading-[1.12] text-ivory sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Ready for your next
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-gold-light"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                beauty moment?
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/70"
          >
            Reserve your appointment and let us craft an experience made
            entirely around you.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-gold/30 bg-cream p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                  <Sparkles className="h-7 w-7 text-gold-dark" />
                </div>
                <h2 className="font-serif text-3xl text-charcoal">
                  Request Received
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-brown">
                  Thank you for booking with Lumière. We&apos;ll confirm your
                  appointment within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <input required type="text" placeholder="Your Name" className={inputClasses} aria-label="Name" />
                  <input required type="tel" placeholder="Phone Number" className={inputClasses} aria-label="Phone" />
                </div>
                <input type="email" placeholder="Email Address" className={inputClasses} aria-label="Email" />
                <div className="grid gap-8 sm:grid-cols-2">
                  <select required defaultValue="" className={`${inputClasses} appearance-none`} aria-label="Service">
                    <option value="" disabled>
                      Select Service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-ivory text-charcoal">
                        {s}
                      </option>
                    ))}
                  </select>
                  <input required type="date" className={`${inputClasses} [color-scheme:light]`} aria-label="Preferred date" />
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <select defaultValue="" className={`${inputClasses} appearance-none`} aria-label="Preferred time">
                    <option value="" disabled>
                      Preferred Time
                    </option>
                    {["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"].map((t) => (
                      <option key={t} value={t} className="bg-ivory text-charcoal">
                        {t}
                      </option>
                    ))}
                  </select>
                  <input type="text" placeholder="Message (optional)" className={inputClasses} aria-label="Message" />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 hover:bg-gold-dark hover:text-charcoal"
                >
                  Book Your Appointment
                  <Calendar className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { icon: Phone, label: "Call Us", value: "+91 98200 12345" },
              { icon: Mail, label: "Email", value: "hello@lumiere.studio" },
              { icon: Clock, label: "Hours", value: "10 AM – 8 PM" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold-dark">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                  {item.label}
                </p>
                <p className="text-sm text-muted-brown">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
