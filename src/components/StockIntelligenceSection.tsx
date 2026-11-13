"use client";

import React, { useState } from "react";
import { useChat } from "./ai-chat/ChatContext";
import {
  TrendingUp,
  BarChart3,
  DollarSign,
  Percent,
  Layers,
  AlertCircle,
  ShieldCheck,
  ChevronUp,
  Info,
  Calendar,
  ArrowUpRight,
  Sliders,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface CompanyProfile {
  ticker: string;
  name: string;
  exchange: string;
  sector: string;
  price: string;
  change: string;
  changePct: string;
  marketCap: string;
  peRatio: string;
  forwardPe: string;
  evEbitda: string;
  fcfYield: string;
  revenue: string;
  revenueGrowth: string;
  grossMargin: string;
  operatingMargin: string;
  netMargin: string;
  roe: string;
  debtEquity: string;
  currentRatio: string;
  freeCashFlow: string;
  growthSegments: { name: string; share: string; growth: string }[];
  risks: { title: string; severity: "High" | "Medium" | "Low"; note: string }[];
  chartPoints: number[];
}

export function StockIntelligenceSection() {
  const companies: Record<string, CompanyProfile> = {
    NVDA: {
      ticker: "NVDA",
      name: "NVIDIA Corporation",
      exchange: "NASDAQ",
      sector: "Technology • Semiconductors & AI Systems",
      price: "$138.25",
      change: "+$3.45",
      changePct: "+2.56%",
      marketCap: "$3.41 Trillion",
      peRatio: "48.2x",
      forwardPe: "32.4x",
      evEbitda: "26.8x",
      fcfYield: "3.2%",
      revenue: "$122.4 Billion",
      revenueGrowth: "+112.5% YoY",
      grossMargin: "75.4%",
      operatingMargin: "62.8%",
      netMargin: "55.2%",
      roe: "88.5%",
      debtEquity: "0.18",
      currentRatio: "3.82x",
      freeCashFlow: "$45.2 Billion",
      growthSegments: [
        { name: "Compute & Networking (Datacenter)", share: "87%", growth: "+154% YoY" },
        { name: "Graphics (Gaming & RTX)", share: "9%", growth: "+16% YoY" },
        { name: "Professional Visualization", share: "2%", growth: "+20% YoY" },
        { name: "Automotive & Robotics", share: "2%", growth: "+37% YoY" },
      ],
      risks: [
        {
          title: "Customer Concentration",
          severity: "High",
          note: "Top four cloud service providers account for approximately 38% of total revenue.",
        },
        {
          title: "Geopolitical & Export Controls",
          severity: "Medium",
          note: "Regulatory limits on shipment of advanced tensor accelerator architectures to restricted regions.",
        },
        {
          title: "Foundry & Advanced Packaging Capacity",
          severity: "Medium",
          note: "Reliance on leading-edge packaging (CoWoS) and foundry partners for volume ramps.",
        },
      ],
      chartPoints: [45, 52, 60, 58, 72, 85, 94, 90, 105, 118, 128, 138],
    },
    AAPL: {
      ticker: "AAPL",
      name: "Apple Inc.",
      exchange: "NASDAQ",
      sector: "Technology • Consumer Electronics & Services",
      price: "$232.10",
      change: "+$1.85",
      changePct: "+0.80%",
      marketCap: "$3.52 Trillion",
      peRatio: "34.1x",
      forwardPe: "30.2x",
      evEbitda: "24.6x",
      fcfYield: "3.5%",
      revenue: "$385.6 Billion",
      revenueGrowth: "+6.1% YoY",
      grossMargin: "46.2%",
      operatingMargin: "30.7%",
      netMargin: "25.3%",
      roe: "160.8%",
      debtEquity: "1.45",
      currentRatio: "0.98x",
      freeCashFlow: "$108.8 Billion",
      growthSegments: [
        { name: "Services (App Store, Cloud, Pay)", share: "24%", growth: "+14.2% YoY" },
        { name: "iPhone", share: "51%", growth: "+4.5% YoY" },
        { name: "Wearables, Home & Accessories", share: "10%", growth: "+1.2% YoY" },
        { name: "Mac & iPad", share: "15%", growth: "+7.8% YoY" },
      ],
      risks: [
        {
          title: "Regulatory App Store Scrutiny",
          severity: "Medium",
          note: "European Union DMA and domestic inquiries concerning digital marketplace commission structures.",
        },
        {
          title: "Global Consumer Hardware Upgrades",
          severity: "Medium",
          note: "Longer replacement cycles for premium smartphones across established geographies.",
        },
        {
          title: "Supply Chain Geographical Diversification",
          severity: "Low",
          note: "Ongoing migration of production capacity across India and Southeast Asia.",
        },
      ],
      chartPoints: [180, 185, 178, 192, 205, 210, 215, 222, 218, 225, 228, 232],
    },
    MSFT: {
      ticker: "MSFT",
      name: "Microsoft Corporation",
      exchange: "NASDAQ",
      sector: "Technology • Systems Software & Cloud Infrastructure",
      price: "$428.50",
      change: "+$4.20",
      changePct: "+0.99%",
      marketCap: "$3.18 Trillion",
      peRatio: "35.4x",
      forwardPe: "29.8x",
      evEbitda: "21.4x",
      fcfYield: "2.8%",
      revenue: "$245.1 Billion",
      revenueGrowth: "+16.2% YoY",
      grossMargin: "69.8%",
      operatingMargin: "44.6%",
      netMargin: "35.8%",
      roe: "38.2%",
      debtEquity: "0.42",
      currentRatio: "1.24x",
      freeCashFlow: "$74.1 Billion",
      growthSegments: [
        { name: "Intelligent Cloud (Azure)", share: "43%", growth: "+29.0% YoY" },
        { name: "Productivity & Business (Office 365)", share: "32%", growth: "+12.8% YoY" },
        { name: "More Personal Computing (Windows, Xbox)", share: "25%", growth: "+8.4% YoY" },
      ],
      risks: [
        {
          title: "Hyperscaler Capex Absorption",
          severity: "Medium",
          note: "Substantial capital expenditure required for data center GPU infrastructure ahead of monetization.",
        },
        {
          title: "Cybersecurity & Cloud Reliability",
          severity: "Medium",
          note: "High customer reliance on enterprise identity, directory, and zero-trust cloud infrastructure.",
        },
        {
          title: "Enterprise IT Budget Optimization",
          severity: "Low",
          note: "Macro sensitivity if corporate software renewals undergo consolidation.",
        },
      ],
      chartPoints: [340, 360, 375, 390, 410, 400, 415, 420, 410, 422, 425, 428],
    },
  };

  const { sendMessage, setIsFloatingOpen } = useChat();
  const [activeTicker, setActiveTicker] = useState<string>("NVDA");
  const [activeTab, setActiveTab] = useState<"overview" | "valuation" | "ratios" | "growth" | "risks">("overview");
  const [timeframe, setTimeframe] = useState<string>("1Y");

  const company = companies[activeTicker];

  return (
    <section id="stock-intelligence" className="py-20 md:py-32 bg-white border-b border-grerow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grerow-bg border border-grerow-border text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-4 shadow-subtle">
            <BarChart3 className="w-3.5 h-3.5 text-grerow-green" />
            <span>INSTITUTIONAL STOCK INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-grerow-dark">
            Deeper insights. Better understanding.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-grerow-secondary leading-relaxed">
            Navigate company fundamentals, financial statements, valuation multiples, and risk matrices in one cohesive research dashboard.
          </p>

          {/* REQUIRED SMALL LABEL: ILLUSTRATIVE DATA */}
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grerow-bg border border-grerow-border text-[11px] font-semibold text-grerow-secondary">
            <Info className="w-3.5 h-3.5 text-grerow-green" />
            <span className="tracking-wider">ILLUSTRATIVE DATA</span>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-grerow-bg rounded-2xl sm:rounded-3xl border border-grerow-border shadow-card overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="p-4 sm:p-6 bg-white border-b border-grerow-border flex flex-wrap items-center justify-between gap-4">
            {/* Ticker Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-grerow-secondary uppercase tracking-wider mr-1">
                Select Company:
              </span>
              {(["NVDA", "AAPL", "MSFT"] as const).map((tick) => (
                <button
                  key={tick}
                  onClick={() => setActiveTicker(tick)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    activeTicker === tick
                      ? "bg-grerow-dark text-white shadow-sm"
                      : "bg-grerow-bg text-grerow-dark hover:bg-grerow-soft/50 border border-grerow-border"
                  }`}
                >
                  {tick}
                </button>
              ))}
            </div>

            {/* Timeframe Selector */}
            <div className="flex items-center gap-1 bg-grerow-bg p-1 rounded-xl border border-grerow-border text-xs">
              {["1D", "1W", "1M", "1Y", "5Y", "MAX"].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition ${
                    timeframe === tf
                      ? "bg-white text-grerow-dark shadow-xs font-semibold"
                      : "text-grerow-secondary hover:text-grerow-dark"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Company Overview Header */}
          <div className="p-6 sm:p-8 bg-white border-b border-grerow-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-grerow-secondary font-medium">
                  <span className="font-bold text-grerow-dark">{company.exchange}: {company.ticker}</span>
                  <span>•</span>
                  <span>{company.sector}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-grerow-dark mt-1">
                  {company.name}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-bold text-grerow-dark font-sans">
                    {company.price}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-grerow-green flex items-center">
                    <ChevronUp className="w-4 h-4 mr-0.5" />
                    {company.change} ({company.changePct})
                  </span>
                  <span className="text-xs text-grerow-secondary font-medium hidden sm:inline">
                    • Market Cap: {company.marketCap}
                  </span>
                </div>

                <button
                  onClick={() => {
                    sendMessage(`Analyse ${company.name} (${company.ticker}) fundamentals, gross margins, valuation multiples, and growth runway.`);
                    setIsFloatingOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-grerow-green-subtle hover:bg-grerow-green text-grerow-green hover:text-white border border-grerow-soft text-xs font-semibold transition shadow-xs self-start sm:self-auto"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Research {company.ticker} with AI</span>
                </button>
              </div>
            </div>

            {/* Stock Price Chart Area */}
            <div className="mt-8 pt-4 border-t border-grerow-border">
              <div className="flex items-center justify-between text-xs text-grerow-secondary mb-2">
                <span className="font-medium">Historical Price Trend & Moving Averages</span>
                <span className="font-mono text-grerow-dark font-medium">50-DMA: $128.40 | 200-DMA: $104.20</span>
              </div>

              <div className="relative h-48 sm:h-56 w-full">
                <svg
                  viewBox="0 0 600 200"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="stockChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#008000" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#008000" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="600" y2="30" stroke="#EEF2EF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#EEF2EF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="130" x2="600" y2="130" stroke="#EEF2EF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="180" x2="600" y2="180" stroke="#EEF2EF" strokeWidth="1" />

                  {/* Normalized coordinates based on points */}
                  {(() => {
                    const points = company.chartPoints;
                    const min = Math.min(...points) * 0.9;
                    const max = Math.max(...points) * 1.1;
                    const coords = points.map((val, i) => {
                      const x = (i / (points.length - 1)) * 580 + 10;
                      const y = 175 - ((val - min) / (max - min)) * 140;
                      return { x, y };
                    });

                    const pathD = coords.reduce(
                      (acc, p, i) =>
                        i === 0
                          ? `M ${p.x} ${p.y}`
                          : `${acc} C ${coords[i - 1].x + 20} ${coords[i - 1].y}, ${p.x - 20} ${p.y}, ${p.x} ${p.y}`,
                      ""
                    );

                    const areaD = `${pathD} L ${coords[coords.length - 1].x} 180 L ${coords[0].x} 180 Z`;

                    return (
                      <>
                        <path d={areaD} fill="url(#stockChartGrad)" />
                        <path d={pathD} fill="none" stroke="#008000" strokeWidth="2.5" strokeLinecap="round" />
                        {coords.map((c, idx) => (
                          <circle
                            key={idx}
                            cx={c.x}
                            cy={c.y}
                            r={idx === coords.length - 1 ? 5 : 3}
                            fill={idx === coords.length - 1 ? "#008000" : "#FFFFFF"}
                            stroke="#008000"
                            strokeWidth={idx === coords.length - 1 ? 2 : 1.5}
                          />
                        ))}
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div className="flex justify-between items-center text-[11px] text-grerow-secondary pt-2">
                <span>Nov 2025</span>
                <span>Jan 2026</span>
                <span>Apr 2026</span>
                <span>Jul 2026</span>
                <span>Oct 2026</span>
                <span className="font-semibold text-grerow-dark">Today (Live Quote Mock)</span>
              </div>
            </div>
          </div>

          {/* Structured Intelligence Sub-Tabs */}
          <div className="px-6 bg-white border-b border-grerow-border flex items-center gap-2 overflow-x-auto text-xs font-semibold">
            {[
              { id: "overview", label: "Fundamental Overview" },
              { id: "valuation", label: "Valuation & Multiples" },
              { id: "ratios", label: "Financial Ratios & Health" },
              { id: "growth", label: "Segment Growth Analysis" },
              { id: "risks", label: "Risk Factors & Sensitivities" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-grerow-green text-grerow-green"
                    : "border-transparent text-grerow-secondary hover:text-grerow-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8">
            {/* OVERVIEW / REVENUE / PROFITABILITY */}
            {(activeTab === "overview" || activeTab === "valuation") && (
              <div className="space-y-6">
                {/* 4 Key Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle">
                    <div className="text-xs font-semibold text-grerow-secondary uppercase tracking-wider">
                      Revenue (TTM)
                    </div>
                    <div className="text-2xl font-bold text-grerow-dark mt-1 font-sans">
                      {company.revenue}
                    </div>
                    <div className="text-xs font-semibold text-grerow-green mt-1">
                      {company.revenueGrowth}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle">
                    <div className="text-xs font-semibold text-grerow-secondary uppercase tracking-wider">
                      Operating Margin
                    </div>
                    <div className="text-2xl font-bold text-grerow-dark mt-1 font-sans">
                      {company.operatingMargin}
                    </div>
                    <div className="text-xs text-grerow-secondary mt-1">
                      Gross Margin: {company.grossMargin}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle">
                    <div className="text-xs font-semibold text-grerow-secondary uppercase tracking-wider">
                      Forward P/E Multiple
                    </div>
                    <div className="text-2xl font-bold text-grerow-dark mt-1 font-sans">
                      {company.forwardPe}
                    </div>
                    <div className="text-xs text-grerow-secondary mt-1">
                      Trailing P/E: {company.peRatio}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle">
                    <div className="text-xs font-semibold text-grerow-secondary uppercase tracking-wider">
                      Free Cash Flow (TTM)
                    </div>
                    <div className="text-2xl font-bold text-grerow-dark mt-1 font-sans">
                      {company.freeCashFlow}
                    </div>
                    <div className="text-xs text-grerow-green font-semibold mt-1">
                      FCF Yield: {company.fcfYield}
                    </div>
                  </div>
                </div>

                {/* Additional Fundamental Metrics Table */}
                <div className="bg-white rounded-2xl border border-grerow-border p-5 shadow-subtle">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-grerow-dark uppercase tracking-wider">
                      Valuation & Operating Multiples
                    </h4>
                    <span className="text-xs text-grerow-secondary font-medium">
                      Calculated from latest 10-K & 10-Q filings
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="text-grerow-secondary">EV / EBITDA</div>
                      <div className="text-base font-bold text-grerow-dark mt-0.5">{company.evEbitda}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="text-grerow-secondary">Net Margin</div>
                      <div className="text-base font-bold text-grerow-dark mt-0.5">{company.netMargin}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="text-grerow-secondary">Return on Equity</div>
                      <div className="text-base font-bold text-grerow-dark mt-0.5">{company.roe}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="text-grerow-secondary">Debt / Equity</div>
                      <div className="text-base font-bold text-grerow-dark mt-0.5">{company.debtEquity}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="text-grerow-secondary">Current Ratio</div>
                      <div className="text-base font-bold text-grerow-dark mt-0.5">{company.currentRatio}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="text-grerow-secondary">FCF Yield</div>
                      <div className="text-base font-bold text-grerow-green mt-0.5">{company.fcfYield}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FINANCIAL RATIOS & HEALTH */}
            {activeTab === "ratios" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-secondary">
                    Profitability & Efficiency
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Gross Margin</span>
                      <span className="font-bold text-grerow-dark">{company.grossMargin}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Operating Margin</span>
                      <span className="font-bold text-grerow-dark">{company.operatingMargin}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Net Margin</span>
                      <span className="font-bold text-grerow-dark">{company.netMargin}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-grerow-secondary">Return on Equity (ROE)</span>
                      <span className="font-bold text-grerow-green">{company.roe}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-secondary">
                    Liquidity & Balance Sheet
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Current Ratio</span>
                      <span className="font-bold text-grerow-dark">{company.currentRatio}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Total Debt to Equity</span>
                      <span className="font-bold text-grerow-dark">{company.debtEquity}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Free Cash Flow TTM</span>
                      <span className="font-bold text-grerow-dark">{company.freeCashFlow}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-grerow-secondary">Solvency Status</span>
                      <span className="font-bold text-grerow-green">Investment Grade</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-secondary">
                    Cash Conversion Quality
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Operating Cash Flow / Net Inc</span>
                      <span className="font-bold text-grerow-green">1.18x (High Quality)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Working Capital Reinvestment</span>
                      <span className="font-bold text-grerow-dark">Controlled</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-grerow-border">
                      <span className="text-grerow-secondary">Dividend Yield</span>
                      <span className="font-bold text-grerow-dark">0.03% (Capital Reinvested)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-grerow-secondary">Sloan Accrual Ratio</span>
                      <span className="font-bold text-grerow-green">-2.4% (Conservative)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GROWTH ANALYSIS */}
            {activeTab === "growth" && (
              <div className="bg-white rounded-2xl border border-grerow-border p-6 shadow-subtle">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-base font-bold text-grerow-dark">
                      Segment Revenue & Growth Breakdown
                    </h4>
                    <p className="text-xs text-grerow-secondary mt-0.5">
                      Unit economic expansion across commercial operating divisions
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-grerow-green bg-grerow-green-subtle px-2.5 py-1 rounded-full">
                    Topline Growth: {company.revenueGrowth}
                  </span>
                </div>

                <div className="space-y-4">
                  {company.growthSegments.map((seg, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-grerow-bg border border-grerow-border">
                      <div className="flex justify-between items-center text-xs font-bold text-grerow-dark mb-1">
                        <span>{seg.name}</span>
                        <span className="text-grerow-green">{seg.growth}</span>
                      </div>
                      <div className="flex justify-between text-xs text-grerow-secondary mb-2">
                        <span>Segment Revenue Contribution</span>
                        <span>{seg.share} of total company sales</span>
                      </div>
                      {/* Bar indicator */}
                      <div className="w-full bg-grerow-border h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-grerow-green h-full rounded-full transition-all duration-500"
                          style={{ width: seg.share }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RISK FACTORS */}
            {activeTab === "risks" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Automated Sensitivity Extraction:</span> The
                    following potential risk disclosures are extracted directly from Item 1A of the
                    company&apos;s latest annual Form 10-K filing.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {company.risks.map((risk, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-grerow-border shadow-subtle flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-grerow-dark uppercase tracking-wider">
                            {risk.title}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                              risk.severity === "High"
                                ? "bg-red-50 text-red-700 border border-red-200"
                                : risk.severity === "Medium"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {risk.severity} Severity
                          </span>
                        </div>
                        <p className="text-xs text-grerow-secondary leading-relaxed mt-2">
                          {risk.note}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-grerow-border flex items-center justify-between text-[11px] text-grerow-secondary">
                        <span>Source: 10-K Item 1A</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-grerow-green" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
