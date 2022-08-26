import React from "react";
import NodeImage from "../assets/icons/nodejs-new-pantone-white.svg";

function NodeLogo() {
  return (
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={NodeImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}Node.js
      </div>
    </a>
  );
}

export default NodeLogo;