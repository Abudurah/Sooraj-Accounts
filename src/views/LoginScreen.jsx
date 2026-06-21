import React, { useState } from 'react';
import { C, fLbl, inp, btn } from '../styles';
import { firebase } from '../firebase';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async e => {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setErr(""); setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email.trim(), password);
    } catch (ex) {
      const msg = {
        "auth/user-not-found":    "No account found with this email.",
        "auth/wrong-password":    "Incorrect password. Please try again.",
        "auth/invalid-email":     "Please enter a valid email address.",
        "auth/too-many-requests": "Too many attempts. Please wait a moment.",
        "auth/invalid-credential":"Incorrect email or password.",
      }[ex.code] || "Sign-in failed. Please try again.";
      setErr(msg);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: C.bg, padding: 24 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: C.primary, marginBottom: 4 }}>Sooraj Caterers</div>
      <div style={{ color: C.accent, fontSize: 10, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", marginBottom: 40 }}>&amp; Events · Accounts</div>
      <form onSubmit={signIn} style={{ background: C.surface, borderRadius: 16, padding: "32px 28px", width: "100%", maxWidth: 360, border: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 20, textAlign: "center" }}>Sign in</div>
        <label style={fLbl}>Email</label>
        <input style={inp} type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
        <label style={fLbl}>Password</label>
        <input style={inp} type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
        {err && <div style={{ fontSize: 12, color: C.red, marginBottom: 12, fontWeight: 600 }}>{err}</div>}
        <button type="submit" disabled={loading} style={{ ...btn, opacity: loading ? 0.6 : 1, marginBottom: 0 }}>
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
