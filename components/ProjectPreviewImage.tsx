"use client";

import { useState } from "react";
import { Eye, Layers } from "lucide-react";

interface ProjectPreviewImageProps {
  src: string;
  alt: string;
  caption?: string;
  index: number;
  projectTitle: string;
  category?: string;
  onClick: (index: number) => void;
  aspectRatio?: "16/10" | "4/3" | "16/9";
  priority?: boolean;
  showOverlay?: boolean;
}

export default function ProjectPreviewImage({
  src,
  alt,
  caption,
  index,
  projectTitle,
  category,
  onClick,
  aspectRatio = "16/10",
  showOverlay = false,
}: ProjectPreviewImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="project-screenshot-card"
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(index);
        }
      }}
      aria-label={`View full preview of ${projectTitle} - screenshot ${index + 1}`}
      style={{ aspectRatio }}
    >
      {/* Fallback Schematic Mockup (if image is missing or failed to load) */}
      {hasError ? (
        <div className="screenshot-placeholder">
          <div className="placeholder-topbar">
            <span className="dot dot-coral" />
            <span className="dot dot-slate" />
            <span className="dot dot-slate" />
            <span className="placeholder-slug">
              {projectTitle.toLowerCase().replace(/\s+/g, "-")}-0{index + 1}.tsx
            </span>
          </div>
          <div className="placeholder-canvas">
            <div className="placeholder-grid" />
            <div className="placeholder-content">
              <Layers size={18} className="placeholder-icon" />
              <span className="placeholder-tag">{category || "Interface"}</span>
              <p className="placeholder-label">{caption || `Screen 0${index + 1}`}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt || `${projectTitle} preview ${index + 1}`}
            className={`screenshot-img ${isLoaded ? "loaded" : "loading"}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            loading={index === 0 ? "eager" : "lazy"}
          />
          {!isLoaded && !hasError && (
            <div className="screenshot-skeleton" aria-hidden />
          )}
        </>
      )}

      {/* Optional Hover Overlay (only if requested) */}
      {showOverlay && (
        <div className="screenshot-hover-overlay">
          <div className="preview-indicator">
            <Eye size={14} className="preview-indicator-icon" />
            <span>View Preview</span>
          </div>
        </div>
      )}
    </div>
  );
}
