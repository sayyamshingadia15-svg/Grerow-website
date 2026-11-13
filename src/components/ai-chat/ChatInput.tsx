"use client";

import React, { useState, useRef, useEffect } from "react";
import { useChat } from "./ChatContext";
import { Send, Sparkles, Trash2, PlusCircle, ArrowUp } from "lucide-react";

interface ChatInputProps {
  compact?: boolean;
}

export function ChatInput({ compact = false }: ChatInputProps) {
  const { sendMessage, isLoading, clearActiveConversation, createConversation } = useChat();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput("");
    sendMessage(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const quickChips = [
    "Compare Apple and Microsoft",
    "NVIDIA fundamentals & margins",
    "Explain options Greeks",
    "Latest market developments",
  ];

  return (
    <div className="border-t border-grerow-border bg-white p-3 sm:p-4">
      {/* Quick Suggestion Chips (shown when compact or wide) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-[11px] no-scrollbar">
        <span className="text-grerow-secondary text-[10px] font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-grerow-green" />
          <span>Quick:</span>
        </span>
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => sendMessage(chip)}
            disabled={isLoading}
            className="px-2.5 py-1 rounded-full bg-grerow-bg hover:bg-grerow-green-subtle text-grerow-secondary hover:text-grerow-green border border-grerow-border hover:border-grerow-green/40 whitespace-nowrap transition-colors disabled:opacity-50"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Field & Submit Button */}
      <form onSubmit={handleSubmit} className="relative flex items-center gap-2 mt-1">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder={
              compact
                ? "Ask Grerow AI (e.g. Compare Apple and Microsoft)..."
                : "Ask any financial research question (e.g. 'Compare Apple and Microsoft fundamentals', 'Explain options and futures')..."
            }
            className="w-full pl-4 pr-10 py-3 bg-grerow-bg border border-grerow-border rounded-xl text-xs sm:text-sm text-grerow-dark placeholder-grerow-secondary/70 focus:outline-none focus:ring-2 focus:ring-grerow-green focus:border-transparent transition disabled:bg-grerow-bg/50"
          />

          {input.length > 0 && (
            <button
              type="button"
              onClick={() => setInput("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-grerow-secondary hover:text-grerow-dark text-xs"
            >
              ×
            </button>
          )}
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-3 sm:px-4 sm:py-3 rounded-xl bg-grerow-green hover:bg-grerow-green-hover disabled:bg-grerow-border text-white text-xs font-medium transition-all shadow-sm active:scale-95 disabled:active:scale-100 flex items-center justify-center shrink-0"
          aria-label="Send message"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </form>

      {/* Utility Bottom Bar */}
      <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-grerow-secondary">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => createConversation()}
            className="hover:text-grerow-green transition flex items-center gap-1"
            title="Start a new conversation"
          >
            <PlusCircle className="w-3 h-3" />
            <span>New Chat</span>
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={clearActiveConversation}
            className="hover:text-red-600 transition flex items-center gap-1"
            title="Clear messages in current chat"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        <span className="hidden sm:inline-block">
          Press <kbd className="px-1 py-0.5 rounded bg-grerow-bg border border-grerow-border text-[10px]">Enter</kbd> to send
        </span>
      </div>
    </div>
  );
}
