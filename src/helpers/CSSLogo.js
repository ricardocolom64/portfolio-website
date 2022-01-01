import React from "react";
import CSSImage from "../assets/icons/CSS3_logo-cropped.svg";

function CSSLogo() {
  return (
    <div style={{ whiteSpace: "pre-line"}}>
        <img
          src={CSSImage}
          alt=""
          style={{
            height: "64px",
          }}
        />{"\n"}CSS
    </div>
  );
}

export default CSSLogo;
