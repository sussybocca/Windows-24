import React, { useState, useEffect } from "react";
import useFileSystem from "../../kernel/filesystem";
import clickSoundFile from "../../assets/sounds/click.wav";

export default function NotesApp() {
  const fs = useFileSystem();
  const [note, setNote] = useState(fs.readFile("/note1.txt") || "");
  const clickSound = new Audio(clickSoundFile);

  const saveNote = () => {
    clickSound.play();
    fs.writeFile("/note1.txt", note);
    alert("Note saved!");
  };

  useEffect(() => {
    setNote(fs.readFile("/note1.txt") || "");
  }, [fs]);

  return (
    <div style={{ fontFamily: "cursive1", padding: "10px" }}>
      <h1>📝 Notes</h1>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={10}
        style={{ width: "100%", fontFamily: "cursive1" }}
      />
      <button onClick={saveNote} style={{ marginTop: "10px", fontFamily: "cursive1" }}>
        Save Note
      </button>
    </div>
  );
}
