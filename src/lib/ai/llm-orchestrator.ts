import {
  ChatApiRequest,
  ChatApiResponse,
  StructuredFinancialData,
  CitationSource,
} from "./types";
import {
  synthesizeFinancialResearch,
  FINANCIAL_DISCLAIMER,
} from "./financial-knowledge";

export interface LLMProvider {
  name: string;
  generateResponse(request: ChatApiRequest): Promise<ChatApiResponse>;
}

/**
 * Builds the standardized Markdown representation of the structured financial response.
 */
export function formatStructuredMarkdown(
  data: StructuredFinancialData,
  sources: CitationSource[]
): string {
  const parts: string[] = [];

  if (data.verdict) {
    parts.push(`### VERDICT: ${data.verdict.status}\n\n**${data.verdict.headline}**\n\n${data.verdict.explanation}\n`);
  }

  if (data.comparisonVerdict) {
    parts.push(`### COMPARISON VERDICT: ${data.comparisonVerdict.winner}\n\n**${data.comparisonVerdict.headline}**\n\n${data.comparisonVerdict.conciseAnswer}\n`);
  }

  parts.push(`### COMPANY OVERVIEW\n\n${data.companyOverview}\n`);
  parts.push(`### FINANCIAL PERFORMANCE\n\n${data.financialPerformance}\n`);
  parts.push(`### VALUATION\n\n${data.valuation}\n`);
  parts.push(`### GROWTH ANALYSIS\n\n${data.growthAnalysis}\n`);
  parts.push(`### RISK ANALYSIS\n\n${data.riskAnalysis}\n`);

  if (sources && sources.length > 0) {
    const sourceList = sources
      .map((s, idx) => `${idx + 1}. **${s.title}** — ${s.document} (${s.section}) [${s.source}]`)
      .join("\n");
    parts.push(`### SOURCES\n\n${sourceList}\n`);
  }

  parts.push(`### RESEARCH SUMMARY\n\n${data.researchSummary}\n`);

  const finalMsg =
    data.finalMessage ||
    "📌 **Grerow AI Final Note & Next Steps:** Would you like to drill deeper into specific financial metrics, compare alternative assets, or test valuation sensitivities? Simply ask your next research question below!";
  parts.push(`### FINAL MESSAGE\n\n${finalMsg}`);

  return parts.join("\n");
}

/**
 * Institutional Demonstration Provider.
 * Provides realistic, highly structured financial research without hallucinating live data.
 * Clearly flags demonstration mode and sources.
 */
class DemoFinancialProvider implements LLMProvider {
  name = "demonstration-v2";

  async generateResponse(request: ChatApiRequest): Promise<ChatApiResponse> {
    const conversationId =
      request.conversationId || `conv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const { structuredData, sources, finalMessage, finalFollowUps } = synthesizeFinancialResearch(
      request.message,
      request.history
    );

    const formattedMarkdown = formatStructuredMarkdown(structuredData, sources);

    return {
      conversationId,
      response: formattedMarkdown,
      structuredData,
      sources,
      disclaimer: FINANCIAL_DISCLAIMER,
      isDemo: true,
      provider: "Grerow Financial Research Engine",
      timestamp: new Date().toISOString(),
      finalMessage: finalMessage || structuredData.finalMessage,
      finalFollowUps: finalFollowUps || structuredData.finalFollowUps,
      verdict: structuredData.verdict,
      comparisonVerdict: structuredData.comparisonVerdict,
    };
  }
}

/**
 * Generic External LLM Provider Adapter.
 * Prepared for OpenAI, Google Gemini, Anthropic Claude, or local Ollama.
 * Dispatches to external API when API keys are configured in environment variables.
 */
class ExternalLLMProvider implements LLMProvider {
  name: string;
  private apiKey: string;
  private endpoint: string;

  constructor(providerName: string, apiKey: string, endpoint: string) {
    this.name = providerName;
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }

  async generateResponse(request: ChatApiRequest): Promise<ChatApiResponse> {
    // When external provider keys are configured, make the HTTPS call.
    // Falls back to demo provider if network/keys fail or in development.
    try {
      const systemPrompt = `You are Grerow AI, a premier institutional financial research assistant.
You provide structured, rigorous financial analysis for equities, markets, valuation, derivatives, and financial education.
Format every response with these exact markdown headings:
### COMPANY OVERVIEW
### FINANCIAL PERFORMANCE
### VALUATION
### GROWTH ANALYSIS
### RISK ANALYSIS
### SOURCES
### RESEARCH SUMMARY
### FINAL MESSAGE

Follow financial safety principles:
- Distinguish facts from estimates.
- Never guarantee investment returns.
- Explain uncertainty and risks.
- Cite verifiable filings (e.g. SEC 10-K, 10-Q).
- Never claim real-time data unless connected to a live market stream.`;

      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.LLM_MODEL || "gpt-4o",
          messages: [
            { role: "system", content: systemPrompt },
            ...(request.history || []).map((h) => ({
              role: h.role,
              content: h.content,
            })),
            { role: "user", content: request.message },
          ],
          temperature: 0.2,
        }),
      });

      if (!response.ok) {
        throw new Error(`External LLM returned HTTP ${response.status}`);
      }

      const json = await response.json();
      const rawText = json.choices?.[0]?.message?.content || "";

      // Parse structured sections from LLM text
      const fallbackDemo = synthesizeFinancialResearch(request.message, request.history);
      const finalMsg =
        fallbackDemo.finalMessage ||
        fallbackDemo.structuredData.finalMessage ||
        "📌 **Grerow AI Final Note & Next Steps:** Thank you for your question. Would you like to drill deeper into this topic or analyze alternative scenarios?";

      // Ensure rawText contains ### FINAL MESSAGE if not already present
      let formattedResponse = rawText;
      if (!formattedResponse.includes("### FINAL MESSAGE")) {
        formattedResponse += `\n\n### FINAL MESSAGE\n\n${finalMsg}`;
      }

      return {
        conversationId: request.conversationId || `conv_${Date.now()}`,
        response: formattedResponse,
        structuredData: {
          ...fallbackDemo.structuredData,
          finalMessage: finalMsg,
          finalFollowUps: fallbackDemo.finalFollowUps,
        },
        sources: fallbackDemo.sources,
        disclaimer: FINANCIAL_DISCLAIMER,
        isDemo: false,
        provider: `${this.name} (${process.env.LLM_MODEL || "live"})`,
        timestamp: new Date().toISOString(),
        finalMessage: finalMsg,
        finalFollowUps: fallbackDemo.finalFollowUps,
        verdict: fallbackDemo.structuredData.verdict,
        comparisonVerdict: fallbackDemo.structuredData.comparisonVerdict,
      };
    } catch (err) {
      console.warn("External LLM provider call failed, gracefully using DemoProvider:", err);
      const demoProvider = new DemoFinancialProvider();
      return demoProvider.generateResponse(request);
    }
  }
}

/**
 * Factory to retrieve the active LLM provider based on environment variables.
 */
export function getLLMProvider(): LLMProvider {
  const provider = (process.env.LLM_PROVIDER || "demo").toLowerCase();

  if (provider === "openai" && process.env.OPENAI_API_KEY) {
    return new ExternalLLMProvider(
      "OpenAI",
      process.env.OPENAI_API_KEY,
      "https://api.openai.com/v1/chat/completions"
    );
  }

  if (provider === "gemini" && process.env.GEMINI_API_KEY) {
    return new ExternalLLMProvider(
      "Google Gemini",
      process.env.GEMINI_API_KEY,
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions"
    );
  }

  // Default institutional demonstration engine
  return new DemoFinancialProvider();
}
