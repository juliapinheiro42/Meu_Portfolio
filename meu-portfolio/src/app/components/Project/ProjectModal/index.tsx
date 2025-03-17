"use client";

import Image from "next/image";
import { Projeto } from "@/app/types/type_project";

export function ProjetoModal({ projeto, onClose, darkMode }: { projeto: Projeto | null; onClose: () => void; darkMode: boolean }) {
  if (!projeto) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div className={`p-8 rounded-xl max-w-3xl w-full relative shadow-2xl transition-transform duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" aria-label="Fechar modal">
          <span className="text-3xl font-bold">&times;</span>
        </button>
        <div className="space-y-6">
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image src={projeto.imagem} alt={projeto.titulo} layout="fill" objectFit="cover" />
          </div>
          <h3 className={`text-2xl font-semibold ${darkMode ? "text-pink-400" : "text-pink-700"}`}>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>
          <div>
            <h4 className={`text-xl font-semibold ${darkMode ? "text-pink-400" : "text-pink-700"}`}>Linguagens e Tecnologias</h4>
            <ul className="list-disc list-inside">
              {projeto.linguagens.map((linguagem, index) => (
                <li key={index}>{linguagem}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`text-xl font-semibold ${darkMode ? "text-pink-400" : "text-pink-700"}`}>Detalhes do Projeto</h4>
            <p>{projeto.detalhes}</p>
          </div>
          <div className="text-center mt-4">
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg font-bold transition ${darkMode ? "bg-pink-500 text-white hover:bg-pink-600" : "bg-pink-700 text-white hover:bg-pink-800"}`}>Acessar Projeto</a>
          </div>
        </div>
      </div>
    </div>
  );
}

