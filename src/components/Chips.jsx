import React from 'react';
import { C } from '../styles';

export default function Chips({ options, value, onChange, labelKey = "label", valueKey = "id", colorKey = null, bgKey = null }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 13 }}>
      {options.map(o => {
        const s = value === o[valueKey];
        return (
          <button
            key={o[valueKey]}
            onClick={() => onChange(o[valueKey])}
            style={{ padding: "6px 13px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", border: `1.5px solid ${s ? (colorKey ? o[colorKey] : C.primary) : C.border}`, background: s ? (bgKey ? o[bgKey] : C.primary) : C.surface, color: s ? (colorKey ? o[colorKey] : "#fff") : C.muted }}
          >
            {o[labelKey]}
          </button>
        );
      })}
    </div>
  );
}
