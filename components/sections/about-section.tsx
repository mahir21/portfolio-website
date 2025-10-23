"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/content";
import { CodePanel } from "@/components/shared/code-panel";
import { TechOrbit } from "@/components/three/tech-orbit";

const codeLines = [
  { content: "export const MahirJeet = () => ({", accent: true },
  { content: '  mission: "Designing poetic, resilient software",', indent: 1 },
  { content: '  loves: ["real-time graphics", "design systems"],', indent: 1 },
  {
    content: '  currentlyExploring: "spatial computing prototypes"',
    indent: 1,
  },
  { content: "});", accent: true },
  { content: "// shipping pixel-perfect interactions", muted: true },
];

export function AboutSection() {
  return (
    <section id="about" data-section="about" className="section about-section">
      <div className="section-heading">
        <motion.span
          className="section-kicker"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Mahir
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Design-minded engineer turning ambitious ideas into vivid realities.
        </motion.h2>
      </div>
      <div className="about-grid">
        <motion.div
          className="about-narrative"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {aboutContent.narrative.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="skills-grid">
            {aboutContent.skillGroups.map((group) => (
              <div className="skills-card" key={group.label}>
                <span className="skills-label">{group.label}</span>
                <div className="skills-items">
                  {group.items.map((item) => (
                    <span className="skill-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TechOrbit />
          <CodePanel
            title="profile"
            fileName="about.ts"
            lines={codeLines}
            delay={0.35}
          />
        </motion.div>
      </div>
    </section>
  );
}
