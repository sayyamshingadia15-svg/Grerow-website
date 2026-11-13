"use client";

import React, { useState } from "react";
import {
  StructuredFinancialData,
  CitationSource,
  AnswerVerdict,
  ComparisonVerdict,
} from "./types";
import {
  Building2,
  TrendingUp,
  Scale,
  Rocket,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  ShieldAlert,
  ExternalLink,
  Info,
  Sparkles,
  ArrowRight,
  Trophy,
} from "lucide-react";
import { useChat } from "./ChatContext";

interface StructuredResponseViewProps {
  data?: StructuredFinancialData;
  rawContent?: string;
  sources?: CitationSource[];
  isDemo?: boolean;
  finalMessage?: string;
  finalFollowUps?: string[];
  verdict?: AnswerVerdict;
  comparisonVerdict?: ComparisonVerdict;
}

export function StructuredResponseView({
  data,
  rawContent,
  sources = [],
  isDemo = true,
  finalMessage,
  finalFollowUps,
  verdict,
  comparisonVerdict,
}: StructuredResponseViewProps) {
  const { setActiveCitation, sendMessage } = useChat();
  const [copied, setCopied] = useState(false);

  const effectiveVerdict = verdict || data?.verdict;
  const effectiveComparisonVerdict = comparisonVerdict || data?.comparisonVerdict;

  const effectiveFinalMessage =
    data?.finalMessage ||
    finalMessage ||
    "📌 **Grerow AI Final Note & Next Steps:** Would you like to drill deeper into specific financial metrics, compare alternative assets, or test valuation sensitivities? Simply ask your next research question below!";

  const effectiveFollowUps =
    data?.finalFollowUps ||
    finalFollowUps || [
      "Compare Apple and Microsoft",
      "Analyse NVIDIA fundamentals & gross margins",
      "How do I evaluate valuation using Discounted Cash Flow?",
      "Explain the latest market developments and interest rates",
    ];

  const handleCopy = () => {
    let textToCopy = "";
    if (data) {
      textToCopy = `COMPANY OVERVIEW\n${data.companyOverview}\n\nFINANCIAL PERFORMANCE\n${data.financialPerformance}\n\nVALUATION\n${data.valuation}\n\nGROWTH ANALYSIS\n${data.growthAnalysis}\n\nRISK ANALYSIS\n${data.riskAnalysis}\n\nRESEARCH SUMMARY\n${data.researchSummary}\n\nFINAL MESSAGE\n${effectiveFinalMessage}`;
    } else {
      textToCopy = rawContent || "";
      if (effectiveFinalMessage && !textToCopy.includes(effectiveFinalMessage)) {
        textToCopy += `\n\nFINAL MESSAGE\n${effectiveFinalMessage}`;
      }
    }

    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If structured data is not available, render raw text cleanly with final message
  if (!data) {
    return (
      <div className="space-y-4 text-sm text-grerow-dark leading-relaxed font-sans">
        {/* Prominent YES / NO Verdict Card for Raw Content */}
        {effectiveVerdict && (
          <div
            className={`p-3.5 sm:p-4 rounded-2xl border flex items-start gap-3 transition-all shadow-xs ${
              effectiveVerdict.status === "YES"
                ? "bg-gradient-to-r from-emerald-50 via-white to-emerald-50/40 border-emerald-200"
                : "bg-gradient-to-r from-rose-50 via-white to-rose-50/40 border-rose-200"
            }`}
          >
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs font-bold text-xs ${
                effectiveVerdict.status === "YES"
                  ? "bg-emerald-600 text-white"
                  : "bg-rose-600 text-white"
              }`}
            >
              {effectiveVerdict.status === "YES" ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <AlertTriangle className="w-4 h-4" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase shadow-xs ${
                    effectiveVerdict.status === "YES"
                      ? "bg-emerald-600 text-white"
                      : "bg-rose-600 text-white"
                  }`}
                >
                  ANSWER: {effectiveVerdict.status}
                </span>
                <span className="text-[11px] font-semibold text-grerow-secondary">
                  Direct Institutional Verdict
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-grerow-dark leading-snug">
                {effectiveVerdict.headline}
              </h4>
              <p className="text-xs text-grerow-secondary mt-1 leading-relaxed">
                {effectiveVerdict.explanation}
              </p>
            </div>
          </div>
        )}

        <div className="whitespace-pre-wrap">{rawContent}</div>
        {sources.length > 0 && (
          <div className="mt-4 pt-4 border-t border-grerow-border">
            <div className="text-xs font-bold uppercase tracking-wider text-grerow-secondary mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-grerow-green" />
              <span>Sources & References</span>
            </div>
            <div className="space-y-1.5">
              {sources.map((s, i) => (
                <div key={i} className="text-xs text-grerow-secondary">
                  • <strong>{s.title}</strong> — {s.document} ({s.section})
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated FINAL MESSAGE Card for raw/general responses */}
        {effectiveFinalMessage && (
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-grerow-green-subtle/70 via-white to-grerow-green-subtle/30 border border-grerow-soft shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-green">
                <Sparkles className="w-4 h-4 text-grerow-green" />
                <span>FINAL MESSAGE & NEXT STEPS</span>
              </div>
              <span className="text-[10px] font-semibold text-grerow-green bg-white px-2 py-0.5 rounded-full border border-grerow-soft shadow-xs">
                Next Steps
              </span>
            </div>

            <p className="text-xs sm:text-sm text-grerow-dark font-medium leading-relaxed">
              {effectiveFinalMessage}
            </p>

            {effectiveFollowUps && effectiveFollowUps.length > 0 && (
              <div className="pt-2.5 border-t border-grerow-soft/60 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-grerow-secondary">
                  Suggested Next Questions:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {effectiveFollowUps.map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-grerow-dark hover:text-white text-grerow-dark border border-grerow-border hover:border-grerow-dark text-xs font-medium transition shadow-xs"
                    >
                      <span>{prompt}</span>
                      <ArrowRight className="w-3 h-3 text-grerow-secondary group-hover:text-grerow-green transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5 text-grerow-dark font-sans">
      {/* Top Header & Demonstration Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-grerow-border">
        <div className="flex items-center gap-2">
          {isDemo && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-grerow-green-subtle text-grerow-green border border-grerow-soft text-[11px] font-semibold tracking-wide">
              <Info className="w-3 h-3" />
              <span>Demonstration Mode • Illustrative Research</span>
            </span>
          )}
          {sources.length > 0 && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-grerow-secondary bg-grerow-bg px-2 py-0.5 rounded border border-grerow-border">
              <CheckCircle2 className="w-3 h-3 text-grerow-green" />
              <span>{sources.length} Verified Filings</span>
            </span>
          )}
        </div>

        {/* Copy synthesis button */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-grerow-border bg-white hover:bg-grerow-bg text-xs font-medium text-grerow-dark transition shadow-xs"
          title="Copy structured synthesis to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-grerow-green" />
              <span className="text-grerow-green">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-grerow-secondary" />
              <span>Copy Analysis</span>
            </>
          )}
        </button>
      </div>

      {/* Prominent YES / NO Verdict Card */}
      {effectiveVerdict && (
        <div
          className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 transition-all shadow-xs ${
            effectiveVerdict.status === "YES"
              ? "bg-gradient-to-r from-emerald-50 via-white to-emerald-50/50 border-emerald-300"
              : "bg-gradient-to-r from-rose-50 via-white to-rose-50/50 border-rose-300"
          }`}
        >
          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs font-bold ${
              effectiveVerdict.status === "YES"
                ? "bg-emerald-600 text-white"
                : "bg-rose-600 text-white"
            }`}
          >
            {effectiveVerdict.status === "YES" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <AlertTriangle className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider uppercase shadow-xs ${
                  effectiveVerdict.status === "YES"
                    ? "bg-emerald-600 text-white"
                    : "bg-rose-600 text-white"
                }`}
              >
                VERDICT: {effectiveVerdict.status}
              </span>
              <span className="text-[11px] font-semibold text-grerow-secondary">
                Direct Clear Answer
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-grerow-dark leading-snug">
              {effectiveVerdict.headline}
            </h4>
            <p className="text-xs sm:text-sm text-grerow-secondary mt-1 leading-relaxed">
              {effectiveVerdict.explanation}
            </p>
          </div>
        </div>
      )}

      {/* Prominent Clear & Concise Comparison Verdict Card */}
      {effectiveComparisonVerdict && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-grerow-bg via-white to-grerow-green-subtle/30 border border-grerow-green/40 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-grerow-border">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-grerow-green" />
              <span className="text-xs font-bold uppercase tracking-wider text-grerow-dark">
                COMPARISON VERDICT & CLEAR WINNER
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-grerow-green text-white shadow-xs">
              Winner: {effectiveComparisonVerdict.winner}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-grerow-dark leading-relaxed">
            {effectiveComparisonVerdict.headline}
          </p>
          <p className="text-xs sm:text-sm text-grerow-secondary leading-relaxed">
            {effectiveComparisonVerdict.conciseAnswer}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-grerow-border/60">
            <div className="p-2.5 rounded-lg bg-white border border-grerow-border text-xs">
              <span className="font-bold text-grerow-dark block mb-0.5">Key Advantage A:</span>
              <span className="text-grerow-secondary text-[11px] leading-relaxed">
                {effectiveComparisonVerdict.keyAdvantageA}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-grerow-border text-xs">
              <span className="font-bold text-grerow-dark block mb-0.5">Key Advantage B:</span>
              <span className="text-grerow-secondary text-[11px] leading-relaxed">
                {effectiveComparisonVerdict.keyAdvantageB}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 1. COMPANY OVERVIEW */}
      <section className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-dark">
          <Building2 className="w-4 h-4 text-grerow-green" />
          <span>COMPANY OVERVIEW</span>
        </div>
        <p className="text-xs sm:text-sm text-grerow-dark leading-relaxed pl-6 whitespace-pre-wrap">
          {data.companyOverview}
        </p>
      </section>

      {/* 2. FINANCIAL PERFORMANCE */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-dark">
          <TrendingUp className="w-4 h-4 text-grerow-green" />
          <span>FINANCIAL PERFORMANCE</span>
        </div>
        <p className="text-xs sm:text-sm text-grerow-dark leading-relaxed pl-6 whitespace-pre-wrap">
          {data.financialPerformance}
        </p>

        {/* Structured Multi-Metric Comparative Table (if available) */}
        {data.comparisonTable && data.comparisonTable.length > 0 && (
          <div className="ml-0 sm:ml-6 mt-3 overflow-x-auto rounded-xl border border-grerow-border bg-white shadow-subtle">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-grerow-border bg-grerow-bg/80 text-grerow-dark font-semibold">
                  <th className="py-2.5 px-3 sm:px-4">Metric / Parameter</th>
                  <th className="py-2.5 px-3 sm:px-4">{data.companyAName || "Entity A"}</th>
                  <th className="py-2.5 px-3 sm:px-4">{data.companyBName || "Entity B"}</th>
                  <th className="py-2.5 px-3 sm:px-4 text-right">Differential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-grerow-border text-grerow-dark">
                {data.comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-grerow-bg/30 transition-colors">
                    <td className="py-2 px-3 sm:px-4 font-medium text-grerow-dark">
                      {row.metric}
                    </td>
                    <td
                      className={`py-2 px-3 sm:px-4 font-mono text-[11px] sm:text-xs ${
                        row.leader === "A" ? "font-bold text-grerow-green" : ""
                      }`}
                    >
                      {row.companyA}
                    </td>
                    <td
                      className={`py-2 px-3 sm:px-4 font-mono text-[11px] sm:text-xs ${
                        row.leader === "B" ? "font-bold text-grerow-green" : ""
                      }`}
                    >
                      {row.companyB}
                    </td>
                    <td className="py-2 px-3 sm:px-4 font-mono text-[11px] text-right text-grerow-secondary">
                      {row.diff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Metric Cards Grid (if single stock or macro metrics provided) */}
        {data.metrics && data.metrics.length > 0 && (
          <div className="ml-0 sm:ml-6 mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {data.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-grerow-bg/60 border border-grerow-border"
              >
                <div className="text-[10px] text-grerow-secondary font-medium uppercase truncate">
                  {m.label}
                </div>
                <div className="text-xs sm:text-sm font-bold text-grerow-dark mt-0.5 truncate">
                  {m.value}
                </div>
                {m.subtext && (
                  <div className="text-[10px] text-grerow-secondary truncate mt-0.5">
                    {m.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. VALUATION */}
      <section className="space-y-1.5 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-dark">
          <Scale className="w-4 h-4 text-grerow-green" />
          <span>VALUATION</span>
        </div>
        <p className="text-xs sm:text-sm text-grerow-dark leading-relaxed pl-6 whitespace-pre-wrap">
          {data.valuation}
        </p>
      </section>

      {/* 4. GROWTH ANALYSIS */}
      <section className="space-y-1.5 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-dark">
          <Rocket className="w-4 h-4 text-grerow-green" />
          <span>GROWTH ANALYSIS</span>
        </div>
        <p className="text-xs sm:text-sm text-grerow-dark leading-relaxed pl-6 whitespace-pre-wrap">
          {data.growthAnalysis}
        </p>

        {data.catalysts && data.catalysts.length > 0 && (
          <div className="ml-0 sm:ml-6 mt-2 p-3 rounded-xl bg-grerow-green-subtle/40 border border-grerow-soft">
            <div className="text-[11px] font-bold uppercase tracking-wider text-grerow-green mb-1.5">
              Identified Catalysts:
            </div>
            <ul className="space-y-1 text-xs text-grerow-dark">
              {data.catalysts.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-grerow-green font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 5. RISK ANALYSIS */}
      <section className="space-y-1.5 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>RISK ANALYSIS</span>
        </div>
        <p className="text-xs sm:text-sm text-grerow-dark leading-relaxed pl-6 whitespace-pre-wrap">
          {data.riskAnalysis}
        </p>

        {data.risks && data.risks.length > 0 && (
          <div className="ml-0 sm:ml-6 mt-2 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Sensitivities & Business Risks:
            </div>
            <ul className="space-y-1 text-xs text-amber-950">
              {data.risks.map((r, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 6. SOURCES (Displayed separately as required) */}
      {sources.length > 0 && (
        <section className="space-y-2 pt-3 border-t border-grerow-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-dark">
              <FileText className="w-4 h-4 text-grerow-green" />
              <span>SOURCES ({sources.length})</span>
            </div>
            <span className="text-[10px] text-grerow-secondary">
              Click any source to review regulatory disclosures
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {sources.map((src) => (
              <button
                key={src.id}
                onClick={() => setActiveCitation(src)}
                className="group p-2.5 rounded-xl bg-white border border-grerow-border hover:border-grerow-green/60 hover:bg-grerow-bg text-left transition flex items-center justify-between shadow-xs"
              >
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-semibold text-grerow-dark group-hover:text-grerow-green transition truncate">
                    {src.title}
                  </div>
                  <div className="text-[11px] text-grerow-secondary truncate mt-0.5">
                    {src.document} • {src.section}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-grerow-secondary group-hover:text-grerow-green shrink-0 transition" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 7. RESEARCH SUMMARY */}
      <section className="space-y-1.5 pt-3 border-t border-grerow-border">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-green">
          <CheckCircle2 className="w-4 h-4 text-grerow-green" />
          <span>RESEARCH SUMMARY</span>
        </div>
        <p className="text-xs sm:text-sm text-grerow-dark font-medium leading-relaxed pl-6 bg-grerow-bg/40 p-3 rounded-xl border border-grerow-border whitespace-pre-wrap">
          {data.researchSummary}
        </p>
      </section>

      {/* 8. FINAL MESSAGE & NEXT STEPS */}
      {effectiveFinalMessage && (
        <section className="space-y-2 pt-3 border-t border-grerow-border">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-grerow-green-subtle/70 via-white to-grerow-green-subtle/30 border border-grerow-soft shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grerow-green">
                <Sparkles className="w-4 h-4 text-grerow-green" />
                <span>FINAL MESSAGE & NEXT STEPS</span>
              </div>
              <span className="text-[10px] font-semibold text-grerow-green bg-white px-2 py-0.5 rounded-full border border-grerow-soft shadow-xs">
                Key Takeaway
              </span>
            </div>

            <p className="text-xs sm:text-sm text-grerow-dark font-medium leading-relaxed">
              {effectiveFinalMessage}
            </p>

            {effectiveFollowUps && effectiveFollowUps.length > 0 && (
              <div className="pt-2.5 border-t border-grerow-soft/60 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-grerow-secondary">
                  Suggested Next Questions:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {effectiveFollowUps.map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-grerow-dark hover:text-white text-grerow-dark border border-grerow-border hover:border-grerow-dark text-xs font-medium transition shadow-xs"
                    >
                      <span>{prompt}</span>
                      <ArrowRight className="w-3 h-3 text-grerow-secondary group-hover:text-grerow-green transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Regulatory & Safety Disclaimer */}
      <div className="mt-4 pt-3 border-t border-grerow-border/60 flex items-start gap-2 text-[10px] text-grerow-secondary leading-normal">
        <ShieldAlert className="w-3.5 h-3.5 text-grerow-secondary shrink-0 mt-0.5" />
        <span>
          <strong>Financial Safety Notice:</strong> Grerow AI is an educational and analytical research demonstration engine. All analyses, ratios, and syntheses are for informational and research purposes only and do not constitute personalized financial, investment, legal, or tax advice. Past financial performance and historical filings do not guarantee future investment returns.
        </span>
      </div>
    </div>
  );
}
