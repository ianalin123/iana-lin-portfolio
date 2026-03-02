/*
 * TagCloud — Organic Biomechanics Design
 * Floating, gently animated skill tags that drift like specimens.
 * Crimson text on cream with subtle hover effects.
 */

import { motion } from "framer-motion";

const tags = [
  "neural.networks",
  "formal.verification",
  "machine.learning",
  "computational.neuroscience",
  "signal.processing",
  "theorem.proving",
  "synaptic.plasticity",
  "graph.theory",
  "creative.computation",
  "deep.learning",
];

export default function TagCloud() {
  return (
    <div className="flex flex-wrap gap-3 justify-start">
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          className="inline-block px-4 py-2 text-xs font-mono tracking-wider border"
          style={{
            color: "oklch(0.50 0.20 25)",
            borderColor: "oklch(0.50 0.20 25 / 0.15)",
            backgroundColor: "oklch(0.50 0.20 25 / 0.04)",
            borderRadius: `${12 + (i % 3) * 4}px ${8 + (i % 4) * 6}px ${14 + (i % 2) * 4}px ${10 + (i % 5) * 3}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.2 + i * 0.08,
            duration: 0.5,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "oklch(0.50 0.20 25 / 0.1)",
            transition: { duration: 0.3 },
          }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}
