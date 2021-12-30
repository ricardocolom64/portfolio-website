import React from "react";
import HTMLImage from "../assets/icons/HTML5_Logo_White-cropped.svg";

function HTMLLogo() {
  return (
    <div>
        <img
          src={HTMLImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
    </div>
  );
}

export default HTMLLogo;
