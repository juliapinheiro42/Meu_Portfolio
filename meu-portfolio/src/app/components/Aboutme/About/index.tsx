"use client";

import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProfileImage } from "../ProfileImage";
import { ProfileDescription } from "../ProfileDescr";
import { SkillList } from "../SkillList";
import minhaFoto from "@/app/assets/minhafoto.png"
import { useTheme } from "@/app/components/ThemeContext";

export default function Sobre() {
  const { darkMode } = useTheme();

  const skills = [
    "Full Stack de verdade – frontend, backend, banco de dados, eu faço acontecer!",
    "APIs seguras e escaláveis – JWT, refresh token, autenticação? Sem mistério.",
    "UI/UX intuitivo – porque ninguém merece uma interface complicada.",
    "Código limpo e bem estruturado – organização é tudo.",
    "Muita vontade de aprender e crescer – tecnologia muda rápido, e eu acompanho o ritmo!",
  ];

  return (
    <section
      id="sobre"
      className={`container mx-auto px-6 py-12 text-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <SectionTitle>Quem sou eu?</SectionTitle>
      <div
        className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-pink-100 text-gray-700"
        }`}
      >
        <ProfileImage src={minhaFoto} alt="Imagem de um desenho caricatura minha. Cabelos castanhos, corte de cabelo médio, casaco rosa" />
        <ProfileDescription>
          <p>
            Desenvolvedora Full Stack apaixonada por tecnologia e sempre buscando
            novos desafios. Já trabalhei com <strong>React</strong> e{" "}
            <strong>Next.js</strong> no frontend, e fiz uns projetos de backend
            com <strong>Golang</strong>, além de experiência com{" "}
            <strong>Java</strong> e <strong>Kotlin</strong> em projetos mobile e
            de jogos.
          </p>
          <p className="mt-4">
            🔥 <strong>O que eu trago para o time?</strong>
          </p>
          <SkillList skills={skills} />
          <p className="mt-6">
            Sou resiliente, curiosa e focada em encontrar soluções inteligentes.
            Se você busca alguém que entrega, aprende rápido e traz energia boa
            pro time, <strong>bora criar algo incrível juntos! 🚀</strong>
          </p>
        </ProfileDescription>
      </div>
    </section>
  );
}