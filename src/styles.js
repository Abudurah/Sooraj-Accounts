export const C = {
  bg: "#F0EBE1", primary: "#182F24", accent: "#B5892A", accentL: "#F4EDD6",
  surface: "#FAFAF7", border: "#E2D9CE", text: "#161616", muted: "#7A7060",
  green: "#276749", red: "#A83228", blue: "#2E6BB8",
};

export const fLbl = {
  fontSize: 10, fontWeight: 700, color: C.muted, display: "block",
  textTransform: "uppercase", letterSpacing: 1, marginBottom: 5,
};

export const inp = {
  width: "100%", padding: "10px 13px", border: `1.5px solid ${C.border}`,
  borderRadius: 9, fontSize: 14, color: C.text, boxSizing: "border-box",
  outline: "none", marginBottom: 13, background: C.surface,
};

export const selectStyle = {
  width: "100%", padding: "10px 13px", border: `1.5px solid ${C.border}`,
  borderRadius: 9, fontSize: 14, color: C.text, boxSizing: "border-box",
  outline: "none", marginBottom: 13, background: C.surface,
};

export const tarea = {
  width: "100%", padding: "10px 13px", border: `1.5px solid ${C.border}`,
  borderRadius: 9, fontSize: 14, color: C.text, boxSizing: "border-box",
  outline: "none", marginBottom: 13, background: C.surface, resize: "vertical", minHeight: 60,
};

export const btn = {
  width: "100%", padding: "12px 0", borderRadius: 10, border: "none",
  background: C.primary, color: "#fff", fontSize: 15, fontWeight: 600,
  cursor: "pointer", marginBottom: 8,
};

export const btnO = {
  width: "100%", padding: "11px 0", borderRadius: 10,
  border: `1.5px solid ${C.border}`, background: "transparent",
  color: C.text, fontSize: 14, fontWeight: 600, cursor: "pointer",
};

export const pill = {
  display: "inline-flex", alignItems: "center", padding: "2px 9px",
  borderRadius: 20, fontSize: 10, fontWeight: 700,
};
