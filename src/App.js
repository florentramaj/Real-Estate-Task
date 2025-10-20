import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ad from "./components/Ad/Ad";
import Header from "./components/Header/Header";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Property from "./pages/Property/Property";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/property" element={<Property />} />
          <Route path="/single-product" element={<SingleProduct />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
