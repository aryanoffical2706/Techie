import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
function Header() {
  return (
    <div>
        <nav>
            <h1>Techie</h1>
            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"/contact"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#brand"}>Brand</HashLink>
                <Link to={"/service"}>Services</Link>
                
            </main>
        </nav>
    </div>
  )
}

export default Header