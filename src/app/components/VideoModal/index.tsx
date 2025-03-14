"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  onClose: () => void;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

export default function VideoModal({
  onClose,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
}: VideoModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-white dark:bg-gray-900 dark:text-white p-6 sm:p-8 rounded-xl max-w-3xl w-full relative shadow-2xl transition-colors duration-300"
        >
          {/* Botão de fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            aria-label="Fechar modal"
          >
            <span className="text-3xl font-bold">&times;</span>
          </button>

          {/* Conteúdo do modal (vídeo) */}
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Vídeo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
