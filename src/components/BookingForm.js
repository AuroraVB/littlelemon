import React, { useState, useEffect } from "react";

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, updateTimes, submitForm }) {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateForm()); // Actualiza si el formulario es válido en tiempo real
  }, [date, time, guests, occasion]);

  const validateForm = () => {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Por favor, selecciona una fecha.";
    } else if (new Date(date) < new Date()) {
      newErrors.date = "La fecha debe ser futura.";
    }

    if (!time) {
      newErrors.time = "Por favor, selecciona un horario.";
    }

    if (guests < 1 || guests > 10) {
      newErrors.guests = "El número de invitados debe estar entre 1 y 10.";
    }

    if (!occasion) {
      newErrors.occasion = "Por favor, selecciona una ocasión.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
      {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Selecciona una hora</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="">Selecciona una ocasión</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <span style={{ color: "red" }}>{errors.occasion}</span>}

      <button type="submit" disabled={!isFormValid}>Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;





