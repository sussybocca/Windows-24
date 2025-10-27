import React, { useState } from "react";
import clickSoundFile from "../../assets/sounds/click.wav";

export default function TerminalApp() {
  const [logs, setLogs] = useState([]);
  const [command, setCommand] = useState("");
  const clickSound = new Audio(clickSoundFile);

  const execute = () => {
    clickSound.play();
    let output;
    switch (command.trim()) {
      case "help":
        output = "Available commands: help, date, clear";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "clear":
        setLogs([]);
        setCommand("");
        return;
      default:
        output = `Command not found: ${command}`;
    }
    setLogs([...logs, `$ ${command}`, output]);
    setCommand("");
  };

  return (
    <div style={{ fontFamily: "cursive1", padding: "10px" }}>
      <h1>💻 Terminal</h1>
      <div
        style={{
          background: "#000",
          color: "#0f0",
          padding: "10px",
          height: "150px",
          overflowY: "auto",
          fontFamily: "cursive1",
        }}
      >
        {logs.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && execute()}
        style={{ width: "100%", fontFamily: "cursive1", marginTop: "5px" }}
      />
      <button onClick={execute} style={{ marginTop: "5px", fontFamily: "cursive1" }}>
        Execute
      </button>
    </div>
  );
}
