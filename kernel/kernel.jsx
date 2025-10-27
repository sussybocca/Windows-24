import React, { useState, useEffect } from "react";
import Boot from "./boot";
import Taskbar from "../ui/taskbar/Taskbar";
import StartMenu from "../ui/startmenu/StartMenu";
import Window from "../ui/windows/Window";
import Notifications from "../ui/Notifications";
import useProcessManager from "./processManager";
import useFileSystem from "./filesystem";
import useSettings from "./settings";
import "../ui/styles.css";

export default function Kernel() {
  // Boot state
  const [booted, setBooted] = useState(false);

  // Process manager
  const { processes, startProcess, closeProcess } = useProcessManager();

  // Filesystem
  const fs = useFileSystem();

  // System settings
  const { settings, updateSetting } = useSettings();

  // Apply wallpaper dynamically
  useEffect(() => {
    const container = document.querySelector(".os-container");
    if (container) {
      container.style.backgroundImage = `url('../assets/images/${settings.wallpaper}')`;
      container.style.fontFamily = settings.font || "cursive1";
    }
  }, [settings.wallpaper, settings.font]);

  // Open a new window
  const openWindow = (title, content) => {
    startProcess(title, content);
  };

  // Close a window by process ID
  const closeWindow = (id) => {
    closeProcess(id);
  };

  return booted ? (
    <div className="os-container">
      {/* Render all windows */}
      {processes.map((proc) => (
        <Window key={proc.id} title={proc.name}>
          {proc.content}
          <button
            onClick={() => closeWindow(proc.id)}
            style={{ marginTop: "10px", fontFamily: settings.font }}
          >
            Close
          </button>
        </Window>
      ))}

      {/* UI components */}
      <Taskbar openWindow={openWindow} />
      <StartMenu openWindow={openWindow} />
      <Notifications />
    </div>
  ) : (
    <Boot onBootComplete={() => setBooted(true)} />
  );
}
