import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Ad from "./Ad";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page-content">
          <Navbar />
          <Ad />
          <Home />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
