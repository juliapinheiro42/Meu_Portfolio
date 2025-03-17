import React from "react";
import { useTheme } from "@/app/components/ThemeContext";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  const { darkMode } = useTheme();

  return (
    <h2
      className={`text-4xl font-bold mb-8 transition-colors duration-300 ${
        darkMode ? "text-pink-400" : "text-pink-600"
      }`}
    >
      {children}
    </h2>
  );
}