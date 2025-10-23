"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const overlayVariants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

const barVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
};

export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    setIsVisible(true);
    const timeout = window.setTimeout(() => setIsVisible(false), 700);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            display: "grid",
            placeItems: "center",
            background:
              "radial-gradient(circle at 20% 20%, rgba(122, 75, 255, 0.35), transparent 60%), linear-gradient(135deg, rgba(17, 19, 38, 0.95), rgba(5, 6, 15, 0.95))",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              loading next frame
            </motion.div>
            <motion.div
              variants={barVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
              style={{
                marginTop: "1.75rem",
                height: "2px",
                width: "12rem",
                background: "linear-gradient(90deg, #7a4bff, #1b3b8c)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
