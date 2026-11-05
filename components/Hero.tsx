"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import HeroVisual from "./HeroVisual";

const ease = [0.22, 1, 0.36, 1] as const;

function TitleLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="hero-title-line-mask">
      <motion.span
        className="hero-title-line"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="hero-section">
      <div className="hero-ambient-grid" aria-hidden />

      <div className="wrap hero-container">
        {/* Left Column: Typography & CTAs */}
        <motion.div className="hero-content" style={{ y: textY, opacity: fade }}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <Sparkles size={13} className="text-coral" />
            <span>Web Developer</span>
          </motion.div>

          <h1 className="hero-title" aria-label={profile.name}>
            <TitleLine delay={0.18}>Itisha</TitleLine>
            <TitleLine delay={0.3}>Naukudkar</TitleLine>
          </h1>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            I build responsive web applications with React, Next.js and TypeScript.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
          >
            <a href="#work" className="btn btn-primary">
              <span>See my work</span>
              <ArrowDown size={15} />
            </a>
            <a
              href={profile.resume}
              download
              className="btn btn-secondary"
            >
              <FileText size={15} />
              <span>Download resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Developer Workspace Visual */}
        <motion.div
          className="hero-visual-wrapper"
          style={{ y: visualY, opacity: fade }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.a
        href="#about"
        className="hero-scroll-indicator"
        style={{ opacity: fade }}
        aria-label="Scroll down to About section"
      >
        <span className="scroll-pip" />
      </motion.a>
    </section>
  );
}
