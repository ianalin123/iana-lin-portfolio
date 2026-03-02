/*
 * Creative Page — "Weird Genius Who Ships"
 * Entrepreneurship journey, visual stories, and the weird side.
 * Cream/red theme, scroll animations.
 */

import AnimatedSection from "@/components/AnimatedSection";
import PageLayout from "@/components/PageLayout";
import SlimeDrip from "@/components/SlimeDrip";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Cookie, Droplets, Instagram, Palette, Quote } from "lucide-react";
import { Link } from "wouter";

interface Venture {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Droplets;
}

const ventures: Venture[] = [
  {
    title: "Slime Business",
    subtitle: "Early digital commerce",
    description:
      "Built a slime empire before it was cool. Learned digital marketing, customer engagement, and creative product development through hands-on entrepreneurship. Turns out making weird gooey things teaches you a lot about building a brand.",
    icon: Droplets,
  },
  {
    title: "Nonprofit Bakery",
    subtitle: "Social impact through food",
    description:
      "Combined baking with community service. Developed skills in operations, social media storytelling, and purpose-driven business. Proof that you can feed people and build something meaningful at the same time.",
    icon: Cookie,
  },
  {
    title: "Design & Branding",
    subtitle: "Visual identity creation",
    description:
      "Logo design, social media aesthetics, visual communication. Bridging technical abilities with creative expression. Every project needs a face — I learned to make good ones.",
    icon: Palette,
  },
];

const photoGrid = [
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
];

export default function Creative() {
  return (
    <PageLayout>
      <section className="pt-28 pb-12">
        <div className="container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm mb-8 transition-colors duration-300"
              style={{ color: "oklch(0.50 0.20 25)" }}
            >
              <ArrowLeft size={14} />
              back home
            </Link>
          </motion.div>

          {/* Header */}
          <AnimatedSection>
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.50 0.20 25)" }}
            >
              The weird side
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "oklch(0.25 0.02 60)" }}
            >
              Creative{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                & Personal
              </span>
            </h1>
            <p
              className="text-lg max-w-xl mb-12"
              style={{ color: "oklch(0.45 0.02 60)" }}
            >
              Art, entrepreneurship, and digital storytelling. The stuff that
              doesn't fit neatly on a resume but tells you more about who I am.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SlimeDrip color="oklch(0.50 0.20 25 / 0.05)" />

      {/* Visual Stories */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <Camera
                size={20}
                style={{ color: "oklch(0.50 0.20 25)" }}
              />
              <h2
                className="font-serif text-2xl md:text-3xl font-bold"
                style={{ color: "oklch(0.25 0.02 60)" }}
              >
                Visual Stories
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {photoGrid.map((url, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="relative aspect-square overflow-hidden"
                  style={{
                    borderRadius: i % 3 === 0 ? "16px 8px 12px 10px" : i % 3 === 1 ? "10px 14px 8px 16px" : "12px 10px 16px 8px",
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={url}
                    alt={`Visual story ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: "oklch(0.50 0.20 25 / 0.3)",
                    }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <a
              href="https://instagram.com/iana.lin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm transition-colors duration-300"
              style={{ color: "oklch(0.50 0.20 25)" }}
            >
              <Instagram size={14} />
              @iana.lin
            </a>
          </AnimatedSection>
        </div>
      </section>

      <SlimeDrip color="oklch(0.85 0.06 15 / 0.1)" flip />

      {/* Quote */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="max-w-2xl mx-auto text-center p-10"
              style={{
                backgroundColor: "oklch(0.97 0.015 80)",
                borderRadius: "20px 12px 18px 14px",
                border: "1px solid oklch(0.50 0.20 25 / 0.08)",
              }}
              whileHover={{
                boxShadow: "0 12px 40px oklch(0.50 0.20 25 / 0.06)",
              }}
            >
              <Quote
                size={24}
                className="mx-auto mb-4"
                style={{ color: "oklch(0.50 0.20 25 / 0.3)" }}
              />
              <p
                className="font-serif text-lg md:text-xl italic leading-relaxed mb-4"
                style={{ color: "oklch(0.35 0.02 60)" }}
              >
                "The boundary between mind and machine dissolves when we realize
                both are information processing systems seeking patterns in
                chaos."
              </p>
              <p
                className="font-mono text-xs"
                style={{ color: "oklch(0.50 0.20 25 / 0.5)" }}
              >
                // reflection on computational consciousness
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <SlimeDrip color="oklch(0.50 0.20 25 / 0.04)" />

      {/* Entrepreneurship Journey */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.50 0.20 25)" }}
            >
              Before the code
            </p>
            <h2
              className="font-serif text-2xl md:text-3xl font-bold mb-12"
              style={{ color: "oklch(0.25 0.02 60)" }}
            >
              Entrepreneurship{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                Journey
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ventures.map((venture, i) => (
              <AnimatedSection key={venture.title} delay={i * 0.12}>
                <motion.div
                  className="h-full p-6 md:p-8"
                  style={{
                    backgroundColor: "oklch(0.97 0.015 80)",
                    borderRadius: "20px 12px 18px 14px",
                    border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 50px oklch(0.50 0.20 25 / 0.06)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div
                    className="p-2.5 rounded-lg inline-block mb-4"
                    style={{
                      backgroundColor: "oklch(0.50 0.20 25 / 0.08)",
                    }}
                  >
                    <venture.icon
                      size={20}
                      style={{ color: "oklch(0.50 0.20 25)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-semibold mb-1"
                    style={{ color: "oklch(0.25 0.02 60)" }}
                  >
                    {venture.title}
                  </h3>
                  <p
                    className="font-mono text-xs mb-4"
                    style={{ color: "oklch(0.50 0.20 25 / 0.6)" }}
                  >
                    {venture.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.45 0.02 60)" }}
                  >
                    {venture.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
