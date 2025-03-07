import React from "react";
import "./Nav.css"; 
import logo from "../images/logo.png"

function Nav(){
    return(
        <nav>
            <a href="#home">
            <img src={logo} alt="logo" weight={202} height={76}></img>
            </a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav; 