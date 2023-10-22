import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./variables.css";
// import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AnimatePresence> */}
    <App />
    {/* </AnimatePresence> */}
  </React.StrictMode>
);
