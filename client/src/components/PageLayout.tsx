/*
 * PageLayout — Shared layout wrapper for all pages.
 * Includes Navbar, SlimeBackground, and Footer.
 */

import { type ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SlimeBackground from "./SlimeBackground";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SlimeBackground />
      <Navbar />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
