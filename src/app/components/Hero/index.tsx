"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/ThemeContext"; // Importa o tema
import VideoModal from "../VideoModal"; 

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { darkMode } = useTheme(); // Obtém o estado do tema

  return (
    <section
      id="hero"
      className={`relative h-screen flex items-center justify-center text-center transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-purple-900 to-pink-600 text-pink-100"
          : "bg-gradient-to-r from-pink-700 via-pink-600 to-pink-400 text-white"
      }`}
    >
      <div className={`absolute inset-0 ${darkMode ? "bg-black/60" : "bg-black/20"}`}></div>
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Olá, sou a Julia!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
          Desenvolvedora apaixonada por criar experiências incríveis na web e no mobile 🚀
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`inline-block font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg ${
            darkMode
              ? "bg-purple-900 text-white hover:bg-purple-700"
              : "bg-white text-pink-800 hover:bg-gray-200"
          }`}
          aria-label="Assistir vídeo"
        >
          Assistir novamente
        </button>
      </div>
      <ScrollDownIcon darkMode={darkMode} />
      {isModalOpen && (
        <VideoModal
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="video-modal-title"
          aria-describedby="video-modal-description"
        />
      )}
    </section>
  );
}

function ScrollDownIcon({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#sobre" aria-label="Role para ver mais">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-10 w-10 opacity-80 transition-colors ${
            darkMode ? "text-gray-300" : "text-white"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  );
}
