/*
 * Navbar — "Weird Genius Who Ships" Design
 * Sticky nav with cream backdrop blur, crimson accents.
 * Uses wouter Link for internal routing.
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Technical", href: "/technical" },
  { label: "Creative", href: "/creative" },
  { label: "Journal", href: "/journal" },
  { label: "CS180", href: "/cs180" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.92]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [location] = useLocation();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `oklch(0.96 0.02 80 / ${bgOpacity})`,
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          backgroundColor: "oklch(0.50 0.20 25 / 0.1)",
          opacity: borderOpacity,
        }}
      />
      <div
        className="backdrop-blur-md"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <nav className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight"
            style={{ color: "oklch(0.25 0.02 60)" }}
          >
            Iana <span style={{ color: "oklch(0.50 0.20 25)" }}>Lin</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wide transition-colors duration-300 group"
                style={{
                  color:
                    location === link.href
                      ? "oklch(0.50 0.20 25)"
                      : "oklch(0.40 0.02 60)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "oklch(0.50 0.20 25)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    location === link.href
                      ? "oklch(0.50 0.20 25)"
                      : "oklch(0.40 0.02 60)")
                }
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                  style={{
                    backgroundColor: "oklch(0.50 0.20 25)",
                    width: location === link.href ? "100%" : "0%",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t px-6 pb-6 pt-4"
            style={{
              backgroundColor: "oklch(0.96 0.02 80 / 0.98)",
              borderColor: "oklch(0.50 0.20 25 / 0.1)",
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium"
                  style={{
                    color:
                      location === link.href
                        ? "oklch(0.50 0.20 25)"
                        : "oklch(0.40 0.02 60)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
