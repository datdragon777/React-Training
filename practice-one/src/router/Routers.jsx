import React from "react";
import "./Routers.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "@layouts";
import {
  Home,
  Analytics,
  Invoice,
  Schedule,
  Calendar,
  Messages,
  Notification,
  Settings,
} from "@pages";

const Routers = () => {
  return (
    <Router>
      <div className="contents">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Routers;
