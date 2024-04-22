import React from "react";
import Banner from "../img/banner2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="about-title">Operation Hours</h2>
        <div className="banner banner-about">
          <div className="banner__content banner__content-about">
            <div>
              <h4>Monday - Friday</h4>
              <ul>
                <li>Brunch: 10:00 AM - 2:30PM</li>
                <li>Dinner: 5:00 PM - 1:30AM</li>
              </ul>
            </div>
            <div>
              <h4>Saturday - Sunday</h4>
              <ul>
                <li>Brunch: 10:00 AM - 2:30PM</li>
                <li>Dinner: 5:00 PM - 11:30PM</li>
              </ul>
            </div>
          </div>
          <div className="banner__image">
            <img src={Banner} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
