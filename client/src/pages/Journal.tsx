/*
 * Journal Page — "Weird Genius Who Ships"
 * Stream-of-consciousness entries, reading list, topic tags.
 * Cream/red theme, scroll animations.
 */

import AnimatedSection from "@/components/AnimatedSection";
import PageLayout from "@/components/PageLayout";
import SlimeDrip from "@/components/SlimeDrip";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Hash, Pen, Star } from "lucide-react";
import { Link } from "wouter";

interface JournalEntry {
  title: string;
  date: string;
  content: string;
  tags: string[];
}

const entries: JournalEntry[] = [
  {
    title: "Pseudo-Social AI Agent Spaces?",
    date: "2025.08.08",
    content: `I believe that our identities are intrinsically intertwined with the how others see us (but the weight of this external feedback is so tricky parameterize! I think about this a lot.)

Lately, I have recently often using ChatGPT as a more knowledgeable version of myself, like a sounding board that gives me new insights about aspects of myself (either in just typing out what I would say to an agent or in iterating on the responses I receive from the agent)

At the same time, I have been thinking about social media as a performative space where our "online selves" act out a kind of continuous theatre. It is a space shaped both by self-perception and self-audience relationships.

So I have been wondering, "are there platforms where multiple people can make digital clones of themselves and these agents can interact freely, kind of like a pseudo-social social media?" I have so many thoughts...`,
    tags: ["identity", "social media", "ai-agents"],
  },
  {
    title: "Reactivating Passion: My Slime Times",
    date: "2025.07.05",
    content: "",
    tags: ["passions", "creativity", "confidence"],
  },
  {
    title: "Identity Fragments",
    date: "2025.01.12",
    content: `Am I a scientist who makes art, or an artist who happens to do science? The question feels less important now. Maybe the categorization itself is the problem.

Today I spent equal time debugging a neural network and arranging photos for my Instagram story. Both felt like acts of creation, pattern-seeking, meaning-making. The tools differ, but the underlying drive is the same: understand -> create -> share -> repeat.

- Science: asking questions about how things work
- Art: asking questions about how things feel
- Entrepreneurship: asking questions about how things could be better

All three are forms of inquiry. All three require both rigor and intuition.`,
    tags: ["identity", "creativity", "philosophy"],
  },
  {
    title: "Learning Notes: Z3 Theorem Prover",
    date: "2025.01.08",
    content:
      "SMT (Satisfiability Modulo Theories) is like having a conversation with mathematical truth. You pose constraints, and Z3 either finds a solution or proves none exists. The elegance is in the declarative nature — you describe what you want, not how to get there. It's constraint-based thinking, which feels different from imperative programming. More like having a dialogue with the mathematical universe.",
    tags: ["formal methods", "Z3", "learning"],
  },
];

const frequentTopics = [
  "identity",
  "ai-agents",
  "neuroscience",
  "creativity",
  "learning",
  "consciousness",
  "mathematics",
];

const readingList = {
  current: [
    { title: "Gödel, Escher, Bach", author: "Douglas R. Hofstadter" },
    { title: "Siddhartha", author: "Hermann Hesse" },
  ],
  finished: [
    {
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      rating: 5,
    },
    { title: "Being Mortal", author: "Atul Gawande", rating: 5 },
  ],
};

export default function Journal() {
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
              Unfiltered
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "oklch(0.25 0.02 60)" }}
            >
              Digital{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.50 0.20 25)" }}
              >
                Journal
              </span>
            </h1>
            <p
              className="text-lg max-w-xl mb-12"
              style={{ color: "oklch(0.45 0.02 60)" }}
            >
              Stream-of-consciousness reflections, vows to myself, and
              conversations from daily life. Raw thoughts, no polish.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SlimeDrip color="oklch(0.50 0.20 25 / 0.05)" />

      {/* Journal entries + sidebar */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Entries column */}
            <div className="lg:col-span-2 space-y-8">
              {entries.map((entry, i) => (
                <AnimatedSection key={entry.title} delay={i * 0.1}>
                  <motion.article
                    className="p-6 md:p-8"
                    style={{
                      backgroundColor: "oklch(0.97 0.015 80)",
                      borderRadius: "20px 12px 18px 14px",
                      border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                    }}
                    whileHover={{
                      boxShadow:
                        "0 12px 40px oklch(0.50 0.20 25 / 0.06)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Pen
                        size={14}
                        style={{ color: "oklch(0.50 0.20 25 / 0.5)" }}
                      />
                      <span
                        className="font-mono text-xs"
                        style={{ color: "oklch(0.55 0.02 60)" }}
                      >
                        {entry.date}
                      </span>
                    </div>

                    <h2
                      className="font-serif text-xl md:text-2xl font-semibold mb-4"
                      style={{ color: "oklch(0.25 0.02 60)" }}
                    >
                      {entry.title}
                    </h2>

                    <p
                      className="text-sm leading-[1.8] mb-5 whitespace-pre-line"
                      style={{ color: "oklch(0.40 0.02 60)" }}
                    >
                      {entry.content}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
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
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stats */}
              <AnimatedSection direction="right" delay={0.1}>
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "oklch(0.97 0.015 80)",
                    borderRadius: "16px",
                    border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                  }}
                >
                  <h3
                    className="font-serif text-lg font-semibold mb-4"
                    style={{ color: "oklch(0.25 0.02 60)" }}
                  >
                    Journal Stats
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Total entries", value: "4" },
                      { label: "Words written", value: "1,023" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex justify-between"
                      >
                        <span
                          className="text-sm"
                          style={{ color: "oklch(0.50 0.02 60)" }}
                        >
                          {stat.label}
                        </span>
                        <span
                          className="font-mono text-sm font-medium"
                          style={{ color: "oklch(0.25 0.02 60)" }}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Frequent Topics */}
              <AnimatedSection direction="right" delay={0.2}>
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "oklch(0.97 0.015 80)",
                    borderRadius: "16px",
                    border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Hash
                      size={16}
                      style={{ color: "oklch(0.50 0.20 25)" }}
                    />
                    <h3
                      className="font-serif text-lg font-semibold"
                      style={{ color: "oklch(0.25 0.02 60)" }}
                    >
                      Frequent Topics
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {frequentTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 font-mono text-xs rounded-full"
                        style={{
                          backgroundColor:
                            "oklch(0.50 0.20 25 / 0.08)",
                          color: "oklch(0.50 0.20 25)",
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Reading List */}
              <AnimatedSection direction="right" delay={0.3}>
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "oklch(0.97 0.015 80)",
                    borderRadius: "16px",
                    border: "1px solid oklch(0.50 0.20 25 / 0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen
                      size={16}
                      style={{ color: "oklch(0.50 0.20 25)" }}
                    />
                    <h3
                      className="font-serif text-lg font-semibold"
                      style={{ color: "oklch(0.25 0.02 60)" }}
                    >
                      Reading List
                    </h3>
                  </div>

                  <p
                    className="font-mono text-xs mb-3"
                    style={{ color: "oklch(0.50 0.20 25 / 0.6)" }}
                  >
                    Currently Reading
                  </p>
                  <div className="space-y-3 mb-5">
                    {readingList.current.map((book) => (
                      <div key={book.title}>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "oklch(0.25 0.02 60)" }}
                        >
                          {book.title}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "oklch(0.50 0.02 60)" }}
                        >
                          {book.author}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p
                    className="font-mono text-xs mb-3"
                    style={{ color: "oklch(0.50 0.20 25 / 0.6)" }}
                  >
                    Recently Finished
                  </p>
                  <div className="space-y-3">
                    {readingList.finished.map((book) => (
                      <div key={book.title}>
                        <div className="flex items-center justify-between">
                          <p
                            className="text-sm font-medium"
                            style={{ color: "oklch(0.25 0.02 60)" }}
                          >
                            {book.title}
                          </p>
                          <div className="flex gap-0.5">
                            {Array.from({ length: book.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  size={10}
                                  fill="oklch(0.50 0.20 25)"
                                  style={{
                                    color: "oklch(0.50 0.20 25)",
                                  }}
                                />
                              )
                            )}
                          </div>
                        </div>
                        <p
                          className="text-xs"
                          style={{ color: "oklch(0.50 0.02 60)" }}
                        >
                          {book.author}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
