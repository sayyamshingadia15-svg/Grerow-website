"use client";

import React from "react";
import {
  Sparkles,
  BarChart3,
  GitCompare,
  TrendingUp,
  Layers,
  BookOpen,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useChat } from "./ChatContext";

interface WelcomeScreenProps {
  onSelectPrompt?: (prompt: string, category?: string) => void;
  compact?: boolean;
}

export function WelcomeScreen({ onSelectPrompt, compact = false }: WelcomeScreenProps) {
  const { sendMessage } = useChat();

  const handlePromptClick = (prompt: string, category?: string) => {
    if (onSelectPrompt) {
      onSelectPrompt(prompt, category);
    } else {
      sendMessage(prompt, category);
    }
  };

  const coreSuggestedPrompts = [
    {
      title: "Analyse a company's fundamentals.",
      subtitle: "e.g. NVIDIA revenue runway, gross margins, and balance sheet",
      query: "Analyse a company's fundamentals.",
      category: "stocks",
      icon: BarChart3,
    },
    {
      title: "Compare two stocks.",
      subtitle: "e.g. Apple vs Microsoft side-by-side comparative analysis",
      query: "Compare two stocks.",
      category: "comparison",
      icon: GitCompare,
    },
    {
      title: "Explain the latest market developments.",
      subtitle: "e.g. Treasury yields, Fed interest rate path, and inflation",
      query: "Explain the latest market developments.",
      category: "macro",
      icon: TrendingUp,
    },
    {
      title: "How do I evaluate a company's valuation?",
      subtitle: "e.g. DCF models, EV/EBITDA multiples, and WACC framework",
      query: "How do I evaluate a company's valuation?",
      category: "education",
      icon: BookOpen,
    },
    {
      title: "Explain options and futures.",
      subtitle: "e.g. Derivatives, the Greeks (Delta, Theta), and hedging strategies",
      query: "Explain options and futures.",
      category: "derivatives",
      icon: Layers,
    },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        compact ? "py-6 px-4" : "py-12 px-6 max-w-4xl mx-auto"
      }`}
    >
      {/* Brand Icon & Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-grerow-green-subtle border border-grerow-soft mb-4 shadow-subtle animate-fade-in">
        <Sparkles className="w-3.5 h-3.5 text-grerow-green animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-wider text-grerow-green">
          GREROW AI RESEARCH ENGINE
        </span>
      </div>

      {/* Primary Headlines as mandated by specification */}
      <h2
        className={`font-bold tracking-tight text-grerow-dark font-sans ${
          compact ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
        }`}
      >
        Welcome to Grerow AI
      </h2>

      <p
        className={`mt-2 font-medium text-grerow-green ${
          compact ? "text-sm" : "text-lg sm:text-xl"
        }`}
      >
        Your intelligent financial research companion.
      </p>

      <p
        className={`mt-2 text-grerow-secondary max-w-xl leading-relaxed ${
          compact ? "text-xs mb-6" : "text-sm sm:text-base mb-8"
        }`}
      >
        Ask questions, explore companies and discover financial insights through
        AI-powered research.
      </p>

      {/* Suggested Prompts Section */}
      <div className="w-full text-left">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-grerow-secondary">
            Suggested Research Prompts
          </span>
          <span className="text-[11px] text-grerow-secondary hidden sm:inline-block">
            Click any prompt to launch institutional synthesis
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
          {coreSuggestedPrompts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => handlePromptClick(item.query, item.category)}
                className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-grerow-border hover:border-grerow-green/50 hover:bg-grerow-bg/50 shadow-subtle hover:shadow-card transition-all duration-150 text-left"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-3">
                  <div className="w-8 h-8 rounded-lg bg-grerow-green-subtle text-grerow-green group-hover:bg-grerow-green group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-grerow-dark group-hover:text-grerow-green transition-colors truncate">
                      {item.title}
                    </div>
                    {!compact && (
                      <div className="text-[11px] sm:text-xs text-grerow-secondary truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 w-6 h-6 rounded-full bg-grerow-bg group-hover:bg-grerow-green-subtle text-grerow-secondary group-hover:text-grerow-green flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Safety & Demonstration Mode Tag */}
      <div className="mt-8 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-grerow-border text-[11px] text-grerow-secondary">
        <ShieldCheck className="w-3.5 h-3.5 text-grerow-green shrink-0" />
        <span>
          Demonstration Mode • Verifiable Financial Filings & Institutional Citations
        </span>
      </div>
    </div>
  );
}
