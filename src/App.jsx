import React, { useState } from "react"; // Don't forget to import React
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteSettings from "./Router/SettingsRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {RouteSettings.map((item) => (
            <Route
              key={item.id}
              exact={item.exact}
              element={item.component}
              path={item.path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
