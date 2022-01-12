// CURRENTLY UNUSED

import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(props) {
  return (
    <div className="project" id={props.id}>
      <div className="left-side">
        <div className="left-side-content">
          <img src={props.image} alt="" height="auto" />
          <div className="project-type">
            <i class={props.type} aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="project-header">
          <h1>{props.name}</h1>
        </div>
        <div className="project-body" style={{ whiteSpace: "pre-line" }}>
          {props.desc}
        </div>
        <div className="project-caption">
          <Link to={props.link}>
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
  );
}

export default ProjectItem;
