import React, { useState, useEffect } from "react";
import Kernel from "./kernel/kernel";
import "./ui/styles.css"; // global styles with cursive font

// List your wallpapers from assets/images folder
const wallpapers = [
  "wallpaper1.jpg",
  "wallpaper2.jpg",
  "wallpaper3.jpg"
];

export default function App() {
  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

  // Apply wallpaper to the root container
  useEffect(() => {
    const root = document.querySelector(".os-root");
    if (root) {
      root.style.backgroundImage = `url('./assets/images/${selectedWallpaper}')`;
      root.style.backgroundSize = "cover";
    }
  }, [selectedWallpaper]);

  return (
    <div className="os-root">
      {/* Wallpaper Picker */}
      <div style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        background: "rgba(0,0,0,0.6)",
        padding: "10px",
        borderRadius: "8px",
        zIndex: 9999
      }}>
        <h3 style={{ color: "#fff", fontFamily: "cursive1" }}>Pick Wallpaper</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          {wallpapers.map((wp) => (
            <img
              key={wp}
              src={`./assets/images/${wp}`}
              alt={wp}
              style={{
                width: "60px",
                height: "40px",
                cursor: "pointer",
                border: wp === selectedWallpaper ? "2px solid #fff" : "2px solid transparent"
              }}
              onClick={() => setSelectedWallpaper(wp)}
            />
          ))}
        </div>
      </div>

      {/* Main OS */}
      <Kernel wallpaper={selectedWallpaper} />
    </div>
  );
}
