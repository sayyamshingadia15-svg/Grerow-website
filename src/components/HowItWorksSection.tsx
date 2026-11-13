"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  Search,
  SlidersHorizontal,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: "01",
      tag: "ASK",
      title: "Start with a question",
      description: "Start with a financial question or research objective.",
      icon: HelpCircle,
      detail:
        "Frame queries in natural language — from broad sector comparisons to granular footnote reconciliations on debt covenants or deferred tax assets.",
      examples: [
        "What are the primary drivers of gross margin expansion?",
        "Compare EV/FCF across tier-1 cloud hyper-scalers",
      ],
    },
    {
      num: "02",
      tag: "RESEARCH",
      title: "Explore verifiable data",
      description: "Explore financial data, company fundamentals and sources.",
      icon: Search,
      detail:
        "Grerow scours 10-K, 10-Q, 8-K filings, earnings transcripts, and standardized historical models, verifying every metric against audited statements.",
      examples: [
        "Direct citation links to SEC EDGAR line items",
        "Multi-year standardized balance sheets & cash flows",
      ],
    },
    {
      num: "03",
      tag: "ANALYSE",
      title: "Synthesise & benchmark",
      description:
        "Compare findings, evaluate risks and understand opportunities.",
      icon: SlidersHorizontal,
      detail:
        "Side-by-side peer tables, DuPont decomposition, segment revenue breakdowns, and automated sensitivity extractions highlight what truly moves the needle.",
      examples: [
        "Relative valuation multiples vs 5-year averages",
        "Disclosed risk factors categorized by severity",
      ],
    },
    {
      num: "04",
      tag: "DECIDE",
      title: "Act with confidence",
      description:
        "Use structured insights to support your own investment decisions.",
      icon: Compass,
      detail:
        "Export models, save research notebooks, and synthesize comprehensive memos so you can formulate your own independent investment thesis.",
      examples: [
        "Institutional-ready research summaries",
        "Transparent, verifiable analytical lineage",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-grerow-bg border-b border-grerow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-grerow-border text-xs font-semibold text-grerow-green uppercase tracking-wider mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE RESEARCH WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-grerow-dark">
            From questions to informed decisions.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-grerow-secondary leading-relaxed">
            A structured four-step methodology that transforms raw corporate disclosures into clear, actionable intelligence.
          </p>
        </div>

        {/* Clean Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Horizontal Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-grerow-border -translate-y-1/2 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index + 1;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(index + 1)}
                  className={`relative p-6 sm:p-7 rounded-2xl bg-white border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "border-grerow-green ring-1 ring-grerow-green/20 shadow-card -translate-y-1"
                      : "border-grerow-border hover:border-grerow-green/40 hover:shadow-subtle"
                  }`}
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-grerow-green text-white shadow-sm"
                            : "bg-grerow-green-subtle text-grerow-green"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-grerow-dark bg-grerow-bg px-2.5 py-1 rounded-md border border-grerow-border">
                        <span className="text-grerow-green">{step.num}</span>
                        <span>{step.tag}</span>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-lg font-bold text-grerow-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-grerow-dark leading-snug">
                      {step.description}
                    </p>
                    <p className="mt-3 text-xs text-grerow-secondary leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Examples Checklist */}
                  <div className="mt-6 pt-4 border-t border-grerow-border space-y-1.5">
                    {step.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-grerow-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-grerow-green shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
