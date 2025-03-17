"use client"; // Marca o componente como Client Component

import React, { useState, useEffect } from "react";
import ScrollToTop from "../ButtonTOP";
import VideoModal from "../VideoModal";

export default function ClientWrapper() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Verifica se o modal já foi mostrado anteriormente
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setIsModalOpen(true); // Exibe o modal se o usuário não tiver visto
      localStorage.setItem("hasSeenModal", "true"); // Marca que o modal foi visto
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      {isModalOpen && (
        <VideoModal
          onClose={() => setIsModalOpen(false)} // Fecha o modal
          aria-labelledby="video-modal-title"
          aria-describedby="video-modal-description"
        />
      )}
    </>
  );
}
