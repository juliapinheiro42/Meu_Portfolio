import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "@/app/components/ThemeContext";

interface ProfileImageProps {
  src: string | StaticImageData;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  const { darkMode } = useTheme();

  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-full w-40 h-40 border-4 transition-colors duration-300 ${
        darkMode ? "border-pink-400" : "border-pink-600"
      }`}
    />
  );
}