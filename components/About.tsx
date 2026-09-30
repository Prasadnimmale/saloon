"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-ivory py-28 lg:py-40">
      {/* Decorative word */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-0 select-none font-serif text-[22vw] leading-none text-beige/50 lg:text-[16vw]"
      >
        Lumière
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        {/* Image with vertical curtain reveal */}
        <div className="relative">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ clipPath: "inset(0 0 0 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease }}
          >
            <div className="h-full w-full scale-[1.2]">
              <Image
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
                alt="Stylist crafting a client's hair with precision"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="absolute -bottom-8 -right-4 hidden bg-charcoal px-8 py-6 text-ivory shadow-2xl lg:block"
          >
            <p className="font-serif text-4xl text-gold-light">12+</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ivory/70">
              Years of Craft
            </p>
          </motion.div>

          {/* Gold frame accent */}
          <div className="absolute -left-4 -top-4 -z-10 h-full w-full border border-gold/40" />
        </div>

        {/* Text content */}
        <div>
          <ScrollReveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <span className="h-px w-10 bg-gold-dark/60" />
              About the Studio
            </p>
          </ScrollReveal>

          <h2 className="font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
              >
                Beauty crafted
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-brown"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.22, ease }}
              >
                around you.
              </motion.span>
            </span>
          </h2>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-brown lg:text-lg">
              At Lumière, every detail is intentional. Our team of professional
              stylists and beauty artists combine premium products, refined
              technique, and genuine understanding of you — your features, your
              lifestyle, your story.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-brown lg:text-lg">
              From precision haircuts to transformative bridal artistry, we
              create beauty that feels effortless, personal, and unmistakably
              yours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <button
              onClick={() => setStoryOpen(true)}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 hover:bg-gold-dark hover:text-charcoal"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {storyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-deep-charcoal/80 p-6 backdrop-blur-sm"
            onClick={() => setStoryOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.5, ease }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-ivory p-8 shadow-2xl lg:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setStoryOpen(false)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-beige text-charcoal transition-colors hover:border-gold-dark hover:text-gold-dark"
                aria-label="Close story"
              >
                <X className="h-5 w-5" />
              </button>

              <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
                <span className="h-px w-10 bg-gold-dark/60" />
                Our Story
              </p>
              <h3 className="font-serif text-3xl text-charcoal sm:text-4xl">
                A decade of beauty, <span className="italic text-brown">crafted with love.</span>
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-brown">
                Lumière began with a simple belief — that beauty is not a
                service, but a relationship. Founded over twelve years ago in
                the heart of Mumbai, our studio was born from a passion for
                making every client feel seen, celebrated, and radiant.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-brown">
                Today, our team of stylists, colorists, and beauty artists
                bring together global technique and an intimate understanding of
                Indian skin, hair, and bridal traditions. Every visit is a
                ritual — every transformation, a story.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
                    alt="Elegant salon interior with styling chairs"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop"
                    alt="Luxury salon styling station"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
