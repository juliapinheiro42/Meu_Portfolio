"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll para exibir/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"} hover:bg-pink-700`}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}
