import React from "react";
import Logo from "../img/logo1.png";

function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <img className="footer-logo" src={Logo} alt="logo" />
        <p>All rights reserved. &copy; Copyright, Little Lemon</p>
      </div>
    </footer>
  );
}

export default Footer;
