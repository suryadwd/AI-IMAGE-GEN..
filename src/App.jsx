import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-21 min-h-screen bg-gradient-to-b from-teal-100 to-orange-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
