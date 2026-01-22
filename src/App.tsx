import React from "react";
import "./App.css";
import Landing from "./components/LandingPage";
import AllProjects from "./components/AllProjects";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
}

export default App;
