"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";

const posts = [
  {
    title: "The Art of the Perfect Blowout",
    excerpt:
      "Our stylists share the secrets behind a salon-quality blowout that lasts for days — from product selection to technique.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    category: "Hair",
    readTime: "4 min read",
  },
  {
    title: "Bridal Beauty: Trends for 2026",
    excerpt:
      "From timeless elegance to modern glamour, discover the bridal makeup trends that will define the coming wedding season.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
    category: "Bridal",
    readTime: "5 min read",
  },
  {
    title: "Why Your Skincare Routine Needs a Facial",
    excerpt:
      "Professional facials do more than relax — they transform. Here's why an expert facial belongs in every skincare regimen.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    category: "Skincare",
    readTime: "3 min read",
  },
];

export default function Blogs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="blogs" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div>
            <ScrollReveal>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
                <span className="h-px w-10 bg-gold-dark/60" />
                Journal
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
                  Notes on
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
                  beauty & craft.
                </motion.span>
              </span>
            </h2>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="max-w-sm text-base leading-relaxed text-muted-brown">
              Insights, tips, and inspiration from the Lumière team — on hair,
              makeup, skincare, and the art of feeling beautiful.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              <div className="pt-6">
                <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-brown">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </div>
                <h3 className="font-serif text-xl leading-snug text-charcoal transition-colors duration-300 group-hover:text-gold-dark lg:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-brown">
                  {post.excerpt}
                </p>
                {post.title === "The Art of the Perfect Blowout" ? (
                  <Link
                    href="/blogs/the-art-of-the-perfect-blowout"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 group-hover:bg-gold-dark group-hover:text-charcoal"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                ) : post.title === "Bridal Beauty: Trends for 2026" ? (
                  <Link
                    href="/blogs/bridal-beauty-trends-2026"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 group-hover:bg-gold-dark group-hover:text-charcoal"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                ) : post.title === "Why Your Skincare Routine Needs a Facial" ? (
                  <Link
                    href="/blogs/why-your-skincare-routine-needs-a-facial"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 group-hover:bg-gold-dark group-hover:text-charcoal"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 group-hover:bg-gold-dark group-hover:text-charcoal">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
