"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const NAV_ITEMS = [
  { label: "Intro", href: "#intro", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>(
    NAV_ITEMS[0]?.id ?? "intro"
  );

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter(
            (entry) => entry.isIntersecting && entry.intersectionRatio > 0.35
          )
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target) {
          const targetId = visibleSection.target.getAttribute("data-section");
          if (targetId) {
            setActiveSection(targetId);
          }
        }
      },
      {
        rootMargin: "-30% 0px -55%",
        threshold: [0.35, 0.6, 0.9],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="#intro"
        className="site-logo"
        aria-label="Navigate to hero section"
      >
        <span className="logo-dot" />
        <span className="logo-text">Mahir Jeet</span>
        <span className="logo-role">Software Engineer</span>
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={clsx("nav-link", { active: isActive })}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      className="nav-active"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="site-cta">
        <a href="mailto:mahir.jeet@example.com" className="cta-button">
          <span className="cta-label">Let's collaborate</span>
        </a>
      </div>
    </motion.header>
  );
}
