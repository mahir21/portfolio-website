"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { CodePanel } from "@/components/shared/code-panel";

const codeLines = [
  { content: "const featuredProjects = [", accent: true },
  { content: '  "Pulse Horizon",', indent: 1 },
  { content: '  "Aurora Scribe",', indent: 1 },
  { content: '  "Linea Flow"', indent: 1 },
  { content: "];", accent: true },
  { content: "deploy(featuredProjects);", muted: true },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-section="projects"
      className="section projects-section"
    >
      <div className="section-heading">
        <motion.span
          className="section-kicker"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected work
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Interfaces engineered for narrative impact.
        </motion.h2>
      </div>
      <div className="projects-grid">
        <motion.div
          className="project-cards"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-card__image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={560}
                  height={360}
                />
              </div>
              <div className="project-card__meta">
                <span className="project-card__name">{project.name}</span>
                <span className="project-card__tech">
                  {project.tech.join(" · ")}
                </span>
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__footer">
                <span className="project-card__spotlight">
                  {project.spotlight}
                </span>
                <Link
                  href={project.link}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View build
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </motion.div>
        <CodePanel
          title="projects"
          fileName="folio.ts"
          lines={codeLines}
          delay={0.3}
        />
      </div>
    </section>
  );
}
