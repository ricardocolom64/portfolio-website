import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="socials">
          <a
            href="https://github.com/ricardocolom64/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-colom-8a76321b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>
        <div className="footer-caption" style={{ whiteSpace: "pre-line" }}>
          Thanks for checking out my website{" "}
          <span role="img" aria-label="beaming-face-with-smiling-eyes">
            😁
          </span>
          {"\n\n"}Ricardo Colom - 2022
        </div>
      </div>
    </div>
  );
}

export default Footer;
