/*
 * Technical Page — "Weird Genius Who Ships"
 * Project cards with dates, descriptions, tech tags.
 * Cream/red theme, scroll animations, slime bg.
 */

import AnimatedSection from "@/components/AnimatedSection";
import PageLayout from "@/components/PageLayout";
import SlimeDrip from "@/components/SlimeDrip";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, Cpu, FlaskConical, Microscope, Network, Zap } from "lucide-react";
import { Link } from "wouter";

interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  icon: typeof Brain;
  highlight?: string;
}

const projects: Project[] = [
  {
    title: "Rippling ML Engineer",
    date: "Sep 2025",
    description:
      "Built an AI-powered expense approval system using OpenAI APIs on Databricks. 90% accuracy, 10% false positive rate, $0.10 per evaluation. Production-grade ML that actually saves money.",
    tags: ["OpenAI", "Databricks", "ML Engineering"],
    icon: Cpu,
    highlight: "Shipped to production",
  },
  {
    title: "Brain-powered Spotify",
    date: "Aug 2025",
    description:
      "Prototyped a brain-computer interface using Emotiv EEG to control real-time Spotify playback and computer cursor. Yes, I controlled music with my brain. Exploring accessibility for music therapy.",
    tags: ["BCI", "EEG", "Accessibility", "Emotiv"],
    icon: Brain,
    highlight: "BCI prototype",
  },
  {
    title: "ML for Neural Data Classification",
    date: "Jan–May 2025",
    description:
      "Benchmarked SVMs, CNNs, decision trees, and Gaussian classifiers on neural datasets. PCA dimensionality reduction, hyperparameter tuning, the whole pipeline. Rigorous comparison of what actually works.",
    tags: ["SVM", "CNN", "Decision Tree", "Gaussian", "PCA"],
    icon: Network,
  },
  {
    title: "Spiking Neural Networks",
    date: "Jan 2025",
    description:
      "NEST Simulator implementation of leaky integrate-and-fire neuron models. Explored synaptic connectivity patterns and temporal dynamics visualization. Computational neuroscience from first principles.",
    tags: ["NEST", "Computational Neuroscience", "Python", "LIF"],
    icon: Zap,
  },
  {
    title: "Formal Arithmetic Realizations",
    date: "Jun–Nov 2024",
    description:
      "Developed formal models of floating-point arithmetic for matrix accelerators using Z3 Theorem Prover. Published at the 2024 International Supercomputing Conference. Proving hardware correct, mathematically.",
    tags: ["Z3", "Formal Methods", "SMT", "Supercomputing"],
    icon: FlaskConical,
    highlight: "Published at ISC 2024",
  },
  {
    title: "Spatial Transcriptomics",
    date: "Jan–Jun 2024",
    description:
      "Trained deep CNN for 3D segmentation of 30GB+ spatial transcriptomics datasets. State-of-the-art performance with custom preprocessing pipeline. Making biology computable.",
    tags: ["PyTorch", "Deep Learning", "Bioimage Analysis", "3D Segmentation"],
    icon: Microscope,
  },
];

const stats = [
  { label: "GPA", value: "4.0" },
  { label: "Years Research", value: "2+" },
  { label: "Publications", value: "1" },
  { label: "Languages", value: "5+" },
];

export default function Technical() {
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
              Things I've shipped
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "oklch(0.25 0.02 60)" }}
            >
              Technical{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                Work
              </span>
            </h1>
            <p
              className="text-lg max-w-xl mb-12"
              style={{ color: "oklch(0.45 0.02 60)" }}
            >
              ML, neuroscience, formal methods — the intersection of "this
              shouldn't work" and "wait, it actually does."
            </p>
          </AnimatedSection>

          {/* Stats bar */}
          <AnimatedSection delay={0.15}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6"
              style={{
                backgroundColor: "oklch(0.97 0.015 80)",
                borderRadius: "16px",
                border: "1px solid oklch(0.50 0.20 25 / 0.08)",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="font-serif text-2xl md:text-3xl font-bold"
                    style={{ color: "oklch(0.50 0.20 25)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-mono text-xs tracking-wider uppercase mt-1"
                    style={{ color: "oklch(0.50 0.02 60)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SlimeDrip color="oklch(0.50 0.20 25 / 0.05)" />

      {/* Projects */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <motion.div
                  className="h-full p-6 md:p-8 relative overflow-hidden"
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
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        backgroundColor: "oklch(0.50 0.20 25 / 0.08)",
                      }}
                    >
                      <project.icon
                        size={20}
                        style={{ color: "oklch(0.50 0.20 25)" }}
                      />
                    </div>
                    <span
                      className="font-mono text-xs"
                      style={{ color: "oklch(0.55 0.02 60)" }}
                    >
                      {project.date}
                    </span>
                  </div>

                  {/* Highlight badge */}
                  {project.highlight && (
                    <div
                      className="inline-block px-3 py-1 mb-3 font-mono text-xs rounded-full"
                      style={{
                        backgroundColor: "oklch(0.50 0.20 25 / 0.1)",
                        color: "oklch(0.50 0.20 25)",
                      }}
                    >
                      {project.highlight}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className="font-serif text-xl font-semibold mb-3"
                    style={{ color: "oklch(0.25 0.02 60)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "oklch(0.45 0.02 60)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 font-mono text-xs rounded-full"
                        style={{
                          backgroundColor: "oklch(0.50 0.20 25 / 0.06)",
                          color: "oklch(0.50 0.20 25 / 0.8)",
                          border: "1px solid oklch(0.50 0.20 25 / 0.1)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SlimeDrip color="oklch(0.50 0.20 25 / 0.04)" flip />

      {/* CV download */}
      <section className="py-16">
        <div className="container text-center">
          <AnimatedSection>
            <p
              className="font-mono text-sm mb-6"
              style={{ color: "oklch(0.50 0.02 60)" }}
            >
              Want the full picture?
            </p>
            <motion.a
              href="mailto:ianalin123@berkeley.edu"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium"
              style={{
                backgroundColor: "oklch(0.50 0.20 25)",
                color: "oklch(0.96 0.02 80)",
                borderRadius: "12px 8px 10px 14px",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px oklch(0.50 0.20 25 / 0.25)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch for CV
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
