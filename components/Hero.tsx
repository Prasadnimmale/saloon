"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.65]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <section ref={ref} id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Hero image */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? false : { clipPath: "inset(8% 12% 8% 12%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.2, ease }}
      >
        <motion.div style={prefersReducedMotion ? undefined : { scale: imgScale, x: imgX }} className="h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=2000&auto=format&fit=crop"
            alt="Modern luxury salon interior with premium styling stations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/85 via-deep-charcoal/55 via-deep-charcoal/25 to-transparent"
        style={prefersReducedMotion ? { opacity: 0.6 } : { opacity: overlayOpacity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 via-transparent to-deep-charcoal/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10"
        style={prefersReducedMotion ? undefined : { y: textY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-light [text-shadow:0_1px_12px_rgba(28,24,21,0.6)]"
        >
          <span className="h-px w-10 bg-gold-light/70" />
          Luxury Beauty • Hair • Makeup
        </motion.p>

        <h1 className="font-serif text-[13vw] leading-[0.95] text-white sm:text-7xl lg:text-8xl [text-shadow:0_2px_30px_rgba(28,24,21,0.5)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Your Beauty.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-gold [text-shadow:0_2px_24px_rgba(28,24,21,0.55)]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              Your Signature.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-6 max-w-md text-base leading-relaxed text-ivory [text-shadow:0_1px_16px_rgba(28,24,21,0.6)] lg:text-lg"
        >
          Where modern beauty meets personalized care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("#appointment")}
            className="group flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-charcoal transition-all duration-500 hover:bg-gold-light"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="rounded-full border border-ivory/40 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
          >
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/70 transition-colors hover:text-ivory"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
