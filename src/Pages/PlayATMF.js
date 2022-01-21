import React from "react";
import ATMFGame from "../components/ATMFGame";
import ScrollToTop from "../helpers/ScrollToTop";
import "../styles/HTMLGame.css";

function PlayATMF() {
  return (
    <div className="playATMF">
      <ScrollToTop />
      <ATMFGame />
      <div className="controls">
        <div className="header">controls</div>
        <div className="body" style={{ whiteSpace: "pre-line" }}>
          <b>WASD</b> to move{"\n"}
          <b>MOVE MOUSE</b> to aim{"\n"}
          <b>LEFT CLICK</b> to shoot{"\n"}
          <b>SHIFT</b> to sprint{"\n"}
          <b>ESC</b> to pause
        </div>
      </div>
      <div className="incompatible-on-mobile" style={{ whiteSpace: "pre-line" }}>
        <h1>Whoops... {"\n\n"}This page is incompatible on mobile, please try on a desktop computer.</h1>
      </div>
    </div>
  );
}

export default PlayATMF;
