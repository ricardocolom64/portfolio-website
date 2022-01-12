import React from "react";
import { Link } from "react-router-dom";
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
        <div className="project-list">
          <ProjectItem
            id="site"
            name="This Website"
            desc="&emsp;My first time working with React.js, HTML, and CSS. Development
                began in late December 2021."
            image={SiteThumbnail}
            type="fa fa-desktop"
            link="/projects/site"
          />
          <ProjectItem
            id="atmf"
            name="Aliens Took My Friend"
            desc="&emsp;A short top-down adventure game a friend and I developed
            where your fellow astronaut friend has been kidnapped and taken
            onto an alien spaceship."
            image={ATMFThumbnail}
            type="fa fa-gamepad"
            link="/projects/atmf"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
