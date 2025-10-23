"use client";

import { motion } from "framer-motion";

interface CodeLine {
  content: string;
  accent?: boolean;
  muted?: boolean;
  indent?: number;
}

interface CodePanelProps {
  title: string;
  fileName: string;
  lines: CodeLine[];
  delay?: number;
}

export function CodePanel({
  title,
  fileName,
  lines,
  delay = 0,
}: CodePanelProps) {
  return (
    <motion.article
      className="code-panel"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="code-panel__meta">
        <span className="code-panel__state" />
        <span className="code-panel__title">{title}</span>
        <span className="code-panel__file">{fileName}</span>
      </div>
      <pre className="code-panel__body">
        {lines.map((line, index) => {
          const indentation = line.indent
            ? "".padStart(line.indent * 2, " ")
            : "";
          return (
            <span key={`${fileName}-${index}`} className="code-panel__line">
              <span className="code-panel__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={[
                  "code-panel__text",
                  line.accent ? "accent" : "",
                  line.muted ? "muted" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {indentation}
                {line.content}
              </span>
            </span>
          );
        })}
      </pre>
    </motion.article>
  );
}
