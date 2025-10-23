import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { SiteProviders } from "@/components/providers/site-providers";
import { SiteHeader } from "@/components/shared/site-header";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mahir Jeet | Software Engineer",
  description:
    "The professional portfolio of Mahir Jeet, a software engineer specializing in immersive web experiences and scalable systems.",
  openGraph: {
    title: "Mahir Jeet | Software Engineer",
    description:
      "Explore the projects, experience, and thought process of Mahir Jeet through a cinematic, interactive web portfolio.",
    type: "website",
  },
  metadataBase: new URL("https://mahir-jeet.dev"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="app-body">
        <SiteProviders>
          <SiteHeader />
          <div className="app-shell">{children}</div>
        </SiteProviders>
      </body>
    </html>
  );
}
