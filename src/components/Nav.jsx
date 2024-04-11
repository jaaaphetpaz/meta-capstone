import React, { useState } from "react";
import Logo from "../img/logo1.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/">
        <img src={Logo} alt="logo" className="logo" />
      </a>

      {/* mobile nav */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* links */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/unavailable">Menu</a>
        </li>
        <li>
          <a href="/unavailable">About</a>
        </li>
        <li>
          <a href="/booking">Booking</a>
        </li>
        <li>
          <a href="/unavailable">Order Online</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
