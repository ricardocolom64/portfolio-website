import React from "react";
import "../styles/AboutMe.css";

// Handy getAge function courtesy of https://stackoverflow.com/questions/10008050/get-age-from-birthdate
// This is literally so that I don't forget to manually change my age every time I have a birthday...
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMeBlock">
        <div className="leftSide" style={{ whiteSpace: "pre-line" }}>
          <span role="img" aria-label="man-dancing">
            🕺
          </span>
          <div className="bottom-icons">
            <span role="img" aria-label="gaming-controller">
              🎮
            </span>
            <span role="img" aria-label="weight-lifter">
              🏋🏻‍♂️
            </span>
          </div>
        </div>

        <div className="rightSide">
          <div className="header">
            <text1>aboutMe</text1>
          </div>
          <div className="body">
            <text1 style={{ whiteSpace: "pre-line" }}>
              I am{" "}
              <text2 className="tooltip">
                <strong>{getAge("05/01/2001")}</strong>
                <span class="tooltiptext">
                  This updates automatically, trust me...
                </span>
              </text2>{" "}
              years old and have a passion for creating polished{" "}
              <strong>apps and software</strong>. My hobbies include hanging out
              with friends, dancing, playing video games, and weightlifting.
            </text1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
