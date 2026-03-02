/*
 * NeuralSignal — Organic Biomechanics Design
 * Animated neural waveform visualization in crimson.
 * Continuously animating SVG path that mimics EEG signals.
 */

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function NeuralSignal() {
  const [path, setPath] = useState("");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let running = true;

    const generatePath = (t: number) => {
      const points: string[] = [];
      const width = 300;
      const height = 60;
      const mid = height / 2;

      for (let x = 0; x <= width; x += 2) {
        const freq1 = Math.sin((x * 0.05 + t * 2) * 1.0) * 12;
        const freq2 = Math.sin((x * 0.12 + t * 3) * 0.8) * 8;
        const freq3 = Math.cos((x * 0.03 + t * 1.5) * 1.2) * 5;
        const spike =
          Math.abs(Math.sin(x * 0.08 + t * 2.5)) > 0.95
            ? (Math.random() - 0.5) * 30
            : 0;
        const y = mid + freq1 + freq2 + freq3 + spike;
        points.push(`${x === 0 ? "M" : "L"} ${x} ${y}`);
      }
      return points.join(" ");
    };

    const animate = (timestamp: number) => {
      if (!running) return;
      const t = timestamp * 0.001;
      setPath(generatePath(t));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const [hz, setHz] = useState(40);
  const [mv, setMv] = useState(1.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHz(35 + Math.floor(Math.random() * 10));
      setMv(+(0.7 + Math.random() * 0.6).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="p-6 overflow-hidden"
      style={{
        backgroundColor: "oklch(0.97 0.015 80)",
        border: "1px solid oklch(0.50 0.20 25 / 0.08)",
        borderRadius: "16px 10px 14px 12px",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-mono text-xs tracking-wider"
          style={{ color: "oklch(0.50 0.02 60)" }}
        >
          real-time neural signal
        </span>
        <span
          className="inline-block w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: "oklch(0.50 0.20 25)" }}
        />
      </div>

      <svg
        viewBox="0 0 300 60"
        className="w-full"
        style={{ height: "60px" }}
      >
        <path
          d={path}
          fill="none"
          stroke="oklch(0.50 0.20 25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex items-center justify-between mt-3">
        <span
          className="font-mono text-xs"
          style={{ color: "oklch(0.50 0.02 60)" }}
        >
          ~{hz}Hz | {mv}mV
        </span>
      </div>
    </motion.div>
  );
}
