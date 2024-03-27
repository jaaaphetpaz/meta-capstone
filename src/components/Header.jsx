import React from "react";
import { Link } from "react-router-dom";
import Banner from "../img/banner1.jpg";

function Header() {
  return (
    <header className="header">
      <div className="banner">
        <div className="banner-desc">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            minus quibusdam perspiciatis atque asperiores accusantium quidem
            voluptate, amet odio ipsum neque beatae non possimus sit
            voluptatibus unde dicta! Nesciunt, voluptatum.
          </p>
        </div>
        <div className="banner-img">
          <img src={Banner} alt="banner" />
        </div>
      </div>
    </header>
  );
}

export default Header;
