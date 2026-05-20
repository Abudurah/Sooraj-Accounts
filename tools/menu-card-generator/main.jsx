import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./menu-card-generator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
