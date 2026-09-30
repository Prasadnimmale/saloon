"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?q=80&w=600&auto=format&fit=crop",
    alt: "Professional makeup brushes",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop",
    alt: "Premium beauty products",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    alt: "Makeup palette artistry",
  },
  {
    src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=600&auto=format&fit=crop",
    alt: "Elegant nail polish selection",
  },
  {
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop",
    alt: "Skincare essentials",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop",
    alt: "Salon styling station",
  },
];

export default function InstagramGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark"
          >
            <Instagram className="h-4 w-4" />
            @lumiere.studio
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl text-charcoal sm:text-4xl"
          >
            Follow the beauty
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="group relative aspect-square overflow-hidden"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-deep-charcoal/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-ivory" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
