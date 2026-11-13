"use client";

import React from "react";
import { useChat } from "./ChatContext";
import { X, FileText, CheckCircle2, ShieldCheck, ExternalLink, Building2 } from "lucide-react";

export function SourceViewerModal() {
  const { activeCitation, setActiveCitation } = useChat();

  if (!activeCitation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-grerow-dark/50 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl border border-grerow-border shadow-elevated overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-grerow-border flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-grerow-green-subtle text-grerow-green flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-grerow-dark">
                Source Lineage & Verification
              </div>
              <div className="text-[11px] text-grerow-secondary">
                Verifiable Public Regulatory Filing
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveCitation(null)}
            className="p-1.5 rounded-lg text-grerow-secondary hover:text-grerow-dark hover:bg-grerow-bg transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-grerow-secondary mb-1">
              Document Reference
            </div>
            <h4 className="text-sm font-bold text-grerow-dark">
              {activeCitation.title}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
              <span className="text-[10px] text-grerow-secondary block uppercase">
                Regulatory Document
              </span>
              <span className="font-semibold text-grerow-dark mt-0.5 block">
                {activeCitation.document}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border">
              <span className="text-[10px] text-grerow-secondary block uppercase">
                Reporting Source
              </span>
              <span className="font-semibold text-grerow-dark mt-0.5 block">
                {activeCitation.source}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-grerow-bg border border-grerow-border text-xs">
            <span className="text-[10px] text-grerow-secondary block uppercase">
              Filing Section & Disclosure
            </span>
            <span className="font-medium text-grerow-dark mt-0.5 block">
              {activeCitation.section}
            </span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-grerow-green-subtle border border-grerow-soft text-xs text-grerow-green font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Cross-referenced against SEC EDGAR audited public disclosures.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-grerow-border bg-grerow-bg/50 flex items-center justify-between">
          <span className="text-[11px] text-grerow-secondary">
            Grerow Financial Integrity Protocol
          </span>
          <button
            onClick={() => setActiveCitation(null)}
            className="px-3.5 py-1.5 rounded-lg bg-grerow-dark text-white text-xs font-medium hover:bg-grerow-dark-subtle transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
