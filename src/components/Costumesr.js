import React from "react";
import "./Costumers.css";
import star from "../images/star.png";
import photo1 from "../images/Miranda.jpg";
import photo2 from "../images/heidi.jpg";
import photo3 from "../images/Adrian.jpg";
import photo4 from "../images/ellen.jpg";

function Costumers(){
    return(
        <div className="costumersSection">
            <h2>Testimonials</h2>
            <div className="costumerCards">
                <div className="costumer1">
                    <div className="rating">
                        <h2 className="ratingnum">5</h2>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                    </div>
                    <div className="infocostumer">
                        <img src={photo1} alt="costumerpho"/>
                        <h2>Miranda</h2>
                    </div>
                    <div className="review">
                        <p>Love the salad and pizzas. Excelent service 😄</p>
                    </div>
                </div>
                
                <div className="costumer2">
                    <div className="rating">
                        <h2 className="ratingnum">4</h2>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                    </div>
                    <div className="infocostumer">
                        <img src={photo2} alt="costumerpho"/>
                        <h2>Heidi</h2>
                    </div>
                    <div className="review">
                        <p>Very delicious food, best place to eat.</p>
                    </div>
                </div>
                
                <div className="costumer3">
                    <div className="rating">
                        <h2 className="ratingnum">4</h2>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                    </div>
                    <div className="infocostumer">
                        <img src={photo3} alt="costumerpho"/>
                        <h2>Adrian</h2>
                    </div>
                    <div className="review">
                        <p>Great Service, their lemon dessert is the best.</p>
                    </div>
                </div>

                <div className="costumer4">
                    <div className="rating">
                        <h2 className="ratingnum">5</h2>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                        <img src={star} alt="RatingStar"/>
                    </div>
                    <div className="infocostumer">
                        <img src={photo4} alt="costumerpho"/>
                        <h2>Ellen</h2>
                    </div>
                    <div className="review">
                        <p>My favorite restaurant, such a beatiful place.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Costumers;