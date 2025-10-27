import React, { useState } from "react";
import "../windows/window.css";

export default function Window({ title, children, icon }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [zIndex, setZIndex] = useState(1);

  // Bring window to front when clicked
  const bringToFront = () => setZIndex(prev => prev + 1);

  const startDrag = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const onMouseMove = (e) => {
      if (isDragging) {
        setPosition({ x: e.clientX - offsetX, y: e.clientY - offsetY });
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      className="window"
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        fontFamily: "cursive1",
        background: "rgba(255,255,255,0.95)"
      }}
      onMouseDown={bringToFront}
    >
      <div className="window-header" onMouseDown={startDrag}>
        {icon && <img src={icon} alt={title} style={{ width: "20px", marginRight: "5px" }} />}
        {title}
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
}
