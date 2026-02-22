import React from "react";
import "./App.css";
import "./theme.css";
import Landing from "./components/LandingPage";
import AllProjects from "./components/AllProjects";
import { ThemeProvider } from "./context/ThemeContext";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
