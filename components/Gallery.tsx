"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

type ClipStyle = "none" | "circle" | "diagonal" | "arch";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  clip: ClipStyle;
  span: string;
}

const items: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop",
    alt: "Precision haircut in progress",
    category: "Hair",
    clip: "arch",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=700&auto=format&fit=crop",
    alt: "Editorial makeup application",
    category: "Makeup",
    clip: "none",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=700&auto=format&fit=crop",
    alt: "Relaxing spa therapy",
    category: "Spa",
    clip: "circle",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=700&auto=format&fit=crop",
    alt: "Hair coloring expertise",
    category: "Color",
    clip: "diagonal",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=700&auto=format&fit=crop",
    alt: "Detailed nail artistry",
    category: "Nails",
    clip: "none",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    alt: "Rejuvenating facial treatment",
    category: "Skincare",
    clip: "arch",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=700&auto=format&fit=crop",
    alt: "Bridal makeup artistry",
    category: "Bridal",
    clip: "none",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=700&auto=format&fit=crop",
    alt: "Intricate hair braiding",
    category: "Hair",
    clip: "circle",
    span: "",
  },
];

const clipClasses: Record<ClipStyle, string> = {
  none: "",
  circle: "rounded-full",
  diagonal: "[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_10%)]",
  arch: "rounded-t-[999px]",
};

const revealDirections = [
  { y: 60, x: 0 },
  { y: 0, x: -50 },
  { y: 60, x: 50 },
  { y: -50, x: 0 },
  { y: 50, x: -40 },
  { y: 0, x: 50 },
  { y: 60, x: 0 },
  { y: -40, x: 40 },
];

export default function Gallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="gallery" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center lg:mb-24">
          <ScrollReveal>
            <p className="mb-6 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <span className="h-px w-10 bg-gold-dark/60" />
              Gallery
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
                Moments of
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
                quiet luxury.
              </motion.span>
            </span>
          </h2>
        </div>

        {/* Editorial masonry grid */}
        <div className="grid grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              className={`group relative overflow-hidden ${item.span} ${clipClasses[item.clip]}`}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: revealDirections[i].y, x: revealDirections[i].x, scale: 0.94 }
              }
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-deep-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="p-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
