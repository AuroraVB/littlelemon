import React from "react";
import restaurantfood from "../images/restauranfood.jpg";
import "./CallToActio.css";
import { useNavigate } from "react-router-dom";


function CallToAction(){
    const navigate = useNavigate();

    return (
        <div className="Action">
            <div className="info">
                <h1> Little Lemon </h1>
                <h2> Chicago </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button id="btnreserve" onClick={() => navigate("/booking")}> Reserve a Table </button>
            </div>
            <div className="imagen">
                <img src={restaurantfood} alt="img" width={400} height={500}/>
            </div>
       </div>
    );
}

export default CallToAction;