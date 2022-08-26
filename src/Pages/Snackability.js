import React from "react";
import ReactPlayer from "react-player";
import "../styles/ProjectPage.css";
import ScrollToTop from "../helpers/ScrollToTop";
import logo from "../assets/projects/snackability/logo.png";
import ReactLogo from "../helpers/ReactLogo";
import NodeLogo from "../helpers/NodeLogo";
import FirebaseLogo from "../helpers/FirebaseLogo";
import HTMLLogo from "../helpers/HTMLLogo";
import CSSLogo from "../helpers/CSSLogo";

function SitePage() {
  return (
    <div className="projectPage" id="snackability">
      <ScrollToTop />
      <div className="mediaContent">
        <div className="no-carousel">
          <iframe
            width="560"
            height="405"
            src="https://www.youtube.com/embed/8-Sy57DKSmI"
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
            &emsp;&emsp;&emsp;&emsp;Snackability is a web application developed with other Florida International University (FIU) students made with the purpose of encouraging people to make more nutritional snack choices.
            {"\n\n"}
            &emsp;&emsp;&emsp;&emsp;My team and I followed standard Scrum protocol, having daily standup meetings and organizing our workload through sprints that would last two weeks. Every other Monday we met with our product owner, Dr. Christina Palacios, associate professor in the Department of Dietetics and Nutrition at FIU, to ensure that we delivered what was expected of us.
            {"\n\n"}
            &emsp;&emsp;&emsp;&emsp;As the programming lead, I:

            <ul>
            <li>Promoted gamification by prototyping and then deploying a user achievement system unique to each user.</li>
            <li>Established all achievement rules and arranged achievement icons using stock images.</li>
            <li>Implemented system to export all user data as a custom CSV file.</li>
            <li>Worked with the backend team to ensure that data was sent and retrieved in the proper format to and from Firebase.
            </li>
          </ul>
            &emsp;&emsp;&emsp;&emsp;The application is currently private and property of FIU.
            {"\n\n"}
          </p>
        </div>
      </div>
      <div className="tech">
        <div className="tech-header">technologiesUsed</div>
        <div className="tech-content">
          <div className="tech-images">
            <ReactLogo />
            <NodeLogo />
            <FirebaseLogo />
            <HTMLLogo />
            <CSSLogo />
          </div>
        </div>
      </div>
      {/* <div className="links">
        <div className="links-header">links</div>
        <div className="links-body">
          <div className="project-link">
            <a
              href="https://snackability.fiu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              official site
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SitePage;
