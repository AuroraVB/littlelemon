import React from "react";
import restaurant from "../images/interior.jpg";

const ConfirmedBooking = () => {
  return (
    <>
      <div className="restaurantimage">
        <img source={restaurant} alt="restauranphoto" />
      </div>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>✅ ¡Booking Confirmed!</h2>
        <p>Thank you for making a reservation with us. See you soon! 😊</p>
      </div>
    </>
  );
};

export default ConfirmedBooking;
