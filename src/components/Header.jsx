import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            minus quibusdam perspiciatis atque asperiores accusantium quidem
            voluptate, amet odio ipsum neque beatae non possimus sit
            voluptatibus unde dicta! Nesciunt, voluptatum.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src="" alt="banner" />
        </div>
      </section>
    </header>
  );
}

export default Header;
