"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";

interface Service {
  name: string;
  description: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    name: "Haircut & Styling",
    description: "Precision cuts and editorial styling tailored to your features.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    href: "/services/haircut-styling",
  },
  {
    name: "Hair Color",
    description: "Dimensional color, balayage and glossing with premium care.",
    image: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop",
    href: "/services/hair-color",
  },
  {
    name: "Hair Treatments",
    description: "Restorative rituals for strength, shine and scalp health.",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1000&auto=format&fit=crop",
    href: "/services/hair-treatments",
  },
  {
    name: "Facial & Skincare",
    description: "Advanced facials and personalized skincare regimens.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    href: "/services/facial-skincare",
  },
  {
    name: "Makeup",
    description: "Occasion and editorial makeup by certified artists.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop",
    href: "/services/makeup",
  },
  {
    name: "Bridal Makeup",
    description: "Signature bridal artistry for your most beautiful moments.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
    href: "/services/bridal-makeup",
  },
  {
    name: "Manicure & Pedicure",
    description: "Immaculate nail care in a serene, hygienic setting.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
    href: "/services/manicure-pedicure",
  },
  {
    name: "Spa & Relaxation",
    description: "Calming therapies that restore body and mind.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
    href: "/services/spa-relaxation",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: prefersReducedMotion ? 0 : (index % 4) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={service.href} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ivory">
              Explore
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 font-serif text-sm italic text-gold-dark backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="pt-5">
          <h3 className="font-serif text-2xl text-charcoal transition-colors duration-300 group-hover:text-gold-dark">
            {service.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-brown">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center lg:mb-20">
          <ScrollReveal>
            <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <span className="h-px w-10 bg-gold-dark/60" />
              Our Services
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
                The art of
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
                beauty, perfected.
              </motion.span>
            </span>
          </h2>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-brown">
              Eight signature services, one promise — beauty that is crafted
              around you, never mass-produced.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
