import React from "react";
import lofo from "../images/logofooter.png";
import "./footer.css";

function Footer(){
    return(
        <footer>
            <img src={lofo} alt="logofoot" width={162} height={279} className="logofooot"/>
            <ul className="naveg">
                <h2>Doormat Navigation</h2>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
            <ul className="contact">
                <h2>Contact</h2>
                <li>Address</li>
                <li>Email</li>
                <li>Phone Number</li>
            </ul>
            <ul className="socialmedia">
                <h2>Social Media</h2>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;