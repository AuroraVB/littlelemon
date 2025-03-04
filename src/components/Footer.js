import React from "react";
import lofo from "../images/logo-footer.png";

function Footer(){
    return(
        <footer>
            <img src={lofo} alt="logofoot" weight={162} height={279}></img>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
            <ul>
                <p>Contact</p>
                <li>Address</li>
                <li>Email</li>
                <li>Phone Number</li>
            </ul>
            <ul>
                <p>Social Media</p>
                <li><a href="www.facebook.com">Facebook</a></li>
                <li><a href="www.instagram.com">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;