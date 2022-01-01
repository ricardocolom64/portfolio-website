import React from "react";
import BlenderImage from "../assets/icons/Logo_Blender.svg";

function BlenderLogo() {
  return (
    <div style={{ whiteSpace: "pre-line"}}>
      <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
        <img
          src={BlenderImage}
          alt=""
          style={{
            height: "64px",
          }}
        />{"\n"}Blender
      </a>
    </div>
  );
}

export default BlenderLogo;
