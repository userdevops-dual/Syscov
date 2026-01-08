// src/components/pages/Button.jsx
import React from "react";
import "./WebDevelopment.css";

/**
 * Simple Button used by WebDevelopment page.
 * Props:
 *  - variant: "hero" (default)
 *  - text: button label
 *  - icon: optional React node
 *  - onClick: optional handler
 */
export default function Button({ variant = "hero", text = "Click", icon = null, onClick }) {
  const className = variant === "hero" ? "hero-btn" : "hero-btn";
  return (
    <button className={className} onClick={onClick} type="button">
      <span className="shine" aria-hidden="true" />
      {icon ? <span className="btn-icon" aria-hidden="true">{icon}</span> : null}
      <span>{text}</span>
    </button>
  );
}
