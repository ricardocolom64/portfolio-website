import React from "react";
import ReactPlayer from "react-player";
import "../styles/ProjectPage.css";
import ScrollToTop from "../helpers/ScrollToTop";
import logo from "../assets/projects/tod/logo.png";
import ReactNativeLogo from "../helpers/ReactNativeLogo";
import HTMLLogo from "../helpers/HTMLLogo";
import CSSLogo from "../helpers/CSSLogo";

function TurthOrDrink() {
  return (
    <div className="projectPage" id="tod">
      <ScrollToTop />
      <div className="mediaContent">
        <div className="no-carousel">
          <iframe
            width="560"
            height="405"
            src="https://www.youtube.com/embed/tARY4LJLU1o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="header">
            <img src={logo} alt="" style={{ height: "140px" }} />
            {/* Snackability */}
          </div>
        </div>
        <div className="body" style={{ whiteSpace: "pre-line" }}>
          <p>
            &emsp;&emsp;&emsp;&emsp;The viral Truth or Drink card game by Cut, now as an unofficial mobile port. This application was tested at various social events by directing others to ask each other the fun yet intensely personal questions displayed on each card.
            {"\n\n"}
            &emsp;&emsp;&emsp;&emsp;You can cycle through each of the four card categories to play with a total of 216 disctinct cards.
            {"\n\n"}
          </p>
        </div>
      </div>
      <div className="tech">
        <div className="tech-header">technologiesUsed</div>
        <div className="tech-content">
          <div className="tech-images">
            <ReactNativeLogo />
            <HTMLLogo />
            <CSSLogo />
          </div>
        </div>
      </div>
      <div className="links">
        <div className="links-header">links</div>
        <div className="links-body">
          <div className="project-link">
            <a
              href="https://github.com/ricardocolom64/truth-or-drink"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repository
            </a>{" "}
            <i class="fa fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurthOrDrink;
