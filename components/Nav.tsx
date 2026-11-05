"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll detection for header backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isHome) {
        const sections = ["contact", "work", "skills", "about", "top"];
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveSection(s === "top" ? "" : s);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <>
      <header className={`nav-bar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href={isHome ? "#top" : "/"} className="nav-logo">
            <span className="logo-text">Itisha</span>
            <span className="logo-accent">.</span>
            <span className="logo-sub">Dev</span>
          </Link>

          {/* Desktop Links */}
          <nav aria-label="Primary Navigation" className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = isHome && activeSection === targetId;

                return (
                  <li key={link.href} className="nav-item">
                    <a
                      href={getHref(link.href)}
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="nav-active-pill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right CTA */}
          <div className="nav-cta-wrapper">
            <a href={getHref("#contact")} className="nav-cta-btn">
              <span>Let&rsquo;s talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div className="nav-progress-bar" style={{ scaleX }} />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-drawer-header">
              <span className="logo-text">Itisha Naukudkar</span>
              <button
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <ul className="mobile-drawer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={getHref(link.href)}
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-cta">
              <a
                href={getHref("#contact")}
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
