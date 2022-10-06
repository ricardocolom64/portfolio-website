import React from "react";
import ReactImage from "../assets/icons/React_Logo-cropped.svg";

function ReactNativeLogo() {
  return (
    <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={ReactImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}React Native
      </div>
    </a>
  );
}

export default ReactNativeLogo;
