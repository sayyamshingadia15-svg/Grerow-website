import type { Metadata } from "next";
import { FullPageResearch } from "@/components/ai-chat/FullPageResearch";

export const metadata: Metadata = {
  title: "Grerow AI — Interactive Financial Research & Intelligence",
  description:
    "Explore company fundamentals, stock comparisons, financial statements, valuation models, options and market research with Grerow AI.",
};

export default function ResearchPage() {
  return <FullPageResearch />;
}
