import React from 'react';
import { pill, C } from '../styles';
import { pt, gch } from '../utils';

export function PBadge({ typeId }) {
  const p = pt(typeId);
  return <span style={{ ...pill, background: p.bg, color: p.col }}>{p.label}</span>;
}

export function CBadge({ chanId }) {
  const c = gch(chanId);
  return <span style={{ ...pill, background: "#EEEAE3", color: C.primary, fontSize: 10 }}>{c.name}</span>;
}
