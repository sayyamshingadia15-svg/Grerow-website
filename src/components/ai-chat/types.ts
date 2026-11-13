export * from "@/lib/ai/types";

export interface ResearchCategoryOption {
  id: string;
  name: string;
  description: string;
  iconName: string;
  examplePrompt: string;
}

export const RESEARCH_CATEGORIES: ResearchCategoryOption[] = [
  {
    id: "stocks",
    name: "Stock Research",
    description: "Analyse company fundamentals, financial statements, and business models.",
    iconName: "BarChart3",
    examplePrompt: "Analyse NVIDIA's fundamentals, gross margins and datacenter revenue runway.",
  },
  {
    id: "comparison",
    name: "Stock Comparison",
    description: "Side-by-side multi-metric comparative analysis of competing companies.",
    iconName: "GitCompare",
    examplePrompt: "Compare Apple and Microsoft across valuation, growth, ROIC and capital return.",
  },
  {
    id: "macro",
    name: "Market Research",
    description: "Macroeconomic indicators, central bank rate paths, inflation and liquidity.",
    iconName: "TrendingUp",
    examplePrompt: "Explain the latest market developments and how Treasury yields affect valuations.",
  },
  {
    id: "derivatives",
    name: "Options & Futures",
    description: "Options Greeks, implied volatility skew, hedging strategies and futures.",
    iconName: "Layers",
    examplePrompt: "Explain options and futures, the Greeks (Delta, Theta, Vega), and covered call strategies.",
  },
  {
    id: "education",
    name: "Financial Education",
    description: "Deconstruct valuation methods (DCF, WACC, multiples) and financial terminology.",
    iconName: "BookOpen",
    examplePrompt: "How do I evaluate a company's valuation using Discounted Cash Flow and EV/EBITDA?",
  },
  {
    id: "insights",
    name: "Investment Insights",
    description: "Identify catalysts, thesis points, sensitivity analysis and risk parameters.",
    iconName: "ShieldAlert",
    examplePrompt: "What are the primary investment risks and catalysts for hyperscale semiconductor capex?",
  },
];
