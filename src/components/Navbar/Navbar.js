import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar gantari">
      <ul>
        <li>
          <NavLink to="/src/pages/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/src/pages/Property">Property</NavLink>
        </li>
        <li>
          <NavLink to="/src/pages/AboutUs">About us</NavLink>
        </li>
        <li>
          <NavLink to="/src/pages/ContactUs">Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
