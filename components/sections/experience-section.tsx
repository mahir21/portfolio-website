"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";
import { CodePanel } from "@/components/shared/code-panel";

const codeLines = [
  { content: "type Experience = {", accent: true },
  { content: "  company: string;", indent: 1 },
  { content: "  role: string;", indent: 1 },
  { content: "  impact: string[];", indent: 1 },
  { content: "};", accent: true },
  { content: "const timeline: Experience[] = fetchCareer();", muted: true },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-section="experience"
      className="section experience-section"
    >
      <div className="section-heading">
        <motion.span
          className="section-kicker"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Journey
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Shipping resilient systems with artistic flair.
        </motion.h2>
      </div>
      <div className="experience-grid">
        <motion.ul
          className="experience-timeline"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {experiences.map((experience) => (
            <li key={experience.company} className="experience-item">
              <div className="experience-meta">
                <span className="experience-period">{experience.period}</span>
                <span className="experience-role">{experience.role}</span>
                <span className="experience-company">{experience.company}</span>
              </div>
              <p className="experience-summary">{experience.summary}</p>
              <ul className="experience-achievements">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </li>
          ))}
        </motion.ul>
        <CodePanel
          title="experience"
          fileName="timeline.ts"
          lines={codeLines}
          delay={0.3}
        />
      </div>
    </section>
  );
}
