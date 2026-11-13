import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grerow: {
          white: "#FFFFFF",
          green: "#008000",
          "green-hover": "#006F00",
          "green-subtle": "#EBF4EE",
          dark: "#10251A",
          "dark-subtle": "#183627",
          bg: "#F7F9F7",
          soft: "#DCE9DF",
          "soft-hover": "#CDE0D1",
          secondary: "#617168",
          muted: "#8A9990",
          border: "#E7ECE8",
          "border-subtle": "#EEF2EF",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 37, 26, 0.04), 0 1px 2px -1px rgba(16, 37, 26, 0.04)",
        card: "0 4px 20px -2px rgba(16, 37, 26, 0.05), 0 2px 6px -1px rgba(16, 37, 26, 0.03)",
        elevated: "0 12px 32px -4px rgba(16, 37, 26, 0.08), 0 4px 12px -2px rgba(16, 37, 26, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
