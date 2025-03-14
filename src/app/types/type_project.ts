import { StaticImageData } from "next/image";

export interface Projeto {
    titulo: string;
    descricao: string;
    link: string;
    imagem: string | StaticImageData;
    linguagens: string[];
    detalhes: string;
  }