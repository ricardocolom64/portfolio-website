import React from "react";
import SymfonyImage from "../assets/icons/symfony_white-cropped.svg";

function SymfonyLogo() {
  return (
    <a
      href="https://symfony.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={SymfonyImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}Symfony
      </div>
    </a>
  );
}

export default SymfonyLogo;
