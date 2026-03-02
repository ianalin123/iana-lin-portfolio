/*
 * Footer — "Weird Genius Who Ships"
 * Warm charcoal footer with cream text, social links, builder tagline.
 */

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Mail,
    href: "mailto:ianalin123@berkeley.edu",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/iana-lin",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/iana-lin",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/iana.lin",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative py-16 mt-8"
      style={{
        backgroundColor: "oklch(0.25 0.02 60)",
        color: "oklch(0.85 0.02 80)",
      }}
    >
      <div className="container">
        {/* Tagline */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-serif text-lg md:text-xl italic mb-3"
            style={{ color: "oklch(0.85 0.02 80)" }}
          >
            Shipping weird things that work.
          </p>
          <p
            className="font-mono text-xs tracking-wider"
            style={{ color: "oklch(0.60 0.02 80)" }}
          >
            // always building something
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: "oklch(0.50 0.20 25 / 0.15)",
                color: "oklch(0.85 0.02 80)",
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "oklch(0.50 0.20 25 / 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center">
          <p
            className="text-xs"
            style={{ color: "oklch(0.50 0.02 80)" }}
          >
            &copy; {new Date().getFullYear()} Iana Lin. Built with chrysanthemum
            tea and audiobooks.
          </p>
        </div>
      </div>
    </footer>
  );
}
