import React from 'react'
import "../styles/UnderConstruction.css"
import { HashLink } from "react-router-hash-link"

function UnderConstruction() {
    return (
        <div className='underConstruction'>
            <h1>Under Construction</h1>
            <p>Sorry about that!</p>
            <HashLink smooth to="/#home" className="homeBtn">go home</HashLink>
        </div>
    )
}

{/* <HashLink smooth to="/#home">
            ricardo
          </HashLink></div> */}
export default UnderConstruction
