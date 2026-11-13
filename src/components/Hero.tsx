"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "./ModalContext";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Search,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  ChevronRight,
  LineChart,
  BarChart2,
  Cpu,
} from "lucide-react";

export function Hero() {
  const { openModal } = useModal();
  const [activeMetricTab, setActiveMetricTab] = useState<"growth" | "valuation" | "cashflow">("growth");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-grerow-bg">
      {/* Subtle background ambient financial grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#E7ECE8 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Small upper label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-grerow-border shadow-subtle mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-grerow-green animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-grerow-dark">
              AI-POWERED FINANCIAL INTELLIGENCE
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-grerow-dark leading-[1.08] font-sans">
            Research smarter.
            <br />
            <span className="text-grerow-green">Invest with confidence.</span>
          </h1>

          {/* Supporting description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-grerow-secondary max-w-2xl mx-auto leading-relaxed">
            Discover opportunities, understand markets and make more informed investment
            decisions with AI-powered financial intelligence.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/research"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white font-medium text-base shadow-card transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Launch Grerow AI</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              onClick={() => openModal("get-started")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-grerow-bg text-grerow-dark border border-grerow-border font-medium text-base shadow-subtle transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4 text-grerow-secondary" />
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-grerow-secondary">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-grerow-green" />
              <span>Verifiable Filings & Citations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-grerow-green" />
              <span>Institutional Fundamentals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-grerow-green" />
              <span>Transparent AI Methodology</span>
            </div>
          </div>
        </div>

        {/* Sophisticated Abstract Financial Technology Visual */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Outer glow and premium border container */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-grerow-border shadow-elevated overflow-hidden">
            {/* Top Terminal/Intelligence Navigation Bar */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-grerow-border bg-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-grerow-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-grerow-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-grerow-border" />
                </div>
                <div className="h-4 w-px bg-grerow-border mx-2" />
                <div className="flex items-center gap-2 text-xs font-semibold text-grerow-dark">
                  <Cpu className="w-3.5 h-3.5 text-grerow-green" />
                  <span>Grerow Intelligence Terminal</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-grerow-green-subtle text-grerow-green border border-grerow-soft">
                    SYNTHESIS ACTIVE
                  </span>
                </div>
              </div>

              {/* Live Indices Ticker Chips */}
              <div className="flex items-center gap-2 text-[11px] overflow-x-auto py-0.5">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-grerow-bg border border-grerow-border font-medium text-grerow-dark">
                  <span className="text-grerow-secondary">S&P 500</span> 5,864.67{" "}
                  <span className="text-grerow-green font-semibold">+0.68%</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-grerow-bg border border-grerow-border font-medium text-grerow-dark">
                  <span className="text-grerow-secondary">NASDAQ</span> 18,342.94{" "}
                  <span className="text-grerow-green font-semibold">+0.94%</span>
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded bg-grerow-bg border border-grerow-border font-medium text-grerow-dark">
                  <span className="text-grerow-secondary">FTSE 100</span> 8,245.20{" "}
                  <span className="text-grerow-green font-semibold">+0.32%</span>
                </span>
              </div>
            </div>

            {/* Main Interactive Visual Canvas */}
            <div className="p-4 sm:p-6 lg:p-8 bg-grerow-bg/40">
              {/* Query & Neural Synthesis Banner */}
              <div className="bg-white rounded-xl border border-grerow-border p-3.5 sm:p-4 mb-6 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-grerow-green text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-grerow-dark flex items-center gap-1.5">
                      <span>Multi-Source Synthesis Query</span>
                      <span className="text-[10px] text-grerow-secondary font-normal">
                        (Cross-verified against 10-K & transcripts)
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-grerow-secondary font-medium">
                      &ldquo;Synthesizing enterprise AI datacenter margin resilience and ROIC trajectories&rdquo;
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <span className="text-[11px] font-semibold text-grerow-green px-2.5 py-1 rounded-lg bg-grerow-green-subtle border border-grerow-soft">
                    99.4% Citation Integrity
                  </span>
                </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Chart / Abstract Data Waves */}
                <div className="lg:col-span-8 bg-white rounded-2xl border border-grerow-border p-4 sm:p-6 shadow-subtle">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-grerow-secondary font-medium uppercase tracking-wider">
                        Comparative Financial Trajectory
                      </div>
                      <div className="text-base sm:text-lg font-bold text-grerow-dark flex items-center gap-2 mt-0.5">
                        <span>Institutional Cloud Capex vs. Operating Cash Flow</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-grerow-bg p-1 rounded-lg border border-grerow-border text-xs">
                      <button
                        onClick={() => setActiveMetricTab("growth")}
                        className={`px-2.5 py-1 rounded font-medium transition ${
                          activeMetricTab === "growth"
                            ? "bg-white text-grerow-dark shadow-xs"
                            : "text-grerow-secondary hover:text-grerow-dark"
                        }`}
                      >
                        Growth
                      </button>
                      <button
                        onClick={() => setActiveMetricTab("valuation")}
                        className={`px-2.5 py-1 rounded font-medium transition ${
                          activeMetricTab === "valuation"
                            ? "bg-white text-grerow-dark shadow-xs"
                            : "text-grerow-secondary hover:text-grerow-dark"
                        }`}
                      >
                        Valuation
                      </button>
                      <button
                        onClick={() => setActiveMetricTab("cashflow")}
                        className={`px-2.5 py-1 rounded font-medium transition ${
                          activeMetricTab === "cashflow"
                            ? "bg-white text-grerow-dark shadow-xs"
                            : "text-grerow-secondary hover:text-grerow-dark"
                        }`}
                      >
                        Cash Flow
                      </button>
                    </div>
                  </div>

                  {/* Sophisticated SVG Financial Chart with Green and White Tones */}
                  <div className="relative h-56 sm:h-64 w-full">
                    <svg
                      viewBox="0 0 600 240"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        {/* Gradient for main intelligence curve */}
                        <linearGradient id="heroGreenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#008000" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#008000" stopOpacity="0.0" />
                        </linearGradient>

                        {/* Gradient for comparative benchmark curve */}
                        <linearGradient id="heroSoftGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#DCE9DF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#DCE9DF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Subtle Horizontal Grid lines */}
                      <line x1="0" y1="40" x2="600" y2="40" stroke="#E7ECE8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="600" y2="100" stroke="#E7ECE8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="160" x2="600" y2="160" stroke="#E7ECE8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="220" x2="600" y2="220" stroke="#E7ECE8" strokeWidth="1" />

                      {/* Volume bars at bottom */}
                      {[
                        { x: 30, h: 25 }, { x: 75, h: 40 }, { x: 120, h: 32 }, { x: 165, h: 55 },
                        { x: 210, h: 48 }, { x: 255, h: 70 }, { x: 300, h: 62 }, { x: 345, h: 85 },
                        { x: 390, h: 78 }, { x: 435, h: 95 }, { x: 480, h: 90 }, { x: 525, h: 110 }, { x: 570, h: 105 }
                      ].map((bar, i) => (
                        <rect
                          key={i}
                          x={bar.x - 8}
                          y={220 - bar.h}
                          width="16"
                          height={bar.h}
                          fill="#DCE9DF"
                          opacity="0.6"
                          rx="2"
                        />
                      ))}

                      {/* Benchmark curve (grey/soft) */}
                      <path
                        d="M 20 180 C 100 170, 180 150, 260 140 C 340 130, 420 110, 500 95 C 540 85, 580 80, 580 80"
                        fill="none"
                        stroke="#8A9990"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />

                      {/* Area Fill for Primary Grerow Intelligence Curve */}
                      <path
                        d="M 20 190 Q 90 170, 160 135 T 300 110 T 440 60 T 580 30 L 580 220 L 20 220 Z"
                        fill="url(#heroGreenGradient)"
                      />

                      {/* Primary Green Curve */}
                      <path
                        d="M 20 190 Q 90 170, 160 135 T 300 110 T 440 60 T 580 30"
                        fill="none"
                        stroke="#008000"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Interactive Milestone Nodes */}
                      <circle cx="160" cy="135" r="4.5" fill="#FFFFFF" stroke="#008000" strokeWidth="2.5" />
                      <circle cx="300" cy="110" r="4.5" fill="#FFFFFF" stroke="#008000" strokeWidth="2.5" />
                      <circle cx="440" cy="60" r="4.5" fill="#FFFFFF" stroke="#008000" strokeWidth="2.5" />
                      <circle cx="580" cy="30" r="6" fill="#008000" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>

                    {/* Floating Callout on the highest signal point */}
                    <div className="absolute right-2 top-0 transform translate-y-1 bg-grerow-dark text-white px-3 py-1.5 rounded-lg shadow-card text-[11px] font-medium flex items-center gap-1.5 animate-pulse-subtle">
                      <span className="w-1.5 h-1.5 rounded-full bg-grerow-green" />
                      <span>Operating Leverage: +420 bps</span>
                    </div>
                  </div>

                  {/* Horizontal Time Axis */}
                  <div className="flex justify-between items-center text-[11px] text-grerow-secondary pt-2 border-t border-grerow-border">
                    <span>Q1 2025</span>
                    <span>Q2 2025</span>
                    <span>Q3 2025</span>
                    <span>Q4 2025</span>
                    <span>Q1 2026</span>
                    <span className="font-semibold text-grerow-dark">Q2 2026 (Consensus)</span>
                  </div>
                </div>

                {/* Right Side Neural Research Signals */}
                <div className="lg:col-span-4 space-y-3.5">
                  <div className="bg-white rounded-xl border border-grerow-border p-4 shadow-subtle hover:border-grerow-green/40 transition">
                    <div className="flex items-center justify-between text-xs text-grerow-secondary mb-1">
                      <span className="font-medium uppercase tracking-wider">Research Signal</span>
                      <span className="text-[10px] text-grerow-green font-semibold bg-grerow-green-subtle px-2 py-0.5 rounded">
                        STRONG FUNDAMENTAL
                      </span>
                    </div>
                    <div className="text-sm font-bold text-grerow-dark">
                      Free Cash Flow Margin
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-grerow-dark">34.8%</span>
                      <span className="text-xs font-semibold text-grerow-green">+6.2% YoY</span>
                    </div>
                    <div className="text-[11px] text-grerow-secondary mt-1">
                      Verified from audited 10-K statements & working capital conversion.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-grerow-border p-4 shadow-subtle hover:border-grerow-green/40 transition">
                    <div className="flex items-center justify-between text-xs text-grerow-secondary mb-1">
                      <span className="font-medium uppercase tracking-wider">Valuation Multiple</span>
                      <span className="text-[10px] text-grerow-dark font-medium bg-grerow-bg px-2 py-0.5 rounded border border-grerow-border">
                        PEER PERCENTILE: 78th
                      </span>
                    </div>
                    <div className="text-sm font-bold text-grerow-dark">
                      EV / Forward EBITDA
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-grerow-dark">24.2x</span>
                      <span className="text-xs font-medium text-grerow-secondary">vs. 27.5x historical</span>
                    </div>
                    <div className="text-[11px] text-grerow-secondary mt-1">
                      Multiple discount vs peers despite superior ROIC profile.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-grerow-border p-4 shadow-subtle hover:border-grerow-green/40 transition">
                    <div className="flex items-center justify-between text-xs text-grerow-secondary mb-1">
                      <span className="font-medium uppercase tracking-wider">Catalyst Engine</span>
                      <span className="text-[10px] text-grerow-green font-medium">
                        3 Drivers
                      </span>
                    </div>
                    <div className="text-xs text-grerow-dark font-semibold">
                      Identified Earnings Drivers
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-grerow-bg border border-grerow-border text-grerow-dark font-medium">
                        Hyperscaler Capex
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-grerow-bg border border-grerow-border text-grerow-dark font-medium">
                        Gross Margin Expansion
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-grerow-bg border border-grerow-border text-grerow-dark font-medium">
                        Supply Discipline
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Lineage & Citations Bar */}
              <div className="mt-6 pt-4 border-t border-grerow-border flex flex-wrap items-center justify-between gap-3 text-xs text-grerow-secondary">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-grerow-green" />
                  <span className="font-medium text-grerow-dark">Verified Data Sources:</span>
                  <span className="hidden sm:inline">SEC EDGAR (10-K, 10-Q)</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">Consensus Earnings Transcripts</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">Macro Central Bank Data</span>
                </div>
                <div className="text-[11px] font-medium text-grerow-dark bg-white px-2.5 py-1 rounded-md border border-grerow-border">
                  Latency: 142ms • Model: GR-Fin-Large
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
