"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

const testimonials = [
  {
    quote:
      "Lumière didn't just style my hair — they understood exactly who I wanted to walk in as. Every detail felt considered, every moment felt calm.",
    name: "Ananya Sharma",
    service: "Bridal Makeup",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The most honest stylists I've ever met. They told me what would actually suit my face, and the result was beyond anything I imagined.",
    name: "Priya Nair",
    service: "Hair Color & Styling",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "From the warm welcome to the final reveal, everything felt like a ritual made for me. This is my sanctuary now.",
    name: "Meera Krishnan",
    service: "Signature Facial",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: prefersReducedMotion ? 0 : index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col rounded-2xl border border-beige bg-ivory p-8 lg:p-10"
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed text-charcoal lg:text-2xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex items-center gap-4 border-t border-beige pt-6">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gold/50">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-serif text-base text-charcoal">{testimonial.name}</p>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {testimonial.service}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center lg:mb-20">
          <ScrollReveal>
            <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <span className="h-px w-10 bg-gold-dark/60" />
              Testimonials
              <span className="h-px w-10 bg-gold-dark/60" />
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
                Words that
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-brown"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                mean everything.
              </motion.span>
            </span>
          </h2>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-brown">
              Real stories from real clients who trusted us with their most
              important moments.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
