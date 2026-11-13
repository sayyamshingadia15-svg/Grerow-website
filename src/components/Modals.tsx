"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "./ModalContext";
import { Logo } from "./Logo";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Globe,
  Lock,
  Mail,
  AlertTriangle,
  FileText,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export function GlobalModals() {
  const { activeModal, closeModal, openModal } = useModal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Private Investor");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Equities",
    "Company Fundamentals",
  ]);

  if (!activeModal) return null;

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleStartSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-grerow-dark/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl border border-grerow-border shadow-elevated overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-grerow-border bg-white">
          <Logo size="sm" />
          <button
            onClick={() => {
              setSubmitted(false);
              closeModal();
            }}
            className="p-1.5 rounded-lg text-grerow-secondary hover:text-grerow-dark hover:bg-grerow-bg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body based on activeModal */}
        <div className="overflow-y-auto p-6">
          {/* GET STARTED MODAL */}
          {activeModal === "get-started" && (
            <div>
              {!submitted ? (
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-grerow-green-subtle text-grerow-green text-xs font-medium mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Free Early Research Access</span>
                  </div>
                  <h3 className="text-2xl font-bold text-grerow-dark tracking-tight">
                    Experience Grerow Intelligence
                  </h3>
                  <p className="text-sm text-grerow-secondary mt-1.5">
                    Configure your research workspace and explore institutional-grade company analysis.
                  </p>

                  <form onSubmit={handleStartSubmit} className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                        Work or Personal Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-grerow-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark focus:outline-none focus:ring-2 focus:ring-grerow-green focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                        I primarily research as a
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Private Investor",
                          "Equity Analyst",
                          "Portfolio Manager",
                          "Corporate / M&A",
                        ].map((role) => (
                          <button
                            type="button"
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all ${
                              selectedRole === role
                                ? "border-grerow-green bg-grerow-green-subtle text-grerow-green font-semibold"
                                : "border-grerow-border bg-white text-grerow-secondary hover:border-grerow-dark/30"
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                        Core Research Focus
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Equities",
                          "Company Fundamentals",
                          "Stock Comparisons",
                          "Valuation Multiples",
                          "Earnings Calls",
                          "Options & Risk",
                        ].map((interest) => (
                          <button
                            type="button"
                            key={interest}
                            onClick={() => toggleInterest(interest)}
                            className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                              selectedInterests.includes(interest)
                                ? "bg-grerow-dark text-white font-medium"
                                : "bg-grerow-bg text-grerow-secondary border border-grerow-border hover:bg-grerow-soft/50"
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>Launch Research Preview</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <p className="text-[11px] text-grerow-secondary text-center mt-2">
                        No credit card required. Illustrative public platform preview.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-grerow-green-subtle text-grerow-green flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-grerow-dark">
                    Welcome to Grerow
                  </h4>
                  <p className="text-sm text-grerow-secondary mt-2 max-w-sm mx-auto">
                    A personalized research session has been prepared for{" "}
                    <strong className="text-grerow-dark">{email || "your account"}</strong>.
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-grerow-bg border border-grerow-border text-left">
                    <div className="text-xs font-semibold text-grerow-dark mb-1">
                      Configured Workspace:
                    </div>
                    <div className="text-xs text-grerow-secondary space-y-1">
                      <div>Role: <span className="font-medium text-grerow-dark">{selectedRole}</span></div>
                      <div>Focus: <span className="font-medium text-grerow-dark">{selectedInterests.join(", ")}</span></div>
                      <div>Status: <span className="text-grerow-green font-medium">Ready for exploration</span></div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      href="/research"
                      onClick={() => {
                        setSubmitted(false);
                        closeModal();
                      }}
                      className="w-full py-2.5 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Launch AI Research Workspace</span>
                    </Link>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        closeModal();
                      }}
                      className="w-full py-2.5 rounded-xl bg-grerow-bg hover:bg-grerow-border text-grerow-dark font-medium text-sm transition-colors"
                    >
                      Enter Platform Overview
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SIGN IN MODAL */}
          {activeModal === "sign-in" && (
            <div>
              <h3 className="text-2xl font-bold text-grerow-dark tracking-tight">
                Sign in to Grerow
              </h3>
              <p className="text-sm text-grerow-secondary mt-1">
                Access your saved watchlists, fundamental models, and research notebooks.
              </p>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(true);
                    setTimeout(() => closeModal(), 1200);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-grerow-border hover:bg-grerow-bg font-medium text-sm text-grerow-dark transition-colors flex items-center justify-center gap-2.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <div className="flex items-center gap-3 my-4">
                  <div className="h-px flex-1 bg-grerow-border" />
                  <span className="text-xs text-grerow-secondary uppercase tracking-wider">
                    Or with email
                  </span>
                  <div className="h-px flex-1 bg-grerow-border" />
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                    setTimeout(() => closeModal(), 1200);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="researcher@firm.com"
                      className="w-full px-3.5 py-2.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark focus:outline-none focus:ring-2 focus:ring-grerow-green transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      className="w-full px-3.5 py-2.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark focus:outline-none focus:ring-2 focus:ring-grerow-green transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-grerow-dark hover:bg-grerow-dark-subtle text-white font-medium text-sm transition-colors"
                  >
                    {submitted ? "Authenticating..." : "Sign In"}
                  </button>
                </form>

                <div className="text-center pt-2">
                  <button
                    onClick={() => openModal("get-started")}
                    className="text-xs text-grerow-green font-medium hover:underline"
                  >
                    Don&apos;t have an account yet? Create free account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ABOUT MODAL */}
          {activeModal === "about" && (
            <div className="space-y-4 text-sm text-grerow-secondary leading-relaxed">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-grerow-green-subtle text-grerow-green text-xs font-medium">
                <Globe className="w-3.5 h-3.5" />
                <span>Our Vision & Mission</span>
              </div>
              <h3 className="text-2xl font-bold text-grerow-dark tracking-tight">
                About Grerow
              </h3>
              <p>
                Grerow is an artificial intelligence and financial technology platform founded to transform how modern investors, analysts, and organizations research global financial markets.
              </p>
              <p>
                Financial research has traditionally been trapped between rigid legacy terminals costing tens of thousands of dollars and noisy consumer search engines that hallucinate or lack rigor. Grerow bridges this gap through a structured, verifiable intelligence layer built directly on public financial filings, earnings transcripts, and verifiable market data.
              </p>
              <div className="p-4 rounded-xl bg-grerow-bg border border-grerow-border space-y-2">
                <div className="text-xs font-semibold text-grerow-dark uppercase tracking-wider">
                  Our Core Pillars:
                </div>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-grerow-dark">
                  <li>Transparent analytical methodology with source citations</li>
                  <li>No speculative hype or guaranteed return promises</li>
                  <li>Deep multi-parameter stock comparison</li>
                  <li>Global coverage across major developed and emerging indices</li>
                </ul>
              </div>
              <button
                onClick={closeModal}
                className="w-full py-2.5 rounded-xl bg-grerow-dark text-white font-medium text-sm hover:bg-grerow-dark-subtle transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {/* RISK DISCLOSURE MODAL */}
          {activeModal === "risk-disclosure" && (
            <div className="space-y-4 text-sm text-grerow-secondary leading-relaxed">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Regulatory Notice</span>
              </div>
              <h3 className="text-2xl font-bold text-grerow-dark tracking-tight">
                Risk Disclosure & Advisory Notice
              </h3>
              <p>
                <strong>Grerow is not a registered investment advisor</strong>, financial planner, broker-dealer, or tax consultant. Grerow operates strictly as an informational software and research platform.
              </p>
              <p>
                The materials, data points, charts, ratios, comparisons, and AI-generated outputs available through the Grerow platform are intended exclusively for general informational, educational, and research purposes. None of the content constitutes a solicitation, recommendation, endorsement, or offer to purchase or sell any security, derivative, commodity, or financial instrument.
              </p>
              <p>
                Investing in securities involves significant financial risks, including the potential loss of the entire principal amount invested. Past performance, backtests, or historical ratios are not indicative of future performance. Users are strongly advised to conduct independent due diligence and consult with qualified financial professionals before making investment commitments.
              </p>
              <button
                onClick={closeModal}
                className="w-full py-2.5 rounded-xl bg-grerow-dark text-white font-medium text-sm hover:bg-grerow-dark-subtle transition-colors"
              >
                I Understand
              </button>
            </div>
          )}

          {/* PRIVACY POLICY & TERMS */}
          {(activeModal === "privacy-policy" || activeModal === "terms") && (
            <div className="space-y-4 text-sm text-grerow-secondary leading-relaxed">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-grerow-green-subtle text-grerow-green text-xs font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Legal Standards</span>
              </div>
              <h3 className="text-2xl font-bold text-grerow-dark tracking-tight">
                {activeModal === "privacy-policy" ? "Privacy Policy" : "Terms & Conditions"}
              </h3>
              <p>
                Grerow is committed to protecting the privacy, confidentiality, and security of user data. We do not sell, rent, or monetize your research queries, watchlists, or portfolio information to third-party advertisers or trading desks.
              </p>
              <p>
                All data transmission is encrypted end-to-end using TLS 1.3 standards. Illustrative financial metrics are processed in sandboxed environments without sharing personal identifying information.
              </p>
              <p className="text-xs text-grerow-secondary">
                Last reviewed: 2026. For questions regarding compliance, contact privacy@grerow.com.
              </p>
              <button
                onClick={closeModal}
                className="w-full py-2.5 rounded-xl bg-grerow-dark text-white font-medium text-sm hover:bg-grerow-dark-subtle transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {/* CONTACT MODAL */}
          {activeModal === "contact" && (
            <div>
              <h3 className="text-2xl font-bold text-grerow-dark tracking-tight">
                Contact Grerow
              </h3>
              <p className="text-sm text-grerow-secondary mt-1">
                Reach out to our global research intelligence and institutional partnership team.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  setTimeout(() => closeModal(), 1500);
                }}
                className="mt-5 space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark focus:outline-none focus:ring-2 focus:ring-grerow-green transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@organization.com"
                    className="w-full px-3.5 py-2.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark focus:outline-none focus:ring-2 focus:ring-grerow-green transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-grerow-dark uppercase tracking-wider mb-1.5">
                    Message or Inquiry
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your team's research needs or questions..."
                    className="w-full px-3.5 py-2.5 bg-grerow-bg border border-grerow-border rounded-xl text-sm text-grerow-dark focus:outline-none focus:ring-2 focus:ring-grerow-green transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white font-medium text-sm transition-colors"
                >
                  {submitted ? "Message Sent!" : "Submit Inquiry"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
