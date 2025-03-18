import React from "react";
import rest from "../images/friends.jpeg";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  return (
      <div className="restaurantimage">
        <img src={rest} alt="restaurantphoto" className="background-image" />
     
        <div className="confirmation">
          <h2>✅ ¡Booking Confirmed!</h2>
          <p>Thank you for making a reservation with us. See you soon! 😊</p>
        </div>
      </div>
  );
};

export default ConfirmedBooking;
