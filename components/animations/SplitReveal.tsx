"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface SplitRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function SplitReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  width = 800,
  height = 1000,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SplitRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Left half */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 50% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </motion.div>
      {/* Right half */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 0 0 50%)" }}
        whileInView={{ clipPath: "inset(0 0 0 0%)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}
