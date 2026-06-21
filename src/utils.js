import { useState, useEffect } from 'react';
import { MOS, ALL_CH, PAY_TYPES } from './constants';

export const INR = n => "₹" + Number(n || 0).toLocaleString("en-IN");
export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
export const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
export const localDateStr = d =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const fmtDt = s => { if (!s) return ""; const [y, m, d] = s.split("-"); return `${d} ${MOS[+m - 1]} ${y}`; };
export const fmtMo = s => { if (!s) return ""; const [y, m] = s.split("-"); return `${MOS[+m - 1]} ${y}`; };
export const isOvd = s => s && s < today();
export const pt  = id => PAY_TYPES.find(p => p.id === id) || PAY_TYPES[0];
export const gch = id => ALL_CH.find(c => c.id === id) || ALL_CH[0];

export function compressImage(file, cb) {
  const r = new FileReader();
  r.onload = e => {
    const img = new Image();
    img.onload = () => {
      const MAX = 600, cv = document.createElement("canvas");
      let w = img.width, h = img.height;
      if (w > MAX) { h = h * MAX / w; w = MAX; }
      if (h > MAX) { w = w * MAX / h; h = MAX; }
      cv.width = w; cv.height = h;
      cv.getContext("2d").drawImage(img, 0, 0, w, h);
      cb(cv.toDataURL("image/jpeg", 0.5));
    };
    img.src = e.target.result;
  };
  r.readAsDataURL(file);
}

export function getMonthlyData(events, income, expenses) {
  const dates = [
    ...events.flatMap(e => e.payments.map(p => p.date)),
    ...income.map(i => i.date),
    ...expenses.map(e => e.date),
  ].filter(Boolean);
  const months = [...new Set(dates.map(d => d.slice(0, 7)))].sort().reverse();
  return months.map(mo => {
    const mIn = [
      ...events.flatMap(e => e.payments.filter(p => p.date?.startsWith(mo)).map(p => p.amount)),
      ...income.filter(i => i.date?.startsWith(mo)).map(i => i.amount),
    ].reduce((s, a) => s + a, 0);
    const mOut = expenses.filter(e => e.date?.startsWith(mo)).reduce((s, e) => s + e.amount, 0);
    return { mo, label: fmtMo(mo), mIn, mOut, net: mIn - mOut };
  });
}

export function useBreakpoint() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  if (w >= 1280) return "desktop";
  if (w >= 768) return "tablet";
  return "mobile";
}
