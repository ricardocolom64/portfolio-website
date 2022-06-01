import React from "react";
import "../styles/Introduction.css";
import { HashLink } from "react-router-hash-link";
import UnityLogo from "../helpers/UnityLogo";
import CSharpLogo from "../helpers/CSharpLogo";
import ReactLogo from "../helpers/ReactLogo";
import HTMLLogo from "../helpers/HTMLLogo";
import CSSLogo from "../helpers/CSSLogo";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -46;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Introduction() {
  return (
    <div className="introduction" id="home">
      <div className="introduction-content">
        <div className="introductionBlock">
          <div className="leftSide">
            <div className="header">
              I'm <b>Ricardo Colom</b>
            </div>
            <div className="caption" style={{ whiteSpace: "pre-line" }}>
              a <strong>developer</strong> from South Florida
            </div>
          </div>
          <div className="rightSide">
            <span role="img" aria-label="man-raising-hand">
              🙋🏻‍♂️
            </span>
            <span role="img" aria-label="computer-keyboard">
              ⌨️
            </span>
          </div>
        </div>
        <div className="tech-icons">
          <div className="content">
            <ReactLogo />
            <HTMLLogo />
            <CSSLogo />
            <UnityLogo />
            <CSharpLogo />
          </div>
        </div>
        <div className="call-to-action">
          <div className="content">
            <HashLink smooth to="/#projects" scroll={el => scrollWithOffset(el)}>
              <div className="project-button">
                Check out what I've worked on
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
