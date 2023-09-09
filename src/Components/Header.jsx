import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Header.scss"
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
   <nav>
    <h1>TechNova</h1>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/service"}>Services</Link>
    </main>
   </nav>
  )
}

export default Header