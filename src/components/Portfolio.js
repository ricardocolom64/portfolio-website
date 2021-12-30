import React from "react";
import "../styles/Portfolio.css";

const Resume = '/Ricardo Colom - Resume [December 2021].pdf';

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="content">
        <div className="header">portfolio</div>
        <div className="body">A copy of my academic portfolio can be found...</div>
        <a className="hereBtn" href={process.env.PUBLIC_URL + Resume} target="_blank" rel="noopener noreferrer">here</a>
      </div>
    </div>
  );
}

export default Portfolio;
