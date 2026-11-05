"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { stackLayers } from "@/lib/data";

const nodeVariants = {
  off: { scale: 0.75, backgroundColor: "#eef2f6", borderColor: "#a2503f" },
  on: { scale: 1, backgroundColor: "#c46a5a", borderColor: "#c46a5a" },
};

const chipVariants = {
  off: { opacity: 0, y: 10 },
  on: { opacity: 1, y: 0 },
};

export default function Skills() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.65"],
  });

  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="skills" className="skills-section">
      <div className="wrap skills-layout">
        {/* Sticky Header Column */}
        <div className="skills-header">
          <span className="skills-eyebrow">Technical Skills</span>
          <h2 className="skills-heading">From the browser to the database and back again.</h2>
          <p className="skills-subtext">
            The core tools, languages, and frameworks I use on each layer of a modern web application.
          </p>
        </div>

        {/* Timeline Pipe & Stacks */}
        <div className="skills-pipeline">
          <div className="pipeline-track" aria-hidden>
            <motion.span className="pipeline-progress" style={{ scaleY: fill }} />
            <i className="pipeline-pulsar" />
          </div>

          <ol ref={listRef} className="pipeline-list">
            {stackLayers.map((layer) => (
              <motion.li
                key={layer.name}
                className="pipeline-step"
                initial="off"
                whileInView="on"
                viewport={{ amount: 0.45, margin: "0px 0px -10% 0px" }}
                transition={{ staggerChildren: 0.05 }}
              >
                <motion.span
                  className="pipeline-node"
                  variants={nodeVariants}
                  transition={{ duration: 0.4 }}
                />
                <div className="pipeline-layer-content">
                  <div className="layer-header">
                    <h3 className="layer-title">{layer.name}</h3>
                    <p className="layer-note">{layer.note}</p>
                  </div>
                  <ul className="layer-chip-list">
                    {layer.items.map((item) => (
                      <motion.li
                        key={item}
                        className="layer-chip"
                        variants={chipVariants}
                        transition={{ duration: 0.35 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
