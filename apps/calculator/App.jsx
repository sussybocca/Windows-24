import React, { useState } from "react";
import clickSoundFile from "../../assets/sounds/click.wav";

export default function CalculatorApp() {
  const [input, setInput] = useState("");
  const clickSound = new Audio(clickSoundFile);

  const append = (value) => {
    clickSound.play();
    setInput(input + value);
  };

  const calculate = () => {
    clickSound.play();
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    clickSound.play();
    setInput("");
  };

  return (
    <div style={{ fontFamily: "cursive1", padding: "10px" }}>
      <h1>🧮 Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "100%", fontFamily: "cursive1", marginBottom: "5px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {"1234567890+-*/.".split("").map((char) => (
          <button key={char} onClick={() => append(char)} style={{ fontFamily: "cursive1" }}>
            {char}
          </button>
        ))}
        <button onClick={calculate} style={{ fontFamily: "cursive1" }}>
          =
        </button>
        <button onClick={clear} style={{ fontFamily: "cursive1" }}>
          C
        </button>
      </div>
    </div>
  );
}
