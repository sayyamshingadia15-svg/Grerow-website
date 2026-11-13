"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { useModal } from "./ModalContext";
import {
  Menu,
  X,
  ChevronDown,
  Bot,
  BarChart3,
  GitCompare,
  TrendingUp,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const { openModal } = useModal();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setPlatformDropdownOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
        isScrolled
          ? "border-b border-grerow-border shadow-subtle/40 backdrop-blur-md bg-white/95"
          : "border-b border-grerow-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LEFT: Grerow Logo & Wordmark */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-grerow-green rounded-lg text-left"
              aria-label="Grerow Home"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* CENTRE: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformDropdownOpen(true)}
              onMouseLeave={() => setPlatformDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection("features")}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-grerow-dark hover:text-grerow-green transition-colors rounded-lg"
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    platformDropdownOpen ? "rotate-180 text-grerow-green" : "text-grerow-secondary"
                  }`}
                />
              </button>

              {/* Platform Dropdown Menu */}
              {platformDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-3 bg-white rounded-xl border border-grerow-border shadow-card animate-fade-in z-50">
                  <div className="space-y-1">
                    <Link
                      href="/research"
                      onClick={() => setPlatformDropdownOpen(false)}
                      className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-grerow-bg text-left transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-grerow-green-subtle text-grerow-green flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-grerow-dark group-hover:text-grerow-green transition-colors">
                            AI Research Companion
                          </span>
                          <span className="px-1 py-0.2 text-[9px] font-bold bg-grerow-green text-white rounded">
                            ACTIVE
                          </span>
                        </div>
                        <div className="text-[11px] text-grerow-secondary leading-tight mt-0.5">
                          Turn complex queries into verifiable insights
                        </div>
                      </div>
                    </Link>

                    <button
                      onClick={() => scrollToSection("stock-intelligence")}
                      className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-grerow-bg text-left transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-grerow-green-subtle text-grerow-green flex items-center justify-center shrink-0 mt-0.5">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-grerow-dark group-hover:text-grerow-green transition-colors">
                          Stock Analysis & Fundamentals
                        </div>
                        <div className="text-[11px] text-grerow-secondary leading-tight mt-0.5">
                          Interactive statements, margins, and ratios
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection("stock-intelligence")}
                      className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-grerow-bg text-left transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-grerow-green-subtle text-grerow-green flex items-center justify-center shrink-0 mt-0.5">
                        <GitCompare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-grerow-dark group-hover:text-grerow-green transition-colors">
                          Multi-Stock Comparison
                        </div>
                        <div className="text-[11px] text-grerow-secondary leading-tight mt-0.5">
                          Side-by-side growth, valuation & risk analysis
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection("features")}
                      className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-grerow-bg text-left transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-grerow-green-subtle text-grerow-green flex items-center justify-center shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-grerow-dark group-hover:text-grerow-green transition-colors">
                          Market Intelligence
                        </div>
                        <div className="text-[11px] text-grerow-secondary leading-tight mt-0.5">
                          Macro developments and investment themes
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Link to Grerow AI Research Workspace */}
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-grerow-dark hover:text-grerow-green transition-colors rounded-lg group"
            >
              <Sparkles className="w-3.5 h-3.5 text-grerow-green" />
              <span>Grerow AI</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-grerow-green-subtle text-grerow-green border border-grerow-soft">
                RESEARCH
              </span>
            </Link>

            <button
              onClick={() => scrollToSection("solutions")}
              className="px-3 py-2 text-sm font-medium text-grerow-dark hover:text-grerow-green transition-colors rounded-lg"
            >
              Solutions
            </button>

            <button
              onClick={() => openModal("about")}
              className="px-3 py-2 text-sm font-medium text-grerow-dark hover:text-grerow-green transition-colors rounded-lg"
            >
              About Us
            </button>

            <button
              onClick={() => scrollToSection("insights")}
              className="px-3 py-2 text-sm font-medium text-grerow-dark hover:text-grerow-green transition-colors rounded-lg"
            >
              Insights
            </button>
          </nav>

          {/* RIGHT: Desktop Auth & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openModal("sign-in")}
              className="px-4 py-2 text-sm font-medium text-grerow-dark hover:text-grerow-green transition-colors rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={() => openModal("get-started")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-grerow-green hover:bg-grerow-green-hover rounded-xl shadow-sm transition-all duration-150 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-grerow-dark hover:bg-grerow-bg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-grerow-border bg-white px-4 pt-2 pb-6 space-y-3 animate-fade-in shadow-card">
          <div className="space-y-1">
            <Link
              href="/research"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-grerow-green bg-grerow-green-subtle/70 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-grerow-green" />
                <span>Grerow AI Research</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-grerow-green text-white">
                ACTIVE
              </span>
            </Link>

            <button
              onClick={() => scrollToSection("features")}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-grerow-dark hover:bg-grerow-bg rounded-lg"
            >
              Platform Overview
            </button>
            <button
              onClick={() => scrollToSection("ai-research")}
              className="w-full text-left pl-6 pr-3 py-2 text-sm text-grerow-secondary hover:text-grerow-green hover:bg-grerow-bg rounded-lg"
            >
              • AI Research Companion
            </button>
            <button
              onClick={() => scrollToSection("stock-intelligence")}
              className="w-full text-left pl-6 pr-3 py-2 text-sm text-grerow-secondary hover:text-grerow-green hover:bg-grerow-bg rounded-lg"
            >
              • Stock Intelligence Dashboard
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-grerow-dark hover:bg-grerow-bg rounded-lg"
            >
              Solutions
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal("about");
              }}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-grerow-dark hover:bg-grerow-bg rounded-lg"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("insights")}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-grerow-dark hover:bg-grerow-bg rounded-lg"
            >
              Insights
            </button>
          </div>

          <div className="pt-3 border-t border-grerow-border flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal("sign-in");
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-grerow-dark bg-grerow-bg hover:bg-grerow-border rounded-xl transition"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal("get-started")}
              }
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-grerow-green hover:bg-grerow-green-hover rounded-xl shadow-sm transition"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
