import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import { GlobalModals } from "@/components/Modals";
import { ChatProvider } from "@/components/ai-chat/ChatContext";
import { FloatingChatbot } from "@/components/ai-chat/FloatingChatbot";

export const metadata: Metadata = {
  title: "Grerow — AI-Powered Financial Intelligence & Stock Research",
  description:
    "Discover opportunities, understand markets and make more informed investment decisions with AI-powered financial intelligence. Research stocks, analyse companies, and access structured financial insights.",
  keywords: [
    "AI financial research",
    "stock analysis",
    "company fundamentals",
    "financial intelligence",
    "stock comparison",
    "market intelligence",
    "equity research",
    "Grerow",
  ],
  authors: [{ name: "Grerow Financial Technologies Inc." }],
  creator: "Grerow",
  publisher: "Grerow",
  metadataBase: new URL("https://grerow.com"),
  openGraph: {
    title: "Grerow — AI-Powered Financial Intelligence",
    description:
      "Research smarter. Invest with confidence. Discover opportunities, understand markets and make more informed investment decisions.",
    url: "https://grerow.com",
    siteName: "Grerow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grerow — AI-Powered Financial Intelligence",
    description:
      "Research smarter. Invest with confidence. Turn complex financial data into structured intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: <meta name="google-site-verification" content="U7FpCdRaaPWqdrYGRjTydN93gyumbDTry9Bd-Q1I4Js" />
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-grerow-bg text-grerow-dark antialiased font-sans flex flex-col selection:bg-grerow-soft selection:text-grerow-dark">
        <ModalProvider>
          <ChatProvider>
            {children}
            <FloatingChatbot />
            <GlobalModals />
          </ChatProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
