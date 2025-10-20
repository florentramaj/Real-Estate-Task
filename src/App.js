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
          {/* <Route path="/src/pages/SingleProduct" element={<SingleProduct />} /> */}
          <Route path="/src/pages/ContactUs" element={<ContactUs />} />
          <Route path="/src/pages/AboutUs" element={<AboutUs />} />
          <Route path="/src/pages/Home" element={<Home />} />
          <Route path="/src/pages/Property" element={<Property />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
