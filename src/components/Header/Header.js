import Navbar from "./../Navbar/Navbar";
import "./Header.css";
import logo from "./../../assets/icons/g277.svg";

const Header = () => {
  return (
    <header className="header margin-containment">
      <div className="logo-name">
        <img src={logo} alt="logo" />
        <p className="gantari">Real Estate</p>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
