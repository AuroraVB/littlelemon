import React, { useState, useEffect, useCallback } from "react";
import "./BookingForm.css";
import restaurant from "../images/interior.jpg"

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, updateTimes, submitForm }) {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Please choose a date.";
    } else if (new Date(date) < new Date()) {
      newErrors.date = "Invalid date";
    }

    if (!time) {
      newErrors.time = "Please choose an hour.";
    }

    if (guests < 1 || guests > 10) {
      newErrors.guests = "The number of guests has to be between 1 and 10.";
    }

    if (!occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [date, time, guests, occasion]); 

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [validateForm]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateTimes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <div className="formulario">
      <div className="Imagen">
        <img src={restaurant} alt="banner" id="restaurant"/>
      </div>
      <h2>Make a booking</h2>
      <div className="inputs">

        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
          {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Hour</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

          <label htmlFor="guests">Number of guests</label>
          <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(Number(e.target.value))} required />
          {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option value="">Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && <span style={{ color: "red" }}>{errors.occasion}</span>}


          <button type="submit" disabled={!isFormValid}>Complete Booking</button>
        </form>
      </div>
    </div>    

  );
}

export default BookingForm;






