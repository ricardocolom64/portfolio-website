import React from "react";
import CSSImage from "../assets/icons/CSS3_Logo_White-cropped.svg";

function CSSLogo() {
  return (
    <div>
        <img
          src={CSSImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
    </div>
  );
}

export default CSSLogo;
