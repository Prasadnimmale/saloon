"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flower2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    alt: "Relaxing spa therapy",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    alt: "Luxurious spa setting with candles",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    alt: "Serene spa ritual with warm towels",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    alt: "Rejuvenating facial treatment",
  },
];

const services = [
  {
    title: "Aromatherapy Massage",
    description: "Relaxing full-body massage with essential oils to calm mind and body.",
  },
  {
    title: "Hot Stone Therapy",
    description: "Warm stones placed on key points to melt away tension and stress.",
  },
  {
    title: "Body Wraps & Scrubs",
    description: "Exfoliating and nourishing treatments for soft, glowing skin.",
  },
  {
    title: "Reflexology",
    description: "Targeted foot massage that promotes overall wellness and relaxation.",
  },
];

export default function SpaRelaxationPage() {
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
            <Flower2 className="h-4 w-4" />
            Our Services
          </motion.p>
          <h1 className="font-serif text-4xl leading-[1.12] text-ivory sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Spa & Relaxation
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/70"
          >
            Calming therapies that restore body and mind.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-6 rounded-2xl border border-beige bg-cream p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal">{service.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-brown">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <ScrollReveal>
              <p className="mb-6 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
                <span className="h-px w-10 bg-gold-dark/60" />
                Gallery
                <span className="h-px w-10 bg-gold-dark/60" />
              </p>
            </ScrollReveal>
            <h2 className="font-serif text-4xl text-charcoal sm:text-5xl">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Our work
                </motion.span>
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact?service=Spa%20%26%20Relaxation"
              className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 hover:bg-gold-dark hover:text-charcoal"
            >
              Book This Service
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
