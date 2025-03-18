import React from "react";
import BookingForm from "./BookingForm";

function BookingPage(props) {
  console.log("📌 BookingPage props:", props); 
  return <BookingForm {...props} />;
}

export default BookingPage;
