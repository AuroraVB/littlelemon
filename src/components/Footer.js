import React from "react";
import lofo from "../images/logofooter.png";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <img src={lofo} alt="logofoot" width={162} height={279} className="logofooot"/>
            <ul className="naveg">
                <h2>Doormat Navigation</h2>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
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