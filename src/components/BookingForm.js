import React from "react";

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, updateTimes, submitForm }) {
  const handleDateChange = (e) => {
    setDate(e.target.value);  // ⚠️ Aquí fallará si setDate es undefined
    updateTimes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData); // 👈 Usamos submitForm aquí
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes && availableTimes.map((t) => ( // 👈 Agregamos esta verificación
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;





