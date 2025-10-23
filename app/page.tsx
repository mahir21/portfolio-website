"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { IntroScreen } from "@/components/shared/intro-screen";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/shared/site-footer";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasPlayed = window.sessionStorage.getItem("introPlayed");
      if (hasPlayed) {
        setShowIntro(false);
        setIntroComplete(true);
      }
    }
  }, []);

  const handleIntroFinish = useCallback(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("introPlayed", "true");
    }
    setIntroComplete(true);
    setShowIntro(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onFinish={handleIntroFinish} />}
      </AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 32 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ minHeight: "100vh", paddingBottom: "6rem" }}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </motion.main>
    </>
  );
}
