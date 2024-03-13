import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src="" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint
            architecto commodi. Molestias rem tempore repellendus ab! Maiores
            distinctio aspernatur quae ab, voluptates, rem velit harum, suscipit
            vero est amet?
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address:
              <br />
              1234 Street, CA
            </li>
            <li>
              Phone: <br />
              +1234567890
            </li>
            <li>
              Email <br />
              little@lemon.ca
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
