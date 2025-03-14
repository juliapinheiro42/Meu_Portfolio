"use client";

import { ProjetoCard } from "../ProjectCard";
import { Projeto } from "@/app/types/type_project";

interface ProjetosGridProps {
  projetos: Projeto[];
  onProjetoClick: (projeto: Projeto) => void;
  darkMode: boolean;
}

export function ProjetosGrid({ projetos, onProjetoClick, darkMode }: ProjetosGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projetos.map((projeto, index) => (
        <ProjetoCard
          key={index}
          projeto={projeto}
          onClick={() => onProjetoClick(projeto)}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}