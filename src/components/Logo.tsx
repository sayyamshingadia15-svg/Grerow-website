import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  withWordmark = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Grerow geometric brand mark */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-grerow-dark text-white shadow-subtle overflow-hidden border border-grerow-dark transition-transform hover:scale-105`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Subtle grid lines */}
          <path
            d="M4 26H28"
            stroke="#10251A"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          {/* Upward geometric growth / intelligence chevron and node */}
          <path
            d="M7 23L14 14L19 19L25 9"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Grerow Green focal intelligence pulse point */}
          <circle cx="25" cy="9" r="3" fill="#008000" />
          <circle cx="14" cy="14" r="1.75" fill="#DCE9DF" />
          <circle cx="7" cy="23" r="1.5" fill="#DCE9DF" opacity="0.8" />
        </svg>
      </div>

      {withWordmark && (
        <span
          className={`font-semibold tracking-tight text-grerow-dark font-sans ${textSizes[size]}`}
        >
          Grerow
        </span>
      )}
    </div>
  );
}
