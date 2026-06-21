import { INR, gch, pt, fmtDt, getMonthlyData } from './utils';

export function exportReport(mode, events, income, expenses, rangeLabel = "All Time") {
  const d = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const evtRec  = events.reduce((s, e) => s + e.payments.reduce((p, r) => p + r.amount, 0), 0);
  const logRec  = income.reduce((s, i) => s + i.amount, 0);
  const billed  = events.reduce((s, e) => s + (e.totalBill || 0), 0);
  const totalExp = expenses.reduce((s, e) => s + e.amount, 0);
  const net     = (evtRec + logRec) - totalExp;
  const outstd  = billed - evtRec;
  const monthly = getMonthlyData(events, income, expenses);
  const maxMo   = Math.max(...monthly.map(m => Math.max(m.mIn, m.mOut)), 1);

  const css = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'DM Sans',sans-serif;color:#161616;background:#fff;padding:36px;max-width:820px;margin:0 auto;font-size:13px;}h1{font-family:'Playfair Display',serif;color:#182F24;font-size:26px;margin-bottom:3px;}.sub{color:#B5892A;font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;margin-bottom:6px;}.dt{color:#7A7060;font-size:12px;margin-bottom:28px;}.net{background:#182F24;border-radius:10px;padding:20px 24px;margin-bottom:20px;}.nl{font-size:10px;color:rgba(255,255,255,0.5);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;}.nv{font-family:'Playfair Display',serif;font-size:38px;font-weight:700;}.ns{font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px;}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}.stat{background:#F6F2EA;border-radius:8px;padding:12px 14px;}.sl{font-size:9px;color:#7A7060;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;}.sv{font-size:18px;font-weight:700;}h2{font-family:'Playfair Display',serif;color:#182F24;font-size:17px;margin:24px 0 10px;padding-bottom:6px;border-bottom:1px solid #E2D9CE;}table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:14px;}th{text-align:left;padding:7px 10px;background:#F6F2EA;color:#7A7060;font-size:10px;text-transform:uppercase;letter-spacing:0.4px;font-weight:700;}td{padding:7px 10px;border-bottom:1px solid #F0EBE1;vertical-align:top;}.g{color:#276749;font-weight:700;}.r{color:#A83228;font-weight:700;}.sr td{background:#FAFAF7;padding-left:22px;color:#7A7060;}.mb{display:flex;align-items:center;gap:12px;margin-bottom:10px;padding:10px 12px;background:#F6F2EA;border-radius:6px;}.mbl{font-weight:700;font-size:13px;width:90px;flex-shrink:0;}.mbt{flex:1;background:#E2D9CE;height:6px;border-radius:3px;overflow:hidden;}.mbf{height:100%;border-radius:3px;background:#276749;}@media print{body{padding:16px;}@page{margin:1cm;}}`;

  let body = `<div class="net"><div class="nl">Net Position</div><div class="nv" style="color:${net >= 0 ? "#6FDDAA" : "#FF7B7B"}">${INR(net)}</div><div class="ns">Total income minus all expenses</div></div><div class="grid"><div class="stat"><div class="sl">Total Billed</div><div class="sv">${INR(billed)}</div></div><div class="stat"><div class="sl">Event Payments</div><div class="sv" style="color:#276749">${INR(evtRec)}</div></div><div class="stat"><div class="sl">Quick Log Income</div><div class="sv" style="color:#2E6BB8">${INR(logRec)}</div></div><div class="stat"><div class="sl">Total Expenses</div><div class="sv" style="color:#A83228">${INR(totalExp)}</div></div><div class="stat"><div class="sl">Outstanding</div><div class="sv" style="color:#A83228">${INR(outstd)}</div></div><div class="stat"><div class="sl">Events</div><div class="sv">${events.length}</div></div></div>`;

  if (monthly.length) {
    body += `<h2>Monthly Breakdown</h2>`;
    monthly.forEach(m => {
      body += `<div class="mb"><div class="mbl">${m.label}</div><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span class="g">↑ ${INR(m.mIn)}</span><span class="r">↓ ${INR(m.mOut)}</span></div><div class="mbt"><div class="mbf" style="width:${(m.mIn / maxMo * 100).toFixed(0)}%"></div></div></div><div style="font-weight:700;font-size:13px;color:${m.net >= 0 ? "#276749" : "#A83228"};width:80px;text-align:right">${INR(m.net)}</div></div>`;
    });
  }

  if (mode === "standard" || mode === "full") {
    body += `<h2>Events</h2><table><tr><th>Event</th><th>Customer</th><th>Date</th><th>Bill</th><th>Received</th><th>Due</th></tr>`;
    events.forEach(e => {
      const rec = e.payments.reduce((s, p) => s + p.amount, 0);
      const due = e.totalBill - rec;
      body += `<tr><td><strong>${e.name}</strong></td><td>${e.customer || "—"}</td><td>${fmtDt(e.date)}</td><td>${INR(e.totalBill)}</td><td class="g">${INR(rec)}</td><td class="${due > 0 ? "r" : "g"}">${INR(due)}</td></tr>`;
      if (mode === "full") {
        e.payments.forEach(p => {
          body += `<tr class="sr"><td>↳ ${pt(p.payType).label}</td><td colspan="2">${gch(p.channel).name} · ${fmtDt(p.date)}</td><td></td><td class="g">${INR(p.amount)}</td><td></td></tr>`;
        });
      }
    });
    body += `</table><h2>Expenses</h2><table><tr><th>Category</th><th>Channel</th><th>Date</th><th>Note</th><th>Amount</th></tr>`;
    expenses.forEach(e => {
      body += `<tr><td>${e.category}</td><td>${gch(e.channel).name}</td><td>${fmtDt(e.date)}</td><td>${e.note || "—"}</td><td class="r">${INR(e.amount)}</td></tr>`;
    });
    body += `</table>`;
  }

  if (mode === "full" && income.length) {
    body += `<h2>Quick Income Log</h2><table><tr><th>Type</th><th>Channel</th><th>Date</th><th>Note</th><th>Amount</th></tr>`;
    income.forEach(i => {
      body += `<tr><td>${pt(i.payType).label}</td><td>${gch(i.channel).name}</td><td>${fmtDt(i.date)}</td><td>${i.note || "—"}</td><td class="g">${INR(i.amount)}</td></tr>`;
    });
    body += `</table>`;
  }

  const modeLabel = mode === "summary" ? "Summary Only" : mode === "standard" ? "Standard Report" : "Full Detail";
  const win = window.open("", "_blank");
  win.document.write(`<!DOCTYPE html><html><head><title>Sooraj Caterers Report</title><style>${css}</style></head><body><h1>Sooraj Caterers & Events</h1><div class="sub">Account Report · ${modeLabel} · ${rangeLabel}</div><div class="dt">Generated ${d}</div>${body}<div style="color:#ccc;font-size:10px;text-align:center;margin-top:32px">Sooraj Caterers & Events – Est. 1989 · Calicut, Kerala</div></body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 600);
}
