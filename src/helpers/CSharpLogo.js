import React from "react";
import CSharpImage from "../assets/icons/CSharpLogo-cropped.svg";

function CSharpLogo() {
  return (
    <div style={{ whiteSpace: "pre-line"}}>
      <img
        src={CSharpImage}
        alt=""
        style={{
          height: "64px",
        }}
      />{"\n"}C#
    </div>
  );
}

export default CSharpLogo;
