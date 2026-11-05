"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ProjectScreenshot } from "@/lib/data";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  projectTitle: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
  projectTitle,
}: ImageLightboxProps) {
  const current = screenshots[currentIndex];

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const prev = (currentIndex - 1 + screenshots.length) % screenshots.length;
      onNavigate(prev);
    },
    [currentIndex, screenshots.length, onNavigate]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const next = (currentIndex + 1) % screenshots.length;
      onNavigate(next);
    },
    [currentIndex, screenshots.length, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot preview`}
        >
          {/* Header Controls */}
          <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-title-wrap">
              <span className="lightbox-project-title">{projectTitle}</span>
              <span className="lightbox-counter">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>
            <button
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                className="lightbox-nav-btn lightbox-prev"
                onClick={handlePrev}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className="lightbox-nav-btn lightbox-next"
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Image & Caption Container */}
          <motion.div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lightbox-image-frame">
              <img
                src={current.url}
                alt={current.alt || `${projectTitle} preview`}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-footer">
              <p className="lightbox-caption">{current.caption || current.alt}</p>
              <div className="lightbox-dots">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    className={`lightbox-dot ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => onNavigate(idx)}
                    aria-label={`Jump to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
