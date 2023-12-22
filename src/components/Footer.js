// Footer.js

import React from "react";
import "./Footer.css"; // Create a separate CSS file for your footer styles

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h3>Company</h3>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="footer-column">
        <h3>Plans</h3>
        <p>Spectator</p>
        <p>Champion</p>
        <p>Contender</p>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>About</p>
      </div>
    </div>
  );
};

export default Footer;
