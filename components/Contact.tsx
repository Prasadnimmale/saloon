"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["42, Palm Court, Linking Road", "Bandra West, Mumbai 400050"],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 98200 12345", "+91 22 4567 8900"],
  },
  {
    icon: Mail,
    label: "Write to Us",
    lines: ["hello@lumiere.studio", "bookings@lumiere.studio"],
  },
  {
    icon: Clock,
    label: "Opening Hours",
    lines: ["Mon – Sun: 10:00 AM – 8:00 PM", "Bridal trials by appointment"],
  },
];

function ContactInner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 lg:mb-24">
          <ScrollReveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <span className="h-px w-10 bg-gold-dark/60" />
              Find Us
            </p>
          </ScrollReveal>
          <h2 className="font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Visit the studio.
              </motion.span>
            </span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop"
              alt="Luxurious salon shop interior with styling stations"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>

          {/* Contact details */}
          <div className="grid content-center gap-8 sm:grid-cols-2">
            {contactDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-dark transition-all duration-500 group-hover:bg-gold-dark group-hover:text-ivory">
                  <detail.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                  {detail.label}
                </h3>
                {detail.lines.map((line) => (
                  <p key={line} className="mt-1.5 text-sm leading-relaxed text-muted-brown">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 h-72 overflow-hidden lg:mt-24 lg:h-96"
        >
          <iframe
            title="Lumière Salon location map"
            src="https://www.google.com/maps?q=Bandra+West,+Mumbai&output=embed"
            className="h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 border border-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactInner />
    </Suspense>
  );
}
