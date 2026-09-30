"use client";

import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import ScrollReveal from "./animations/ScrollReveal";

export default function Transformation() {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const draggingRef = useRef(false);

  const x = useMotionValue(50);
  const xSpring = useSpring(x, { stiffness: 140, damping: 26 });
  const clipPath = useTransform(xSpring, (v) => `inset(0 ${100 - v}% 0 0)`);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const beforeX = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    x.set(Math.min(92, Math.max(8, pct)));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (prefersReducedMotion) return;
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    draggingRef.current = false;
  };

  return (
    <section ref={ref} id="transformation" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center lg:mb-24">
          <ScrollReveal>
            <p className="mb-6 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-dark">
              <span className="h-px w-10 bg-gold-dark/60" />
              Before & After
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
                A transformation
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
                you&apos;ll love.
              </motion.span>
            </span>
          </h2>
          <ScrollReveal delay={0.25}>
            <p className="mt-6 font-serif text-lg italic text-muted-brown">
              Precision. Care. Confidence.
            </p>
          </ScrollReveal>
        </div>

        {/* Draggable before/after */}
        <div
          ref={containerRef}
          className="relative aspect-[16/10] cursor-ew-resize select-none overflow-hidden sm:aspect-[21/9]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerLeave={stopDragging}
          style={{ touchAction: "none" }}
        >
          {/* After (base layer) */}
          <motion.div
            className="absolute inset-0"
            style={prefersReducedMotion ? undefined : { x: beforeX }}
          >
            <Image
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1600&auto=format&fit=crop"
              alt="After — radiant finished makeup look"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
              draggable={false}
            />
          </motion.div>

          {/* Before (clipped layer) */}
          <motion.div
            className="absolute inset-0"
            style={{ clipPath }}
          >
            <Image
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1600&auto=format&fit=crop"
              alt="Before — natural look prior to styling"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
              draggable={false}
            />
          </motion.div>

          {/* Divider handle */}
          <motion.div
            className="absolute inset-y-0 z-10"
            style={{ left: `${xSpring}%` }}
          >
            <div className="absolute inset-y-0 -ml-px w-0.5 bg-ivory shadow-[0_0_20px_rgba(0,0,0,0.4)]" />
            <div className="absolute top-1/2 -ml-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-charcoal shadow-xl">
              <MoveHorizontal className="h-5 w-5" />
            </div>
          </motion.div>

          {/* Labels */}
          <span className="absolute left-5 top-5 z-10 bg-deep-charcoal/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
            Before
          </span>
          <span className="absolute right-5 top-5 z-10 bg-deep-charcoal/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
            After
          </span>
        </div>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-center text-sm text-muted-brown">
            Drag the handle to reveal the transformation
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
