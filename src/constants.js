export const CHANNELS = [
  { id: "c1", name: "Dad's Personal Bank", short: "Bank\n(Dad)",  holder: "Dad" },
  { id: "c2", name: "Company Acc #1",       short: "Co.\nAcc #1", holder: "Dad" },
  { id: "c3", name: "Cash in Hand (Dad)",   short: "Cash\n(Dad)", holder: "Dad" },
  { id: "c4", name: "Company Acc #2",       short: "Co.\nAcc #2", holder: "Brother" },
  { id: "c5", name: "Brother's Account",    short: "Bro.\nAcc",   holder: "Brother" },
];

export const EXP_CHANNELS = [
  { id: "c0", name: "Cash (General)",     holder: "General" },
  { id: "c1", name: "Dad's Personal Bank", holder: "Dad" },
  { id: "c2", name: "Company Acc #1",     holder: "Dad" },
  { id: "c3", name: "Cash in Hand (Dad)", holder: "Dad" },
  { id: "c4", name: "Company Acc #2",     holder: "Brother" },
  { id: "c5", name: "Brother's Account",  holder: "Brother" },
];

export const ALL_CH = [...EXP_CHANNELS];

export const PAY_TYPES = [
  { id: "Advance", label: "Advance",   col: "#2E6BB8", bg: "#E6EFFA" },
  { id: "Partial", label: "Partial",   col: "#B56010", bg: "#FAF0E2" },
  { id: "Final",   label: "Final",     col: "#276749", bg: "#E3F0E8" },
  { id: "Full",    label: "Full Paid", col: "#276749", bg: "#E3F0E8" },
];

export const EXP_CATS = ["Raw Materials", "Labor / Staff", "Transport", "Rentals", "Miscellaneous"];

export const MOS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const TABS = [
  { id: "income",   icon: "💰", label: "Income" },
  { id: "expenses", icon: "💸", label: "Expenses" },
  { id: "channels", icon: "🏦", label: "Channels" },
  { id: "summary",  icon: "📊", label: "Summary" },
  { id: "cards",    icon: "🃏", label: "Menu Cards" },
];
