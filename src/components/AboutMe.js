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
          {/* <img
            src={Groove}
            alt=""
            style={{
              borderRadius: "25px",
              height: "324px",
              boxShadow: "0px 3px 8px black",
            }}
          /> */}
          <span role="img" aria-label="man-raising-hand">
            👨🏻‍🎓
          </span>
          <div className="bottom-icons">
            <span role="img" aria-label="computer-keyboard">
              🎮
            </span>
            <span role="img" aria-label="computer-keyboard">
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
              years old and a senior at Florida International University,
              pursuing a bachelor's degree in <strong>Computer Science</strong>{" "}
              and a minor in <strong>Mathematical Sciences</strong>.{"\n\n"}I am
              driven and have a passion for creating polished{" "}
              <strong>apps and software</strong>. My hobbies include hanging out
              with friends, playing video games, and going to the gym.
            </text1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
