import React from "react";
import "./Routers.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Sidebar, ProfileInfo } from "@layouts";
import { Home, Analytics } from "@pages";

const Routers = () => {
  return (
    <Router>
      <div className="contents">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <ProfileInfo />
      </div>
    </Router>
  );
};

export default Routers;
