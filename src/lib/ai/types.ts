export interface FinancialMetric {
  label: string;
  value: string;
  subtext?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

export interface ComparisonTableRow {
  metric: string;
  companyA: string;
  companyB: string;
  diff: string;
  leader: "A" | "B" | "Neutral";
}

export interface CitationSource {
  id: string;
  title: string;
  document: string;
  section: string;
  source: string;
  date?: string;
  url?: string;
  verified: boolean;
}

export interface AnswerVerdict {
  status: "YES" | "NO";
  headline: string;
  explanation: string;
}

export interface ComparisonVerdict {
  winner: string;
  winnerLeader: "A" | "B" | "Neutral";
  headline: string;
  conciseAnswer: string;
  keyAdvantageA: string;
  keyAdvantageB: string;
}

export interface StructuredFinancialData {
  companyOverview: string;
  financialPerformance: string;
  valuation: string;
  growthAnalysis: string;
  riskAnalysis: string;
  researchSummary: string;
  finalMessage?: string;
  finalFollowUps?: string[];
  comparisonTable?: ComparisonTableRow[];
  companyAName?: string;
  companyBName?: string;
  comparisonVerdict?: ComparisonVerdict;
  metrics?: FinancialMetric[];
  catalysts?: string[];
  risks?: string[];
  verdict?: AnswerVerdict;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  structuredData?: StructuredFinancialData;
  sources?: CitationSource[];
  isDemo?: boolean;
  category?: string;
  finalMessage?: string;
  finalFollowUps?: string[];
  verdict?: AnswerVerdict;
  comparisonVerdict?: ComparisonVerdict;
}

export interface ConversationSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: ChatMessage[];
  category?: string;
}

export interface ChatApiRequest {
  message: string;
  conversationId?: string;
  history?: Array<{
    role: "user" | "assistant";
    content: string;
    timestamp?: string;
  }>;
  category?: string;
}

export interface ChatApiResponse {
  conversationId: string;
  response: string;
  structuredData: StructuredFinancialData;
  sources: CitationSource[];
  disclaimer: string;
  isDemo: boolean;
  provider: string;
  timestamp: string;
  finalMessage?: string;
  finalFollowUps?: string[];
  verdict?: AnswerVerdict;
  comparisonVerdict?: ComparisonVerdict;
}
