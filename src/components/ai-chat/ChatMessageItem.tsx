"use client";

import React from "react";
import { ChatMessage } from "./types";
import { StructuredResponseView } from "./StructuredResponseView";
import { Sparkles, User, Clock } from "lucide-react";

interface ChatMessageItemProps {
  message: ChatMessage;
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.role === "user";

  const formattedTime = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  if (isUser) {
    return (
      <div className="flex items-start justify-end gap-2.5 sm:gap-3 max-w-3xl ml-auto animate-fade-in">
        <div className="flex flex-col items-end">
          <div className="bg-grerow-dark text-white rounded-2xl rounded-tr-sm px-4 sm:px-5 py-3 shadow-subtle max-w-xl text-left">
            <p className="text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          </div>
          {formattedTime && (
            <span className="text-[10px] text-grerow-muted mt-1 px-1 flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              <span>{formattedTime}</span>
            </span>
          )}
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-grerow-soft flex items-center justify-center shrink-0 text-[11px] font-bold text-grerow-dark mt-1 shadow-xs">
          <User className="w-4 h-4 text-grerow-dark" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2.5 sm:gap-3.5 max-w-4xl animate-fade-in">
      {/* Grerow AI Avatar */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-grerow-green text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
        <Sparkles className="w-4 h-4" />
      </div>

      {/* AI Response Card Container */}
      <div className="flex-1 bg-white rounded-2xl sm:rounded-3xl border border-grerow-border p-4 sm:p-6 shadow-subtle space-y-3">
        {/* Grerow AI Brand Header */}
        <div className="flex items-center justify-between pb-2 border-b border-grerow-border/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-grerow-dark">
              Grerow AI
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-grerow-green-subtle text-grerow-green border border-grerow-soft">
              Financial Research
            </span>
          </div>
          {formattedTime && (
            <span className="text-[10px] text-grerow-secondary flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              <span>{formattedTime}</span>
            </span>
          )}
        </div>

        {/* Structured Content or Raw Text */}
        <StructuredResponseView
          data={message.structuredData}
          rawContent={message.content}
          sources={message.sources}
          isDemo={message.isDemo ?? true}
          finalMessage={message.finalMessage || message.structuredData?.finalMessage}
          finalFollowUps={message.finalFollowUps || message.structuredData?.finalFollowUps}
          verdict={message.verdict || message.structuredData?.verdict}
          comparisonVerdict={message.comparisonVerdict || message.structuredData?.comparisonVerdict}
        />
      </div>
    </div>
  );
}
