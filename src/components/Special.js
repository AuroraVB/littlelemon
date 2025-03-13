import React from "react";
import "./Special.css"
import greeksalad from "../images/greeksalad.jpg"
import bruschetta from "../images/bruschetta.jpg"
import lemondessert from "../images/lemondessert.jpg"

function Special() {
    return (
        <div className="specials-container">
            <div className="tittle">
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>

            <div className="specials-items">
                <div className="GreekSalad">
                    <img src={greeksalad} alt="greek salad"/>
                    <div className="h3-h4container">
                        <h3>Greek Salad</h3>
                        <h4>$12.99</h4>
                    </div>
                    <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <a href="#order" className="orderlink">Order Now</a>
                </div>

                <div className="Bruchetta">
                    <img src={bruschetta} alt="bruschetta img"/>
                    <div className="h3-h4container">
                        <h3>Bruschetta</h3>
                        <h4>$5.99</h4>
                    </div>
                    <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <a href="#order" className="orderlink">Order Now</a>
                </div>

                 <div className="LemonDessert">
                    <img src={lemondessert} alt="lemon dessert"/>
                    <div className="h3-h4container">
                        <h3>Lemon Dessert</h3>
                        <h4>$5.00</h4>
                    </div>
                    <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <a href="#order" className="orderlink">Order Now</a>
                </div>
            </div>
        </div>

    );
}

export default Special;


