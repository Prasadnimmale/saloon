"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface MaskedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  maskFrom?: "left" | "right" | "top" | "bottom" | "center";
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

const maskVariants = {
  left: {
    from: "inset(0 100% 0 0)",
    to: "inset(0 0% 0 0)",
  },
  right: {
    from: "inset(0 0 0 100%)",
    to: "inset(0 0 0 0%)",
  },
  top: {
    from: "inset(0 0 100% 0)",
    to: "inset(0 0 0% 0)",
  },
  bottom: {
    from: "inset(100% 0 0 0)",
    to: "inset(0% 0 0 0)",
  },
  center: {
    from: "inset(40% 40% 40% 40%)",
    to: "inset(0% 0% 0% 0%)",
  },
};

export default function MaskedImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  maskFrom = "left",
  priority = false,
  width = 800,
  height = 1000,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MaskedImageProps) {
  const prefersReducedMotion = useReducedMotion();
  const variant = maskVariants[maskFrom];

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
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: variant.from }}
      whileInView={{ clipPath: variant.to }}
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
  );
}
