"use client";

import React from "react";
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Search,
  Scale,
  Cpu,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";

export function TrustSection() {
  const pillars = [
    {
      title: "Structured financial research",
      description:
        "Every company profile is organized into standardized income statements, cash flows, and balance sheets so you compare apples to apples.",
      icon: Layers,
    },
    {
      title: "Source-backed insights",
      description:
        "Syntheses link directly to original source documents — SEC Form 10-K, Form 10-Q, 8-K, and audited investor disclosures.",
      icon: FileCheck2,
    },
    {
      title: "Detailed company analysis",
      description:
        "Examine unit economics, product line contributions, geographical revenue splits, and capital return allocations over time.",
      icon: Search,
    },
    {
      title: "Multiple financial perspectives",
      description:
        "Synthesize valuation through multiple lenses: trailing vs forward P/E, EV/EBITDA, PEG, Free Cash Flow Yield, and ROIC.",
      icon: Scale,
    },
    {
      title: "AI-assisted research",
      description:
        "Designed to accelerate human research productivity, eliminating repetitive data hunting while keeping the analyst in total control.",
      icon: Cpu,
    },
    {
      title: "Transparent analytical approach",
      description:
        "No black boxes. No speculative 'buy/sell' algorithms. We surface factual disclosures and clearly explain our calculation methods.",
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white border-b border-grerow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grerow-bg border border-grerow-border text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-4 shadow-subtle">
            <ShieldCheck className="w-3.5 h-3.5 text-grerow-green" />
            <span>RIGOROUS FINANCIAL FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-grerow-dark">
            Financial intelligence built around better research.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-grerow-secondary leading-relaxed">
            Grerow empowers independent thinkers and institutional teams with verifiable, source-backed intelligence without speculative noise.
          </p>
        </div>

        {/* 6 Trust & Differentiation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-grerow-bg/60 border border-grerow-border hover:border-grerow-green/40 hover:bg-white hover:shadow-subtle transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-grerow-green-subtle text-grerow-green flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-grerow-dark mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-grerow-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Comparison Matrix */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-grerow-border shadow-subtle">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-grerow-dark">
              How Grerow Compares
            </h3>
            <p className="text-xs sm:text-sm text-grerow-secondary mt-1">
              Purpose-built for institutional depth and modern conversational speed
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-grerow-border text-grerow-secondary">
                  <th className="py-3 px-4 font-semibold">Research Capability</th>
                  <th className="py-3 px-4 font-bold text-grerow-green bg-grerow-green-subtle/50 rounded-t-lg">
                    Grerow
                  </th>
                  <th className="py-3 px-4 font-semibold">Generic AI & Search</th>
                  <th className="py-3 px-4 font-semibold">Legacy Financial Terminals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-grerow-border text-grerow-dark">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Deterministic SEC Citation Links</td>
                  <td className="py-3.5 px-4 bg-grerow-green-subtle/30 text-grerow-green font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Full Traceability
                  </td>
                  <td className="py-3.5 px-4 text-grerow-secondary">Frequent Hallucinations</td>
                  <td className="py-3.5 px-4 text-grerow-dark">Manual PDF browsing</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Conversational Multi-Filing Synthesis</td>
                  <td className="py-3.5 px-4 bg-grerow-green-subtle/30 text-grerow-green font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Real-time Synthesis
                  </td>
                  <td className="py-3.5 px-4 text-grerow-secondary">Surface level web snippets</td>
                  <td className="py-3.5 px-4 text-grerow-secondary">Rigid syntax / No AI chat</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Standardized Financial Statements</td>
                  <td className="py-3.5 px-4 bg-grerow-green-subtle/30 text-grerow-green font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 15-Yr Standardized
                  </td>
                  <td className="py-3.5 px-4 text-grerow-secondary">Inconsistent formats</td>
                  <td className="py-3.5 px-4 text-grerow-dark">Extensive (High Cost)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Accessible Global Pricing</td>
                  <td className="py-3.5 px-4 bg-grerow-green-subtle/30 text-grerow-green font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Modern & Scalable
                  </td>
                  <td className="py-3.5 px-4 text-grerow-dark">Ad-supported / Generic</td>
                  <td className="py-3.5 px-4 text-grerow-secondary">$24k - $30k / user / year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
