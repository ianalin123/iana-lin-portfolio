/*
 * SlimeDrip — Organic Biomechanics Design
 * Animated SVG drip that appears between sections on scroll.
 * Creates the illusion of slime dripping down the page.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SlimeDripProps {
  className?: string;
  color?: string;
  flip?: boolean;
}

export default function SlimeDrip({
  className = "",
  color = "oklch(0.50 0.20 25 / 0.08)",
  flip = false,
}: SlimeDripProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden pointer-events-none ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 1440 120"
        className="w-full"
        style={{ display: "block" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.path
          d="M0,0 C240,0 240,60 480,60 C600,60 600,100 720,100 C840,100 840,40 960,40 C1080,40 1080,80 1200,80 C1320,80 1320,20 1440,20 L1440,0 L0,0 Z"
          fill={color}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Drip drops */}
        <motion.circle
          cx="480"
          cy="80"
          r="8"
          fill={color}
          initial={{ cy: 60, opacity: 0 }}
          animate={isInView ? { cy: 110, opacity: [0, 1, 0.6] } : {}}
          transition={{ duration: 2, delay: 0.8, ease: "easeIn" }}
        />
        <motion.circle
          cx="960"
          cy="60"
          r="5"
          fill={color}
          initial={{ cy: 40, opacity: 0 }}
          animate={isInView ? { cy: 100, opacity: [0, 1, 0.4] } : {}}
          transition={{ duration: 2.5, delay: 1.0, ease: "easeIn" }}
        />
        <motion.circle
          cx="200"
          cy="40"
          r="6"
          fill={color}
          initial={{ cy: 20, opacity: 0 }}
          animate={isInView ? { cy: 90, opacity: [0, 0.8, 0.3] } : {}}
          transition={{ duration: 2.2, delay: 1.2, ease: "easeIn" }}
        />
      </motion.svg>
    </div>
  );
}
