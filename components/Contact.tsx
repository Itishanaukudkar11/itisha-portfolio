"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  FileText,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-container">
        {/* Header Badge & Title */}
        <div className="contact-head">
          <div className="contact-badge">
            <Sparkles size={13} className="text-coral" />
            <span>Get in Touch</span>
          </div>

          <h2 className="contact-heading">
            Let&rsquo;s build something <span className="text-coral-accent">meaningful</span> together.
          </h2>

          <p className="contact-subtext">
            I am currently open to full-stack and frontend developer opportunities, technical product
            collaborations, and engineering workspace projects.
          </p>
        </div>

        {/* Quick Email Interaction Box */}
        <div className="contact-quick-action">
          <div className="email-pill-box">
            <Mail size={18} className="email-icon" />
            <span className="email-address">{profile.email}</span>
            <button
              onClick={copyEmail}
              className="email-copy-btn"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green" />
                  <span className="text-green">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Link Cards Grid */}
        <div className="contact-channels-grid">
          <a
            href={`mailto:${profile.email}`}
            className="channel-card"
          >
            <div className="channel-icon-wrap">
              <Mail size={20} />
            </div>
            <div className="channel-info">
              <span className="channel-label">Direct Email</span>
              <span className="channel-val">{profile.email}</span>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>

          <a
            href={`https://wa.me/${profile.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-icon-wrap">
              <Phone size={20} />
            </div>
            <div className="channel-info">
              <span className="channel-label">WhatsApp &bull; Phone</span>
              <span className="channel-val">{profile.phone}</span>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-icon-wrap">
              <LinkedinIcon size={20} />
            </div>
            <div className="channel-info">
              <span className="channel-label">LinkedIn</span>
              <span className="channel-val">in/itisha-naukudkar</span>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-icon-wrap">
              <GithubIcon size={20} />
            </div>
            <div className="channel-info">
              <span className="channel-label">GitHub</span>
              <span className="channel-val">Itishanaukudkar11</span>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>

          <a
            href={profile.resume}
            download
            className="channel-card resume-channel"
          >
            <div className="channel-icon-wrap">
              <FileText size={20} />
            </div>
            <div className="channel-info">
              <span className="channel-label">Curriculum Vitae</span>
              <span className="channel-val">Download Resume (PDF)</span>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>
        </div>

        {/* Footer info */}
        <div className="contact-footer">
          <p className="footer-credits">
            Designed &amp; Developed with craft by <strong>Itisha Rajendra Naukudkar</strong>
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} &bull; Built with Next.js, TypeScript &amp; Framer Motion
          </p>
        </div>
      </div>
    </section>
  );
}
