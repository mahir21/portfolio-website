"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { contactContent } from "@/lib/content";
import { CodePanel } from "@/components/shared/code-panel";

const codeLines = [
  {
    content: 'const inbox = createInbox("mahir.jeet@example.com");',
    accent: true,
  },
  { content: "inbox.on('collaboration', (idea) => {", indent: 0, muted: true },
  { content: "  return ship(idea);", indent: 1, muted: true },
  { content: "});", muted: true },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="section contact-section"
    >
      <div className="contact-card">
        <motion.div
          className="contact-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="contact-kicker">Connect</span>
          <h2 className="contact-title">
            Let’s architect the next immersive experience.
          </h2>
          <p className="contact-note">{contactContent.availabilityNote}</p>
          <a className="contact-email" href={`mailto:${contactContent.email}`}>
            <Mail size={18} />
            <span>{contactContent.email}</span>
            <Send size={16} />
          </a>
          <div className="contact-socials">
            {contactContent.socials.map((social) => (
              <Link
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{social.label}</span>
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </motion.div>
        <CodePanel
          title="contact"
          fileName="connect.ts"
          lines={codeLines}
          delay={0.2}
        />
      </div>
    </section>
  );
}
