"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { projects, alsoBuiltProjects, ProjectItem, ProjectScreenshot } from "@/lib/data";
import { GithubIcon } from "@/components/Icons";
import ProjectPreviewImage from "./ProjectPreviewImage";
import ImageLightbox from "./ImageLightbox";

export default function Projects() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    screenshots: ProjectScreenshot[];
    currentIndex: number;
    projectTitle: string;
  }>({
    isOpen: false,
    screenshots: [],
    currentIndex: 0,
    projectTitle: "",
  });

  const openLightbox = (project: ProjectItem, index: number) => {
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
    <section id="work" className="work-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="work-header">
          <div className="work-badge">
            <Sparkles size={13} className="text-coral" />
            <span>Portfolio</span>
          </div>
          <h2 className="work-title">Selected Work</h2>
          <p className="work-description">
            A curated showcase of engineering workspaces, automation prototypes, and web applications
            I have designed and engineered across frontend architecture and full-stack development.
          </p>
        </div>

        {/* Horizontal Project Showcase Cards with Scroll Stacking */}
        <div className="work-stack-wrap">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="horizontal-project-card stack-card"
              style={{
                ["--card-index" as string]: idx,
                zIndex: idx + 1,
              }}
            >
              {/* Left Column: Metadata & Actions */}
              <div className="pcard-left">
                <div className="pcard-category-wrap">
                  <span className="pcard-category-badge">{project.category}</span>
                  <span className="pcard-index-num">0{idx + 1}</span>
                </div>

                <h3 className="pcard-heading">
                  <Link href={`/projects/${project.slug}`} className="pcard-title-link">
                    {project.title}
                  </Link>
                </h3>

                <p className="pcard-summary">{project.shortDescription}</p>

                {/* 3 to 5 Tech Tags */}
                <div className="pcard-tech-tags">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pcard-actions">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="pcard-case-study-btn"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} className="btn-arrow" />
                  </Link>

                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pcard-live-link"
                      aria-label={`Visit live site for ${project.title}`}
                    >
                      <ExternalLink size={14} />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: 3 Screenshots arranged 2 above, 1 below in between */}
              <div className="pcard-right">
                <div className="pcard-screenshots-cluster">
                  {project.screenshots.map((screenshot, sIdx) => (
                    <ProjectPreviewImage
                      key={sIdx}
                      src={screenshot.url}
                      alt={screenshot.alt}
                      caption={screenshot.caption}
                      index={sIdx}
                      projectTitle={project.title}
                      category={project.category}
                      onClick={(index) => openLightbox(project, index)}
                      showOverlay={false}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Also Built Section (e.g. Healthify+) */}
        {alsoBuiltProjects.length > 0 && (
          <div className="also-built-wrap">
            <h3 className="also-built-title">Also built</h3>
            <div className="also-built-grid">
              {alsoBuiltProjects.map((p) => (
                <article key={p.title} className="also-built-card">
                  {/* Left Column */}
                  <div className="also-built-left">
                    <span className="also-built-subtitle">{p.subtitle}</span>
                    <h4 className="also-built-heading">{p.title}</h4>
                    <p className="also-built-blurb">{p.blurb}</p>
                    {p.link && (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary small also-built-btn"
                      >
                        <GithubIcon size={14} />
                        <span>{p.link.label}</span>
                      </a>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="also-built-right">
                    <ul className="also-built-points">
                      {p.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <span className="point-dot" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="also-built-tags">
                      {p.stack.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        screenshots={lightbox.screenshots}
        currentIndex={lightbox.currentIndex}
        onNavigate={handleNavigateLightbox}
        projectTitle={lightbox.projectTitle}
      />
    </section>
  );
}
