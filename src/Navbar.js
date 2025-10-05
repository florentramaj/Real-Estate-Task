import React from "react";
import Logo from "./assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/">Property</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
