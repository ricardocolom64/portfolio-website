import React from "react";
import ReactImage from "../assets/icons/React_Logo-cropped.svg";

function ReactLogo() {
  return (
    <div>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <img
          src={ReactImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
      </a>
    </div>
  );
}

export default ReactLogo;
