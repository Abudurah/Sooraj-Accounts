import React from 'react';
import { C } from '../styles';

export default function ActRow({ onEdit, onDelete, confirmId, setConfirmId, myId }) {
  const base = { fontSize: 12, fontWeight: 600, cursor: "pointer", padding: "5px 14px", borderRadius: 7, border: "none" };
  if (confirmId === myId) {
    return (
      <div style={{ display: "flex", gap: 8, marginTop: 9, paddingTop: 9, borderTop: `1px solid ${C.border}`, alignItems: "center" }}>
        <span style={{ fontSize: 12, color: C.red, fontWeight: 600, flex: 1 }}>Delete this?</span>
        <button onClick={onDelete} style={{ ...base, background: "#FAEAEA", color: C.red }}>Yes</button>
        <button onClick={() => setConfirmId(null)} style={{ ...base, background: C.border, color: C.text }}>No</button>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", gap: 6, marginTop: 9, paddingTop: 9, borderTop: `1px solid ${C.border}` }}>
      <button onClick={onEdit} style={{ ...base, flex: 1, background: "#EEEAE3", color: C.text }}>✏️ Edit</button>
      <button onClick={() => setConfirmId(myId)} style={{ ...base, flex: 1, background: "#FAEAEA", color: C.red }}>🗑️ Delete</button>
    </div>
  );
}
