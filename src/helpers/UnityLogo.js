import React from "react";
import UnityImage from "../assets/icons/U_Logo_White_RGB-cropped.svg";

function UnityLogo() {
  return (
    <div>
      <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={UnityImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
      </a>
    </div>
  );
}

export default UnityLogo;
