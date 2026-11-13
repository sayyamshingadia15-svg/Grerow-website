"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "./ModalContext";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCta() {
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background ambient financial pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(#E7ECE8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-grerow-bg border border-grerow-border shadow-card text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-grerow-border text-xs font-semibold text-grerow-green uppercase tracking-wider mb-6 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-grerow-green" />
            <span>INSTITUTIONAL RESEARCH ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-grerow-dark font-sans leading-tight">
            A smarter perspective on investing starts here.
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-grerow-secondary max-w-2xl mx-auto leading-relaxed">
            Discover a new approach to financial research with Grerow.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/research"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white font-medium text-base shadow-card transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Launch AI Research Tool</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => openModal("get-started")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-grerow-bg text-grerow-dark border border-grerow-border font-medium text-base shadow-subtle transition-all active:scale-[0.98]"
            >
              <span>Get Started Free</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-grerow-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-grerow-secondary">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-grerow-green" />
              <span>Instant preview workspace</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-grerow-green" />
              <span>Direct SEC 10-K/10-Q citations</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-grerow-green" />
              <span>No credit card required</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
