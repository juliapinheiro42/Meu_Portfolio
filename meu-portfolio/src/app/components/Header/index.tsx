"use client"; 

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation"; 
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para scroll suave
  const handleSmoothScroll = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`; 
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMenuOpen(false); 
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-900 text-white p-4 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">My dear Portfolio</h1>

        {/* Menu para desktop */}
        <ul className="hidden md:flex space-x-6">
          {["Sobre", "Projetos", "FAQ", "Contatos"].map((item, index) => (
            <li className="items-center" key={index}>
              <a
                href={`/#${item.toLowerCase().replace(" ", "")}`}
                onClick={(e) => {
                  e.preventDefault(); // Evitar o comportamento padrão do link
                  handleSmoothScroll(item.toLowerCase().replace(" ", ""));
                }}
                className="hover:text-gray-300 transition duration-400"
                aria-label={item}
              >
                {item}
              </a>
            </li>
          ))}
              <ThemeToggle />
        </ul>

        {/* Botão do menu para mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu para mobile */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-pink-900 shadow-md transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            {["Sobre", "Projetos", "FAQ", "Contatos"].map((item, index) => (
              <li key={index}>
                <a
                  href={`/#${item.toLowerCase().replace(" ", "")}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleSmoothScroll(item.toLowerCase().replace(" ", ""));
                  }}
                  className="block hover:text-gray-300 transition duration-300"
                  aria-label={item}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}