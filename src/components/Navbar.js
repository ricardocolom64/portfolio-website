import React, {useState} from "react";
import "../styles/Navbar.css";
import ReorderIcon from "../assets/icons/reorder_white_24dp.svg";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="content">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <HashLink smooth to="/#home" id="name">
            <b>ricardoColom</b>
          </HashLink>
          <div className="hiddenLinks">
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
          <button onClick={toggleNavbar}>
            <img src={ReorderIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
