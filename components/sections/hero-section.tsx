"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroContent } from "@/lib/content";
import { CodePanel } from "@/components/shared/code-panel";

const codeLines = [
  { content: "const engineer = {", accent: true },
  { content: `  name: "${heroContent.name}",`, indent: 1 },
  { content: `  title: "${heroContent.title}",`, indent: 1 },
  {
    content: `  focus: [${heroContent.highlights
      .map((highlight) => `"${highlight}"`)
      .join(", ")}]`,
    indent: 1,
  },
  { content: "};", accent: true },
];

export function HeroSection() {
  return (
    <section id="intro" data-section="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <motion.span
            className="hero-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroContent.availability}
          </motion.span>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Building immersive software stories that feel alive.
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="#projects" className="button-primary">
              <span>Explore projects</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href={heroContent.resumeUrl}
              className="button-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download resume</span>
              <Download size={18} />
            </a>
          </motion.div>
        </div>

        <div className="hero-visuals">
          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={heroContent.photo}
              alt={heroContent.photoAlt}
              width={480}
              height={480}
              className="hero-portrait-image"
              priority
            />
          </motion.div>
          <CodePanel
            title="Status"
            fileName="profile.ts"
            lines={codeLines}
            delay={0.85}
          />
        </div>
      </div>
    </section>
  );
}
