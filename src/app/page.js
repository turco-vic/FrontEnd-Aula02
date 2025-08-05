"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./page.module.css"; // Importando estilos
import Card from "../components/Card/Card"; // Importando o componente Card
import CardPessoas from "../components/CardPessoa/CardPessoas"; // Importando o componente CardPessoas

export default function MeuComponente() {
  // 📦 Estados
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState([
    { nome: "João", email: "joao@gmail.com", idade: 25 },
    { nome: "Enzo" },
    {}
  ])

  // ⚡ Effects
  useEffect(() => {
    console.log("Componente montado!");
  }, []); // Uma vez só

  useEffect(() => {
    console.log("Contador:", contador);
    document.title = `Contador: ${contador}`;
  }, [contador]); // Quando contador muda

  // 🎮 Funções
  const incrementar = () => setContador(contador + 1);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador: {contador}</h1>
      <button className={styles.button} onClick={incrementar}>+1</button>

      <input
        className={styles.input}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
      {nome && <p className={styles.welcome}>Olá, {nome}!</p>}
      <div className={styles.cards}>
        <Card text="Este é um Card!" />
        <Card text="Outro Card aqui!" />
        <Card text="Mais um Card!" />
        <Card text="Quarto Card!" />
        <Card text="Último Card!" />
      </div>

      <div className={styles.pessoas}>
        {pessoas.map((pessoa, index) => (
          <CardPessoas
            key={index}
            nome={pessoa.nome}
            email={pessoa.email}
            idade={pessoa.idade}
          />
        ))}
      </div>
    </div>
  );
}