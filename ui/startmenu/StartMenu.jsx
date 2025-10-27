import React, { useState } from "react";
import BrowserApp from "../../apps/browser/App";
import CalculatorApp from "../../apps/calculator/App";
import NotesApp from "../../apps/notes/App";
import TerminalApp from "../../apps/terminal/App";

import BrowserIcon from "../../assets/icons/BrowserIcon.jsx";
import CalculatorIcon from "../../assets/icons/CalculatorIcon.jsx";
import NotesIcon from "../../assets/icons/NotesIcon.jsx";
import TerminalIcon from "../../assets/icons/TerminalIcon.jsx";

export default function StartMenu({ openWindow }) {
  const [visible, setVisible] = useState(false);

  const apps = [
    { name: "Browser", icon: BrowserIcon, component: <BrowserApp /> },
    { name: "Calculator", icon: CalculatorIcon, component: <CalculatorApp /> },
    { name: "Notes", icon: NotesIcon, component: <NotesApp /> },
    { name: "Terminal", icon: TerminalIcon, component: <TerminalApp /> },
  ];

  return (
    <div style={{ position: "fixed", bottom: "50px", left: "10px" }}>
      <button
        onClick={() => setVisible(!visible)}
        style={{ fontFamily: "cursive1" }}
      >
        Start
      </button>

      {visible && (
        <div
          style={{
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px"
          }}
        >
          {apps.map((app) => (
            <button
              key={app.name}
              onClick={() => openWindow(app.name, app.component, app.icon)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "cursive1",
                padding: "5px 8px"
              }}
            >
              <app.icon />
              <span>{app.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
