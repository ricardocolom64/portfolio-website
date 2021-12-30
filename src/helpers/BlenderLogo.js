import React from "react";
import BlenderImage from "../assets/icons/Logo_Blender.svg";

function BlenderLogo() {
  return (
    <div>
      <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
        <img
          src={BlenderImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
      </a>
    </div>
  );
}

export default BlenderLogo;
