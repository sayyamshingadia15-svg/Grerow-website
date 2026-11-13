"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { useModal } from "./ModalContext";
import { useChat } from "./ai-chat/ChatContext";
import { ShieldAlert, Globe, ArrowUp, Sparkles } from "lucide-react";

export function Footer() {
  const { openModal } = useModal();
  const { setIsFloatingOpen, setIsMinimized } = useChat();
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="bg-white border-t border-grerow-border pt-16 pb-12 text-grerow-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-14 border-b border-grerow-border">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-grerow-secondary max-w-sm leading-relaxed">
              Grerow is an AI-powered financial research and intelligence platform. We help users research stocks, analyse companies, compare opportunities, and access structured financial insights.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-grerow-dark font-medium">
              <Globe className="w-4 h-4 text-grerow-green" />
              <span>Serving institutional & private investors globally</span>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-dark">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => openModal("about")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  About Grerow
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("about")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Our Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("contact")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-dark">
              Platform
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 font-semibold text-grerow-green hover:underline text-left"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Grerow AI Workspace</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsFloatingOpen(true);
                    setIsMinimized(false);
                  }}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Interactive Chatbot
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("stock-intelligence")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Stock Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("stock-intelligence")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Multi-Stock Comparison
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("features")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Market Intelligence
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-dark">
              Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo("insights")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("contact")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Help Centre
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("about")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-grerow-dark">
              Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => openModal("privacy-policy")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("terms")}
                  className="hover:text-grerow-green transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("risk-disclosure")}
                  className="hover:text-grerow-green transition-colors text-left font-semibold text-grerow-dark"
                >
                  Risk Disclosure
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Clear Regulatory Financial Disclaimer */}
        <div className="py-8 border-b border-grerow-border">
          <div className="p-4 sm:p-5 rounded-2xl bg-grerow-bg border border-grerow-border text-xs leading-relaxed space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-grerow-dark uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-grerow-green" />
              <span>Financial Services & Regulatory Research Notice</span>
            </div>
            <p className="text-grerow-secondary">
              Grerow is an artificial intelligence research platform and financial technology software provider. Grerow is not a registered investment advisor, broker-dealer, or registered financial planner, and does not provide guaranteed investment returns, personalised financial advice, trade recommendations, or portfolio management services.
            </p>
            <p className="text-grerow-secondary">
              All financial metrics, ratios, valuations, charts, company breakdowns, and AI-synthesised insights provided across the platform are strictly for informational and research purposes only. Historical financial performance, statements, and ratios are not indicative of future market results. Users should conduct their own independent due diligence and seek guidance from certified financial advisors before executing investment decisions.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-grerow-secondary">
          <p>© 2026 Grerow. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openModal("risk-disclosure")}
              className="hover:text-grerow-dark transition-colors"
            >
              Risk Statement
            </button>
            <span>•</span>
            <button
              onClick={() => openModal("privacy-policy")}
              className="hover:text-grerow-dark transition-colors"
            >
              Security
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-grerow-dark font-medium hover:text-grerow-green transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
