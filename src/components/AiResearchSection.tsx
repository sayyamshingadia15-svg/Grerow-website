"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useChat } from "./ai-chat/ChatContext";
import {
  Bot,
  Sparkles,
  Send,
  CornerDownLeft,
  FileText,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Share2,
  Bookmark,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  Maximize2,
} from "lucide-react";

interface QueryPreset {
  id: string;
  category: string;
  question: string;
  title: string;
  targetTickers: string;
  summary: string;
  comparisonTable: {
    metric: string;
    companyA: string;
    companyB: string;
    diff: string;
    leader: "A" | "B" | "Neutral";
  }[];
  catalysts: string[];
  risks: string[];
  citations: { source: string; document: string; section: string }[];
}

export function AiResearchSection() {
  const queryPresets: QueryPreset[] = [
    {
      id: "nvda-vs-msft",
      category: "Equities Comparison",
      question:
        "Compare two companies based on financial performance, valuation, growth and business fundamentals.",
      title: "Comprehensive Comparative Analysis: NVIDIA (NVDA) vs. Microsoft (MSFT)",
      targetTickers: "NVDA vs MSFT",
      summary:
        "Both NVIDIA and Microsoft exhibit elite institutional return-on-invested-capital (ROIC) profiles, but represent different risk-reward frontiers in the global AI value chain. NVIDIA delivers accelerating hyper-growth powered by Compute & Networking data center silicon, while Microsoft offers a diversified recurring software and enterprise Azure cloud platform with lower cyclical volatility.",
      comparisonTable: [
        {
          metric: "Revenue Growth (YoY)",
          companyA: "+112.5% (Accelerating)",
          companyB: "+16.2% (Steady)",
          diff: "+96.3% NVDA",
          leader: "A",
        },
        {
          metric: "Operating Margin (TTM)",
          companyA: "62.8%",
          companyB: "44.6%",
          diff: "+18.2% NVDA",
          leader: "A",
        },
        {
          metric: "Free Cash Flow Margin",
          companyA: "45.1%",
          companyB: "31.8%",
          diff: "+13.3% NVDA",
          leader: "A",
        },
        {
          metric: "Forward P/E Multiple",
          companyA: "32.4x",
          companyB: "29.8x",
          diff: "+2.6x NVDA",
          leader: "B",
        },
        {
          metric: "EV / Forward EBITDA",
          companyA: "26.8x",
          companyB: "21.4x",
          diff: "+5.4x NVDA",
          leader: "B",
        },
        {
          metric: "Return on Equity (ROE)",
          companyA: "88.5%",
          companyB: "38.2%",
          diff: "+50.3% NVDA",
          leader: "A",
        },
        {
          metric: "Net Debt / EBITDA",
          companyA: "Net Cash ($26.4B)",
          companyB: "Net Cash ($18.1B)",
          diff: "Both Pristine",
          leader: "Neutral",
        },
      ],
      catalysts: [
        "NVIDIA: Next-gen Blackwell rack-scale architecture architecture ramp and hyperscaler capex durability.",
        "Microsoft: Copilot commercial seat monetization and enterprise Azure AI services consumption scale.",
        "Both: Deep structural pricing power and sticky enterprise developer ecosystems (CUDA vs Azure/Windows).",
      ],
      risks: [
        "Customer concentration: Top 4 cloud customers comprise ~38% of NVIDIA quarterly revenues.",
        "Regulatory & export restrictions on advanced sovereign compute architectures in international jurisdictions.",
        "Multi-year enterprise software renewal cycle elongation if generative AI ROI proves gradual.",
      ],
      citations: [
        {
          source: "SEC EDGAR",
          document: "NVIDIA Form 10-K (FY2025/26)",
          section: "Item 7: MD&A - Data Center Segment",
        },
        {
          source: "SEC EDGAR",
          document: "Microsoft Form 10-Q (Q3)",
          section: "Note 14: Intelligent Cloud & Productivity",
        },
        {
          source: "Earnings Call Transcript",
          document: "Q3 Institutional Investor Webcast",
          section: "CEO & CFO Commentary on Hyperscaler Capex",
        },
        {
          source: "FactSet / Bloomberg Consensus",
          document: "Consensus Model Aggregation",
          section: "FY2026/27 Forward Revenue & Margin Estimates",
        },
      ],
    },
    {
      id: "aapl-vs-googl",
      category: "Valuation & Capital Return",
      question:
        "Deconstruct Apple vs Alphabet across capital allocation, shareholder yield, and operating leverage.",
      title: "Capital Allocation & Ecosystem Resiliency: Apple (AAPL) vs. Alphabet (GOOGL)",
      targetTickers: "AAPL vs GOOGL",
      summary:
        "Apple leverages unparalleled consumer hardware lock-in and high-margin recurring Services to execute the industry's most aggressive share repurchase program. Alphabet provides superior forward top-line runway powered by Search AI integration and YouTube subscription growth, trading at a 15% discount on EV/Free Cash Flow.",
      comparisonTable: [
        {
          metric: "Revenue Growth (YoY)",
          companyA: "+6.1%",
          companyB: "+14.3%",
          diff: "+8.2% GOOGL",
          leader: "B",
        },
        {
          metric: "Operating Margin (TTM)",
          companyA: "30.7%",
          companyB: "32.4%",
          diff: "+1.7% GOOGL",
          leader: "B",
        },
        {
          metric: "Services / Cloud Gross Margin",
          companyA: "74.2%",
          companyB: "58.6%",
          diff: "+15.6% AAPL",
          leader: "A",
        },
        {
          metric: "Shareholder Yield (Div + Buybacks)",
          companyA: "4.1%",
          companyB: "2.8%",
          diff: "+1.3% AAPL",
          leader: "A",
        },
        {
          metric: "Forward P/E Multiple",
          companyA: "30.2x",
          companyB: "21.6x",
          diff: "8.6x Discount GOOGL",
          leader: "B",
        },
      ],
      catalysts: [
        "Apple Intelligence consumer device replacement supercycle across 1.4B active iPhones.",
        "Alphabet Google Cloud operating margin inflection and enterprise Gemini API adoption.",
      ],
      risks: [
        "Antitrust regulatory litigation surrounding default search distribution agreements.",
        "Hardware consumer replacement cycle elongation in emerging regional markets.",
      ],
      citations: [
        {
          source: "SEC EDGAR",
          document: "Apple Inc. Form 10-K",
          section: "Item 8: Financial Statements - Share Repurchase Authorization",
        },
        {
          source: "SEC EDGAR",
          document: "Alphabet Form 10-Q",
          section: "Google Cloud Operating Margin Breakdown",
        },
      ],
    },
  ];

  const { sendMessage, setIsFloatingOpen } = useChat();
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Equities");
  const [userQuery, setUserQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const currentPreset = queryPresets[selectedPresetIndex];

  const handleCopy = () => {
    navigator.clipboard?.writeText(currentPreset.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    const query = userQuery.trim();
    setUserQuery("");
    sendMessage(query);
    setIsFloatingOpen(true);
  };

  return (
    <section id="ai-research" className="py-20 md:py-32 bg-grerow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-grerow-border text-xs font-semibold text-grerow-green uppercase tracking-wider mb-4 shadow-subtle">
            <Bot className="w-3.5 h-3.5" />
            <span>INTELLIGENT CONVERSATIONAL RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-grerow-dark">
            Meet your AI research companion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-grerow-secondary leading-relaxed">
            Turn complex financial questions into structured research with an intelligent financial research experience.
          </p>

          {/* Illustrative Frontend Demo Banner */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-grerow-green-subtle border border-grerow-soft text-[11px] font-medium text-grerow-green">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Frontend Research Demonstration • Illustrative Sample Data</span>
          </div>
        </div>

        {/* Mock AI Chatbot Interface Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-grerow-border shadow-elevated overflow-hidden">
          {/* Chatbot Top Bar */}
          <div className="px-5 sm:px-7 py-4 border-b border-grerow-border bg-white flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-grerow-green text-white flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-grerow-dark">
                    Grerow Intelligence
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-grerow-green-subtle text-grerow-green">
                    v2.4 Fin-Engine
                  </span>
                </div>
                <div className="text-xs text-grerow-secondary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-grerow-green" />
                  <span>Cross-verifying 45,000+ public filings</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/research"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-grerow-green text-white hover:bg-grerow-green-hover text-xs font-semibold transition shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Full Workspace</span>
              </Link>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-grerow-border bg-white hover:bg-grerow-bg text-xs font-medium text-grerow-dark transition"
              >
                <Copy className="w-3.5 h-3.5 text-grerow-secondary" />
                <span>{copied ? "Copied" : "Copy Synthesis"}</span>
              </button>
            </div>
          </div>

          {/* Research Categories Navigation */}
          <div className="px-5 sm:px-7 py-2.5 bg-grerow-bg/60 border-b border-grerow-border flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-grerow-secondary font-medium mr-1 uppercase text-[10px] tracking-wider shrink-0">
              Categories:
            </span>
            {["Equities", "Company Fundamentals", "Valuation", "SEC Filings", "Options Skew", "Macro"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-grerow-dark text-white font-medium"
                      : "bg-white text-grerow-secondary hover:text-grerow-dark border border-grerow-border"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Chat Messages Body */}
          <div className="p-5 sm:p-8 space-y-6 bg-white">
            {/* USER MESSAGE */}
            <div className="flex items-start justify-end gap-3 max-w-3xl ml-auto">
              <div className="bg-grerow-dark text-white rounded-2xl rounded-tr-sm px-4 sm:px-5 py-3 shadow-subtle">
                <div className="text-[11px] font-medium text-grerow-soft mb-1 uppercase tracking-wider">
                  Research Question
                </div>
                <p className="text-sm sm:text-base leading-relaxed font-sans">
                  {currentPreset.question}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-grerow-soft flex items-center justify-center shrink-0 text-xs font-bold text-grerow-dark mt-1">
                YOU
              </div>
            </div>

            {/* AI RESEARCH RESPONSE */}
            <div className="flex items-start gap-3 sm:gap-4 max-w-4xl">
              <div className="w-8 h-8 rounded-xl bg-grerow-green text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                <Sparkles className="w-4 h-4" />
              </div>

              <div className="flex-1 bg-grerow-bg/40 rounded-2xl border border-grerow-border p-4 sm:p-6 space-y-6">
                {/* Response Title & Verification Tag */}
                <div className="border-b border-grerow-border pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-grerow-green uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Synthesized from 4 Audited Filings & Consensus Data</span>
                    </span>
                    <span className="text-xs font-medium text-grerow-secondary bg-white px-2 py-0.5 rounded border border-grerow-border">
                      {currentPreset.targetTickers}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-grerow-dark">
                    {currentPreset.title}
                  </h4>
                </div>

                {/* Executive Summary */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-grerow-secondary mb-2">
                    Executive Research Synthesis
                  </h5>
                  <p className="text-sm text-grerow-dark leading-relaxed">
                    {currentPreset.summary}
                  </p>
                </div>

                {/* Structured Comparative Table */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-grerow-secondary">
                      Multi-Parameter Financial Comparison
                    </h5>
                    <span className="text-[11px] text-grerow-secondary">
                      Standardized GAAP & non-GAAP metrics
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-grerow-border bg-white shadow-subtle">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-grerow-border bg-grerow-bg/70 text-grerow-dark font-semibold">
                          <th className="py-2.5 px-3.5 sm:px-4">Metric / Parameter</th>
                          <th className="py-2.5 px-3.5 sm:px-4">NVIDIA (NVDA)</th>
                          <th className="py-2.5 px-3.5 sm:px-4">Microsoft (MSFT)</th>
                          <th className="py-2.5 px-3.5 sm:px-4 text-right">Differential</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-grerow-border text-grerow-dark">
                        {currentPreset.comparisonTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-grerow-bg/40 transition-colors">
                            <td className="py-2.5 px-3.5 sm:px-4 font-medium text-grerow-dark">
                              {row.metric}
                            </td>
                            <td
                              className={`py-2.5 px-3.5 sm:px-4 font-mono text-xs ${
                                row.leader === "A" ? "font-bold text-grerow-green" : ""
                              }`}
                            >
                              {row.companyA}
                            </td>
                            <td
                              className={`py-2.5 px-3.5 sm:px-4 font-mono text-xs ${
                                row.leader === "B" ? "font-bold text-grerow-green" : ""
                              }`}
                            >
                              {row.companyB}
                            </td>
                            <td className="py-2.5 px-3.5 sm:px-4 font-mono text-xs text-right text-grerow-secondary">
                              {row.diff}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Fundamental Catalysts & Risks Dual Column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-grerow-border shadow-subtle">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-grerow-dark uppercase tracking-wider mb-2">
                      <TrendingUp className="w-3.5 h-3.5 text-grerow-green" />
                      <span>Key Growth Catalysts</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-grerow-secondary">
                      {currentPreset.catalysts.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-grerow-green font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-grerow-border shadow-subtle">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-grerow-dark uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-grerow-secondary" />
                      <span>Identified Sensitivities & Risks</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-grerow-secondary">
                      {currentPreset.risks.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-grerow-secondary font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sources & Citations Area */}
                <div className="border-t border-grerow-border pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-grerow-dark">
                      <FileText className="w-3.5 h-3.5 text-grerow-green" />
                      <span>Source Lineage & Citations ({currentPreset.citations.length})</span>
                    </div>
                    <span className="text-[11px] text-grerow-secondary">
                      Every insight is anchored to verifiable disclosures
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPreset.citations.map((cite, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-white border border-grerow-border hover:border-grerow-green/40 transition flex items-center justify-between group"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="text-xs font-semibold text-grerow-dark truncate group-hover:text-grerow-green transition">
                            {cite.document}
                          </div>
                          <div className="text-[11px] text-grerow-secondary truncate">
                            {cite.source} • {cite.section}
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-grerow-secondary group-hover:text-grerow-green shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preset Prompts Selector Bar */}
          <div className="px-5 sm:px-7 py-3 bg-grerow-bg/70 border-t border-grerow-border">
            <div className="text-[11px] font-semibold text-grerow-secondary uppercase tracking-wider mb-2">
              Try an illustrative research prompt:
            </div>
            <div className="flex flex-wrap gap-2">
              {queryPresets.map((preset, index) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetIndex(index)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition border text-left flex items-center gap-2 ${
                    selectedPresetIndex === index
                      ? "bg-white border-grerow-green text-grerow-dark font-medium shadow-subtle"
                      : "bg-white border-grerow-border text-grerow-secondary hover:text-grerow-dark hover:border-grerow-dark/30"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-grerow-green" />
                  <span className="truncate max-w-xs">{preset.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clean Chat Input Interface */}
          <div className="p-4 sm:p-6 bg-white border-t border-grerow-border">
            <form onSubmit={handleCustomSubmit} className="relative">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ask any financial research question (e.g. 'Compare gross margin durability across software vs semiconductors')..."
                className="w-full pl-4 pr-24 py-3 sm:py-3.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark placeholder-grerow-secondary/70 focus:outline-none focus:ring-2 focus:ring-grerow-green focus:border-transparent transition"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-grerow-green hover:bg-grerow-green-hover text-white text-xs font-medium transition flex items-center gap-1"
                >
                  <span>Research</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between mt-2.5 px-1 text-[11px] text-grerow-secondary">
              <span>Grerow AI searches SEC filings, earnings calls, and structured estimates.</span>
              <span>Tokens: 1,480 / 128k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
