import React, { useState, useEffect } from "react";
import "../ui/styles.css";

export default function Notifications({ notifications, removeNotification }) {
  return (
    <div className="notifications-container">
      {notifications.map((note, index) => (
        <Notification
          key={index}
          message={note.message}
          type={note.type}
          onClose={() => removeNotification(index)}
        />
      ))}
    </div>
  );
}

function Notification({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000); // auto-remove after 4s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <span className="notification-message">{message}</span>
      <button className="notification-close" onClick={onClose}>
        ✖
      </button>
    </div>
  );
}
