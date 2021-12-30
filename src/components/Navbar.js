import React from "react";
import "../styles/Navbar.css";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <div className="leftSide">
          <HashLink smooth to="/#home">
            ricardoColom
          </HashLink></div>

        <div className="rightSide">
          <HashLink smooth to="/#portfolio">
            portfolio
          </HashLink>
          <HashLink smooth to="/#projects">
            projects
          </HashLink>
          <HashLink smooth to="#contact">
            contact
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
