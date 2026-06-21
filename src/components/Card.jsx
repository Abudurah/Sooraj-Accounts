import React from 'react';
import { C } from '../styles';

export default function Card({ children, style = {} }) {
  return (
    <div style={{ background: C.surface, borderRadius: 13, padding: 16, marginBottom: 12, border: `1px solid ${C.border}`, ...style }}>
      {children}
    </div>
  );
}
