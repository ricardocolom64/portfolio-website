import React from "react";
import FirebaseImage from "../assets/icons/firebase_logo.svg";

function FirebaseLogo() {
  return (
    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={FirebaseImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}Firebase
      </div>
    </a>
  );
}

export default FirebaseLogo;