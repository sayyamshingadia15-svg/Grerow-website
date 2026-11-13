"use client";

import React, { useState } from "react";
import {
  Bot,
  BarChart3,
  GitCompare,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface FeatureItem {
  id: string;
  cardNum: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  previewHeading: string;
  previewDetails: string[];
  metrics: { label: string; value: string; delta?: string }[];
}

export function PlatformFeatures() {
  const [activeFeature, setActiveFeature] = useState<string>("ai-research");

  const features: FeatureItem[] = [
    {
      id: "ai-research",
      cardNum: "01",
      title: "AI Research",
      description:
        "Explore financial questions and conduct research with an AI-powered financial research companion.",
      icon: Bot,
      badge: "Natural Language Synthesis",
      previewHeading: "Deep conversational financial reasoning",
      previewDetails: [
        "Prompt complex questions across corporate filings and call transcripts",
        "Deterministic citations linked directly to verified SEC Form 10-K & 10-Q pages",
        "Automated extraction of non-GAAP reconciliations and footnotes",
      ],
      metrics: [
        { label: "Query Resolution", value: "<1.4s" },
        { label: "Citation Traceability", value: "100%" },
        { label: "Context Window", value: "128k Tokens" },
      ],
    },
    {
      id: "stock-analysis",
      cardNum: "02",
      title: "Stock Analysis",
      description:
        "Understand companies through financial fundamentals, performance metrics and structured analysis.",
      icon: BarChart3,
      badge: "Deep Fundamentals",
      previewHeading: "Structured 10-year historical statements & unit economics",
      previewDetails: [
        "Interactive standardized income statement, balance sheet, and cash flow",
        "Segment breakdown across product lines, geographies, and operating margin",
        "Automated DuPont analysis, ROIC, and capital reinvestment efficiency",
      ],
      metrics: [
        { label: "Equities Covered", value: "45,000+" },
        { label: "Fundamental Ratios", value: "120+" },
        { label: "Historical Depth", value: "15 Years" },
      ],
    },
    {
      id: "stock-comparison",
      cardNum: "03",
      title: "Stock Comparison",
      description:
        "Compare companies across financial performance, valuation, growth and other important parameters.",
      icon: GitCompare,
      badge: "Multi-Asset Matrix",
      previewHeading: "Side-by-side peer benchmarking and relative valuation",
      previewDetails: [
        "Direct peer matrix matching on growth, margin expansion, and valuation multiples",
        "EV/EBITDA, P/E, PEG, and Free Cash Flow Yield comparative scatter views",
        "Normalized debt covenants, leverage profiles, and working capital cycles",
      ],
      metrics: [
        { label: "Benchmarking Sectors", value: "11 GICS" },
        { label: "Peer Comparison", value: "Up to 10 stocks" },
        { label: "Multiples Tracked", value: "35+" },
      ],
    },
    {
      id: "market-intelligence",
      cardNum: "04",
      title: "Market Intelligence",
      description:
        "Explore market trends, financial developments and investment opportunities.",
      icon: TrendingUp,
      badge: "Macro & Sector Intelligence",
      previewHeading: "Thematic screening, sector rotations, and policy shifts",
      previewDetails: [
        "Macro indicators including treasury yield curve dynamics and inflation indices",
        "Earnings surprise heatmaps across market-cap tiers and global exchanges",
        "Early signal detection for supply chain bottlenecks and margin compression",
      ],
      metrics: [
        { label: "Global Indices", value: "50+" },
        { label: "Real-time Breadth", value: "Market-wide" },
        { label: "Macro Datasets", value: "1,200+" },
      ],
    },
  ];

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];
  const IconComponent = currentFeature.icon;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-white border-y border-grerow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grerow-bg border border-grerow-border text-xs font-semibold text-grerow-secondary uppercase tracking-wider mb-4">
            <span>CORE PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-grerow-dark">
            Everything you need to research better.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-grerow-secondary leading-relaxed">
            A connected financial intelligence experience designed to make complex financial research more accessible.
          </p>
        </div>

        {/* Four Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isSelected = activeFeature === feature.id;

            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-white border cursor-pointer transition-all duration-200 text-left flex flex-col justify-between ${
                  isSelected
                    ? "border-grerow-green ring-1 ring-grerow-green/20 shadow-card bg-grerow-bg/30"
                    : "border-grerow-border hover:border-grerow-green/50 hover:shadow-subtle hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Top row with icon and card number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-grerow-green text-white shadow-sm"
                          : "bg-grerow-green-subtle text-grerow-green group-hover:bg-grerow-green group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-grerow-secondary tracking-widest">
                      {feature.cardNum}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-grerow-dark group-hover:text-grerow-green transition-colors">
                    {feature.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2.5 text-sm text-grerow-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom interactive indicator */}
                <div className="mt-8 pt-4 border-t border-grerow-border/60 flex items-center justify-between">
                  <span className="text-xs font-medium text-grerow-secondary group-hover:text-grerow-dark transition-colors">
                    {isSelected ? "Active preview" : "View capability"}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected
                        ? "text-grerow-green translate-x-1"
                        : "text-grerow-secondary group-hover:translate-x-1 group-hover:text-grerow-dark"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Capability Spotlight Preview */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-grerow-bg border border-grerow-border shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-grerow-border text-xs font-semibold text-grerow-green">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentFeature.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-grerow-dark">
                {currentFeature.previewHeading}
              </h3>
              <p className="text-sm text-grerow-secondary leading-relaxed">
                Seamlessly integrated into Grerow&apos;s unified research workflow. Everything is
                designed for speed, reproducibility, and rigorous institutional accuracy.
              </p>

              <div className="space-y-2.5 pt-2">
                {currentFeature.previewDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-grerow-dark">
                    <CheckCircle2 className="w-4 h-4 text-grerow-green shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    if (currentFeature.id === "ai-research") scrollTo("ai-research");
                    else scrollTo("stock-intelligence");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-grerow-dark hover:bg-grerow-dark-subtle text-white font-medium text-xs sm:text-sm transition flex items-center gap-1.5"
                >
                  <span>Explore in live interface</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side stats pill cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
              {currentFeature.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-grerow-border shadow-subtle flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs text-grerow-secondary font-medium">
                      {metric.label}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-grerow-dark mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-grerow-green-subtle text-grerow-green flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
