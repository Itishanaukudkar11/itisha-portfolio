"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Compass, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.6"],
  });

  const statementOpacity = useTransform(scrollYProgress, [0, 0.4], [0.35, 1]);
  const statementY = useTransform(scrollYProgress, [0, 0.4], [24, 0]);

  return (
    <section id="about" className="about-section">
      <div className="wrap about-container" ref={containerRef}>
        {/* Left column: Section label */}
        <div className="section-label-col">
          <span className="section-eyebrow">About</span>
          <div className="section-line" aria-hidden />
        </div>

        {/* Right column: Editorial Statement & Supporting Metadata */}
        <div className="about-main">
          <motion.div
            style={{ opacity: statementOpacity, y: statementY }}
            className="about-statement-wrap"
          >
            <p className="about-statement">
              I&rsquo;m a Web developer who builds{" "}
              <span className="text-coral-accent">fast, responsive web applications</span> with{" "}
              <span className="text-ink-accent">React, Next.js and TypeScript</span>. I work{" "}
              <span className="text-coral-accent">across the whole product</span>: the interface
              people use, the APIs behind it, and the content system that keeps it easy to update.
              I enjoy learning new technologies and solving problems.
            </p>
          </motion.div>

          {/* Supporting Information Cards */}
          <div className="about-cards-grid">
            {/* Experience Card */}
            <motion.div
              className="about-info-card experience-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
            >
              <div className="info-card-header">
                <div className="info-card-icon-wrap">
                  <Briefcase size={16} className="text-coral" />
                </div>
                <div className="info-card-meta">
                  <span className="info-label">Experience</span>
                  <span className="status-badge-subtle">
                    <span className="status-pip-live" />
                    Ongoing
                  </span>
                </div>
              </div>
              <h3 className="info-card-title">{profile.experience.role}</h3>
              <p className="info-card-org">
                {profile.experience.company} &bull; {profile.experience.location}
              </p>
              <p className="info-card-desc">
                A 6-month internship, ongoing, working on frontend applications, APIs, CMS and deployment.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              className="about-info-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease, delay: 0.2 }}
            >
              <div className="info-card-header">
                <div className="info-card-icon-wrap">
                  <GraduationCap size={16} className="text-mist" />
                </div>
                <div className="info-card-meta">
                  <span className="info-label">Education</span>
                  <span className="info-period">{profile.education.period}</span>
                </div>
              </div>
              <h3 className="info-card-title">{profile.education.degree}</h3>
              <p className="info-card-org">{profile.education.institution}</p>
              <p className="info-card-desc">{profile.education.description}</p>
            </motion.div>

            {/* Currently Learning Card */}
            <motion.div
              className="about-info-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease, delay: 0.3 }}
            >
              <div className="info-card-header">
                <div className="info-card-icon-wrap">
                  <Compass size={16} className="text-mist" />
                </div>
                <div className="info-card-meta">
                  <span className="info-label">Currently Learning</span>
                </div>
              </div>
              <h3 className="info-card-title">{profile.learning.topic}</h3>
              <p className="info-card-org">Continuous Skill Progression</p>
              <p className="info-card-desc">React, Node, Express and deployment.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
