"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Code2, Cpu, Globe, Layers, Sparkles, Terminal } from "lucide-react";

const techNodes = [
  { name: "React", icon: Code2, x: "-38%", y: "-34%", delay: 0.1 },
  { name: "Next.js", icon: Globe, x: "36%", y: "-36%", delay: 0.2 },
  { name: "TypeScript", icon: Cpu, x: "44%", y: "24%", delay: 0.3 },
  { name: "Node.js", icon: Terminal, x: "-36%", y: "32%", delay: 0.4 },
  { name: "Tailwind CSS", icon: Layers, x: "0%", y: "46%", delay: 0.5 },
];

export default function HeroVisual() {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D perspective tilts
  const rotateX = useTransform(smoothY, [-1, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);

  // Parallax offsets for different layers to create depth
  const backPanelX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const backPanelY = useTransform(smoothY, [-1, 1], [-12, 12]);

  const frontPanelX = useTransform(smoothX, [-1, 1], [8, -8]);
  const frontPanelY = useTransform(smoothY, [-1, 1], [8, -8]);

  const nodesX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const nodesY = useTransform(smoothY, [-1, 1], [-18, 18]);

  const glowX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const glowY = useTransform(smoothY, [-1, 1], [-30, 30]);

  useEffect(() => {
    if (reduce) return;

    const handlePointerMove = (e: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY, reduce]);

  return (
    <div className="hero-stage" aria-hidden="true">
      {/* Soft Ambient Depth Glow */}
      <motion.div
        className="hero-ambient-glow"
        style={{
          x: reduce ? 0 : glowX,
          y: reduce ? 0 : glowY,
        }}
      />

      {/* Main Perspective Container */}
      <motion.div
        className="hero-canvas-wrap"
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
        }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      >
        {/* Subtle Constellation Connecting Lines */}
        <motion.svg
          className="hero-connect-lines"
          viewBox="0 0 500 500"
          style={{
            x: reduce ? 0 : nodesX,
            y: reduce ? 0 : nodesY,
          }}
        >
          <line x1="150" y1="120" x2="250" y2="250" stroke="rgba(196, 88, 66, 0.28)" strokeDasharray="3 4" strokeWidth="1.2" />
          <line x1="350" y1="110" x2="250" y2="250" stroke="rgba(82, 96, 117, 0.24)" strokeDasharray="3 4" strokeWidth="1.2" />
          <line x1="380" y1="360" x2="250" y2="250" stroke="rgba(196, 88, 66, 0.28)" strokeDasharray="3 4" strokeWidth="1.2" />
          <line x1="140" y1="370" x2="250" y2="250" stroke="rgba(82, 96, 117, 0.24)" strokeDasharray="3 4" strokeWidth="1.2" />
          <line x1="250" y1="410" x2="250" y2="250" stroke="rgba(196, 88, 66, 0.3)" strokeDasharray="3 4" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(24, 30, 42, 0.08)" strokeWidth="1" />
          <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(24, 30, 42, 0.05)" strokeWidth="1" />
        </motion.svg>

        {/* Background Secondary Architectural Panel (Layered Behind) */}
        <motion.div
          className="hero-subpanel"
          style={{
            x: reduce ? 0 : backPanelX,
            y: reduce ? 0 : backPanelY,
          }}
        >
          <div className="subpanel-bar">
            <span className="subpanel-chip">system:healthy</span>
            <span className="subpanel-time">runtime:edge</span>
          </div>
          <div className="subpanel-body">
            <div className="subpanel-metric">
              <span className="metric-label">Pipeline</span>
              <span className="metric-val">CI/CD &bull; Passing</span>
            </div>
            <div className="subpanel-metric">
              <span className="metric-label">Response</span>
              <span className="metric-val text-coral">&lt; 12ms</span>
            </div>
            <div className="subpanel-graph">
              <div className="graph-bar h-40" />
              <div className="graph-bar h-70 active" />
              <div className="graph-bar h-55" />
              <div className="graph-bar h-85 active" />
              <div className="graph-bar h-60" />
              <div className="graph-bar h-95 active" />
            </div>
          </div>
        </motion.div>

        {/* Foreground Primary Developer Workspace Card */}
        <motion.div
          className="hero-card-primary"
          style={{
            x: reduce ? 0 : frontPanelX,
            y: reduce ? 0 : frontPanelY,
          }}
        >
          {/* Editor Header Bar */}
          <div className="editor-topbar">
            <div className="editor-controls">
              <span className="ctrl-dot dot-red" />
              <span className="ctrl-dot dot-yellow" />
              <span className="ctrl-dot dot-green" />
            </div>
            <div className="editor-tabs">
              <span className="editor-tab active">
                <Code2 size={12} className="tab-icon" />
                <span>workspace.tsx</span>
              </span>
              <span className="editor-tab">schema.ts</span>
            </div>
            <div className="editor-status">
              <span className="status-ping" />
              <span>live</span>
            </div>
          </div>

          {/* Code Body */}
          <div className="editor-code">
            <div className="code-row">
              <span className="c-num">01</span>
              <span className="c-tok c-keyword">export</span>
              <span className="c-tok c-keyword">interface</span>
              <span className="c-tok c-type">FullStackEngineer</span>
              <span className="c-tok c-bracket">&#123;</span>
            </div>
            <div className="code-row">
              <span className="c-num">02</span>
              <span className="c-indent" />
              <span className="c-tok c-prop">developer:</span>
              <span className="c-tok c-string">&quot;Itisha Naukudkar&quot;</span>;
            </div>
            <div className="code-row">
              <span className="c-num">03</span>
              <span className="c-indent" />
              <span className="c-tok c-prop">focus:</span>
              <span className="c-tok c-bracket">[</span>
              <span className="c-tok c-string">&quot;React&quot;</span>,
              <span className="c-tok c-string">&quot;Next.js&quot;</span>,
              <span className="c-tok c-string">&quot;TypeScript&quot;</span>
              <span className="c-tok c-bracket">]</span>;
            </div>
            <div className="code-row">
              <span className="c-num">04</span>
              <span className="c-indent" />
              <span className="c-tok c-prop">architecture:</span>
              <span className="c-tok c-string">&quot;Accessible &amp; High-Performance&quot;</span>;
            </div>
            <div className="code-row">
              <span className="c-num">05</span>
              <span className="c-indent" />
              <span className="c-tok c-func">buildApplication</span>
              <span className="c-tok c-bracket">():</span>
              <span className="c-tok c-type">InteractiveExperience</span>;
            </div>
            <div className="code-row">
              <span className="c-num">06</span>
              <span className="c-tok c-bracket">&#125;</span>
            </div>
          </div>

          {/* Integrated Dock Status Footer */}
          <div className="editor-footer">
            <div className="footer-left">
              <Sparkles size={11} className="text-coral" />
              <span>Full Stack Architecture &bull; Ready</span>
            </div>
            <div className="footer-right">
              <span>UTF-8</span>
              <span>TypeScript 5.5</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Strategic Tech Pills */}
        <motion.div
          className="hero-nodes-layer"
          style={{
            x: reduce ? 0 : nodesX,
            y: reduce ? 0 : nodesY,
          }}
        >
          {techNodes.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="hero-tech-chip"
                style={{
                  left: `calc(50% + ${tech.x})`,
                  top: `calc(50% + ${tech.y})`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + tech.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Icon size={13} className="tech-chip-icon" />
                <span className="tech-chip-text">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
