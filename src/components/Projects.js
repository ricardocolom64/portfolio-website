import React from "react";
import {Link} from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList.js";
import ProjectItem from "./ProjectItem";
import ATMFThumbnail from "../assets/projects/atmf/image1.png";
import SiteThumbnail from "../assets/projects/website/thumbnail-lazy.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="content">
        <div className="header">projects</div>
        {/* <div className="body">Click each card for more info</div> */}
        {/* <div className="projectList">
          {ProjectList.map((projectItem, key) => {
            return (
              <ProjectItem
                key={key}
                image={projectItem.image}
                name={projectItem.name}
                desc={projectItem.desc}
              />
            );
          })}
        </div> */}
        <div className="project-list">
          <div className="project" id="site">
            <div className="left-side">
              <div className="left-side-content">
                <img src={SiteThumbnail} alt="" height="auto" />
                <div className="project-type">
                  <i class="fa fa-desktop" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="project-header">
                <h1>This Website</h1>
              </div>
              <div className="project-body" style={{ whiteSpace: "pre-line" }}>
                &emsp;My first time working with React.js, HTML, and CSS. Development
                began in late December 2021.
              </div>
              <div className="project-caption">
                <Link to="/projects/site">
                  <div className="project-learn-more">
                    <div className="learn-more-button">
                      Learn more{" "}
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="project" id="atmf">
            <div className="left-side">
              <div className="left-side-content">
                <img src={ATMFThumbnail} alt="" height="auto" />
                <div className="project-type">
                  <i class="fa fa-gamepad" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="project-header">
                <h1>Aliens Took My Friend</h1>
              </div>
              <div className="project-body" style={{ whiteSpace: "pre-line" }}>
                &emsp;A short top-down adventure game a friend and I developed
                where your fellow astronaut friend has been kidnapped and taken
                onto an alien spaceship.
              </div>
              <div className="project-caption">
                <Link to="/projects/atmf">
                  <div className="project-learn-more">
                    <div className="learn-more-button">
                      Learn more{" "}
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
