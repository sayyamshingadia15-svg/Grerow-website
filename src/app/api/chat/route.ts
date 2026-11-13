import { NextRequest, NextResponse } from "next/server";
import { getLLMProvider } from "@/lib/ai/llm-orchestrator";
import { ChatApiRequest } from "@/lib/ai/types";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatApiRequest;

    if (!body || typeof body.message !== "string" || !body.message.trim()) {
      return NextResponse.json(
        { error: "Invalid request: 'message' string is required." },
        { status: 400 }
      );
    }

    const provider = getLLMProvider();
    const result = await provider.generateResponse({
      message: body.message.trim(),
      conversationId: body.conversationId,
      history: body.history || [],
      category: body.category,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error in Grerow AI Chatbot pipeline.",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
