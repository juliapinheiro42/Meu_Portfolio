"use client";


import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Aboutme/About";
import Projetos from "./components/Project/Projects";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useTheme } from "@/app/components/ThemeContext"; 

export default function Home() {
  const { darkMode } = useTheme(); 

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Head>
        <title>Meu Portfólio | Julia</title>
        <meta name="description" content="Portfólio de Julia - Desenvolvedora Full Stack" />
        <meta name="keywords" content="Desenvolvimento Web, React, Next.js, Golang, Mobile, UI/UX" />
        <meta name="author" content="Julia" />
        <meta property="og:title" content="Portfólio de Julia" />
        <meta property="og:description" content="Veja meus projetos e habilidades como desenvolvedora!" />
        <meta property="og:image" content="/img/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="space-y-16">
        <Hero />
        <Sobre />
        <Projetos />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}