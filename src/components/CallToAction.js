import React from "react";
import restaurantfood from "../images/restauranfood.jpg";
import "./CallToActio.css";


function CallToAction(){

    return (
        <div className="Action">
            <div className="info">
                <h1> Little Lemon </h1>
                <h2> Chicago </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button id="btnreserve"> Reserve a Table </button>
            </div>
            <div className="imagen">
                <img src={restaurantfood} alt="img" width={375} height={325}/>
            </div>
       </div>
    );
}

export default CallToAction;