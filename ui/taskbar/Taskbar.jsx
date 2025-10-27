import React from "react";
import BrowserApp from "../../apps/browser/App";
import CalculatorApp from "../../apps/calculator/App";
import NotesApp from "../../apps/notes/App";
import TerminalApp from "../../apps/terminal/App";

import BrowserIcon from "../../assets/icons/BrowserIcon.jsx";
import CalculatorIcon from "../../assets/icons/CalculatorIcon.jsx";
import NotesIcon from "../../assets/icons/NotesIcon.jsx";
import TerminalIcon from "../../assets/icons/TerminalIcon.jsx";

export default function Taskbar({ openWindow }) {
  const apps = [
    { name: "Browser", icon: BrowserIcon, component: <BrowserApp /> },
    { name: "Calculator", icon: CalculatorIcon, component: <CalculatorApp /> },
    { name: "Notes", icon: NotesIcon, component: <NotesApp /> },
    { name: "Terminal", icon: TerminalIcon, component: <TerminalApp /> },
  ];

  return (
    <div className="taskbar">
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
  );
}
