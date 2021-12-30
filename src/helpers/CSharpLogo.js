import React from "react";
import CSharpImage from "../assets/icons/CSharpLogo-cropped.svg";

function CSharpLogo() {
  return (
    <div>
      <img
        src={CSharpImage}
        alt=""
        style={{
          height: "64px",
        }}
      />
    </div>
  );
}

export default CSharpLogo;
