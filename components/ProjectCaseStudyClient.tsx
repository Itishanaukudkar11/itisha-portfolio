"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  AlertCircle,
  Lightbulb,
  Workflow,
  Compass,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectItem, ProjectScreenshot } from "@/lib/data";
import ProjectPreviewImage from "@/components/ProjectPreviewImage";
import ImageLightbox from "@/components/ImageLightbox";

interface CaseStudyProps {
  project: ProjectItem;
  prevProject: ProjectItem;
  nextProject: ProjectItem;
}

export default function ProjectCaseStudyClient({
  project,
  prevProject,
  nextProject,
}: CaseStudyProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    screenshots: ProjectScreenshot[];
    currentIndex: number;
    projectTitle: string;
  }>({
    isOpen: false,
    screenshots: project.screenshots,
    currentIndex: 0,
    projectTitle: project.title,
  });

  const openLightbox = (index: number) => {
    setLightbox({
      isOpen: true,
      screenshots: project.screenshots,
      currentIndex: index,
      projectTitle: project.title,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (index: number) => {
    setLightbox((prev) => ({ ...prev, currentIndex: index }));
  };

  return (
    <div className="case-study-page">
      {/* Scroll Progress Bar */}
      <motion.div className="case-study-progress-bar" style={{ scaleX }} />

      {/* Sticky Header Nav */}
      <header className="case-study-nav">
        <div className="wrap case-study-nav-inner">
          <Link href="/#work" className="case-study-back-link">
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>
          <div className="case-study-nav-center">
            <span className="case-study-nav-title">{project.title}</span>
          </div>
          <div className="case-study-nav-actions">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-ext-link"
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="case-hero-section">
        <div className="wrap case-hero-container">
          <Link href="/#work" className="case-hero-back-crumb">
            <ArrowLeft size={14} />
            <span>Back to selected work</span>
          </Link>

          <div className="case-hero-badge-wrap">
            <span className="case-category-badge">{project.category}</span>
          </div>

          <h1 className="case-hero-title">{project.title}</h1>
          <p className="case-hero-subtitle">{project.shortDescription}</p>

          <div className="case-hero-meta-grid">
            <div className="meta-box">
              <span className="meta-label">My Role</span>
              <p className="meta-value">{project.role}</p>
            </div>
            <div className="meta-box">
              <span className="meta-label">Core Technologies</span>
              <div className="meta-tech-pills">
                {project.technologies.map((t) => (
                  <span key={t} className="meta-tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {(project.projectUrl || project.githubUrl) && (
              <div className="meta-box">
                <span className="meta-label">Links</span>
                <div className="meta-links-row">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary small"
                    >
                      <ExternalLink size={14} />
                      <span>Live Site</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary small"
                    >
                      <GithubIcon size={14} />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section F: Project Screenshots (3 in one row on desktop) */}
      <section className="case-section case-screenshots-section">
        <div className="wrap">
          <div className="case-section-header">
            <span className="case-section-eyebrow">Interface Preview</span>
            <h2 className="case-section-title">Visual Workflows &amp; Screens</h2>
            <p className="case-section-sub">
              Click any screenshot to expand into full-screen high-resolution preview.
            </p>
          </div>

          <div className="case-screenshots-row">
            {project.screenshots.map((s, idx) => (
              <div key={idx} className="case-screenshot-col">
                <ProjectPreviewImage
                  src={s.url}
                  alt={s.alt}
                  caption={s.caption}
                  index={idx}
                  projectTitle={project.title}
                  category={project.category}
                  onClick={openLightbox}
                />
                <p className="case-screenshot-caption">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B: Project Overview */}
      <section className="case-section case-overview-section">
        <div className="wrap">
          <div className="case-section-header">
            <span className="case-section-eyebrow">Overview</span>
            <h2 className="case-section-title">The Problem &amp; Purpose</h2>
          </div>

          <div className="overview-cards-grid">
            <div className="overview-card highlight">
              <div className="card-top">
                <Sparkles size={18} className="text-coral" />
                <span className="card-label">Executive Summary</span>
              </div>
              <p className="card-body-text">{project.overview.summary}</p>
            </div>

            <div className="overview-card">
              <div className="card-top">
                <AlertCircle size={18} className="text-mist" />
                <span className="card-label">Problem Addressed</span>
              </div>
              <p className="card-body-text">{project.overview.problem}</p>
            </div>

            <div className="overview-card">
              <div className="card-top">
                <Workflow size={18} className="text-coral" />
                <span className="card-label">Primary Purpose</span>
              </div>
              <p className="card-body-text">{project.overview.purpose}</p>
            </div>

            <div className="overview-card">
              <div className="card-top">
                <Compass size={18} className="text-mist" />
                <span className="card-label">Intended Users</span>
              </div>
              <p className="card-body-text">{project.overview.targetUsers}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: My Contribution */}
      <section className="case-section case-contributions-section">
        <div className="wrap">
          <div className="case-section-header">
            <span className="case-section-eyebrow">Engineering Focus</span>
            <h2 className="case-section-title">My Technical Contributions</h2>
            <p className="case-section-sub">
              Key areas of responsibility across frontend engineering, UI state, and integration workflows.
            </p>
          </div>

          <div className="contributions-grid">
            {project.contributions.map((c, idx) => (
              <div key={idx} className="contribution-card">
                <div className="contribution-num">0{idx + 1}</div>
                <div className="contribution-content">
                  <h3 className="contribution-title">{c.area}</h3>
                  <p className="contribution-details">{c.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Detailed Technology Stack */}
      <section className="case-section case-tech-section">
        <div className="wrap">
          <div className="case-section-header">
            <span className="case-section-eyebrow">Architecture</span>
            <h2 className="case-section-title">Detailed Technology Stack</h2>
            <p className="case-section-sub">
              How each tool and library was specifically leveraged to satisfy technical requirements.
            </p>
          </div>

          <div className="detailed-tech-grid">
            {project.detailedTechnologyStack.map((tech) => (
              <div key={tech.name} className="tech-spec-card">
                <div className="tech-spec-head">
                  <div className="tech-spec-title-row">
                    <Cpu size={16} className="text-coral" />
                    <h3 className="tech-spec-name">{tech.name}</h3>
                  </div>
                  <span className="tech-spec-purpose-pill">{tech.purpose}</span>
                </div>
                <div className="tech-spec-body">
                  <div className="tech-spec-item">
                    <span className="spec-subhead">Implementation Usage:</span>
                    <p>{tech.usage}</p>
                  </div>
                  <div className="tech-spec-item">
                    <span className="spec-subhead">Why Relevant:</span>
                    <p>{tech.whyRelevant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Key Features */}
      <section className="case-section case-features-section">
        <div className="wrap">
          <div className="case-section-header">
            <span className="case-section-eyebrow">Capabilities</span>
            <h2 className="case-section-title">Key Workflows &amp; Features</h2>
          </div>

          <div className="features-grid">
            {project.features.map((f, idx) => (
              <div key={idx} className="feature-item-card">
                <div className="feature-header">
                  <CheckCircle2 size={18} className="feature-icon" />
                  {f.badge && <span className="feature-badge">{f.badge}</span>}
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section G: Challenges and Learning */}
      <section className="case-section case-learnings-section">
        <div className="wrap">
          <div className="case-section-header">
            <span className="case-section-eyebrow">Engineering Reflection</span>
            <h2 className="case-section-title">Challenges, Decisions &amp; Learnings</h2>
          </div>

          <div className="learnings-split-grid">
            {/* Implementation Challenges */}
            <div className="learnings-col">
              <h3 className="learnings-col-heading">
                <AlertCircle size={18} className="text-coral" />
                <span>Technical Challenges Faced</span>
              </h3>
              <div className="challenges-stack">
                {project.challenges.map((ch, idx) => (
                  <div key={idx} className="challenge-block">
                    <h4 className="challenge-title">{ch.title}</h4>
                    <p className="challenge-desc">
                      <strong>Problem:</strong> {ch.description}
                    </p>
                    <div className="challenge-solution-box">
                      <span className="solution-tag">Architectural Decision</span>
                      <p>{ch.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learnings & Takeaways */}
            <div className="learnings-col">
              <h3 className="learnings-col-heading">
                <Lightbulb size={18} className="text-coral" />
                <span>Key Takeaways &amp; Future Improvements</span>
              </h3>
              <div className="takeaways-stack">
                {project.learnings.map((ln, idx) => (
                  <div key={idx} className="takeaway-block">
                    <h4 className="takeaway-topic">{ln.topic}</h4>
                    <p className="takeaway-text">{ln.takeaway}</p>
                  </div>
                ))}
                <div className="takeaway-block future-note">
                  <h4 className="takeaway-topic">Next Iterations</h4>
                  <p className="takeaway-text">
                    Future iterations will explore automated end-to-end integration test harnesses,
                    deeper keyboard accessibility navigation standards, and enhanced client-side caching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section H: Bottom Navigation (Previous / Next / Back) */}
      <nav className="case-bottom-nav" aria-label="Project Navigation">
        <div className="wrap case-bottom-nav-inner">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="bottom-nav-card prev-card"
          >
            <div className="nav-card-dir">
              <ArrowLeft size={16} />
              <span>Previous Project</span>
            </div>
            <span className="nav-card-title">{prevProject.title}</span>
            <span className="nav-card-cat">{prevProject.category}</span>
          </Link>

          <Link href="/#work" className="bottom-nav-center-btn">
            <Layers size={18} />
            <span>All Projects</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="bottom-nav-card next-card"
          >
            <div className="nav-card-dir">
              <span>Next Project</span>
              <ArrowRight size={16} />
            </div>
            <span className="nav-card-title">{nextProject.title}</span>
            <span className="nav-card-cat">{nextProject.category}</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <footer className="case-footer">
        <div className="wrap case-footer-inner">
          <p>&copy; {new Date().getFullYear()} Itisha Naukudkar &bull; Full Stack Developer</p>
          <Link href="/#contact" className="case-footer-contact-link">
            Get in touch &rarr;
          </Link>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        screenshots={lightbox.screenshots}
        currentIndex={lightbox.currentIndex}
        onNavigate={handleNavigateLightbox}
        projectTitle={lightbox.projectTitle}
      />
    </div>
  );
}
