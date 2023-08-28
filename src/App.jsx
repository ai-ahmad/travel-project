import React from "react"; // Don't forget to import React
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteSettings from "./Router/SettingsRouter";
import MyModal from "./components/component/Modal/Modal";

function App() {
  console.log(RouteSettings);
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

      <MyModal />
    </div>
  );
}

export default App;
