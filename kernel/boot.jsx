import React, { useEffect } from "react";
import { playSound } from "../libs/helpers";

export default function Boot({ onBootComplete }) {
  useEffect(() => {
    playSound("../assets/sounds/startup.wav");

    const timer = setTimeout(() => {
      onBootComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onBootComplete]);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      fontFamily: "'cursive1', cursive",
      backgroundColor: "#222",
      color: "#fff"
    }}>
      Booting Windows24...
    </div>
  );
}
