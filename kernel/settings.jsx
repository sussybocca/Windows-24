import { useState, useEffect } from "react";
import { saveData, loadData } from "../libs/storage";

export default function useSettings() {
  const [settings, setSettings] = useState(loadData("settings") || {
    theme: "light",
    volume: 50,
    wallpaper: "wallpaper1.jpg",
    font: "cursive1"
  });

  const updateSetting = (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    saveData("settings", updated);
  };

  useEffect(() => {
    saveData("settings", settings);
  }, [settings]);

  return { settings, updateSetting };
}
