import React, { useState } from 'react';
import { C, fLbl, inp, selectStyle, btn, btnO, pill } from '../styles';
import { CHANNELS, PAY_TYPES } from '../constants';
import { today, uid, INR, fmtDt, isOvd, pt, gch } from '../utils';
import Modal from '../components/Modal';
import Chips from '../components/Chips';
import Card from '../components/Card';
import { PBadge, CBadge } from '../components/Badges';
import ActRow from '../components/ActRow';

function EventForm({ initial, onSave, onCancel }) {
  const [f, setF] = useState(initial);
  return (
    <>
      <label style={fLbl}>Event / Job Name</label>
      <input style={inp} placeholder="e.g. Ahmed Wedding" value={f.name} onChange={e => setF(p => ({ ...p, name: e.target.value }))} />
      <label style={fLbl}>Customer Name</label>
      <input style={inp} placeholder="Customer" value={f.customer} onChange={e => setF(p => ({ ...p, customer: e.target.value }))} />
      <label style={fLbl}>Event Date</label>
      <input style={inp} type="date" value={f.date} onChange={e => setF(p => ({ ...p, date: e.target.value }))} />
      <label style={fLbl}>Total Bill (₹)</label>
      <input style={inp} type="number" placeholder="0" value={f.totalBill} onChange={e => setF(p => ({ ...p, totalBill: e.target.value }))} />
      <label style={fLbl}>Notes (optional)</label>
      <textarea style={{ ...inp, resize: "vertical", minHeight: 60 }} placeholder="Any notes..." value={f.notes} onChange={e => setF(p => ({ ...p, notes: e.target.value }))} />
      <button style={btn} onClick={() => f.name.trim() && f.totalBill && onSave(f)}>Save</button>
      <button style={btnO} onClick={onCancel}>Cancel</button>
    </>
  );
}

function PayForm({ initial, onSave, onCancel }) {
  const [f, setF] = useState(initial);
  return (
    <>
      <label style={fLbl}>Amount (₹)</label>
      <input style={inp} type="number" placeholder="0" value={f.amount} onChange={e => setF(p => ({ ...p, amount: e.target.value }))} />
      <label style={fLbl}>Payment Type</label>
      <Chips options={PAY_TYPES} value={f.payType} onChange={v => setF(p => ({ ...p, payType: v }))} colorKey="col" bgKey="bg" />
      <label style={fLbl}>Channel Received</label>
      <select style={selectStyle} value={f.channel} onChange={e => setF(p => ({ ...p, channel: e.target.value }))}>
        {CHANNELS.map(c => <option key={c.id} value={c.id}>{c.name} ({c.holder})</option>)}
      </select>
      <label style={fLbl}>Date</label>
      <input style={inp} type="date" value={f.date} onChange={e => setF(p => ({ ...p, date: e.target.value }))} />
      <label style={fLbl}>Note (optional)</label>
      <input style={inp} placeholder="e.g. Advance before event" value={f.note} onChange={e => setF(p => ({ ...p, note: e.target.value }))} />
      <button style={btn} onClick={() => f.amount && onSave(f)}>Save</button>
      <button style={btnO} onClick={onCancel}>Cancel</button>
    </>
  );
}

function EventsView({ events, onSave, withUndo, bp }) {
  const [view, setView] = useState("list");
  const [modal, setModal] = useState(null);
  const [editTarget, setET] = useState(null);
  const [confirmId, setCId] = useState(null);
  const [markChan, setMarkChan] = useState("c1");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const blankE = { name: "", customer: "", date: today(), totalBill: "", notes: "" };
  const blankP = { amount: "", channel: "c1", payType: "Advance", date: today(), note: "" };
  const sel = events.find(e => e.id === view);

  const addEvent  = f => { onSave([{ id: uid(), ...f, totalBill: Number(f.totalBill), payments: [] }, ...events]); setModal(null); };
  const editEvent = f => { onSave(events.map(e => e.id === view ? { ...e, ...f, totalBill: Number(f.totalBill) } : e)); setModal(null); };
  const delEvent  = id => { const prev = events; onSave(events.filter(e => e.id !== id)); setView("list"); setCId(null); withUndo("Event deleted.", () => onSave(prev)); };
  const addPay    = f => { onSave(events.map(e => e.id === view ? { ...e, payments: [...e.payments, { id: uid(), ...f, amount: Number(f.amount) }] } : e)); setModal(null); };
  const editPay   = f => { onSave(events.map(e => e.id === view ? { ...e, payments: e.payments.map(p => p.id === editTarget.id ? { ...p, ...f, amount: Number(f.amount) } : p) } : e)); setModal(null); };
  const delPay    = pid => { const prev = events; onSave(events.map(e => e.id === view ? { ...e, payments: e.payments.filter(p => p.id !== pid) } : e)); setCId(null); withUndo("Payment deleted.", () => onSave(prev)); };
  const markFullyPaid = () => {
    if (!sel) return;
    const rec = sel.payments.reduce((s, p) => s + p.amount, 0);
    const due = sel.totalBill - rec;
    if (due <= 0) return;
    onSave(events.map(e => e.id === view ? { ...e, payments: [...e.payments, { id: uid(), amount: due, channel: markChan, payType: "Full", date: today(), note: "Marked as fully paid" }] } : e));
    setModal(null);
  };

  const cols = bp === "desktop" ? 3 : bp === "tablet" ? 2 : 1;
  const STATUS_FILTERS = [{ id: "all", label: "All" }, { id: "unpaid", label: "Unpaid" }, { id: "overdue", label: "Overdue" }, { id: "paid", label: "Paid" }];

  if (view === "list") {
    const q = search.toLowerCase();
    const visibleEvents = [...events].sort((a, b) => b.date > a.date ? 1 : b.date < a.date ? -1 : b.id > a.id ? 1 : -1).filter(evt => {
      const rec = evt.payments.reduce((s, p) => s + p.amount, 0);
      const due = evt.totalBill - rec;
      if (q && !(evt.name.toLowerCase().includes(q) || (evt.customer || "").toLowerCase().includes(q))) return false;
      if (statusFilter === "paid" && due > 0) return false;
      if (statusFilter === "unpaid" && due <= 0) return false;
      if (statusFilter === "overdue" && !(isOvd(evt.date) && due > 0)) return false;
      return true;
    });
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700 }}>Events</div>
          <button onClick={() => setModal("addEvent")} style={{ background: C.primary, color: "#fff", border: "none", borderRadius: 9, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ New Event</button>
        </div>
        <input style={{ ...inp, marginBottom: 10 }} placeholder="Search by name or customer…" value={search} onChange={e => setSearch(e.target.value)} />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {STATUS_FILTERS.map(f => { const a = statusFilter === f.id; return <button key={f.id} onClick={() => setStatusFilter(f.id)} style={{ padding: "5px 13px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600, border: `1.5px solid ${a ? C.primary : C.border}`, background: a ? C.primary : C.surface, color: a ? "#fff" : C.muted }}>{f.label}</button>; })}
        </div>
        {visibleEvents.length === 0 && <div style={{ textAlign: "center", padding: "48px 0", color: C.muted }}><div style={{ fontSize: 40, marginBottom: 10 }}>📋</div><div style={{ fontSize: 14 }}>{events.length === 0 ? "No events yet." : "No events match your filter."}</div></div>}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 12 }}>
          {visibleEvents.map(evt => {
            const rec = evt.payments.reduce((s, p) => s + p.amount, 0);
            const due = evt.totalBill - rec;
            const pct = evt.totalBill ? Math.min(100, (rec / evt.totalBill) * 100) : 0;
            const ovd = isOvd(evt.date) && due > 0;
            return (
              <Card key={evt.id} style={{ cursor: "pointer", marginBottom: 0 }}>
                <div onClick={() => setView(evt.id)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, flex: 1, lineHeight: 1.3 }}>{evt.name}</div>
                    {ovd && <span style={{ ...pill, background: "#FAEAEA", color: C.red, fontSize: 9, marginLeft: 6, flexShrink: 0 }}>OVERDUE</span>}
                  </div>
                  <div style={{ fontSize: 11, color: C.muted, marginBottom: 12 }}>{evt.customer} · {fmtDt(evt.date)}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <div><div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>BILL</div><div style={{ fontSize: 16, fontWeight: 700 }}>{INR(evt.totalBill)}</div></div>
                    <div style={{ textAlign: "right" }}><div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>DUE</div><div style={{ fontSize: 16, fontWeight: 700, color: due > 0 ? C.red : C.green }}>{INR(due)}</div></div>
                  </div>
                  <div style={{ height: 5, borderRadius: 3, background: C.border, overflow: "hidden", margin: "6px 0 4px" }}><div style={{ height: "100%", borderRadius: 3, background: C.green, width: `${pct}%` }} /></div>
                  <div style={{ fontSize: 11, color: C.muted }}>{INR(rec)} received · {pct.toFixed(0)}%</div>
                </div>
              </Card>
            );
          })}
        </div>
        {modal === "addEvent" && <Modal title="New Event" bp={bp} onClose={() => setModal(null)}><EventForm initial={blankE} onSave={addEvent} onCancel={() => setModal(null)} /></Modal>}
      </div>
    );
  }

  if (!sel) return null;
  const rec = sel.payments.reduce((s, p) => s + p.amount, 0);
  const due = sel.totalBill - rec;
  const pct = sel.totalBill ? Math.min(100, (rec / sel.totalBill) * 100) : 0;
  const ovd = isOvd(sel.date) && due > 0;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <button onClick={() => { setView("list"); setCId(null); }} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", color: C.text }}>← Back</button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700 }}>{sel.name}</span>
            {ovd && <span style={{ ...pill, background: "#FAEAEA", color: C.red, fontSize: 9 }}>OVERDUE</span>}
          </div>
          <div style={{ fontSize: 12, color: C.muted }}>{sel.customer} · {fmtDt(sel.date)}</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => {
            const msg = `*${sel.name}*\n${sel.customer ? `Customer: ${sel.customer}\n` : ""}Date: ${fmtDt(sel.date)}\n\nTotal Bill: ${INR(sel.totalBill)}\nReceived: ${INR(rec)}\nOutstanding: ${INR(due)}\n${due <= 0 ? "✅ Fully paid" : "⏳ Payment pending"}`;
            navigator.clipboard.writeText(msg).catch(() => {});
            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
          }} style={{ background: "#E6F3EC", border: "none", borderRadius: 8, padding: "7px 12px", fontSize: 13, fontWeight: 600, cursor: "pointer", color: C.green }} title="Share on WhatsApp">📲</button>
          <button onClick={() => { setET(sel); setModal("editEvent"); }} style={{ background: C.accentL, border: "none", borderRadius: 8, padding: "7px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", color: C.accent }}>✏️ Edit</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: bp === "mobile" ? "1fr 1fr" : "repeat(4,1fr)", gap: 10, marginBottom: 14 }}>
        {[{ lbl: "Total Bill", val: INR(sel.totalBill), bg: "#EEF5F0", co: C.text }, { lbl: "Received", val: INR(rec), bg: "#E6F3EC", co: C.green }, { lbl: "Outstanding", val: INR(due), bg: due > 0 ? "#FAEAEA" : "#E6F3EC", co: due > 0 ? C.red : C.green }, { lbl: "Payments", val: sel.payments.length + " entries", bg: C.accentL, co: C.accent }].map(it => (
          <div key={it.lbl} style={{ background: it.bg, borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{it.lbl}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: it.co }}>{it.val}</div>
          </div>
        ))}
      </div>
      <div style={{ height: 5, borderRadius: 3, background: C.border, overflow: "hidden", marginBottom: 4 }}><div style={{ height: "100%", borderRadius: 3, background: C.green, width: `${pct}%` }} /></div>
      <div style={{ fontSize: 11, color: C.muted, marginBottom: 14 }}>{pct.toFixed(0)}% collected</div>

      {due > 0 && <button onClick={() => setModal("markPaid")} style={{ width: "100%", padding: "11px 0", borderRadius: 10, border: "none", background: "#E6F3EC", color: C.green, fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 14 }}>✅ Mark as Fully Paid — {INR(due)} remaining</button>}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700 }}>Payments</div>
        <button onClick={() => setModal("addPay")} style={{ background: C.primary, color: "#fff", border: "none", borderRadius: 8, padding: "7px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>+ Add</button>
      </div>
      {sel.payments.length === 0 && <div style={{ textAlign: "center", padding: "20px", color: C.muted, fontSize: 13 }}>No payments yet.</div>}
      <div style={{ display: "grid", gridTemplateColumns: bp === "desktop" ? "1fr 1fr 1fr" : bp === "tablet" ? "1fr 1fr" : "1fr", gap: 10 }}>
        {[...sel.payments].sort((a, b) => b.date > a.date ? 1 : b.date < a.date ? -1 : b.id > a.id ? 1 : -1).map(p => (
          <Card key={p.id} style={{ marginBottom: 0 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}><PBadge typeId={p.payType} /><CBadge chanId={p.channel} /></div>
            <div style={{ fontWeight: 700, fontSize: 18, color: C.green }}>{INR(p.amount)}</div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{fmtDt(p.date)}</div>
            {p.note && <div style={{ fontSize: 12, color: C.text, marginTop: 3 }}>{p.note}</div>}
            <ActRow onEdit={() => { setET(p); setModal("editPay"); }} onDelete={() => delPay(p.id)} confirmId={confirmId} setConfirmId={setCId} myId={p.id} />
          </Card>
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        <ActRow onEdit={() => { setET(sel); setModal("editEvent"); }} onDelete={() => delEvent(sel.id)} confirmId={confirmId} setConfirmId={setCId} myId={"evt_" + sel.id} />
        <div style={{ fontSize: 11, color: C.muted, textAlign: "center", marginTop: 5 }}>↑ Edit or delete this entire event</div>
      </div>

      {modal === "addEvent"  && <Modal title="New Event"    bp={bp} onClose={() => setModal(null)}><EventForm initial={blankE} onSave={addEvent} onCancel={() => setModal(null)} /></Modal>}
      {modal === "editEvent" && <Modal title="Edit Event"   bp={bp} onClose={() => setModal(null)}><EventForm initial={{ ...editTarget, totalBill: String(editTarget.totalBill) }} onSave={editEvent} onCancel={() => setModal(null)} /></Modal>}
      {modal === "addPay"    && <Modal title="Add Payment"  bp={bp} onClose={() => setModal(null)}><PayForm initial={blankP} onSave={addPay} onCancel={() => setModal(null)} /></Modal>}
      {modal === "editPay"   && <Modal title="Edit Payment" bp={bp} onClose={() => setModal(null)}><PayForm initial={{ ...editTarget, amount: String(editTarget.amount) }} onSave={editPay} onCancel={() => setModal(null)} /></Modal>}
      {modal === "markPaid" && (
        <Modal title="Mark as Fully Paid" bp={bp} onClose={() => setModal(null)}>
          <div style={{ background: "#E6F3EC", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: C.muted }}>Remaining balance</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 30, fontWeight: 700, color: C.green }}>{INR(due)}</div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>Will be logged as Full Payment with today's date</div>
          </div>
          <label style={fLbl}>Which channel received this?</label>
          <select style={selectStyle} value={markChan} onChange={e => setMarkChan(e.target.value)}>
            {CHANNELS.map(c => <option key={c.id} value={c.id}>{c.name} ({c.holder})</option>)}
          </select>
          <button style={{ ...btn, background: C.green }} onClick={markFullyPaid}>✅ Confirm Full Payment</button>
          <button style={btnO} onClick={() => setModal(null)}>Cancel</button>
        </Modal>
      )}
    </div>
  );
}

function LogForm({ initial, onSave, onCancel, events }) {
  const [f, setF] = useState(initial);
  return (
    <>
      <label style={fLbl}>Amount (₹)</label>
      <input style={{ ...inp, fontSize: 20, fontWeight: 700 }} type="number" placeholder="0" value={f.amount} onChange={e => setF(p => ({ ...p, amount: e.target.value }))} />
      <label style={fLbl}>Payment Type</label>
      <Chips options={PAY_TYPES} value={f.payType} onChange={v => setF(p => ({ ...p, payType: v }))} colorKey="col" bgKey="bg" />
      <label style={fLbl}>Channel Received</label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 5, marginBottom: 13 }}>
        {CHANNELS.map(c => { const s = f.channel === c.id; return <button key={c.id} onClick={() => setF(p => ({ ...p, channel: c.id }))} style={{ padding: "7px 4px", borderRadius: 9, border: `1.5px solid ${s ? C.primary : C.border}`, background: s ? C.primary : C.surface, color: s ? "#fff" : C.muted, fontSize: 10, fontWeight: 600, cursor: "pointer", lineHeight: 1.4, textAlign: "center", whiteSpace: "pre-line" }}>{c.short}</button>; })}
      </div>
      <label style={fLbl}>Date</label>
      <input style={inp} type="date" value={f.date} onChange={e => setF(p => ({ ...p, date: e.target.value }))} />
      <label style={fLbl}>Link to Event (optional)</label>
      <select style={selectStyle} value={f.eventId} onChange={e => setF(p => ({ ...p, eventId: e.target.value }))}>
        <option value="">— Not linked —</option>
        {(events || []).map(e => <option key={e.id} value={e.id}>{e.name} ({e.customer})</option>)}
      </select>
      <label style={fLbl}>Note (optional)</label>
      <input style={inp} placeholder="e.g. Cash from Dad" value={f.note} onChange={e => setF(p => ({ ...p, note: e.target.value }))} />
      <button style={btn} onClick={() => f.amount && onSave(f)}>Save</button>
      <button style={btnO} onClick={onCancel}>Cancel</button>
    </>
  );
}

function QuickLogView({ income, events, onSave, withUndo, bp }) {
  const blankQ = { amount: "", channel: "c3", payType: "Advance", date: today(), eventId: "", note: "" };
  const [form, setForm] = useState(blankQ);
  const [modal, setModal] = useState(null);
  const [editTarget, setET] = useState(null);
  const [confirmId, setCId] = useState(null);
  const [srch, setSrch] = useState("");

  const save     = () => { if (!form.amount) return; onSave([{ id: uid(), ...form, amount: Number(form.amount) }, ...income]); setForm(blankQ); };
  const saveEdit = f => { onSave(income.map(i => i.id === editTarget.id ? { ...i, ...f, amount: Number(f.amount) } : i)); setModal(null); };
  const del      = id => { const prev = income; onSave(income.filter(i => i.id !== id)); setCId(null); withUndo("Income entry deleted.", () => onSave(prev)); };
  const total = income.reduce((s, i) => s + i.amount, 0);

  const entryForm = bp !== "mobile" ? (
    <div style={{ background: C.surface, borderRadius: 13, border: `1.5px solid ${C.primary}`, padding: "14px 18px", marginBottom: 16 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Record Money Received</div>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-end", marginBottom: 10, flexWrap: "wrap" }}>
        <div style={{ flexShrink: 0 }}>
          <div style={fLbl}>Amount (₹)</div>
          <input style={{ ...inp, fontSize: 20, fontWeight: 700, width: 160, marginBottom: 0 }} type="number" placeholder="0" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={fLbl}>Payment Type</div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {PAY_TYPES.map(t => { const s = form.payType === t.id; return <button key={t.id} onClick={() => setForm(f => ({ ...f, payType: t.id }))} style={{ padding: "7px 12px", borderRadius: 8, border: `1.5px solid ${s ? t.col : C.border}`, background: s ? t.bg : "transparent", color: s ? t.col : C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{t.label}</button>; })}
          </div>
        </div>
        <button onClick={save} style={{ flexShrink: 0, padding: "10px 22px", borderRadius: 10, border: "none", background: C.primary, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      </div>
      <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, flexShrink: 0 }}>Via:</span>
        {CHANNELS.map(c => { const s = form.channel === c.id; return <button key={c.id} onClick={() => setForm(f => ({ ...f, channel: c.id }))} style={{ padding: "5px 10px", borderRadius: 7, border: `1.5px solid ${s ? C.primary : C.border}`, background: s ? C.primary : "transparent", color: s ? "#fff" : C.muted, fontSize: 11, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>{c.short.replace("\n", " ")}</button>; })}
        <span style={{ color: C.border, flexShrink: 0 }}>·</span>
        <input style={{ ...inp, margin: 0, width: 140, fontSize: 12, padding: "6px 10px" }} type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
        <input style={{ ...inp, margin: 0, flex: "1 1 140px", fontSize: 12, padding: "6px 10px" }} placeholder="Note (optional)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
        <select style={{ ...selectStyle, margin: 0, fontSize: 12, padding: "6px 10px", flex: "1 1 150px" }} value={form.eventId} onChange={e => setForm(f => ({ ...f, eventId: e.target.value }))}>
          <option value="">— No event —</option>
          {events.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
      </div>
    </div>
  ) : (
    <Card style={{ border: `1.5px solid ${C.primary}`, marginBottom: 14 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Record Money Received</div>
      <label style={fLbl}>Amount (₹)</label>
      <input style={{ ...inp, fontSize: 22, fontWeight: 700 }} type="number" placeholder="0" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
      <label style={fLbl}>Payment Type</label>
      <Chips options={PAY_TYPES} value={form.payType} onChange={v => setForm(f => ({ ...f, payType: v }))} colorKey="col" bgKey="bg" />
      <label style={fLbl}>Received Via</label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 5, marginBottom: 13 }}>
        {CHANNELS.map(c => { const s = form.channel === c.id; return <button key={c.id} onClick={() => setForm(f => ({ ...f, channel: c.id }))} style={{ padding: "7px 4px", borderRadius: 9, border: `1.5px solid ${s ? C.primary : C.border}`, background: s ? C.primary : C.surface, color: s ? "#fff" : C.muted, fontSize: 10, fontWeight: 600, cursor: "pointer", lineHeight: 1.4, textAlign: "center", whiteSpace: "pre-line" }}>{c.short}</button>; })}
      </div>
      <label style={fLbl}>Date</label>
      <input style={inp} type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
      <label style={fLbl}>Link to Event (optional)</label>
      <select style={selectStyle} value={form.eventId} onChange={e => setForm(f => ({ ...f, eventId: e.target.value }))}>
        <option value="">— Not linked —</option>
        {events.map(e => <option key={e.id} value={e.id}>{e.name} ({e.customer})</option>)}
      </select>
      <label style={fLbl}>Note (optional)</label>
      <input style={inp} placeholder="e.g. Cash from Dad" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
      <button style={btn} onClick={save}>Save Entry</button>
    </Card>
  );

  const sortedIncome = [...income].sort((a, b) => b.date > a.date ? 1 : b.date < a.date ? -1 : b.id > a.id ? 1 : -1);
  const visIncome = srch ? sortedIncome.filter(x => { const q = srch.toLowerCase(); return (x.note || "").toLowerCase().includes(q) || gch(x.channel).name.toLowerCase().includes(q) || x.payType.toLowerCase().includes(q); }) : sortedIncome;

  return (
    <div>
      {entryForm}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: bp === "mobile" ? 17 : 22, fontWeight: 700 }}>Income Log</div>
          <span style={{ fontSize: 13, color: C.muted, fontWeight: 600 }}>{INR(total)} total</span>
        </div>
        <input style={{ ...inp, marginBottom: 10 }} placeholder="Search by note, channel or type…" value={srch} onChange={e => setSrch(e.target.value)} />
        {income.length === 0 && <div style={{ textAlign: "center", padding: "40px 0", color: C.muted }}><div style={{ fontSize: 36, marginBottom: 8 }}>⚡</div><div style={{ fontSize: 13 }}>No entries yet.</div></div>}
        {visIncome.length === 0 && income.length > 0 && <div style={{ textAlign: "center", padding: "40px 0", color: C.muted }}><div style={{ fontSize: 36, marginBottom: 8 }}>🔍</div><div style={{ fontSize: 13 }}>No entries match your search.</div></div>}
        <div style={{ display: "grid", gridTemplateColumns: bp === "desktop" ? "1fr 1fr 1fr" : bp === "tablet" ? "1fr 1fr" : "1fr", gap: 10 }}>
          {visIncome.map(entry => {
            const evt = events.find(e => e.id === entry.eventId);
            return (
              <Card key={entry.id} style={{ marginBottom: 0 }}>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 6 }}><PBadge typeId={entry.payType} /><CBadge chanId={entry.channel} />{evt && <span style={{ ...pill, background: "#EDF4EC", color: C.green }}>{evt.name}</span>}</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: C.green }}>{INR(entry.amount)}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{fmtDt(entry.date)}</div>
                {entry.note && <div style={{ fontSize: 12, color: C.text, marginTop: 3 }}>{entry.note}</div>}
                <ActRow onEdit={() => { setET(entry); setModal("edit"); }} onDelete={() => del(entry.id)} confirmId={confirmId} setConfirmId={setCId} myId={entry.id} />
              </Card>
            );
          })}
        </div>
      </div>
      {modal === "edit" && <Modal title="Edit Entry" bp={bp} onClose={() => setModal(null)}><LogForm initial={{ ...editTarget, amount: String(editTarget.amount) }} onSave={saveEdit} onCancel={() => setModal(null)} events={events} /></Modal>}
    </div>
  );
}

export default function IncomeTab({ events, income, onSaveEvents, onSaveIncome, withUndo, bp }) {
  const [sub, setSub] = useState("events");
  return (
    <div>
      <div style={{ display: "flex", background: C.border, borderRadius: 11, padding: 3, marginBottom: 18, maxWidth: 320 }}>
        {[{ id: "events", label: "📋 By Event" }, { id: "log", label: "⚡ Quick Log" }].map(t => (
          <button key={t.id} onClick={() => setSub(t.id)} style={{ flex: 1, padding: "8px 0", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", background: sub === t.id ? C.surface : "transparent", color: sub === t.id ? C.primary : C.muted, boxShadow: sub === t.id ? "0 1px 4px rgba(0,0,0,0.1)" : "none" }}>{t.label}</button>
        ))}
      </div>
      {sub === "events"
        ? <EventsView events={events} onSave={onSaveEvents} withUndo={withUndo} bp={bp} />
        : <QuickLogView income={income} events={events} onSave={onSaveIncome} withUndo={withUndo} bp={bp} />}
    </div>
  );
}
