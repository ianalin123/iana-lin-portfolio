/*
 * Home Page — "Weird Genius Who Ships"
 * Cream (#F5F0E8) canvas with Deep Crimson (#B91C1C) accents.
 * Positioning: Full-stack + ML builder who makes things. Also me.
 * Audience: builders who value action over polish.
 */

import AnimatedSection from "@/components/AnimatedSection";
import NeuralSignal from "@/components/NeuralSignal";
import PageLayout from "@/components/PageLayout";
import SectionCard from "@/components/SectionCard";
import SlimeDrip from "@/components/SlimeDrip";
import TagCloud from "@/components/TagCloud";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/3z3fBIAoBKXAEuwFzI4vTf/sandbox/wIV4xXjxL2KqszQUijo3Qx-img-1_1771339856000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM3ozZkJJQW9CS1hBRXV3RnpJNHZUZi9zYW5kYm94L3dJVjR4WGp4TDJLcXN6UVVpam8zUXgtaW1nLTFfMTc3MTMzOTg1NjAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WtLpWLql4ynJWYhmFJUUvccbwWiY24hO~ESJ8DXmb~uDVk3Urb~JNvTx508uiWapZjm7T-q2UU4C8U1IvwVTEd2JHe7Yv7XaEiLuFgUGdjOJcF2aNawNPSFpTR7bcel-YZQhmJc9mjR-Tw6EXG5Q0S-t6hXBGLYyys2lSXKBV2d-EGpCuY0MA25O7E4sCy6TyBlNRwYq8487e4oTbIE0-xD~ld10u83dxnj9XZQlMdvHLBneOC8VA19vGZnx45jDkqtWvd~3~apDzSki3Cd6v49BKuZK19aBBo8PbAKCCnA0fFkbRioItZZvs41wyUYE8ISprSI8lgz4oDqaC9skqg__";

const TECHNICAL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/3z3fBIAoBKXAEuwFzI4vTf/sandbox/wIV4xXjxL2KqszQUijo3Qx-img-2_1771339854000_na1fn_dGVjaG5pY2FsLWNhcmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM3ozZkJJQW9CS1hBRXV3RnpJNHZUZi9zYW5kYm94L3dJVjR4WGp4TDJLcXN6UVVpam8zUXgtaW1nLTJfMTc3MTMzOTg1NDAwMF9uYTFmbl9kR1ZqYUc1cFkyRnNMV05oY21RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pl1n75DuhsFb6wY4T~HvLbsfAwEulzIqgUs~n8Jia5NE8V1kT-h~yWgxIRdZAzVzFQVZfOnNYjJSsYbETVMy1OZR4cXnWkZHfopOJLX2LrxWJNUnC4O4qmnc19ZL4GJQvEhlF6wVuHryD0uBeeEThgkrKjNFE2HwjqlJGMursVlS5-dXv0ZLalg-tNNR1FR0p9qHZJVNs-CBNnUyNAUXvhDK-CFj~kVglyt5vKzd3LM-lepFpSymQB4yg1ywEPMUCYc1atdQO2HDbFXMA7CFBS8utaIue5zfUwbmNAYILbFkxy37kBnFfvxEPMQbbC~FWi5JvQ15kgsxxBqytwSmug__";

const CREATIVE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/3z3fBIAoBKXAEuwFzI4vTf/sandbox/wIV4xXjxL2KqszQUijo3Qx-img-3_1771339863000_na1fn_Y3JlYXRpdmUtY2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM3ozZkJJQW9CS1hBRXV3RnpJNHZUZi9zYW5kYm94L3dJVjR4WGp4TDJLcXN6UVVpam8zUXgtaW1nLTNfMTc3MTMzOTg2MzAwMF9uYTFmbl9ZM0psWVhScGRtVXRZMkZ5WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pHDA7-Bf~0RcjyPk43oJYYuqM5iQPA3xRAFjNl5NcnHFwAYkvkt7clAVylsYxABefhfLue7RWOH53~7IphoM-JOrUDFp1iPAG0jzqPUT1FgKiDYECuQiusWb749xo5Zq-ZKRmho0qSdCDiT1qfGilQk4w-K1vpsKUn2W6CDELgSzeGQevXJU6J8RZILhSnGTuB8l6S2tL~9gbqS5fSiJLw6yVdxfeapV3ujDDjps4QzcA3HcKt6ITXA3ivdz367yBh23uUBtl68n99wRduNhCm3~I1skd0xf5tWkTgQzqc4AIGbMwG3~c0fMgyXKL1TzCgm2xFGiEqTvJ8hkXn6ywA__";

const JOURNAL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/3z3fBIAoBKXAEuwFzI4vTf/sandbox/wIV4xXjxL2KqszQUijo3Qx-img-4_1771339864000_na1fn_am91cm5hbC1jYXJk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM3ozZkJJQW9CS1hBRXV3RnpJNHZUZi9zYW5kYm94L3dJVjR4WGp4TDJLcXN6UVVpam8zUXgtaW1nLTRfMTc3MTMzOTg2NDAwMF9uYTFmbl9hbTkxY201aGJDMWpZWEprLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jsKeHEtKRcJSOLJb5zblXcUm3tDTSKv3u3IRB-hcH6ou1ZH7aI34E2HBoATIXujuh8PjoY~wWGhV2aTar1wzOUth-wZVmiSXjcbIGNYk6XZkfSsEuVck5yhDEuvS53E999ueC0XoIiwp6TRBeGlZgw8gK8FZuKNzzlwJYnmDJ6i53W0jT-izsHf-Oup3R7acbWKQwz98Xv9jw6prOIDb2k0sYXX~wPd0SPqAGmq7trMfev8I8Jyq2jBIe6hFfJdNeEws2qU4yszHfppOTluvwE-vlHcX8nMdxMIOz0YtCVtkMfyRdPGOiMYaUQ5ZecXbWj4vo34sbVJiC503yVf37Q__";

const PROFILE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/3z3fBIAoBKXAEuwFzI4vTf/sandbox/wIV4xXjxL2KqszQUijo3Qx-img-5_1771339870000_na1fn_cHJvZmlsZS1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM3ozZkJJQW9CS1hBRXV3RnpJNHZUZi9zYW5kYm94L3dJVjR4WGp4TDJLcXN6UVVpam8zUXgtaW1nLTVfMTc3MTMzOTg3MDAwMF9uYTFmbl9jSEp2Wm1sc1pTMWhZbk4wY21GamRBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m77MBMizPt2dkKbYi6iVG2QPWxbLBtmV8yhl-2blhZ9SA2ndZXslk7KBmJ1xg4f1YKa8l2DtfI5lpL7Jgh3ww4BmhCrWUpXvTIhFQiuQEll0I96-CpsHGuTyahfEjLd14vyQVh-Au3Jb0KvMtrH3XWeq2PbDr7NMigONsATc626veoLyyjMKGHvjRj~XcUcb6Qe9rRGTmMvJI4pai6iIkP0X05NtQHbSilgo-mMgAq0v4qQRfxmWuvajvgokYH-v94g-2wEQfUben0MLV04hwb7G2EU35r0D45IURgsYbSoiFON4CIu8RQhiRIw7ZC53WAiUv6PvOppxa0TocztLAg__";

// Staggered text animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

function AnimatedName({ text, color }: { text: string; color: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-block"
      style={{ color }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -40]);

  return (
    <PageLayout>
      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen pt-24 pb-16">
        {/* Hero background image - subtle, low opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <div
            className="absolute top-0 right-0 w-3/4 h-full opacity-[0.06]"
            style={{
              backgroundImage: `url(${HERO_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage:
                "linear-gradient(to left, black 30%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 30%, transparent 100%)",
            }}
          />
        </div>

        <motion.div
          className="container relative"
          style={{ opacity: heroOpacity, y: heroY, zIndex: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[calc(100vh-8rem)]">
            {/* Left column - Main content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center pt-12 lg:pt-24">
              {/* Greeting */}
              <motion.p
                className="font-mono text-sm tracking-widest mb-6"
                style={{ color: "oklch(0.50 0.20 25)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I build things that work.
              </motion.p>

              {/* Name - Character-by-character reveal */}
              <h1
                className="font-serif font-bold leading-[0.92] mb-8"
                style={{
                  fontSize: "clamp(4rem, 9vw, 7rem)",
                }}
              >
                <AnimatedName text="Iana " color="oklch(0.25 0.02 60)" />
                <AnimatedName text="Lin" color="oklch(0.50 0.20 25)" />
              </h1>

              {/* Tagline — direct, builder energy */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <p
                  className="text-lg md:text-xl leading-relaxed max-w-lg"
                  style={{ color: "oklch(0.40 0.02 60)" }}
                >
                  Full-stack + ML builder at UC Berkeley.
                  <br />
                  I ship brain-computer interfaces, neural nets,
                  <br />
                  slime businesses, and everything in between.
                </p>
                {/* Ink bleed underline */}
                <motion.div
                  className="mt-4 h-[2px] origin-left"
                  style={{ backgroundColor: "oklch(0.50 0.20 25 / 0.2)" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                />
              </motion.div>

              {/* Code-style info — punchy */}
              <motion.div
                className="font-mono text-sm leading-loose mb-10"
                style={{ color: "oklch(0.50 0.20 25 / 0.6)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  "// EECS @ UC Berkeley — 4.0 GPA",
                  "// shipped: BCIs, ML pipelines, formal proofs, a slime empire",
                  "// currently: making weird things that shouldn't work (but do)",
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>

              {/* Email link */}
              <motion.a
                href="mailto:ianalin123@berkeley.edu"
                className="inline-flex items-center gap-3 font-mono text-sm tracking-wide transition-all duration-300 group"
                style={{ color: "oklch(0.50 0.20 25)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ x: 6 }}
              >
                <motion.span
                  className="w-8 h-px transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: "oklch(0.50 0.20 25)" }}
                  layoutId="email-line"
                />
                ianalin123@berkeley.edu
              </motion.a>
            </div>

            {/* Right column - Neural signal + profile art (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 pt-12 lg:pt-28">
              {/* Profile abstract art */}
              <motion.div
                className="relative overflow-hidden mx-auto lg:mx-0"
                style={{
                  maxWidth: "300px",
                  borderRadius: "24px 16px 20px 18px",
                  boxShadow: "0 20px 60px oklch(0.50 0.20 25 / 0.06)",
                }}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                whileHover={{
                  rotate: 1,
                  scale: 1.02,
                  transition: { duration: 0.5 },
                }}
              >
                <img
                  src={PROFILE_IMG}
                  alt="Abstract portrait illustration"
                  className="w-full h-auto"
                  style={{ opacity: 0.9 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.96 0.02 80 / 0.3) 0%, transparent 40%)",
                  }}
                />
              </motion.div>

              {/* Neural Signal Viz */}
              <NeuralSignal />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Slime drip transition */}
      <SlimeDrip color="oklch(0.50 0.20 25 / 0.06)" />

      {/* ==================== SECTIONS / CARDS ==================== */}
      <section className="py-20 relative">
        <div className="container">
          <AnimatedSection delay={0}>
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.50 0.20 25)" }}
            >
              What I've built
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-12"
              style={{ color: "oklch(0.25 0.02 60)" }}
            >
              The{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                work
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionCard
              title="Technical"
              description="ML pipelines, BCIs, formal proofs, neural data — the stuff that ships."
              imageUrl={TECHNICAL_IMG}
              href="/technical"
              index={0}
            />
            <SectionCard
              title="Creative"
              description="Photos, slime empire, nonprofit bakery, and the weird side projects."
              imageUrl={CREATIVE_IMG}
              href="/creative"
              index={1}
            />
            <SectionCard
              title="Journal"
              description="Raw thoughts on AI, identity, consciousness — unfiltered."
              imageUrl={JOURNAL_IMG}
              href="/journal"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Slime drip transition */}
      <SlimeDrip color="oklch(0.85 0.06 15 / 0.12)" flip />

      {/* ==================== SKILLS / TAG CLOUD ==================== */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                Stack
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "oklch(0.25 0.02 60)" }}
              >
                Things I{" "}
                <span
                  className="italic"
                  style={{ color: "oklch(0.50 0.20 25)" }}
                >
                  actually use
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "oklch(0.45 0.02 60)" }}
              >
                Not a list of buzzwords. These are the tools I reach for when
                building things that work — from ML research to full-stack apps
                to formal verification.
              </p>
              <TagCloud />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "20px 14px 18px 16px",
                  border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                  boxShadow: "0 16px 50px oklch(0.50 0.20 25 / 0.05)",
                }}
              >
                <img
                  src={HERO_IMG}
                  alt="Bio-organic neural illustration"
                  className="w-full h-auto"
                  style={{ opacity: 0.55 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.96 0.02 80 / 0.5) 0%, transparent 60%)",
                  }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Slime drip transition */}
      <SlimeDrip color="oklch(0.50 0.20 25 / 0.05)" />

      {/* ==================== ABOUT / CONTACT ==================== */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <AnimatedSection>
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                About
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold mb-8"
                style={{ color: "oklch(0.25 0.02 60)" }}
              >
                The{" "}
                <span
                  className="italic"
                  style={{ color: "oklch(0.50 0.20 25)" }}
                >
                  tldr
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <motion.div
                className="p-8 md:p-10 mb-8"
                style={{
                  backgroundColor: "oklch(0.97 0.015 80)",
                  borderRadius: "20px 12px 18px 14px",
                  border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                }}
                whileHover={{
                  boxShadow: "0 12px 40px oklch(0.50 0.20 25 / 0.06)",
                  transition: { duration: 0.4 },
                }}
              >
                <p
                  className="text-base leading-[1.8] mb-6"
                  style={{ color: "oklch(0.35 0.02 60)" }}
                >
                  EECS at Berkeley. I build things across the full stack — from
                  brain-computer interfaces and spiking neural networks to
                  formal arithmetic proofs and 3D bioimage segmentation. I also
                  ran a slime business and a nonprofit bakery, because why not.
                </p>
                <p
                  className="text-base leading-[1.8] mb-6"
                  style={{ color: "oklch(0.35 0.02 60)" }}
                >
                  I care about shipping. Not perfection — shipping. The best way
                  to learn is to build something, put it in the world, and see
                  what breaks. Then fix it. Then ship again.
                </p>
                <div
                  className="font-mono text-sm leading-loose"
                  style={{ color: "oklch(0.50 0.20 25 / 0.5)" }}
                >
                  <p>// 4.0 GPA, 2+ years research, 1 publication</p>
                  <p>// fueled by: chrysanthemum tea and audiobooks</p>
                  <p>// status: always building something</p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="mailto:ianalin123@berkeley.edu"
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-300"
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
                  Let's build something
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    &rarr;
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/cs180"
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-300 border"
                  style={{
                    borderColor: "oklch(0.50 0.20 25 / 0.2)",
                    color: "oklch(0.50 0.20 25)",
                    borderRadius: "12px 8px 10px 14px",
                  }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: "oklch(0.50 0.20 25 / 0.4)",
                    backgroundColor: "oklch(0.50 0.20 25 / 0.04)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  View CS180
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
