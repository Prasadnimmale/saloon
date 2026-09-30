"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const bridalServices = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Reception Makeup",
  "Hair Styling",
  "Draping",
];

export default function Bridal() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} id="bridal" className="relative overflow-hidden bg-cream py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <Heart className="h-3.5 w-3.5" />
              Bridal Beauty
            </p>
          </ScrollReveal>

          <h2 className="font-serif text-4xl leading-[1.12] text-charcoal sm:text-5xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Your most beautiful
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                moments deserve a
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-brown"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                signature look.
              </motion.span>
            </span>
          </h2>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-brown lg:text-lg">
              On your wedding day, every glance becomes a memory. Our bridal
              artists craft a look that is timeless in photographs and
              unmistakably you — from the first ritual to the final send-off.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-1">
            {bridalServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 border-b border-beige py-4"
              >
                <span className="font-serif text-sm italic text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 group-hover:text-gold-dark">
                  {service}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-gold-dark opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image with diagonal cut mask */}
        <div className="relative order-1 lg:order-2">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="h-full w-full scale-[1.2]">
              <Image
                src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop"
                alt="Indian bride with elegant bridal makeup and jewelry"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-gold/40" />
        </div>
      </div>
    </section>
  );
}
