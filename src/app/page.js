"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { productsData } from "../data/products";

export default function MeuComponente() {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Melhores eletrônicos!</h1>
      <div className={styles.grid}>
      {productsData.map((produto, idx) => (
          <ProductCard key={idx} {...produto} />
        ))}
        </div>
    </div>
  );
}
