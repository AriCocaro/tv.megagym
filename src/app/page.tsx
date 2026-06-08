"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [fotos, setFotos] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/fotos")
      .then((res) => res.json())
      .then((data) => setFotos(data));
  }, []);

  useEffect(() => {
    if (fotos.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [fotos]);

  if (fotos.length === 0) {
    return (
      <main
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        Cargando imágenes...
      </main>
    );
  }

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={fotos[index]}
        alt=""
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          userSelect: "none",
        }}
        draggable={false}
      />
    </main>
  );
}