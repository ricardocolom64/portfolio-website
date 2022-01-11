import React from "react";
import ReactPlayer from "react-player";
import "../styles/ProjectPage.css";
import ScrollToTop from "../helpers/ScrollToTop";
import ReactLogo from "../helpers/ReactLogo";
import HTMLLogo from "../helpers/HTMLLogo";
import CSSLogo from "../helpers/CSSLogo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

//#region IMAGES
import image1 from "../assets/projects/website/thumbnail-lazy.png";
//#endregion

function SitePage() {
  return (
    <div className="projectPage" id="site">   
    <ScrollToTop />
      <div className="mediaContent">
        <div className="no-carousel">
          <img src={image1} height="auto" />
        </div>
      </div>
      <div className="content">
        <div className="header">
          <h1>This Website</h1>
        </div>
        <div className="body" style={{ whiteSpace: "pre-line" }}>
          <p>
            &emsp;&emsp;&emsp;&emsp;This website is an ever-growing project that
            I constantly change and append to as I become more familiar with
            different technologies. It was essentially my first exposure to
            React, HTML, and CSS, and development began in late December 2021.
          </p>
        </div>
      </div>
      <div className="tech">
        <div className="tech-header">technologiesUsed</div>
        <div className="tech-content">
          <div className="tech-images">
            <ReactLogo />
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
              href="https://github.com/ricardocolom64/portfolio-website"
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

export default SitePage;
