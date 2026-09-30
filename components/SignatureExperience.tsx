"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxImage from "./animations/ParallaxImage";

export default function SignatureExperience() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.6, 0.45]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury salon shop interior with elegant styling chairs and warm lighting"
        className="h-[80vh] min-h-[540px] w-full"
        speed={0.25}
      />

      {/* Cinematic overlay */}
      <motion.div
        className="absolute inset-0 bg-deep-charcoal"
        style={prefersReducedMotion ? { opacity: 0.55 } : { opacity: overlayOpacity }}
      />

      {/* Centered typography */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          className="max-w-4xl text-center"
          style={prefersReducedMotion ? undefined : { y: textY }}
        >
          <h2 className="mb-10 font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl lg:text-7xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                More than a salon.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-gold-light"
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                It&apos;s your beauty ritual.
              </motion.span>
            </span>
          </h2>

          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 font-serif text-2xl italic text-gold-light [text-shadow:0_2px_20px_rgba(28,24,21,0.5)] sm:text-3xl"
          >
            Your beauty, elevated
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-xl text-base font-semibold leading-relaxed text-white lg:text-lg"
          >
            Every visit is a ritual — a moment carved out of your day where
            beauty, calm, and craft come together. From the first welcome to
            the final reveal, we shape an experience that is entirely yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <button
              onClick={() =>
                document.querySelector("#services")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" })
              }
              className="rounded-full bg-ivory px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-charcoal transition-all duration-500 hover:bg-gold-light"
            >
              Explore Services
            </button>
            <button
              onClick={() =>
                document.querySelector("#appointment")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" })
              }
              className="rounded-full border border-ivory/40 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
            >
              Book Appointment
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
