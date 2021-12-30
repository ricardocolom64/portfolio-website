import React from "react";
import "../styles/Introduction.css";
import Selfie2 from "../assets/selfie2.png";

function Introduction() {
  return (
    <div className="introduction" id="home">
      <div className="introductionBlock">
        <div className="leftSide">
          <div className="header">
            I'm <b style={{ color: "#E43639" }}>Ricardo Colom</b>
          </div>
          <div className="caption" style={{ whiteSpace: "pre-line" }}>
            an aspiring <strong>software developer</strong> from South
            Florida
          </div>
        </div>
        {/* <div className="rightSide">
          <img
            src={Selfie2}
            alt=""
            style={{
              borderRadius: "25px",
              height: "324px",
              boxShadow: "0px 3px 8px black",
            }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Introduction;
