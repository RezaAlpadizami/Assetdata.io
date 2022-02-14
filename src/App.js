import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/login";
import { MenuProfile } from "./components/Menu-profile/menu-profil";
import MenuCompany from "./components/Menu-company/menu-company";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Menuprofile" element={<MenuProfile />} />
        <Route path="/MenuCompany" element={<MenuCompany />} />
      </Routes>
    </div>
  );
}

export default App;
