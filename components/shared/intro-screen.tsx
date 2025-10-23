"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const titleVariants = {
  hidden: { opacity: 0, y: "120%" },
  visible: (index: number) => ({
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.3 + index * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, y: "-120%", transition: { duration: 0.4 } },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

export function IntroScreen({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const letters = useMemo<string[]>(() => Array.from("Mahir Jeet"), []);

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      window.setTimeout(onFinish, 550);
    }, 3200);

    return () => {
      window.clearTimeout(timeout);
      body.style.overflow = previousOverflow;
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="intro-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="intro-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div
            className="intro-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="intro-title" aria-hidden="true">
              {letters.map((letter: string, index: number) => (
                <motion.span
                  key={`${letter}-${index}`}
                  custom={index}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
            <motion.p
              className="intro-subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Crafting immersive engineering stories
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
