import React from 'react';
import { C, pill } from '../styles';
import { CHANNELS } from '../constants';
import { INR } from '../utils';
import Card from '../components/Card';

export default function ChannelsTab({ events, income, expenses, bp }) {
  const allPays = [
    ...events.flatMap(e => e.payments.map(p => ({ ...p, label: e.name }))),
    ...income.map(i => ({ ...i, label: events.find(e => e.id === i.eventId)?.name || i.note || "Quick entry" })),
  ];
  const cashGenExp    = expenses.filter(e => e.channel === "c0").reduce((s, e) => s + e.amount, 0);
  const cashGenRecent = expenses.filter(e => e.channel === "c0").slice(-3).reverse();
  const cols = bp === "desktop" ? 3 : bp === "tablet" ? 2 : 1;

  return (
    <div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginBottom: 18 }}>Payment Channels</div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 12 }}>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div><div style={{ fontWeight: 700, fontSize: 14 }}>Cash (General)</div><div style={{ fontSize: 11, color: C.muted }}>Unattributed cash</div></div>
            <span style={{ ...pill, background: "#FAEAEA", color: C.red, fontSize: 13, padding: "4px 12px" }}>{INR(cashGenExp)}</span>
          </div>
          <div style={{ background: "#FAEAEA", borderRadius: 8, padding: "10px 12px", marginBottom: cashGenRecent.length ? 10 : 0 }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>TOTAL SPENT</div>
            <div style={{ fontWeight: 700, color: C.red, fontSize: 15, marginTop: 2 }}>{INR(cashGenExp)}</div>
          </div>
          {cashGenRecent.map(e => (
            <div key={e.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, borderTop: `1px solid ${C.border}`, padding: "5px 0" }}>
              <span style={{ color: C.muted, flex: 1, marginRight: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.note || e.category}</span>
              <span style={{ fontWeight: 700, color: C.red }}>{INR(e.amount)}</span>
            </div>
          ))}
        </Card>
        {CHANNELS.map(chn => {
          const rec    = allPays.filter(p => p.channel === chn.id).reduce((s, p) => s + p.amount, 0);
          const paid   = expenses.filter(e => e.channel === chn.id).reduce((s, e) => s + e.amount, 0);
          const recent = allPays.filter(p => p.channel === chn.id).slice(-3).reverse();
          return (
            <Card key={chn.id} style={{ marginBottom: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div><div style={{ fontWeight: 700, fontSize: 14 }}>{chn.name}</div><div style={{ fontSize: 11, color: C.muted }}>{chn.holder}</div></div>
                <span style={{ ...pill, background: C.primary, color: "#F6F2EA", fontSize: 13, padding: "4px 12px" }}>{INR(rec - paid)}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: recent.length ? 10 : 0 }}>
                <div style={{ background: "#E6F3EC", borderRadius: 8, padding: "9px 10px" }}><div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>RECEIVED</div><div style={{ fontWeight: 700, color: C.green, fontSize: 14, marginTop: 2 }}>{INR(rec)}</div></div>
                <div style={{ background: "#FAEAEA", borderRadius: 8, padding: "9px 10px" }}><div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>PAID OUT</div><div style={{ fontWeight: 700, color: C.red, fontSize: 14, marginTop: 2 }}>{INR(paid)}</div></div>
              </div>
              {recent.map(p => (
                <div key={p.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, borderTop: `1px solid ${C.border}`, padding: "5px 0" }}>
                  <span style={{ color: C.muted, flex: 1, marginRight: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.label}</span>
                  <span style={{ fontWeight: 700, color: C.green }}>{INR(p.amount)}</span>
                </div>
              ))}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
