import React from "react";
import Logo from "../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <img className="footer-logo" src={Logo} alt="logo" />
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </li>
          <li>
            <a href="mailto:example@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </li>
        </ul>
        <p>All rights reserved. &copy; Copyright, Little Lemon</p>
      </div>
    </footer>
  );
}

export default Footer;
