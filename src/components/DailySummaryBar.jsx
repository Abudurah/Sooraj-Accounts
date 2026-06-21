import React from 'react';
import { C } from '../styles';
import { today, INR, fmtDt } from '../utils';

export default function DailySummaryBar({ events, income, expenses }) {
  const t = today();
  const todayIn  = [...events.flatMap(e => e.payments.filter(p => p.date === t).map(p => p.amount)), ...income.filter(i => i.date === t).map(i => i.amount)].reduce((s, a) => s + a, 0);
  const todayOut = expenses.filter(e => e.date === t).reduce((s, e) => s + e.amount, 0);
  const net = todayIn - todayOut;
  return (
    <div style={{ background: C.primary, borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 0 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 9, color: "rgba(246,242,234,0.45)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Today</div>
        <div style={{ fontSize: 11, color: "rgba(246,242,234,0.35)" }}>{fmtDt(t)}</div>
      </div>
      {[{ lbl: "In", val: todayIn, co: "#6FDDAA" }, { lbl: "Out", val: todayOut, co: "#FF8080" }, { lbl: "Net", val: net, co: net >= 0 ? "#6FDDAA" : "#FF8080" }].map((it, i) => (
        <div key={it.lbl} style={{ textAlign: "right", paddingLeft: 16, marginLeft: 16, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
          <div style={{ fontSize: 9, color: "rgba(246,242,234,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}>{it.lbl}</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: it.co, fontFamily: "'Playfair Display',serif" }}>{INR(it.val)}</div>
        </div>
      ))}
    </div>
  );
}
