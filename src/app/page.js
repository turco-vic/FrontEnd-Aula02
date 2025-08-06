"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./page.module.css"; // Importando estilos
import ProductCard from "@/components/ProductCard/ProductCard";

export default function MeuComponente() {
  const produtos = [
  {
    title: "Smartphone",
    image: "/images/s24.jpeg",
    description: "Smartphone com 128GB de armazenamento",
    price: 1999.99,
  },
  {
    title: "Notebook",
    image: "/images/notebook.jpeg",
    description: "Notebook com 16GB de RAM e 512GB SSD",
    price: 3999.99,
  },
  {
    title: "Smartwatch",
    image: "/images/smartwatch.jpeg", // coloque o caminho correto da imagem
    description: "Smartwatch com monitoramento de saúde",
    price: 799.99,
  },
  {
    title: "Fone de Ouvido",
    image: "/images/fone.jpeg", // coloque o caminho correto da imagem
    description: "Fone de ouvido com cancelamento de ruído",
    price: 299.99,
  },
  {
    title: "Tablet",
    image: "/images/tablet.jpeg", // coloque o caminho correto da imagem
    description: "Tablet com tela de 10 polegadas",
    price: 1499.99,
  },
  {
    title: "Câmera",
    image: "/images/camera.jpeg", // coloque o caminho correto da imagem
    description: "Câmera digital com lente intercambiável",
    price: 2499.99,
  },
  {
    title: "Console de Videogame",
    image: "/images/console.jpeg", // coloque o caminho correto da imagem
    description: "Console de última geração com gráficos 4K",
    price: 4999.99,
  },
  {
    title: "Monitor",
    image: "/images/monitor.jpeg", // coloque o caminho correto da imagem
    description: "Monitor 4K de 27 polegadas",
    price: 1799.99,
  },
  {
    title: "Teclado Mecânico",
    image: "/images/teclado.jpeg", // coloque o caminho correto da imagem
    description: "Teclado mecânico com iluminação RGB",
    price: 399.99,
  },
];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Melhores eletrônicos!</h1>
      <div className={styles.grid}>
      {produtos.map((produto, idx) => (
          <ProductCard key={idx} {...produto} />
        ))}
        </div>
    </div>
  );
}