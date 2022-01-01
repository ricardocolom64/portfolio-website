import React from "react";
import HTMLImage from "../assets/icons/HTML5_Badge-cropped.svg";

function HTMLLogo() {
  return (
    <div style={{ whiteSpace: "pre-line"}}>
        <img
          src={HTMLImage}
          alt=""
          style={{
            height: "64px",
          }}
        />{"\n"}HTML
    </div>
  );
}

export default HTMLLogo;
