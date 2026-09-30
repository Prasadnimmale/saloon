"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type MaskType =
  | "horizontal"
  | "vertical"
  | "diagonal"
  | "circular"
  | "split"
  | "bottom-up"
  | "center"
  | "corner";

interface ImageRevealProps {
  src: string;
  alt: string;
  maskType?: MaskType;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

const maskClipPaths: Record<MaskType, { from: string; to: string }> = {
  horizontal: {
    from: "inset(0 100% 0 0)",
    to: "inset(0 0% 0 0)",
  },
  vertical: {
    from: "inset(0 0 100% 0)",
    to: "inset(0 0 0% 0)",
  },
  diagonal: {
    from: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  circular: {
    from: "circle(0% at 50% 50%)",
    to: "circle(75% at 50% 50%)",
  },
  split: {
    from: "inset(0 50% 0 50%)",
    to: "inset(0 0% 0 0%)",
  },
  "bottom-up": {
    from: "inset(100% 0 0 0)",
    to: "inset(0% 0 0 0)",
  },
  center: {
    from: "inset(45% 45% 45% 45%)",
    to: "inset(0% 0% 0% 0%)",
  },
  corner: {
    from: "polygon(0 0, 0 0, 0 0, 0 0, 0 0, 0 100%, 0 100%, 0 100%)",
    to: "polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 100%)",
  },
};

export default function ImageReveal({
  src,
  alt,
  maskType = "horizontal",
  className = "",
  imgClassName = "",
  priority = false,
  width = 800,
  height = 1000,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const clipPath = maskClipPaths[maskType];

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
      initial={{ clipPath: clipPath.from }}
      whileInView={{ clipPath: clipPath.to }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
