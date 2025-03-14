import React from "react";
import { useTheme } from "@/app/components/ThemeContext";

interface ProfileDescriptionProps {
  children: React.ReactNode;
}

export function ProfileDescription({ children }: ProfileDescriptionProps) {
  const { darkMode } = useTheme();

  return (
    <div className="text-left">
      <h3
        className={`text-3xl font-semibold transition-colors duration-300 ${
          darkMode ? "text-pink-400" : "text-pink-700"
        }`}
      >
        Oi! Sou a Julia 🚀
      </h3>
      <div className="mt-4 leading-relaxed transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}