"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      <button
        type="button"
        className="nav-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav aria-label="Primary navigation">
        <ul className="nav-list" id="primary-navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={clsx("nav-link", { active: isActive })}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
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
        <a href="mailto:mahirjeetts4u@gmail.com" className="cta-button">
          <span className="cta-label">Let's collaborate</span>
        </a>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="mobile-nav-panel"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="mobile-nav-list">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={`mobile-${item.id}`}>
                      <Link
                        href={item.href}
                        className={clsx("mobile-nav-link", {
                          active: isActive,
                        })}
                        onClick={() => {
                          setActiveSection(item.id);
                          setMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href="mailto:mahirjeetts4u@gmail.com"
                className="mobile-nav-cta"
              >
                Let's collaborate
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
