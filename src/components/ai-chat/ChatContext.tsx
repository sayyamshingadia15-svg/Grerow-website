"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import {
  ChatMessage,
  ConversationSession,
  CitationSource,
  ChatApiResponse,
} from "./types";

interface ChatContextValue {
  conversations: ConversationSession[];
  activeConversationId: string;
  activeConversation: ConversationSession | null;
  isLoading: boolean;
  error: string | null;
  isFloatingOpen: boolean;
  isMinimized: boolean;
  activeCitation: CitationSource | null;
  setIsFloatingOpen: (open: boolean) => void;
  setIsMinimized: (min: boolean) => void;
  setActiveCitation: (c: CitationSource | null) => void;
  sendMessage: (content: string, category?: string) => Promise<void>;
  createConversation: (title?: string, category?: string) => string;
  selectConversation: (id: string) => void;
  deleteConversation: (id: string) => void;
  clearActiveConversation: () => void;
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

const LOCAL_STORAGE_KEY = "grerow_ai_conversations_v1";

function generateId(prefix = "conv"): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [conversations, setConversations] = useState<ConversationSession[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFloatingOpen, setIsFloatingOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [activeCitation, setActiveCitation] = useState<CitationSource | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed: ConversationSession[] = JSON.parse(stored);
        if (parsed.length > 0) {
          setConversations(parsed);
          setActiveConversationId(parsed[0].id);
          return;
        }
      }
    } catch (e) {
      console.warn("Failed to load stored conversations:", e);
    }

    // Default initial conversation if empty
    const initialId = generateId();
    const initialConv: ConversationSession = {
      id: initialId,
      title: "New Research Session",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [],
    };
    setConversations([initialConv]);
    setActiveConversationId(initialId);
  }, []);

  // Save to LocalStorage whenever conversations change
  useEffect(() => {
    if (typeof window === "undefined" || conversations.length === 0) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(conversations));
    } catch (e) {
      console.warn("Failed to persist conversations:", e);
    }
  }, [conversations]);

  const activeConversation =
    conversations.find((c) => c.id === activeConversationId) ||
    conversations[0] ||
    null;

  const createConversation = useCallback(
    (title = "New Research Session", category?: string): string => {
      const newId = generateId();
      const newConv: ConversationSession = {
        id: newId,
        title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        messages: [],
        category,
      };

      setConversations((prev) => [newConv, ...prev]);
      setActiveConversationId(newId);
      setError(null);
      return newId;
    },
    []
  );

  const selectConversation = useCallback((id: string) => {
    setActiveConversationId(id);
    setError(null);
  }, []);

  const deleteConversation = useCallback((id: string) => {
    setConversations((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      if (filtered.length === 0) {
        const fallbackId = generateId();
        const fallbackConv: ConversationSession = {
          id: fallbackId,
          title: "New Research Session",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          messages: [],
        };
        setActiveConversationId(fallbackId);
        return [fallbackConv];
      }
      return filtered;
    });

    setActiveConversationId((curr) => {
      if (curr === id) {
        const remaining = conversations.filter((c) => c.id !== id);
        return remaining.length > 0 ? remaining[0].id : "";
      }
      return curr;
    });
  }, [conversations]);

  const clearActiveConversation = useCallback(() => {
    if (!activeConversationId) return;
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversationId
          ? {
              ...c,
              messages: [],
              updatedAt: new Date().toISOString(),
            }
          : c
      )
    );
    setError(null);
  }, [activeConversationId]);

  const sendMessage = useCallback(
    async (content: string, category?: string) => {
      if (!content.trim()) return;

      const userText = content.trim();
      let targetConvId = activeConversationId;

      // If no active conversation exists, create one
      if (!targetConvId) {
        targetConvId = createConversation(
          userText.length > 36 ? `${userText.substring(0, 36)}...` : userText,
          category
        );
      }

      const userMsg: ChatMessage = {
        id: generateId("msg_user"),
        role: "user",
        content: userText,
        timestamp: new Date().toISOString(),
        category,
      };

      // Update state immediately with user message and rename conversation title if it's the first message
      setConversations((prev) =>
        prev.map((c) => {
          if (c.id === targetConvId) {
            const isFirst = c.messages.length === 0;
            return {
              ...c,
              title: isFirst
                ? userText.length > 40
                  ? `${userText.substring(0, 40)}...`
                  : userText
                : c.title,
              category: category || c.category,
              updatedAt: new Date().toISOString(),
              messages: [...c.messages, userMsg],
            };
          }
          return c;
        })
      );

      setIsLoading(true);
      setError(null);

      try {
        const currentConv = conversations.find((c) => c.id === targetConvId);
        const history = (currentConv?.messages || []).map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
          timestamp: m.timestamp,
        }));

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userText,
            conversationId: targetConvId,
            history,
            category,
          }),
        });

        if (!res.ok) {
          throw new Error(`Server returned HTTP ${res.status}`);
        }

        const data = (await res.json()) as ChatApiResponse;

        const aiMsg: ChatMessage = {
          id: generateId("msg_ai"),
          role: "assistant",
          content: data.response,
          timestamp: data.timestamp || new Date().toISOString(),
          structuredData: data.structuredData,
          sources: data.sources,
          isDemo: data.isDemo,
          category,
          finalMessage: data.finalMessage || data.structuredData?.finalMessage,
          finalFollowUps: data.finalFollowUps || data.structuredData?.finalFollowUps,
          verdict: data.verdict || data.structuredData?.verdict,
          comparisonVerdict: data.comparisonVerdict || data.structuredData?.comparisonVerdict,
        };

        setConversations((prev) =>
          prev.map((c) =>
            c.id === targetConvId
              ? {
                  ...c,
                  updatedAt: new Date().toISOString(),
                  messages: [...c.messages, aiMsg],
                }
              : c
          )
        );
      } catch (err: any) {
        console.error("Error communicating with Grerow AI:", err);
        setError(
          err.message ||
            "Unable to connect to Grerow AI research engine. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [activeConversationId, conversations, createConversation]
  );

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeConversationId,
        activeConversation,
        isLoading,
        error,
        isFloatingOpen,
        isMinimized,
        activeCitation,
        setIsFloatingOpen,
        setIsMinimized,
        setActiveCitation,
        sendMessage,
        createConversation,
        selectConversation,
        deleteConversation,
        clearActiveConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
