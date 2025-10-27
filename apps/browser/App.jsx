import React, { useState } from "react";
import clickSoundFile from "../../assets/sounds/click.wav";

export default function BrowserApp() {
  const [url, setUrl] = useState("https://example.com");
  const clickSound = new Audio(clickSoundFile);

  const openURL = () => {
    clickSound.play();
    window.open(url, "_blank");
  };

  return (
    <div style={{ fontFamily: "cursive1", padding: "10px" }}>
      <h1>🌐 Browser</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "70%", fontFamily: "cursive1" }}
      />
      <button onClick={openURL} style={{ marginLeft: "10px", fontFamily: "cursive1" }}>
        Go
      </button>
    </div>
  );
}
