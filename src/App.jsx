// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Error404 from "./Components/Error404/Error404";
import AssistantsSpace from "./Components/Pages/AssistantsSpace/AssistantsSpace";
import Subscriptions from "./Components/Pages/Subscriptions/Subscriptions";
import StatisticsHistory from "./Components/Pages/AssistantsSpace/StatisticsHistory";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  // Define routes where the Header and Footer should NOT appear
  const noHeaderOrFooter = ["/login", "/signup"];

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!noHeaderOrFooter.includes(location.pathname) && <Header />}
      {!noHeaderOrFooter.includes(location.pathname) && <Sidebar />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/assistantsspace"
          element={<AssistantsSpace onOpenHistory={openSidebar} />}
        />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* Sidebar for StatisticsHistory */}
      {showSidebar && (
        <div className={`sidebar-overlay ${showSidebar ? "open" : ""}`}>
          <StatisticsHistory onClose={closeSidebar} />
        </div>
      )}

      {!noHeaderOrFooter.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
