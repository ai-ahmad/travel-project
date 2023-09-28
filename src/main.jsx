// index.js (or your main entry point)
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./components/context/AuthContext";


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
