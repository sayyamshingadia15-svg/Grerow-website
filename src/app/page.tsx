"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PlatformFeatures } from "@/components/PlatformFeatures";
import { AiResearchSection } from "@/components/AiResearchSection";
import { StockIntelligenceSection } from "@/components/StockIntelligenceSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TrustSection } from "@/components/TrustSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-grerow-bg text-grerow-dark selection:bg-grerow-soft selection:text-grerow-dark">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Financial Visual */}
        <Hero />

        {/* 2. Platform Features */}
        <PlatformFeatures />

        {/* 3. AI Research Mock Chatbot Experience */}
        <AiResearchSection />

        {/* 4. Stock Intelligence Dashboard Preview */}
        <StockIntelligenceSection />

        {/* 5. How It Works 4-Step Timeline */}
        <HowItWorksSection />

        {/* 6. Trust, Differentiation & Regulatory Rigor */}
        <TrustSection />

        {/* 7. Tailored Solutions & Featured Market Insights */}
        <SolutionsSection />

        {/* 8. Final Call to Action */}
        <FinalCta />
      </main>

      {/* Official Footer with Disclaimers */}
      <Footer />
    </div>
  );
}
