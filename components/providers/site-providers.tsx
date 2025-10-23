"use client";

import { ReactNode } from "react";
import PageTransitionOverlay from "@/components/shared/page-transition-overlay";

export function SiteProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <PageTransitionOverlay />
      {children}
    </>
  );
}
