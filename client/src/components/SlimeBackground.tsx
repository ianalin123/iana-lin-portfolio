/*
 * SlimeBackground — Organic Biomechanics Design
 * Continuously morphing SVG blobs with gooey filter effect.
 * Responds to scroll position for parallax-like depth.
 * Includes cursor-following slime blob for interactivity.
 * Colors: translucent crimson and rose on cream canvas.
 */

import { useEffect, useRef, useState } from "react";

interface Blob {
  id: number;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  opacity: number;
  color: string;
  speed: number;
  phase: number;
}

function generateBlobs(count: number): Blob[] {
  const colors = [
    "rgba(185, 28, 28, 0.07)",
    "rgba(185, 28, 28, 0.05)",
    "rgba(220, 80, 80, 0.06)",
    "rgba(232, 180, 184, 0.10)",
    "rgba(185, 28, 28, 0.04)",
    "rgba(200, 50, 50, 0.06)",
    "rgba(232, 180, 184, 0.08)",
    "rgba(185, 28, 28, 0.05)",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    cx: 5 + Math.random() * 90,
    cy: Math.random() * 100,
    rx: 10 + Math.random() * 20,
    ry: 10 + Math.random() * 20,
    opacity: 0.4 + Math.random() * 0.6,
    color: colors[i % colors.length],
    speed: 0.2 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
  }));
}

export default function SlimeBackground() {
  const [blobs] = useState(() => generateBlobs(14));
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const cursorBlobRef = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  useEffect(() => {
    let running = true;
    let cursorX = 50;
    let cursorY = 50;

    const animate = (timestamp: number) => {
      if (!running) return;
      const t = timestamp * 0.001;
      const scrollY = scrollYRef.current;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollY / Math.max(docHeight - window.innerHeight, 1)) * 100;

      if (svgRef.current) {
        const ellipses = svgRef.current.querySelectorAll<SVGEllipseElement>("ellipse.blob");
        ellipses.forEach((el, i) => {
          const blob = blobs[i];
          if (!blob) return;

          const tt = t * blob.speed + blob.phase;
          const scrollOffset = scrollPercent * 0.3 * (blob.speed + 0.3);

          const cx = blob.cx + Math.sin(tt * 0.7) * 4 + Math.cos(tt * 0.3) * 3;
          const cy = blob.cy + Math.cos(tt * 0.5) * 5 + Math.sin(tt * 0.2) * 3 - scrollOffset;
          const rx = blob.rx + Math.sin(tt * 1.1) * 4 + Math.cos(tt * 0.6) * 2;
          const ry = blob.ry + Math.cos(tt * 0.9) * 4 + Math.sin(tt * 0.4) * 2;

          el.setAttribute("cx", `${cx}%`);
          el.setAttribute("cy", `${cy}%`);
          el.setAttribute("rx", `${rx}%`);
          el.setAttribute("ry", `${ry}%`);
        });
      }

      // Smooth cursor-following blob
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;
      cursorX += (targetX - cursorX) * 0.04;
      cursorY += (targetY - cursorY) * 0.04;

      if (cursorBlobRef.current) {
        const wobbleX = Math.sin(t * 2) * 2;
        const wobbleY = Math.cos(t * 1.5) * 2;
        cursorBlobRef.current.setAttribute("cx", `${cursorX + wobbleX}%`);
        cursorBlobRef.current.setAttribute("cy", `${cursorY + wobbleY}%`);
        const rxCursor = 8 + Math.sin(t * 1.8) * 2;
        const ryCursor = 8 + Math.cos(t * 1.3) * 2;
        cursorBlobRef.current.setAttribute("rx", `${rxCursor}%`);
        cursorBlobRef.current.setAttribute("ry", `${ryCursor}%`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [blobs]);

  return (
    <>
      {/* SVG Gooey Filter Definition */}
      <svg
        className="slime-filter"
        aria-hidden="true"
        style={{ position: "fixed", width: 0, height: 0 }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Slime Layer */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ filter: "url(#goo)" }}
        >
          {blobs.map((blob) => (
            <ellipse
              key={blob.id}
              className="blob"
              cx={`${blob.cx}%`}
              cy={`${blob.cy}%`}
              rx={`${blob.rx}%`}
              ry={`${blob.ry}%`}
              fill={blob.color}
              style={{ opacity: blob.opacity }}
            />
          ))}
          {/* Cursor-following blob */}
          <ellipse
            ref={cursorBlobRef}
            cx="50%"
            cy="50%"
            rx="8%"
            ry="8%"
            fill="rgba(185, 28, 28, 0.04)"
            style={{ opacity: 0.6 }}
          />
        </svg>
      </div>
    </>
  );
}
