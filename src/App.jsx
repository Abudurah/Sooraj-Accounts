import React, { useState, useEffect, useRef } from 'react';
import { C } from './styles';
import { TABS } from './constants';
import { useBreakpoint } from './utils';
import { firebase, fsdb, DB_ROOT, EVENTS_COL, INCOME_COL, EXPENSES_COL } from './firebase';
import DailySummaryBar from './components/DailySummaryBar';
import IncomeTab from './views/IncomeTab';
import ExpensesTab from './views/ExpensesTab';
import ChannelsTab from './views/ChannelsTab';
import SummaryTab from './views/SummaryTab';
import LoginScreen from './views/LoginScreen';

export default function App() {
  const bp = useBreakpoint();
  const [tab, setTab] = useState("income");
  const [events, setEvents] = useState([]);
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [synced, setSynced] = useState(false);
  const [error, setError] = useState(null);
  const [navHidden, setNavHidden] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [undoPending, setUndoPending] = useState(null);
  const [migrationState, setMigrationState] = useState(null);
  const [migrationCount, setMigrationCount] = useState({ events: 0, income: 0, expenses: 0 });
  const [expTrigger, setExpTrigger] = useState(0);
  const ref = useRef({ events, income, expenses });
  const lastScrollY = useRef(0);
  const undoTimerRef = useRef(null);

  const withUndo = (label, restoreFn) => {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    setUndoPending({ label, restore: restoreFn });
    undoTimerRef.current = setTimeout(() => setUndoPending(null), 5000);
  };
  const commitUndo = () => {
    if (!undoPending) return;
    clearTimeout(undoTimerRef.current);
    if (undoPending.restore) undoPending.restore();
    setUndoPending(null);
  };

  useEffect(() => { ref.current = { events, income, expenses }; }, [events, income, expenses]);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(u => { setUser(u); setAuthLoading(false); });
    const t = setTimeout(() => setAuthLoading(false), 10000);
    return () => { unsub(); clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (!user) return;
    DB_ROOT.get().then(snap => {
      if (!snap.exists) { setMigrationState("done"); return; }
      const d = snap.data() || {};
      const ev = d.events || [], inc = d.income || [], exp = d.expenses || [];
      if (ev.length || inc.length || exp.length) {
        setMigrationCount({ events: ev.length, income: inc.length, expenses: exp.length });
        setMigrationState("needed");
      } else { setMigrationState("done"); }
    }).catch(() => setMigrationState("done"));
  }, [user]);

  const runMigration = async () => {
    setMigrationState("migrating");
    try {
      const snap = await DB_ROOT.get();
      const d = snap.data() || {};
      const ev = d.events || [], inc = d.income || [], exp = d.expenses || [];
      const allOps = [...ev.map(e => ({ col: EVENTS_COL, doc: e })), ...inc.map(i => ({ col: INCOME_COL, doc: i })), ...exp.map(e => ({ col: EXPENSES_COL, doc: e }))];
      for (let i = 0; i < allOps.length; i += 400) {
        const b = fsdb.batch();
        allOps.slice(i, i + 400).forEach(({ col, doc }) => b.set(col.doc(doc.id), doc));
        await b.commit();
      }
      await DB_ROOT.update({ events: firebase.firestore.FieldValue.delete(), income: firebase.firestore.FieldValue.delete(), expenses: firebase.firestore.FieldValue.delete() });
      setMigrationState("done");
    } catch (e) { console.error(e); setMigrationState("error"); }
  };

  useEffect(() => {
    const h = e => { if (e.altKey && (e.key === "e" || e.key === "E")) { e.preventDefault(); setTab("expenses"); setExpTrigger(t => t + 1); } };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const handleScroll = e => {
    const y = e.target.scrollTop;
    if (y > lastScrollY.current + 10) setNavHidden(true);
    else if (y < lastScrollY.current - 10) setNavHidden(false);
    lastScrollY.current = y;
  };

  useEffect(() => {
    if (!user) { setLoading(true); setSynced(false); return; }
    const loaded = { events: false, income: false, expenses: false };
    const checkLoaded = () => { if (loaded.events && loaded.income && loaded.expenses) { setLoading(false); setSynced(true); } };
    const onErr = err => { console.error(err); setError("Cannot connect to Firebase. Check your config."); setLoading(false); };
    const u1 = EVENTS_COL.onSnapshot(snap => { setEvents(snap.docs.map(d => ({ ...d.data(), id: d.id }))); loaded.events = true; checkLoaded(); }, onErr);
    const u2 = INCOME_COL.onSnapshot(snap => { setIncome(snap.docs.map(d => ({ ...d.data(), id: d.id }))); loaded.income = true; checkLoaded(); }, onErr);
    const u3 = EXPENSES_COL.onSnapshot(snap => { setExpenses(snap.docs.map(d => ({ ...d.data(), id: d.id }))); loaded.expenses = true; checkLoaded(); }, onErr);
    return () => { u1(); u2(); u3(); };
  }, [user]);

  const saveEv = async newArr => {
    const old = ref.current.events; setEvents(newArr);
    try { const b = fsdb.batch(); old.forEach(e => { if (!newArr.find(x => x.id === e.id)) b.delete(EVENTS_COL.doc(e.id)); }); newArr.forEach(e => { const p = old.find(x => x.id === e.id); if (!p || JSON.stringify(p) !== JSON.stringify(e)) b.set(EVENTS_COL.doc(e.id), e); }); await b.commit(); }
    catch (e) { console.error(e); setEvents(old); withUndo("Save failed — check your connection.", null); }
  };
  const saveIn = async newArr => {
    const old = ref.current.income; setIncome(newArr);
    try { const b = fsdb.batch(); old.forEach(i => { if (!newArr.find(x => x.id === i.id)) b.delete(INCOME_COL.doc(i.id)); }); newArr.forEach(i => { const p = old.find(x => x.id === i.id); if (!p || JSON.stringify(p) !== JSON.stringify(i)) b.set(INCOME_COL.doc(i.id), i); }); await b.commit(); }
    catch (e) { console.error(e); setIncome(old); withUndo("Save failed — check your connection.", null); }
  };
  const saveEx = async newArr => {
    const old = ref.current.expenses; setExpenses(newArr);
    try { const b = fsdb.batch(); old.forEach(e => { if (!newArr.find(x => x.id === e.id)) b.delete(EXPENSES_COL.doc(e.id)); }); newArr.forEach(e => { const p = old.find(x => x.id === e.id); if (!p || JSON.stringify(p) !== JSON.stringify(e)) b.set(EXPENSES_COL.doc(e.id), e); }); await b.commit(); }
    catch (e) { console.error(e); withUndo("Save failed — retrying…", null); }
  };

  const isMob = bp === "mobile";
  const sideW = bp === "desktop" ? 220 : 68;

  if (authLoading) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: C.bg, gap: 10 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: C.primary, fontWeight: 700 }}>Sooraj Caterers</div>
      <div style={{ fontSize: 12, color: C.muted }}>Checking credentials…</div>
    </div>
  );
  if (!user) return <LoginScreen />;
  if (loading) return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: C.bg }}>
      <div style={{ background: C.primary, padding: isMob ? "12px 16px" : "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div><div style={{ fontFamily: "'Playfair Display',serif", color: "#F6F2EA", fontSize: isMob ? 18 : 22, fontWeight: 700 }}>Sooraj Caterers</div><div style={{ color: C.accent, fontSize: 9, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", marginTop: 2 }}>&amp; Events · Accounts</div></div>
      </div>
      <div style={{ padding: isMob ? "14px" : "24px 28px", flex: 1 }}>
        <div className="sk" style={{ height: 72, borderRadius: 12, marginBottom: 16 }} />
        {[1, 2, 3].map(i => <div key={i} className="sk" style={{ height: 110, borderRadius: 13, marginBottom: 12 }} />)}
      </div>
    </div>
  );
  if (!loading && (migrationState === "needed" || migrationState === "migrating" || migrationState === "error")) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: C.bg, padding: 24 }}>
      <div style={{ background: C.surface, borderRadius: 16, padding: "32px 28px", width: "100%", maxWidth: 440, border: `1px solid ${C.border}`, textAlign: "center" }}>
        <div style={{ fontSize: 42, marginBottom: 14 }}>📦</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: C.primary, marginBottom: 10 }}>One-time data migration</div>
        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8, marginBottom: 20 }}>
          Your existing data is safe and just needs to be moved to the new format.<br />
          <strong style={{ color: C.text }}>{migrationCount.events} events · {migrationCount.income} income entries · {migrationCount.expenses} expenses</strong> found.
        </div>
        {migrationState === "error" && <div style={{ fontSize: 12, color: C.red, marginBottom: 14, fontWeight: 600 }}>⚠ Something went wrong. Please try again.</div>}
        <button onClick={runMigration} disabled={migrationState === "migrating"} style={{ width: "100%", padding: "12px 0", borderRadius: 10, border: "none", background: migrationState === "migrating" ? C.muted : C.green, color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer", marginBottom: 10 }}>
          {migrationState === "migrating" ? "⏳  Migrating your data, please wait…" : "✅  Migrate My Data Now"}
        </button>
        <div style={{ fontSize: 11, color: C.muted }}>This runs once and will not delete any data.</div>
      </div>
    </div>
  );
  if (error) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: C.bg, gap: 12, padding: 24 }}>
      <div style={{ fontSize: 36 }}>⚠️</div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: C.primary, fontWeight: 700, textAlign: "center" }}>Connection Error</div>
      <div style={{ fontSize: 13, color: C.muted, textAlign: "center", lineHeight: 1.7 }}>{error}</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: C.bg }}>
      <header style={{ background: C.primary, padding: isMob ? "12px 16px" : "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0, position: "sticky", top: 0, zIndex: 100 }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", color: "#F6F2EA", fontSize: isMob ? 18 : 22, fontWeight: 700, lineHeight: 1.1 }}>Sooraj Caterers</div>
          <div style={{ color: C.accent, fontSize: 9, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", marginTop: 2 }}>&amp; Events · Accounts</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: synced ? "#6FDDAA" : "#FFD166" }} />
            <span style={{ fontSize: 10, color: "rgba(246,242,234,0.5)", fontWeight: 600 }}>{synced ? "LIVE" : ""}</span>
          </div>
          <button onClick={() => firebase.auth().signOut()} title={`Signed in as ${user.email}\nClick to sign out`} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.accent, color: C.primary, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>{(user.email || "?")[0].toUpperCase()}</div>
          </button>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {!isMob && (
          <aside style={{ width: sideW, background: C.surface, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0, padding: "16px 0", position: "sticky", top: 56, height: "calc(100vh - 56px)", overflowY: "auto" }}>
            {bp === "desktop" && <div style={{ padding: "0 18px 20px", borderBottom: `1px solid ${C.border}`, marginBottom: 8 }}><div style={{ fontSize: 10, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: 1 }}>Navigation</div></div>}
            {TABS.map(t => { const active = tab === t.id; return (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ display: "flex", alignItems: "center", gap: bp === "desktop" ? 12 : 0, justifyContent: bp === "tablet" ? "center" : "flex-start", padding: bp === "desktop" ? "11px 18px" : "12px 0", border: "none", background: active ? C.accentL : "transparent", cursor: "pointer", width: "100%", borderLeft: active ? `3px solid ${C.accent}` : "3px solid transparent", marginBottom: 2 }}>
                <span style={{ fontSize: 20 }}>{t.icon}</span>
                {bp === "desktop" && <span style={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? C.accent : C.muted }}>{t.label}</span>}
              </button>
            ); })}
          </aside>
        )}
        <main onScroll={handleScroll} style={{ flex: 1, overflowY: "auto", padding: tab === "cards" ? 0 : isMob ? "14px 14px calc(80px + env(safe-area-inset-bottom))" : "24px 28px" }}>
          {tab !== "cards" && <DailySummaryBar events={events} income={income} expenses={expenses} />}
          {tab === "income"   && <IncomeTab   events={events} income={income} onSaveEvents={saveEv} onSaveIncome={saveIn} withUndo={withUndo} bp={bp} />}
          {tab === "expenses" && <ExpensesTab expenses={expenses} events={events} income={income} onSave={saveEx} withUndo={withUndo} bp={bp} addTrigger={expTrigger} />}
          {tab === "channels" && <ChannelsTab events={events} income={income} expenses={expenses} bp={bp} />}
          {tab === "summary"  && <SummaryTab  events={events} income={income} expenses={expenses} bp={bp} />}
          {tab === "cards" && <iframe src={`${import.meta.env.BASE_URL}tools/menu-card-generator/dist/index.html`} title="Menu Card Generator" style={{ position: "fixed", top: 56, left: isMob ? 0 : sideW, right: 0, bottom: isMob ? "calc(62px + env(safe-area-inset-bottom))" : 0, border: "none", width: isMob ? "100%" : `calc(100% - ${sideW}px)`, height: isMob ? `calc(100vh - 56px - 62px - env(safe-area-inset-bottom))` : `calc(100vh - 56px)` }} />}
        </main>
      </div>

      {isMob && (
        <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: C.surface, borderTop: `1px solid ${C.border}`, display: "flex", flexDirection: "column", zIndex: 200, transform: navHidden ? "translateY(100%)" : "translateY(0)", transition: "transform 0.28s ease" }}>
          <div style={{ display: "flex", height: 62 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => { setTab(t.id); setNavHidden(false); }} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "none", background: "transparent", cursor: "pointer", gap: 2 }}>
                <span style={{ fontSize: 20 }}>{t.icon}</span>
                <span style={{ fontSize: 10, fontWeight: tab === t.id ? 700 : 500, color: tab === t.id ? C.primary : C.muted }}>{t.label}</span>
              </button>
            ))}
          </div>
          <div style={{ height: "env(safe-area-inset-bottom)", background: C.surface }} />
        </nav>
      )}

      {undoPending && (
        <div style={{ position: "fixed", bottom: isMob ? 78 : 24, left: "50%", transform: "translateX(-50%)", background: undoPending.restore ? C.primary : C.red, color: "#F6F2EA", borderRadius: 12, padding: "12px 18px", display: "flex", alignItems: "center", gap: 14, zIndex: 1000, boxShadow: "0 4px 24px rgba(0,0,0,0.35)", whiteSpace: "nowrap" }}>
          <span style={{ fontSize: 13 }}>{undoPending.label}</span>
          {undoPending.restore && <button onClick={commitUndo} style={{ background: C.accent, color: C.primary, border: "none", borderRadius: 7, padding: "6px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Undo</button>}
        </div>
      )}
    </div>
  );
}
