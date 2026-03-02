/*
 * CS180 Page — Computational Photography & Computer Vision
 * Course project showcase, cream/red theme.
 */

import AnimatedSection from "@/components/AnimatedSection";
import PageLayout from "@/components/PageLayout";
import SlimeDrip from "@/components/SlimeDrip";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Combine,
  Image,
  Layers,
  Network,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

interface CS180Project {
  number: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  icon: typeof Camera;
}

const projects: CS180Project[] = [
  {
    number: 0,
    title: "Becoming Friends with Your Camera",
    date: "September 2, 2025",
    description:
      "Introduction to computational photography fundamentals. Exploring camera mechanics, exposure, focus, and the relationship between the physical world and digital image formation.",
    tags: ["Photography"],
    icon: Camera,
  },
  {
    number: 1,
    title: "Images of the Russian Empire",
    date: "September 12, 2025",
    description:
      "Colorizing the Prokudin-Gorskii Photo Collection. Aligning RGB channels from historical glass plate negatives to produce full-color images of early 20th century Russia.",
    tags: ["Colorizing Images", "Image Alignment"],
    icon: Image,
  },
  {
    number: 2,
    title: "Fun with Filters and Frequencies",
    date: "September 26, 2025",
    description:
      "Exploring image frequencies through filtering operations. Gaussian and Laplacian stacks, unsharp masking, hybrid images, and multiresolution blending.",
    tags: ["Image Frequencies", "Filtering", "Blending"],
    icon: Layers,
  },
  {
    number: 3,
    title: "(Auto)Stitching and Photo Mosaics",
    date: "October 17, 2025",
    description:
      "Image warping and mosaicing. Computing homographies, warping images into alignment, and blending them into seamless panoramic mosaics. Both manual and automatic feature matching.",
    tags: ["Image Warping", "Image Mosaicing", "Homography"],
    icon: Combine,
  },
  {
    number: 4,
    title: "NeRF",
    date: "November 13, 2025",
    description:
      "Neural Radiance Fields — representing 3D scenes as continuous volumetric functions learned by neural networks. Synthesizing novel views from a sparse set of input photographs.",
    tags: ["Neural Radiance Fields", "Neural Networks", "Plenoptic Functions"],
    icon: Network,
  },
  {
    number: 5,
    title: "Diffusion Models",
    date: "December 13, 2025",
    description:
      "Implementing and understanding diffusion models for image generation. From the mathematical foundations of forward/reverse diffusion to practical denoising architectures.",
    tags: ["Diffusion Models", "Neural Networks", "Generative AI"],
    icon: Sparkles,
  },
];

export default function CS180() {
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
              CS180 (Fall 2025)
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "oklch(0.25 0.02 60)" }}
            >
              Computational Photography{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                &
              </span>{" "}
              Computer Vision
            </h1>
            <p
              className="text-lg max-w-xl mb-12"
              style={{ color: "oklch(0.45 0.02 60)" }}
            >
              Six projects exploring the intersection of optics, algorithms, and
              neural networks. From basic photography to NeRFs and diffusion
              models.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SlimeDrip color="oklch(0.50 0.20 25 / 0.05)" />

      {/* Projects timeline */}
      <section className="py-12">
        <div className="container">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 md:left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: "oklch(0.50 0.20 25 / 0.12)" }}
            />

            <div className="space-y-8">
              {projects.map((project, i) => (
                <AnimatedSection
                  key={project.number}
                  delay={i * 0.1}
                  direction="left"
                >
                  <motion.div
                    className="relative md:ml-16 p-6 md:p-8"
                    style={{
                      backgroundColor: "oklch(0.97 0.015 80)",
                      borderRadius: "20px 12px 18px 14px",
                      border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                    }}
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "0 16px 50px oklch(0.50 0.20 25 / 0.06)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[2.35rem] top-8 w-3 h-3 rounded-full hidden md:block"
                      style={{
                        backgroundColor: "oklch(0.50 0.20 25)",
                        boxShadow:
                          "0 0 0 4px oklch(0.96 0.02 80), 0 0 0 5px oklch(0.50 0.20 25 / 0.2)",
                      }}
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2.5 rounded-lg"
                          style={{
                            backgroundColor:
                              "oklch(0.50 0.20 25 / 0.08)",
                          }}
                        >
                          <project.icon
                            size={20}
                            style={{ color: "oklch(0.50 0.20 25)" }}
                          />
                        </div>
                        <span
                          className="font-mono text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor:
                              "oklch(0.50 0.20 25 / 0.06)",
                            color: "oklch(0.50 0.20 25)",
                          }}
                        >
                          Project {project.number}
                        </span>
                      </div>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "oklch(0.55 0.02 60)" }}
                      >
                        {project.date}
                      </span>
                    </div>

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
                            backgroundColor:
                              "oklch(0.50 0.20 25 / 0.06)",
                            color: "oklch(0.50 0.20 25 / 0.8)",
                            border:
                              "1px solid oklch(0.50 0.20 25 / 0.1)",
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
        </div>
      </section>
    </PageLayout>
  );
}
