import React from "react";
import UnityImage from "../assets/icons/U_Logo_White_RGB-cropped.svg";

function UnityLogo() {
  return (
    <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={UnityImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}Unity
      </div>
    </a>
  );
}

export default UnityLogo;
