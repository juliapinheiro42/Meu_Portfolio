"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/ThemeContext"; 

const faqs = [
  {
    pergunta: "Quais tecnologias você domina?",
    resposta:
      "Já trabalhei com JavaScript/TypeScript. Mas fiz projetos com Golang, C#, Java e Kotlin.",
  },
  {
    pergunta: "Você está disponível para viagens/mudanças?",
    resposta: "Sim! Vou adorar a oportunidade de conhecer novos lugares!",
  },
  {
    pergunta: "Como posso entrar em contato?",
    resposta:
      "Você pode me contatar pelo LinkedIn, GitHub ou Whatsapp através dos links no rodapé.",
  },
  {
    pergunta: "Por que eu deveria te contratar?",
    resposta:
      "O que me diferencia é minha capacidade de adaptação. Consigo aprender rapidamente novas tecnologias e ferramentas, e sei como aplicá-las de maneira prática para entregar soluções inovadoras. Tenho uma forte mentalidade colaborativa, o que me permite trabalhar bem em equipe, entender as necessidades do cliente e entregar resultados que impactam diretamente na experiência do usuário. Além disso, estou sempre em busca de aprimoramento contínuo. Eu não vejo tecnologia como um simples trabalho, mas como uma forma de contribuir para criar algo que tenha impacto positivo na sociedade, no time e na empresa. Portanto, se você busca uma desenvolvedora que combina habilidades técnicas, inovação e uma visão orientada a resultados, acredito que posso agregar muito ao seu time. Estou pronta para enfrentar novos desafios, aprender com cada um deles e entregar o melhor em cada projeto.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { darkMode } = useTheme(); 

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`container mx-auto px-6 py-12 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2
        className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
          darkMode ? "text-pink-400" : "text-pink-600"
        }`}
      >
        Perguntas Frequentes
      </h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border p-5 rounded-lg shadow-md transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-gray-300"
                : "bg-pink-100 border-pink-300 text-gray-700"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left font-semibold focus:outline-none flex justify-between items-center transition-colors duration-300 ${
                darkMode ? "text-pink-400" : "text-pink-700"
              }`}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span>{faq.pergunta}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p className="transition-colors duration-300">{faq.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
