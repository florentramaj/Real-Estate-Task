import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
