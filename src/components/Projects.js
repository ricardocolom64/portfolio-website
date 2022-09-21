import React from "react";
import { Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList.js";
import ProjectItem from "./ProjectItem";
import ATMFThumbnail from "../assets/projects/atmf/image1.png";
import SiteThumbnail from "../assets/projects/website/thumbnail-lazy.png";
import SnackabilityThumbnail from "../assets/projects/snackability/image2.png";
import TODThumbnail from "../assets/projects/tod/sample.png"
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="content">
        <div className="header">projects</div>
        <div className="project-list">
          <ProjectItem
            id="snackability"
            name="Snackability"
            desc="&emsp;A web application developed with other FIU students to encourage others to make nutritional snack choices."
            image={SnackabilityThumbnail}
            type="fa fa-desktop"
            link="/projects/snackability"
          />
          <ProjectItem
            id="site"
            name="This Website"
            desc="&emsp;My first time working with React, HTML, CSS, and Git. Development
                began in late December 2021 and will remain ongoing as I work on new projects."
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
          <ProjectItem
            id="tod"
            name="Truth or Drink Unofficial Mobile Port"
            desc="&emsp;The viral Truth or Drink card game by Cut, now as an unofficial 
            mobile app you can play with your friends at a party or something."
            image={TODThumbnail}
            type="fa fa-mobile"
            link="/projects/tod"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
