import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solver from "./pages/Solver";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solver" element={<Solver />} />
      </Routes>
    
  );
};

export default App;
