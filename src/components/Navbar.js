import React, {useState} from "react";
import "../styles/Navbar.css";
import ReorderIcon from "../assets/icons/reorder_white_24dp.svg";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -46;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="content" id={openLinks ? "open" : "closed"}>
        <div className="left-side" >
          <HashLink smooth to="/#home" scroll={el => scrollWithOffset(el)} id="name">
            <b>ricardoColom</b>
          </HashLink>
        </div>
        <div className="section-links">
          <HashLink smooth to="/#resume" scroll={el => scrollWithOffset(el)}>
            resume
          </HashLink>
          <HashLink smooth to="/#projects" scroll={el => scrollWithOffset(el)}>
            projects
          </HashLink>
          <HashLink smooth to="/#contact" scroll={el => scrollWithOffset(el)}>
            contact
          </HashLink>
        </div>
        <button onClick={toggleNavbar}>
          <img src={ReorderIcon} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
