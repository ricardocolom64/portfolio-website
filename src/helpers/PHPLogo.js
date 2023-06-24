import React from "react";
import PHPImage from "../assets/icons/PHP-logo-fixed.svg";

function PHPLogo() {
  return (
    <a
      href="https://www.php.net/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={PHPImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}PHP
      </div>
    </a>
  );
}

export default PHPLogo;
