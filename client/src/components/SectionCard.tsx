/*
 * SectionCard — Organic Biomechanics Design
 * Specimen-style card with organic border-radius, paper texture feel.
 * Uses wouter Link for internal navigation.
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface SectionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  index: number;
}

export default function SectionCard({
  title,
  description,
  imageUrl,
  href,
  index,
}: SectionCardProps) {
  const isExternal = href.startsWith("http");

  const cardContent = (
    <>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, oklch(0.97 0.015 80 / 0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-serif text-xl font-semibold mb-2"
          style={{ color: "oklch(0.25 0.02 60)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm mb-4"
          style={{ color: "oklch(0.50 0.02 60)" }}
        >
          {description}
        </p>
        <div
          className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
          style={{ color: "oklch(0.50 0.20 25)" }}
        >
          <span>Explore</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </>
  );

  const motionProps = {
    className: "group block overflow-hidden",
    style: {
      backgroundColor: "oklch(0.97 0.015 80)",
      borderRadius: "20px 12px 18px 14px",
      border: "1px solid oklch(0.50 0.20 25 / 0.08)",
    },
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
    whileHover: {
      y: -6,
      rotate: 0.5,
      boxShadow: "0 20px 60px oklch(0.50 0.20 25 / 0.08)",
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <Link href={href}>
      <motion.div {...motionProps}>
        {cardContent}
      </motion.div>
    </Link>
  );
}
