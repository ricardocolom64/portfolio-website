import React from "react";
import BlenderImage from "../assets/icons/Logo_Blender.svg";

function BlenderLogo() {
  return (
    <a
      href="https://www.blender.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={BlenderImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}Blender
      </div>
    </a>
  );
}

export default BlenderLogo;
