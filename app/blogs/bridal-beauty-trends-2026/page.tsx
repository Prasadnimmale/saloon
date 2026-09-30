"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";

const relatedPosts = [
  {
    title: "The Art of the Perfect Blowout",
    excerpt: "Our stylists share the secrets behind a salon-quality blowout.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
    href: "/blogs/the-art-of-the-perfect-blowout",
  },
  {
    title: "Why Your Skincare Routine Needs a Facial",
    excerpt: "Professional facials do more than relax — they transform.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
    href: "/blogs",
  },
];

export default function BridalTrendsPage() {
  const prefersReducedMotion = useReducedMotion();

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
            <Sparkles className="h-4 w-4" />
            Journal
          </motion.p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.12] text-ivory sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Bridal Beauty: Trends for 2026
              </motion.span>
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-ivory/60"
          >
            <Clock className="h-4 w-4" />
            5 min read
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop"
              alt="Bridal Beauty: Trends for 2026"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-brown">
              The 2026 bridal season is all about individuality. Brides are
              moving away from one-size-fits-all looks and embracing styles
              that reflect their personality, heritage, and story. Here are
              the trends defining this year&apos;s most beautiful celebrations.
            </p>

            <h2 className="pt-4 font-serif text-2xl text-charcoal sm:text-3xl">
              Timeless Elegance with a Modern Twist
            </h2>
            <p className="text-base leading-relaxed text-muted-brown">
              Classic bridal looks are getting contemporary updates. Think
              soft smoky eyes with metallic accents, dewy skin with a subtle
              glow, and lips in muted rose and terracotta tones. The goal is
              to look like yourself — just the most radiant version.
            </p>

            <h2 className="pt-4 font-serif text-2xl text-charcoal sm:text-3xl">
              Bold Brows, Soft Everything Else
            </h2>
            <p className="text-base leading-relaxed text-muted-brown">
              Well-groomed, natural brows are taking center stage. Paired
              with minimal eye makeup and soft blush, this look lets your
              features speak for themselves. It is elegant, photogenic, and
              timeless.
            </p>

            <h2 className="pt-4 font-serif text-2xl text-charcoal sm:text-3xl">
              Jewel-Toned Accents
            </h2>
            <p className="text-base leading-relaxed text-muted-brown">
              Emerald, sapphire, and ruby accents are making their way into
              bridal makeup — whether through subtle eyeliner, embellished
              eyeshadow, or statement jewelry. These rich tones complement
              Indian bridal wear beautifully.
            </p>

            <h2 className="pt-4 font-serif text-2xl text-charcoal sm:text-3xl">
              Hair That Tells a Story
            </h2>
            <p className="text-base leading-relaxed text-muted-brown">
              From fresh flowers woven into braids to polki-adorned updos,
              bridal hair is becoming more personal and meaningful. Stylists
              are blending traditional elements with modern techniques for
              looks that are both cultural and contemporary.
            </p>

            <p className="text-base leading-relaxed text-muted-brown">
              At Lumière, our bridal artists specialize in creating looks
              that honor tradition while embracing your individual style.
              Book a consultation to discover your perfect 2026 bridal look.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 rounded-full border border-charcoal px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-ivory"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
              Back to Journal
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="mb-10 font-serif text-3xl text-charcoal sm:text-4xl">
              Related Articles
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {relatedPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="font-serif text-xl text-charcoal transition-colors duration-300 group-hover:text-gold-dark">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-brown">
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
