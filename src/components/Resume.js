import React from "react";
import "../styles/Resume.css";

const resume = "/Ricardo Colom - Resume [December 2021].pdf";

function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="content">
        <div className="divider"></div>
        <div className="header">resume</div>
        <div className="body">A copy can be found...</div>
        {/* <div className="here-button">
          <a
            className="link"
            href={process.env.PUBLIC_URL + Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a> */}
        <div className="resume-link">
          <div className="content">
            <a
              className="link"
              href={process.env.PUBLIC_URL + resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="here-button">Here</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
