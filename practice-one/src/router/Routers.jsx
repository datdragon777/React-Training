import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LeftSidebar } from "@layouts";
import { Home, Analytics } from "@pages";

const Routers = () => {
  return (
    <Router>
      <aside>
        <LeftSidebar />
      </aside>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
};

export default Routers;
