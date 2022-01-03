import React from "react";
import ReactImage from "../assets/icons/React_Logo-cropped.svg";

function ReactLogo() {
  return (
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={ReactImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}ReactJS
      </div>
    </a>
  );
}

export default ReactLogo;
