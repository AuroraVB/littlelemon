import React from "react";
import BookingForm from "./BookingForm";

function BookingPage(props) {
  console.log("📌 BookingPage props:", props); // 👀 Verifica que `setDate` aparece aquí
  return <BookingForm {...props} />;
}

export default BookingPage;
