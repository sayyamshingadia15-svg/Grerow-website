"use client";

import React, { useEffect, useRef } from "react";
import { useChat } from "./ChatContext";
import { ChatMessageItem } from "./ChatMessageItem";
import { WelcomeScreen } from "./WelcomeScreen";
import { Sparkles, AlertCircle, RefreshCw } from "lucide-react";

interface ChatMessageListProps {
  compact?: boolean;
}

export function ChatMessageList({ compact = false }: ChatMessageListProps) {
  const { activeConversation, isLoading, error, sendMessage } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  const messages = activeConversation?.messages || [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto">
        <WelcomeScreen compact={compact} />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      {messages.map((message) => (
        <ChatMessageItem key={message.id} message={message} />
      ))}

      {/* Typing / Loading indicator */}
      {isLoading && (
        <div className="flex items-start gap-2.5 sm:gap-3.5 max-w-2xl animate-fade-in">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-grerow-green text-white flex items-center justify-center shrink-0 shadow-sm mt-1 animate-pulse">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="bg-white rounded-2xl border border-grerow-border p-4 shadow-subtle flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-grerow-green animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-grerow-green animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-grerow-green animate-bounce" />
            </div>
            <div className="text-xs text-grerow-secondary font-medium">
              <span>Synthesizing SEC filings, balance sheets, and market ratios...</span>
            </div>
          </div>
        </div>
      )}

      {/* Error State Banner */}
      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{error}</span>
          </div>
          <button
            onClick={() => {
              const lastUser = [...messages].reverse().find((m) => m.role === "user");
              if (lastUser) sendMessage(lastUser.content);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-red-200 text-[11px] font-medium text-red-700 hover:bg-red-50 transition"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Retry</span>
          </button>
        </div>
      )}

      <div ref={bottomRef} className="h-2" />
    </div>
  );
}
