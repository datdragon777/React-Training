import React from "react";
import "./Routers.css"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "@layouts";
import { Home, Analytics } from "@pages";

const Routers = () => {
  return (
    <Router>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Routers;
