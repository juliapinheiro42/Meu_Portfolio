"use client";

import { useState } from "react";
import { useTheme } from "@/app/components/ThemeContext";
import { ProjetosGrid } from "../ProjectGrid";
import { ProjetoModal } from "../ProjectModal";
import { Projeto } from "@/app/types/type_project";
import Banner from "@/app/assets/Banner.png"
import Prog from "@/app/assets/prog.png"
import Perfil from "@/app/assets/minhafoto.png"

const projetos: Projeto[] = [
  { titulo: "Aplicativo de Dieta", descricao: "App para contagem de calorias.", link: "https://github.com/juliapinheiro42/LightApp", imagem: Banner, linguagens: ["React Native", "Golang"], detalhes: "App em andamento. Contagem de calorias, calculo de IMC e identificação de imagem." },
  { titulo: "Blog", descricao: "Um blog feito para comentar sobre programação", link: "https://github.com/juliapinheiro42/Code_blog", imagem: Prog, linguagens: ["JavaScript", "Next.JS", "Docker"], detalhes: "Blog feito em um curso sobre next.js. Usei JavaScript, API e Docker." },
  { titulo: "Portfólio Pessoal", descricao: "Meu site pessoal.", link: "https://github.com/juliapinheiro42/Meu_Portfolio", imagem:Perfil, linguagens: ["Next.js", "Tailwind CSS"], detalhes: "Portfólio moderno." }
];

export default function Projetos() {
  const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null);
  const { darkMode } = useTheme();

  return (
    <section id="projetos" className={`container mx-auto px-6 py-12 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h2 className={`text-4xl font-bold mb-8 text-center ${darkMode ? "text-pink-400" : "text-pink-600"}`}>Projetos</h2>
      <ProjetosGrid projetos={projetos} onProjetoClick={setSelectedProjeto} darkMode={darkMode} />
      {selectedProjeto && <ProjetoModal projeto={selectedProjeto} onClose={() => setSelectedProjeto(null)} darkMode={darkMode} />}
    </section>
  );
}