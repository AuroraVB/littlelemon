import React from "react";
import logo from "../images/logo.png";
import "./Header.css";




function Header() {
    return (
        <header>
          <img src={logo} alt="logo" weight={202} height={76}></img>
        </header>
        
    )
}


export default Header;