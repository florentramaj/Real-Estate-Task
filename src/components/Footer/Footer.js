import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer class="footer">
        <div class="footer-section">
          <h4>Opening hours</h4>
          <p>Mon-Fri 6:00AM - 8:00PM</p>
          <p>Sat-Sun 8:00AM - 6:00PM</p>
        </div>

        <div class="footer-section">
          <h4>Find us</h4>
          <p>
            8911 Tanglewood Ave.
            <br />
            Capitol Heights, MD 20743
          </p>
          <p>
            (566) 237-4687
            <br />
            <a href="mailto:moinefou@hotmail.com">moinefou@hotmail.com</a>
          </p>
        </div>

        <div class="footer-section">
          <h4>Property</h4>
          <ul>
            <li>Apartment</li>
            <li>Villas</li>
            <li>Houses</li>
            <li>Commercial</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="./Home.js">Home</a>
            </li>
            <li>
              <a href="#Property">Property</a>
            </li>
            <li>
              <a href="#About Us">About us</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter</p>
          <form class="newsletter-form">
            <div class="input-container">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </footer>
      <div className="bottom-footer2">
        <hr class="footer-line" />
        <p id="copyright">© Copyright Real Estate 2025. Design by Figma.guru</p>
      </div>
    </div>
  );
};

export default Footer;
