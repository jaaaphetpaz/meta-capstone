import React from "react";
import Banner from "../img/banner2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="landing">
      <header>
        <div className="banner">
          <div className="banner__content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              officiis deserunt alias inventore placeat hic tempore nisi
              voluptates labore voluptatem sequi dolores quaerat maiores.
              Nostrum dolorum consequuntur animi at officia.
            </p>
            <Link to={"/booking"}>
              <button aria-label="On Click">Reserve Table</button>
            </Link>
          </div>
          <div className="banner__image">
            <img src={Banner} alt="Banner Image" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
