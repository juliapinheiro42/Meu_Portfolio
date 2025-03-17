import { Projeto } from "@/app/types/type_project";
import Image from "next/image";

interface ProjetoCardProps {
  projeto: Projeto;
  onClick: () => void; // <-- Corrigindo o clique
  darkMode: boolean;
}

export function ProjetoCard({ projeto, onClick, darkMode }: ProjetoCardProps) {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
      onClick={onClick} // <-- Aplicando a função de clique
    >
      <div className="relative w-full h-48">
        <Image
          src={projeto.imagem}
          alt={projeto.titulo}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-2xl font-semibold ${darkMode ? "text-pink-400" : "text-pink-700"}`}>
          {projeto.titulo}
        </h3>
        <p className="mt-2">{projeto.descricao}</p>
      </div>
    </div>
  );
}
