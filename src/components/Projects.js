import React from "react";
import { ProjectList } from "../helpers/ProjectList.js";
import ProjectItem from "./ProjectItem";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="content">
        <div className="header">projects</div>
        <div className="body">
            Click each card for more info
        </div>
        <div className="projectList">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
