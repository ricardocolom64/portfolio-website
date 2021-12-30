import React from "react";
import ReactPlayer from "react-player";
import "../styles/ProjectPage.css";
import logo from "../assets/projects/atmf/logo.png";
import DiscordLogo from "../helpers/DiscordLogo";
import BlenderLogo from "../helpers/BlenderLogo";
import UnityLogo from "../helpers/UnityLogo";
import CSharpLogo from "../helpers/CSharpLogo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

//#region ATMF IMAGES
import image1 from "../assets/projects/atmf/image1.png";
import image2 from "../assets/projects/atmf/image2.png";
import image3 from "../assets/projects/atmf/image3.png";
import image4 from "../assets/projects/atmf/image4.png";
import image5 from "../assets/projects/atmf/image5.png";
import image6 from "../assets/projects/atmf/image6.png";
//#endregion

function SitePage() {
  return (
    <div className="projectPage" id="site">
      <div className="mediaContent">
        test
      </div>
      <div className="content">
        <div className="header">
          <h1>Aliens Took My Friend</h1>
        </div>
        <div className="body" style={{ whiteSpace: "pre-line" }}>
          &emsp;&emsp;&emsp;&emsp;This is sample text
        </div>
      </div>
      <div className="tech">
        <div className="tech-header">technologiesUsed</div>
        <div className="tech-content">
          <div className="tech-images">
            <UnityLogo />
            <CSharpLogo />
            <BlenderLogo />
            <DiscordLogo />
          </div>
        </div>
      </div>
      <div className="links">
        <div className="links-header">links</div>
        <a
          className="project-link"
          href="https://github.com/ricardocolom64/AliensTookMyFriend"
          target="_blank"
          rel="noopener noreferrer"
        >
          github repository
        </a>
        <a className="project-link" href="/projects/atmf/play">
          play on this site
        </a>
      </div>
    </div>
  );
}

export default SitePage;
