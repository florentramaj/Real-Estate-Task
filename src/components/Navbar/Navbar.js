import React from "react";
import Logo from "./../../assets/images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AboutUs from "./../AboutUs/AboutUs";
import Home from "./../Home/Home";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Property</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
