import React from "react";
import "./Nav.css"; 
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" width={300} height={80} />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }

export default Nav; 