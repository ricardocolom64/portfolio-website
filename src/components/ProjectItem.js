import React from "react";
import { HashLink } from 'react-router-hash-link';

function ProjectItem({ image, name, desc }) {
  return (
    <div className="projectItem">
      <a href={desc}>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <text1>{name}</text1>
      </a>
    </div>
  );
}

export default ProjectItem;
