"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "./ChatContext";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInput } from "./ChatInput";
import { SourceViewerModal } from "./SourceViewerModal";
import { Logo } from "../Logo";
import {
  Sparkles,
  X,
  Minus,
  Maximize2,
  PlusCircle,
  Trash2,
  Bot,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export function FloatingChatbot() {
  const pathname = usePathname();
  const {
    isFloatingOpen,
    setIsFloatingOpen,
    isMinimized,
    setIsMinimized,
    createConversation,
    clearActiveConversation,
    activeConversation,
  } = useChat();

  const [hasUnread, setHasUnread] = useState(false);

  // Do not render floating widget if user is already on the dedicated full-page research interface
  if (pathname === "/research") {
    return null;
  }

  return (
    <>
      {/* 1. FLOATING ACTION BUTTON (Bottom-Right Corner) */}
      {!isFloatingOpen && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <button
            onClick={() => {
              setIsFloatingOpen(true);
              setIsMinimized(false);
              setHasUnread(false);
            }}
            className="group relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-grerow-dark hover:bg-grerow-dark-subtle text-white shadow-elevated border border-grerow-dark transition-all duration-200 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-grerow-green focus:ring-offset-2"
            aria-label="Open Grerow AI Financial Research Chatbot"
          >
            {/* Grerow Green Pulse Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-grerow-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-grerow-green" />
            </span>

            {/* Icon + Label */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-grerow-green group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-semibold tracking-tight font-sans">
                Grerow AI
              </span>
            </div>

            {/* Subtle Tag */}
            <span className="hidden sm:inline-block text-[11px] font-medium text-grerow-soft bg-grerow-dark-subtle px-2 py-0.5 rounded-full border border-white/10">
              Research
            </span>
          </button>
        </div>
      )}

      {/* 2. FLOATING CHAT WINDOW MODAL */}
      {isFloatingOpen && (
        <div
          className={`fixed z-50 transition-all duration-200 ease-out flex flex-col bg-white border border-grerow-border shadow-elevated overflow-hidden ${
            isMinimized
              ? "bottom-6 right-6 w-72 sm:w-80 h-14 rounded-2xl"
              : "bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[460px] md:w-[500px] h-full sm:h-[650px] sm:max-h-[85vh] rounded-none sm:rounded-3xl"
          }`}
        >
          {/* Top Bar Header */}
          <div className="px-4 sm:px-5 py-3 border-b border-grerow-border bg-white flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-grerow-green text-white flex items-center justify-center shadow-xs shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-grerow-dark tracking-tight truncate">
                    Grerow AI
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-grerow-green-subtle text-grerow-green border border-grerow-soft shrink-0">
                    v2.4
                  </span>
                </div>
                {!isMinimized && (
                  <div className="text-[11px] text-grerow-secondary flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-grerow-green shrink-0" />
                    <span className="truncate">Financial Research Assistant</span>
                  </div>
                )}
              </div>
            </div>

            {/* Window Action Controls */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Full Page Link */}
              <Link
                href="/research"
                onClick={() => setIsFloatingOpen(false)}
                className="p-1.5 rounded-lg text-grerow-secondary hover:text-grerow-green hover:bg-grerow-bg transition"
                title="Open Dedicated Full-Page Research"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </Link>

              {/* Minimize / Restore */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-grerow-secondary hover:text-grerow-dark hover:bg-grerow-bg transition"
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsFloatingOpen(false)}
                className="p-1.5 rounded-lg text-grerow-secondary hover:text-grerow-dark hover:bg-grerow-bg transition"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Conversation Body & Input (when not minimized) */}
          {!isMinimized && (
            <>
              {/* Messages Scroll Area */}
              <ChatMessageList compact />

              {/* Input Area */}
              <ChatInput compact />
            </>
          )}
        </div>
      )}

      {/* Global Citation Inspector Modal */}
      <SourceViewerModal />
    </>
  );
}
