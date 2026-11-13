"use client";

import React, { useState } from "react";
import { useChat } from "./ChatContext";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInput } from "./ChatInput";
import { SourceViewerModal } from "./SourceViewerModal";
import { RESEARCH_CATEGORIES } from "./types";
import { Logo } from "../Logo";
import Link from "next/link";
import {
  Sparkles,
  Plus,
  Trash2,
  MessageSquare,
  ArrowLeft,
  ShieldCheck,
  FileText,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Info,
  CheckCircle2,
} from "lucide-react";

export function FullPageResearch() {
  const {
    conversations,
    activeConversationId,
    activeConversation,
    selectConversation,
    createConversation,
    deleteConversation,
    clearActiveConversation,
    sendMessage,
    setActiveCitation,
  } = useChat();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  // Collect all sources in the active conversation
  const allSourcesInConversation = (activeConversation?.messages || [])
    .filter((m) => m.sources && m.sources.length > 0)
    .flatMap((m) => m.sources || []);

  const handleCategoryClick = (catPrompt: string, catId: string) => {
    setMobileSidebarOpen(false);
    sendMessage(catPrompt, catId);
  };

  return (
    <div className="flex flex-col h-screen bg-grerow-bg text-grerow-dark overflow-hidden font-sans">
      {/* 1. TOP NAVIGATION BAR */}
      <header className="h-16 border-b border-grerow-border bg-white px-4 sm:px-6 flex items-center justify-between gap-3 shrink-0 z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden p-2 rounded-lg text-grerow-dark hover:bg-grerow-bg transition"
            aria-label="Toggle Conversations Sidebar"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo & Breadcrumb */}
          <Link href="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </Link>

          <span className="text-grerow-border hidden sm:inline-block">/</span>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-grerow-dark tracking-tight">
              AI Financial Research
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-grerow-green-subtle text-grerow-green border border-grerow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-grerow-green" />
              <span>v2.4 Engine</span>
            </span>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Demonstration Mode Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-grerow-bg border border-grerow-border text-[11px] font-medium text-grerow-secondary">
            <ShieldCheck className="w-3.5 h-3.5 text-grerow-green" />
            <span>Demonstration Mode • Illustrative Synthesis</span>
          </div>

          {/* Right Panel Toggle on Desktop */}
          <button
            onClick={() => setRightPanelOpen(!rightPanelOpen)}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-grerow-border bg-white hover:bg-grerow-bg text-xs font-medium text-grerow-dark transition"
          >
            <FileText className="w-3.5 h-3.5 text-grerow-secondary" />
            <span>{rightPanelOpen ? "Hide Sources" : "Show Sources"}</span>
          </button>

          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-grerow-border bg-white hover:bg-grerow-bg text-xs font-medium text-grerow-dark transition"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-grerow-secondary" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE CONTAINER */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* LEFT SIDEBAR: Conversation Sessions & Research Categories */}
        <aside
          className={`absolute md:relative z-30 inset-y-0 left-0 w-72 sm:w-80 bg-white border-r border-grerow-border flex flex-col transition-transform duration-200 ease-in-out md:translate-x-0 ${
            mobileSidebarOpen ? "translate-x-0 shadow-elevated" : "-translate-x-full"
          }`}
        >
          {/* New Research Button */}
          <div className="p-3.5 border-b border-grerow-border">
            <button
              onClick={() => {
                createConversation();
                setMobileSidebarOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-grerow-green hover:bg-grerow-green-hover text-white text-xs sm:text-sm font-semibold shadow-xs transition-all duration-150 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>New Research Session</span>
            </button>
          </div>

          {/* Conversations History List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1">
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-grerow-secondary">
              Research Sessions ({conversations.length})
            </div>

            {conversations.map((conv) => {
              const isActive = conv.id === activeConversationId;
              return (
                <div
                  key={conv.id}
                  className={`group relative flex items-center justify-between p-2.5 rounded-xl text-xs transition ${
                    isActive
                      ? "bg-grerow-bg text-grerow-dark font-semibold border border-grerow-border shadow-xs"
                      : "text-grerow-secondary hover:text-grerow-dark hover:bg-grerow-bg/60"
                  }`}
                >
                  <button
                    onClick={() => {
                      selectConversation(conv.id);
                      setMobileSidebarOpen(false);
                    }}
                    className="flex items-center gap-2.5 min-w-0 flex-1 text-left"
                  >
                    <MessageSquare
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? "text-grerow-green" : "text-grerow-secondary"
                      }`}
                    />
                    <span className="truncate">{conv.title}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteConversation(conv.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white text-grerow-secondary hover:text-red-600 transition"
                    title="Delete session"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Research Categories Nav */}
          <div className="p-3 border-t border-grerow-border bg-grerow-bg/40">
            <div className="px-1 text-[10px] font-bold uppercase tracking-wider text-grerow-secondary mb-2">
              Capabilities
            </div>
            <div className="space-y-1">
              {RESEARCH_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.examplePrompt, cat.id)}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-grerow-dark hover:bg-white transition text-left group"
                >
                  <span className="font-medium group-hover:text-grerow-green transition">
                    {cat.name}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-grerow-secondary group-hover:text-grerow-green group-hover:translate-x-0.5 transition" />
                </button>
              ))}
            </div>
          </div>

          {/* Clear Current Chat Session */}
          <div className="p-3 border-t border-grerow-border bg-white flex items-center justify-between text-xs text-grerow-secondary">
            <span>Session Management</span>
            <button
              onClick={clearActiveConversation}
              className="hover:text-red-600 transition flex items-center gap-1 font-medium"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear Chat</span>
            </button>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="md:hidden fixed inset-0 z-20 bg-grerow-dark/40 backdrop-blur-xs"
          />
        )}

        {/* CENTER: Main Research Chat Workspace */}
        <main className="flex-1 flex flex-col bg-grerow-bg overflow-hidden">
          {/* Active Session Title Sub-header */}
          <div className="px-4 sm:px-6 py-2.5 bg-white border-b border-grerow-border flex items-center justify-between text-xs text-grerow-secondary shrink-0">
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-grerow-dark truncate">
                {activeConversation?.title || "New Research Session"}
              </span>
              <span>•</span>
              <span>{activeConversation?.messages.length || 0} messages</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline-block text-[11px]">
                Model: <strong>Demonstration Engine v2.4</strong>
              </span>
            </div>
          </div>

          {/* Conversation Messages */}
          <ChatMessageList />

          {/* Chat Input Bar */}
          <ChatInput />
        </main>

        {/* RIGHT PANEL: Sources, Lineage & Methodology (Collapsible on wide screens) */}
        {rightPanelOpen && (
          <aside className="hidden xl:flex w-80 bg-white border-l border-grerow-border flex-col overflow-y-auto p-4 shrink-0">
            <div className="pb-3 border-b border-grerow-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-grerow-green" />
                <span className="text-xs font-bold uppercase tracking-wider text-grerow-dark">
                  Research Dossier
                </span>
              </div>
              <span className="text-[10px] text-grerow-secondary font-medium">
                Lineage
              </span>
            </div>

            {/* Citations List */}
            <div className="py-4 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-grerow-secondary">
                Referenced Public Filings ({allSourcesInConversation.length})
              </div>

              {allSourcesInConversation.length === 0 ? (
                <div className="p-4 rounded-xl bg-grerow-bg border border-grerow-border text-center text-xs text-grerow-secondary">
                  <p>No filings cited yet.</p>
                  <p className="text-[11px] mt-1">
                    Ask a research question to examine audited 10-K, 10-Q, and consensus data.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {allSourcesInConversation.map((src, i) => (
                    <button
                      key={`${src.id}-${i}`}
                      onClick={() => setActiveCitation(src)}
                      className="w-full p-2.5 rounded-xl bg-grerow-bg/60 border border-grerow-border hover:border-grerow-green/60 text-left transition group"
                    >
                      <div className="text-xs font-semibold text-grerow-dark group-hover:text-grerow-green transition truncate">
                        {src.title}
                      </div>
                      <div className="text-[11px] text-grerow-secondary truncate mt-0.5">
                        {src.document} • {src.section}
                      </div>
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-grerow-green font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Audited SEC Source</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Financial Safety Guidelines */}
            <div className="mt-auto pt-4 border-t border-grerow-border space-y-3">
              <div className="p-3 rounded-xl bg-grerow-green-subtle/50 border border-grerow-soft text-xs space-y-1.5">
                <div className="font-semibold text-grerow-dark flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-grerow-green" />
                  <span>Institutional Guardrails</span>
                </div>
                <p className="text-[11px] text-grerow-secondary leading-normal">
                  Grerow AI synthesizes verifiable regulatory filings and highlights uncertainties, forecast risks, and sensitivity boundaries.
                </p>
              </div>

              <div className="text-[10px] text-grerow-secondary leading-normal px-1">
                Informational & educational synthesis only. Not personalized financial advice.
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Global Citation Inspector Modal */}
      <SourceViewerModal />
    </div>
  );
}
