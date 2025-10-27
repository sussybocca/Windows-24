import React from "react";

export function showNotification(message) {
  const container = document.querySelector(".notifications-container");
  if (!container) return;

  const notif = document.createElement("div");
  notif.className = "notification";
  notif.innerText = message;
  container.appendChild(notif);

  setTimeout(() => container.removeChild(notif), 3000);
}
