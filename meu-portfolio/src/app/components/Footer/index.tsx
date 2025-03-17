import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contatos" className="bg-pink-900 text-white p-8 text-center mt-8">
      <p className="text-lg">&copy; My dear Portfolio</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="https://linkedin.com/in/juliapinheirodefarias" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>
        <a href="https://github.com/juliapinheiro42" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FaGithub className="text-xl" /> GitHub
        </a>
        <a href="https://wa.me/5521989124775" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FaWhatsapp className="text-xl" /> Whatsapp
        </a>
      </div>
    </footer>
  );
}
