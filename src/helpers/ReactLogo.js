import React from "react";
import ReactImage from "../assets/icons/React_Logo-cropped.svg";

function ReactLogo() {
  return (
    <div style={{ whiteSpace: "pre-line"}}>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <img
          src={ReactImage}
          alt=""
          style={{
            height: "64px",
          }}
        />{"\n"}ReactJS
      </a>
    </div>
  );
}

export default ReactLogo;
