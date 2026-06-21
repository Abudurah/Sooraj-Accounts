import React, { useState } from 'react';
import { C, btn, btnO, pill } from '../styles';
import { INR, isOvd, fmtDt, localDateStr, getMonthlyData } from '../utils';
import { exportReport } from '../export';
import Modal from '../components/Modal';
import Card from '../components/Card';

export default function SummaryTab({ events, income, expenses, bp }) {
  const [copied, setCopied] = useState(false);
  const [exportModal, setExportModal] = useState(false);
  const [rangeFilter, setRangeFilter] = useState("all");

  const RANGE_OPTS = [{ id: "all", label: "All Time" }, { id: "month", label: "This Month" }, { id: "q3", label: "Last 3 Mo." }, { id: "year", label: "This Year" }];
  const cutoff = (() => {
    const now = new Date();
    if (rangeFilter === "month") return localDateStr(new Date(now.getFullYear(), now.getMonth(), 1));
    if (rangeFilter === "q3") { const d = new Date(now); d.setMonth(d.getMonth() - 3); return localDateStr(d); }
    if (rangeFilter === "year") return `${now.getFullYear()}-01-01`;
    return null;
  })();
  const inRange = date => !cutoff || (date && date >= cutoff);

  const rEvents  = events.map(e => ({ ...e, payments: e.payments.filter(p => inRange(p.date)) }));
  const rIncome  = income.filter(i => inRange(i.date));
  const rExpenses = expenses.filter(e => inRange(e.date));
  const rBilled  = rangeFilter === "all" ? events : events.filter(e => inRange(e.date));

  const evtRec   = rEvents.reduce((s, e) => s + e.payments.reduce((p, r) => p + r.amount, 0), 0);
  const logRec   = rIncome.reduce((s, i) => s + i.amount, 0);
  const billed   = rBilled.reduce((s, e) => s + (e.totalBill || 0), 0);
  const allEvtRec = rBilled.reduce((s, e) => s + e.payments.reduce((p, r) => p + r.amount, 0), 0);
  const totalExp = rExpenses.reduce((s, e) => s + e.amount, 0);
  const outstd   = billed - allEvtRec;
  const net      = (evtRec + logRec) - totalExp;
  const rate     = billed ? ((allEvtRec / billed) * 100).toFixed(0) : 0;
  const unpaid   = rBilled.filter(e => { const r = e.payments.reduce((s, p) => s + p.amount, 0); return r < e.totalBill; });
  const monthly  = getMonthlyData(rEvents, rIncome, rExpenses);
  const maxMo    = Math.max(...monthly.map(m => Math.max(m.mIn, m.mOut)), 1);

  const copyWA = () => {
    const d = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    let t = `*Sooraj Caterers & Events*\n📊 Account Summary – ${d}\n\nTotal Billed: ${INR(billed)}\nCollected (Events): ${INR(evtRec)} (${rate}%)\nQuick Log Income: ${INR(logRec)}\nOutstanding: ${INR(outstd)}\nTotal Expenses: ${INR(totalExp)}\n*Net Position: ${INR(net)}*\n`;
    if (unpaid.length) { t += `\n📌 Pending:\n`; unpaid.forEach(e => { const r = e.payments.reduce((s, p) => s + p.amount, 0); t += `• ${e.name} (${e.customer}) – ${INR(e.totalBill - r)} due\n`; }); }
    navigator.clipboard.writeText(t).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); }).catch(() => {});
  };

  const cols = bp === "desktop" ? 4 : 2;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700 }}>Summary</div>
        <button onClick={() => setExportModal(true)} style={{ background: C.accent, color: C.primary, border: "none", borderRadius: 9, padding: "8px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>📄 Export</button>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {RANGE_OPTS.map(r => { const a = rangeFilter === r.id; return <button key={r.id} onClick={() => setRangeFilter(r.id)} style={{ padding: "5px 13px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600, border: `1.5px solid ${a ? C.primary : C.border}`, background: a ? C.primary : C.surface, color: a ? "#fff" : C.muted }}>{r.label}</button>; })}
      </div>

      <div style={{ background: C.primary, borderRadius: 14, padding: "22px 24px", marginBottom: 14 }}>
        <div style={{ color: C.accent, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 6 }}>Net Position</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: bp === "mobile" ? 36 : 48, fontWeight: 700, color: net >= 0 ? "#6FDDAA" : "#FF7B7B", lineHeight: 1 }}>{INR(net)}</div>
        <div style={{ fontSize: 12, color: "rgba(246,242,234,0.5)", marginTop: 8 }}>income minus all expenses · {rate}% of events collected</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 10, marginBottom: 14 }}>
        {[{ lbl: "Total Billed", val: INR(billed), bg: "#EDF3EF", co: C.text }, { lbl: "Event Payments", val: INR(evtRec), bg: "#E6F3EC", co: C.green }, { lbl: "Quick Log Income", val: INR(logRec), bg: "#E8F0FA", co: C.blue }, { lbl: "Total Expenses", val: INR(totalExp), bg: C.accentL, co: C.accent }].map(it => (
          <div key={it.lbl} style={{ background: it.bg, borderRadius: 11, padding: "11px 13px" }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{it.lbl}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: it.co }}>{it.val}</div>
          </div>
        ))}
      </div>

      <Card>
        {[{ lbl: "Total Events", val: rBilled.length, co: C.text }, { lbl: "Fully Paid", val: rBilled.length - unpaid.length, co: C.green }, { lbl: "Pending Payment", val: unpaid.length, co: C.red }, { lbl: "Outstanding", val: INR(outstd), co: C.red }].map(it => (
          <div key={it.lbl} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, color: C.muted }}>{it.lbl}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: it.co }}>{it.val}</span>
          </div>
        ))}
      </Card>

      {monthly.length > 0 && (
        <>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, margin: "18px 0 12px" }}>Monthly Breakdown</div>
          <Card>
            {monthly.map(m => (
              <div key={m.mo} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: 13 }}>{m.label}</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: m.net >= 0 ? C.green : C.red }}>{INR(m.net)}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <div>
                    <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginBottom: 3 }}>IN</div>
                    <div style={{ height: 6, borderRadius: 3, background: C.border, overflow: "hidden", marginBottom: 2 }}><div style={{ height: "100%", borderRadius: 3, background: C.green, width: `${(m.mIn / maxMo * 100).toFixed(0)}%` }} /></div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.green }}>{INR(m.mIn)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginBottom: 3 }}>OUT</div>
                    <div style={{ height: 6, borderRadius: 3, background: C.border, overflow: "hidden", marginBottom: 2 }}><div style={{ height: "100%", borderRadius: 3, background: C.red, width: `${(m.mOut / maxMo * 100).toFixed(0)}%` }} /></div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.red }}>{INR(m.mOut)}</div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </>
      )}

      {unpaid.length > 0 && (
        <>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, margin: "16px 0 10px" }}>Pending Collections</div>
          <div style={{ display: "grid", gridTemplateColumns: bp === "desktop" ? "1fr 1fr 1fr" : bp === "tablet" ? "1fr 1fr" : "1fr", gap: 10 }}>
            {[...unpaid].sort((a, b) => { const da = a.totalBill - a.payments.reduce((s, p) => s + p.amount, 0); const db = b.totalBill - b.payments.reduce((s, p) => s + p.amount, 0); return db - da; }).map(e => {
              const r = e.payments.reduce((s, p) => s + p.amount, 0);
              return (
                <Card key={e.id} style={{ marginBottom: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontWeight: 700, fontSize: 14 }}>{e.name}</span>{isOvd(e.date) && <span style={{ ...pill, background: "#FAEAEA", color: C.red, fontSize: 9 }}>OVERDUE</span>}</div>
                      <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{e.customer} · {fmtDt(e.date)}</div>
                    </div>
                    <div style={{ textAlign: "right" }}><div style={{ fontWeight: 700, color: C.red, fontSize: 16 }}>{INR(e.totalBill - r)}</div><div style={{ fontSize: 10, color: C.muted }}>due</div></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}

      <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
        <button onClick={copyWA} style={{ ...btn, background: copied ? C.green : C.accent, color: C.primary, fontWeight: 700, flex: 1, marginBottom: 0, minWidth: 180 }}>{copied ? "✓ Copied!" : "📲 Copy for WhatsApp"}</button>
        <button onClick={() => setExportModal(true)} style={{ ...btn, background: "#EDF3EF", color: C.primary, flex: 1, marginBottom: 0, minWidth: 180 }}>📄 Export Report</button>
      </div>

      {exportModal && (
        <Modal title="Export Report" bp={bp} onClose={() => setExportModal(false)}>
          <div style={{ fontSize: 13, color: C.muted, marginBottom: 16, lineHeight: 1.6 }}>Pick a detail level. A print dialog will open — save as PDF from there.</div>
          {[
            { id: "summary",  icon: "📋", label: "Summary Only",    desc: "Net position, totals, pending collections. One clean page." },
            { id: "standard", icon: "📊", label: "Standard Report", desc: "Summary + monthly breakdown + all events + expenses by category." },
            { id: "full",     icon: "📁", label: "Full Detail",     desc: "Everything — every payment, log entry, and expense with all fields." },
          ].map(m => (
            <button key={m.id} onClick={() => { exportReport(m.id, rEvents, rIncome, rExpenses, RANGE_OPTS.find(r => r.id === rangeFilter)?.label || "All Time"); setExportModal(false); }} style={{ width: "100%", padding: "14px 16px", borderRadius: 11, border: `1.5px solid ${C.border}`, background: C.surface, cursor: "pointer", textAlign: "left", marginBottom: 10, display: "flex", gap: 14, alignItems: "center" }}>
              <span style={{ fontSize: 26 }}>{m.icon}</span>
              <div><div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 2 }}>{m.label}</div><div style={{ fontSize: 12, color: C.muted }}>{m.desc}</div></div>
            </button>
          ))}
          <button style={btnO} onClick={() => setExportModal(false)}>Cancel</button>
        </Modal>
      )}
    </div>
  );
}
