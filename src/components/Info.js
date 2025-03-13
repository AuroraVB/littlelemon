import React from "react";
import restaurant from "../images/restaurant.jpg";
import chef from "../images/restaurant chef B.jpg";
import "./Info.css";

function Info(){
    return(
        <div className="containerInfo">
            <div className="infoRestaurant">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>

            </div>
            <div className="imageRestaurant">
                <img src={chef} alt="restaurantimg" className="chef1"/>
                <img src={restaurant} alt="chefrest" className="chef2"/>
            </div>
        </div>
    )
}

export default Info;