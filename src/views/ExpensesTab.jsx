import React, { useState, useRef, useEffect } from 'react';
import { C, fLbl, inp, selectStyle, btn, btnO, pill } from '../styles';
import { EXP_CATS, EXP_CHANNELS, CHANNELS } from '../constants';
import { today, uid, INR, fmtDt, gch, compressImage } from '../utils';
import Modal from '../components/Modal';
import Card from '../components/Card';
import ActRow from '../components/ActRow';

export default function ExpensesTab({ expenses, events, income, onSave, withUndo, bp, addTrigger }) {
  const [modal, setModal] = useState(null);
  const [editTarget, setET] = useState(null);
  const [confirmId, setCId] = useState(null);
  const [viewPhoto, setViewPhoto] = useState(null);
  const [search, setSearch] = useState("");
  const isFT = useRef(true);

  useEffect(() => { if (isFT.current) { isFT.current = false; return; } setModal("add"); }, [addTrigger]);

  const blankX = { amount: "", category: EXP_CATS[0], channel: "c0", eventId: "", date: today(), note: "", photo: "", recurring: false };

  const add    = f => { if (!f.amount) return; onSave([{ id: uid(), ...f, amount: Number(f.amount) }, ...expenses]); setModal(null); };
  const saveEd = f => { if (!f.amount) return; onSave(expenses.map(e => e.id === editTarget.id ? { ...e, ...f, amount: Number(f.amount) } : e)); setModal(null); };
  const del    = id => { const prev = expenses; onSave(expenses.filter(e => e.id !== id)); setCId(null); withUndo("Expense deleted.", () => onSave(prev)); };

  const allPays = [...events.flatMap(e => e.payments), ...(income || [])];
  const channelBalances = EXP_CHANNELS.filter(c => c.id !== "c0").reduce((acc, chn) => {
    const rec  = allPays.filter(p => p.channel === chn.id).reduce((s, p) => s + p.amount, 0);
    const paid = expenses.filter(e => e.channel === chn.id).reduce((s, e) => s + e.amount, 0);
    acc[chn.id] = rec - paid;
    return acc;
  }, {});
  const c3Rec  = allPays.filter(p => p.channel === "c3").reduce((s, p) => s + p.amount, 0);
  const c3Paid = expenses.filter(e => e.channel === "c3").reduce((s, e) => s + e.amount, 0);
  const c0Paid = expenses.filter(e => e.channel === "c0").reduce((s, e) => s + e.amount, 0);
  channelBalances["c0"] = c3Rec - c3Paid - c0Paid;

  const catTotals = EXP_CATS.reduce((acc, cat) => { acc[cat] = expenses.filter(e => e.category === cat).reduce((s, e) => s + e.amount, 0); return acc; }, {});

  function ExpForm({ initial, onSave: onSaveForm, onCancel }) {
    const [f, setF] = useState(initial);
    const [noteErr, setNoteErr] = useState(false);
    const handleSave = () => {
      if (!f.amount) return;
      if (f.channel === "c0" && !f.note.trim()) { setNoteErr(true); return; }
      setNoteErr(false);
      onSaveForm(f);
    };
    const handlePhoto = e => { const file = e.target.files[0]; if (!file) return; compressImage(file, b64 => setF(p => ({ ...p, photo: b64 }))); };
    const chanBal = channelBalances[f.channel] !== undefined ? channelBalances[f.channel] : null;
    const amt = Number(f.amount || 0);
    const wouldOverdraw = chanBal !== null && amt > 0 && (chanBal - amt) < 0;
    const isCashGen = f.channel === "c0";
    return (
      <>
        <label style={fLbl}>Amount (₹)</label>
        <input style={inp} autoFocus type="number" placeholder="0" value={f.amount} onChange={e => setF(p => ({ ...p, amount: e.target.value }))} />
        <label style={fLbl}>Category</label>
        <select style={selectStyle} value={f.category} onChange={e => setF(p => ({ ...p, category: e.target.value }))}>{EXP_CATS.map(c => <option key={c}>{c}</option>)}</select>
        <label style={fLbl}>Paid From Channel</label>
        <select style={{ ...selectStyle, borderColor: wouldOverdraw ? C.red : isCashGen ? C.accent : C.border }} value={f.channel} onChange={e => setF(p => ({ ...p, channel: e.target.value }))}>
          {EXP_CHANNELS.map(c => <option key={c.id} value={c.id}>{c.name}{c.holder !== "General" ? ` (${c.holder})` : ""}</option>)}
        </select>
        {chanBal !== null && amt === 0 && <div style={{ fontSize: 11, color: C.muted, marginTop: -10, marginBottom: 10 }}>{isCashGen ? "Cash in Hand remaining" : "Available"}: {INR(chanBal)}</div>}
        {wouldOverdraw && (
          <div style={{ background: "#FAEAEA", border: `1.5px solid ${C.red}`, borderRadius: 9, padding: "10px 13px", marginBottom: 13 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.red }}>⚠ {isCashGen ? "Cash in Hand exhausted" : "Channel exhausted"} — balance will go negative</div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>{isCashGen ? "Cash in Hand remaining" : "Available"}: {INR(chanBal)} &nbsp;·&nbsp; After this expense: {INR(chanBal - amt)}</div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>You can still save — the balance will go into deficit.</div>
          </div>
        )}
        <label style={{ ...fLbl, color: noteErr ? C.red : f.channel === "c0" ? C.accent : C.muted }}>
          {f.channel === "c0" ? "Note — required for Cash (what was this for?)" : "Note (optional)"}
        </label>
        <input style={{ ...inp, borderColor: noteErr ? C.red : f.channel === "c0" ? C.accent : C.border }} placeholder={f.channel === "c0" ? "e.g. Vegetables for Ahmed wedding" : "e.g. Chicken from supplier"} value={f.note} onChange={e => { setF(p => ({ ...p, note: e.target.value })); if (noteErr) setNoteErr(false); }} />
        {noteErr && <div style={{ fontSize: 11, color: C.red, marginTop: -10, marginBottom: 10, fontWeight: 600 }}>⚠ Please describe what this cash was spent on.</div>}
        <label style={fLbl}>Linked Event (optional)</label>
        <select style={selectStyle} value={f.eventId} onChange={e => setF(p => ({ ...p, eventId: e.target.value }))}>
          <option value="">— General expense —</option>
          {events.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
        <label style={fLbl}>Date</label>
        <input style={inp} type="date" value={f.date} onChange={e => setF(p => ({ ...p, date: e.target.value }))} />
        <label style={fLbl}>Attach Receipt Photo (optional)</label>
        <input type="file" accept="image/*" capture="environment" onChange={handlePhoto} style={{ marginBottom: 13, fontSize: 13, color: C.text, width: "100%" }} />
        {f.photo && <img src={f.photo} style={{ width: "100%", borderRadius: 8, marginBottom: 13, maxHeight: 160, objectFit: "cover" }} alt="receipt" />}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: C.accentL, borderRadius: 9, padding: "10px 13px", marginBottom: 13, cursor: "pointer" }} onClick={() => setF(p => ({ ...p, recurring: !p.recurring }))}>
          <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${C.accent}`, background: f.recurring ? C.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {f.recurring && <span style={{ color: "#fff", fontSize: 13, fontWeight: 900 }}>✓</span>}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Repeat monthly</div>
            <div style={{ fontSize: 11, color: C.muted }}>Get a reminder to log this expense each month</div>
          </div>
        </div>
        <button style={btn} onClick={handleSave}>Save</button>
        <button style={btnO} onClick={onCancel}>Cancel</button>
      </>
    );
  }

  const summary = bp !== "mobile" ? (
    <div style={{ background: C.primary, borderRadius: 13, padding: "12px 18px", marginBottom: 16, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0 }}>
      {EXP_CATS.map((cat, i) => (
        <div key={cat} style={{ display: "flex", flexDirection: "column", padding: "4px 16px", borderRight: i < EXP_CATS.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(246,242,234,0.5)", textTransform: "uppercase", letterSpacing: 0.8, whiteSpace: "nowrap" }}>{cat}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#F6F2EA", marginTop: 2 }}>{INR(catTotals[cat])}</span>
        </div>
      ))}
      <div style={{ display: "flex", flexDirection: "column", padding: "4px 16px", marginLeft: "auto" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 0.8 }}>Total</span>
        <span style={{ fontSize: 17, fontWeight: 700, color: "#F6F2EA", marginTop: 2 }}>{INR(expenses.reduce((s, e) => s + e.amount, 0))}</span>
      </div>
    </div>
  ) : (
    <div style={{ background: C.primary, borderRadius: 13, padding: 18, marginBottom: 14 }}>
      <div style={{ color: C.accent, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 12 }}>By Category</div>
      {EXP_CATS.map(cat => (
        <div key={cat} style={{ display: "flex", justifyContent: "space-between", marginBottom: 9 }}>
          <span style={{ fontSize: 13, color: "rgba(246,242,234,0.7)" }}>{cat}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#F6F2EA" }}>{INR(catTotals[cat])}</span>
        </div>
      ))}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: C.accent }}>Total</span>
        <span style={{ fontSize: 17, fontWeight: 700, color: "#F6F2EA" }}>{INR(expenses.reduce((s, e) => s + e.amount, 0))}</span>
      </div>
    </div>
  );

  const thisMo = today().slice(0, 7);
  const recurringTemplates = expenses.filter(e => e.recurring);
  const missingRecurring = recurringTemplates.filter(tmpl => !expenses.some(e => e.id !== tmpl.id && e.category === tmpl.category && e.channel === tmpl.channel && e.amount === tmpl.amount && e.date?.startsWith(thisMo)));
  const logAllRecurring = () => {
    const newOnes = missingRecurring.map(tmpl => ({ ...tmpl, id: uid(), date: today(), recurring: false, photo: "", photoPath: "" }));
    onSave([...newOnes, ...expenses]);
  };

  const sortedExpenses = [...expenses].sort((a, b) => b.date > a.date ? 1 : b.date < a.date ? -1 : b.id > a.id ? 1 : -1);
  const visExpenses = search ? sortedExpenses.filter(x => { const q = search.toLowerCase(); return (x.note || "").toLowerCase().includes(q) || x.category.toLowerCase().includes(q) || gch(x.channel).name.toLowerCase().includes(q); }) : sortedExpenses;

  return (
    <div>
      {summary}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: bp === "mobile" ? 17 : 22, fontWeight: 700 }}>All Expenses</div>
          <button onClick={() => setModal("add")} style={{ background: C.primary, color: "#fff", border: "none", borderRadius: 9, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ Add</button>
        </div>
        <input style={{ ...inp, marginBottom: 10 }} placeholder="Search by note, category or channel…" value={search} onChange={e => setSearch(e.target.value)} />
        {missingRecurring.length > 0 && (
          <div style={{ background: C.accentL, borderRadius: 10, padding: "12px 14px", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>🔁 {missingRecurring.length} recurring expense{missingRecurring.length > 1 ? "s" : ""} not yet logged this month</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{missingRecurring.map(e => e.note || e.category).join(", ")}</div>
            </div>
            <button onClick={logAllRecurring} style={{ background: C.accent, color: C.primary, border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>Log All</button>
          </div>
        )}
        {expenses.length === 0 && <div style={{ textAlign: "center", padding: "40px 0", color: C.muted }}><div style={{ fontSize: 36, marginBottom: 8 }}>💸</div><div style={{ fontSize: 13 }}>No expenses yet.</div></div>}
        {visExpenses.length === 0 && expenses.length > 0 && <div style={{ textAlign: "center", padding: "40px 0", color: C.muted }}><div style={{ fontSize: 36, marginBottom: 8 }}>🔍</div><div style={{ fontSize: 13 }}>No expenses match your search.</div></div>}
        <div style={{ display: "grid", gridTemplateColumns: bp === "desktop" ? "1fr 1fr 1fr" : bp === "tablet" ? "1fr 1fr" : "1fr", gap: 10 }}>
          {visExpenses.map(exp => {
            const chn = gch(exp.channel);
            const evt = events.find(e => e.id === exp.eventId);
            return (
              <Card key={exp.id} style={{ marginBottom: 0 }}>
                {exp.photo && <img src={exp.photo} onClick={() => setViewPhoto(exp.photo)} style={{ width: "100%", borderRadius: 8, marginBottom: 10, maxHeight: 110, objectFit: "cover", cursor: "pointer" }} alt="receipt" />}
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 6 }}>
                  <span style={{ ...pill, background: C.accentL, color: C.accent }}>{exp.category}</span>
                  {exp.recurring && <span style={{ ...pill, background: "#E8F0FA", color: C.blue, fontSize: 9 }}>🔁 RECURRING</span>}
                  {exp.channel === "c0" && <span style={{ ...pill, background: "#FFF3E0", color: "#E65100", fontSize: 9 }}>CASH</span>}
                  {evt && <span style={{ ...pill, background: "#EDF4EC", color: C.green }}>{evt.name}</span>}
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, color: C.red }}>{INR(exp.amount)}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{fmtDt(exp.date)} · {chn.name}</div>
                {exp.note && <div style={{ fontSize: 12, color: C.text, marginTop: 3 }}>{exp.note}</div>}
                <ActRow onEdit={() => { setET(exp); setModal("edit"); }} onDelete={() => del(exp.id)} confirmId={confirmId} setConfirmId={setCId} myId={exp.id} />
              </Card>
            );
          })}
        </div>
      </div>
      {modal === "add"  && <Modal title="Add Expense"  bp={bp} onClose={() => setModal(null)}><ExpForm initial={blankX} onSave={add} onCancel={() => setModal(null)} /></Modal>}
      {modal === "edit" && <Modal title="Edit Expense" bp={bp} onClose={() => setModal(null)}><ExpForm initial={{ ...editTarget, amount: String(editTarget.amount) }} onSave={saveEd} onCancel={() => setModal(null)} /></Modal>}
      {viewPhoto && <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={() => setViewPhoto(null)}><img src={viewPhoto} style={{ maxWidth: "100%", maxHeight: "90vh", borderRadius: 10, objectFit: "contain" }} alt="receipt" /></div>}
    </div>
  );
}
