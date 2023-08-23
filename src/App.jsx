// Import necessary components and styles
import "./App.css";
import SiginUp from "./components/component/SiginUp/SiginUp";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";

import HomePage from "./components/pages/HomePage";

// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App m-[30px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sigin" element={<SiginUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
