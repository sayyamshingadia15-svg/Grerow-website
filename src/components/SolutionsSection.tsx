"use client";

import React, { useState } from "react";
import { useModal } from "./ModalContext";
import {
  Users,
  Briefcase,
  Building,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  FileText,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export function SolutionsSection() {
  const { openModal } = useModal();
  const [activeAudience, setActiveAudience] = useState("analysts");

  const audiences = [
    {
      id: "investors",
      label: "Private Investors",
      icon: Users,
      headline: "Institutional-grade research without Wall Street price tags.",
      description:
        "Cut through retail noise and social media speculation. Access the same filings, transcripts, and financial ratios that top asset managers rely on to make informed decisions.",
      features: [
        "Plain-English synthesis of 100+ page annual SEC 10-K filings",
        "Clear historical multiple charts (P/E, EV/EBITDA, FCF Yield)",
        "Pre-formatted earnings call transcript executive highlights",
      ],
    },
    {
      id: "analysts",
      label: "Equity Analysts & Associates",
      icon: Briefcase,
      headline: "Accelerate company screening and earnings deconstruction.",
      description:
        "Free up hundreds of hours spent manually transcribing tables and reconciliations. Get instant footnotes, segment breakdowns, and peer scatter plots ready for your investment committee.",
      features: [
        "Automated GAAP to non-GAAP adjustment audits",
        "Multi-ticker side-by-side benchmarking tables",
        "Deterministic page citations to back up every valuation thesis",
      ],
    },
    {
      id: "managers",
      label: "Portfolio Managers & Family Offices",
      icon: Building,
      headline: "Consolidated multi-asset risk and factor tracking.",
      description:
        "Evaluate portfolio exposures across thematic disruptions, customer concentrations, supply chain risks, and interest rate sensitivities in a single unified cockpit.",
      features: [
        "Automated 10-K Item 1A risk disclosure tracking over multiple quarters",
        "Balance sheet covenant and debt maturity scheduling",
        "Cross-sector macroeconomic impact synthesis",
      ],
    },
    {
      id: "corporate",
      label: "Corporate Strategy & M&A",
      icon: GraduationCap,
      headline: "Comprehensive competitor benchmarking and market intelligence.",
      description:
        "Understand peer capital expenditures, software margin profiles, and strategic expansions to inform your organization's long-term competitive positioning.",
      features: [
        "Competitor unit economics and R&D reinvestment rates",
        "M&A multiple precedent screening and deal comp tables",
        "Global market share and regional revenue disclosures",
      ],
    },
  ];

  const currentAudience =
    audiences.find((a) => a.id === activeAudience) || audiences[1];

  const insightArticles = [
    {
      tag: "EQUITY RESEARCH",
      readTime: "5 min read",
      date: "Nov 2026",
      title: "Datacenter Silicon & Hyperscaler Capex: Evaluating 2026-2028 Free Cash Flow Yields",
      summary:
        "A multi-filing synthesis examining capital expenditure commitments across Microsoft, Alphabet, Meta, and Amazon, and their second-order implications for semiconductor margins.",
    },
    {
      tag: "VALUATION FRAMEWORKS",
      readTime: "7 min read",
      date: "Nov 2026",
      title: "Beyond Trailing P/E: Why Normalized FCF Margin is the Ultimate Quality Filter",
      summary:
        "How operating cash conversion cycle and working capital adjustments reveal true corporate profitability during macroeconomic transitions.",
    },
    {
      tag: "MACRO INTELLIGENCE",
      readTime: "4 min read",
      date: "Oct 2026",
      title: "Sovereign AI Infrastructure: Global Semiconductor Supply Chain Geopolitics",
      summary:
        "Deconstructing Item 1A risk disclosures and regional manufacturing diversification across major semiconductor foundries and design houses.",
    },
  ];

  return (
    <>
      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="py-20 md:py-32 bg-white border-b border-grerow-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grerow-bg border border-grerow-border text-xs font-semibold text-grerow-secondary uppercase tracking-wider mb-4">
              <span>TAILORED RESEARCH WORKFLOWS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-grerow-dark">
              Built for serious investors and research teams.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-grerow-secondary">
              Whether managing personal capital or advising multi-million dollar portfolios, Grerow provides structured clarity.
            </p>
          </div>

          {/* Audience Tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="inline-flex p-1.5 rounded-2xl bg-grerow-bg border border-grerow-border gap-1">
              {audiences.map((aud) => {
                const Icon = aud.icon;
                const isSelected = activeAudience === aud.id;
                return (
                  <button
                    key={aud.id}
                    onClick={() => setActiveAudience(aud.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                      isSelected
                        ? "bg-white text-grerow-dark shadow-subtle border border-grerow-border"
                        : "text-grerow-secondary hover:text-grerow-dark"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? "text-grerow-green" : "text-grerow-secondary"}`} />
                    <span>{aud.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Audience Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-grerow-bg border border-grerow-border shadow-subtle max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold text-grerow-green uppercase tracking-wider">
                  Targeted Solution
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-grerow-dark">
                  {currentAudience.headline}
                </h3>
                <p className="text-sm text-grerow-secondary leading-relaxed">
                  {currentAudience.description}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => openModal("get-started")}
                    className="px-5 py-2.5 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white text-xs sm:text-sm font-medium transition flex items-center gap-2 shadow-sm"
                  >
                    <span>Start Researching Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-grerow-border shadow-subtle space-y-3">
                <div className="text-xs font-bold text-grerow-dark uppercase tracking-wider mb-2">
                  Key Workflow Accelerators
                </div>
                {currentAudience.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-grerow-dark leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-grerow-green mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS SECTION */}
      <section id="insights" className="py-20 md:py-32 bg-grerow-bg border-b border-grerow-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-grerow-border text-xs font-semibold text-grerow-green uppercase tracking-wider mb-3 shadow-subtle">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GREROW RESEARCH PERSPECTIVES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-grerow-dark">
                Featured Insights & Market Intelligence
              </h2>
              <p className="mt-2 text-sm sm:text-base text-grerow-secondary">
                Rigorous financial research notes generated using Grerow&apos;s structured intelligence engine.
              </p>
            </div>

            <button
              onClick={() => openModal("get-started")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-grerow-green hover:text-grerow-green-hover self-start md:self-auto"
            >
              <span>Explore all research notes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insightArticles.map((art, idx) => (
              <div
                key={idx}
                onClick={() => openModal("get-started")}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-grerow-border hover:border-grerow-green/50 hover:shadow-card hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-semibold text-grerow-green tracking-wider text-[10px] bg-grerow-green-subtle px-2 py-0.5 rounded">
                      {art.tag}
                    </span>
                    <span className="text-grerow-secondary flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-grerow-dark group-hover:text-grerow-green transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-grerow-secondary leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-grerow-border flex items-center justify-between text-xs font-semibold text-grerow-dark">
                  <span>Read full analysis</span>
                  <ArrowRight className="w-4 h-4 text-grerow-green transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
