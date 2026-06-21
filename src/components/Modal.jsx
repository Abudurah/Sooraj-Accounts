import React from 'react';
import { C } from '../styles';

export default function Modal({ title, onClose, children, bp }) {
  const isMob = bp === "mobile";
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 400, display: "flex", alignItems: isMob ? "flex-end" : "center", justifyContent: "center", padding: isMob ? 0 : 24 }}
      onMouseDown={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{ background: C.bg, borderRadius: isMob ? "18px 18px 0 0" : "16px", padding: "20px 22px 28px", width: "100%", maxWidth: isMob ? "100%" : 520, maxHeight: "90vh", overflowY: "auto", position: "relative", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700, color: C.text, marginBottom: 16, paddingRight: 36 }}>{title}</div>
        <button onClick={onClose} style={{ position: "absolute", right: 16, top: 16, background: C.border, border: "none", borderRadius: "50%", width: 30, height: 30, cursor: "pointer", fontSize: 14 }}>✕</button>
        {children}
      </div>
    </div>
  );
}
