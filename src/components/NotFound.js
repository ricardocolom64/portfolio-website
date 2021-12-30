import React from 'react'
import "../styles/NotFound.css"
import { HashLink } from "react-router-hash-link"

function NotFound() {
    return (
        <div className='notFound'>
            <h1>404</h1>
            <p>Looks like this page doesn't exist...</p>
            <HashLink smooth to="/#home" className="homeBtn">go home</HashLink>
        </div>
    )
}

{/* <HashLink smooth to="/#home">
            ricardo
          </HashLink></div> */}
export default NotFound
