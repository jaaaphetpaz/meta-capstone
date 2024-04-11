import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

const BookingFormTemplate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const slots = fetchAPI(date);
      setAvailableTimes(slots);
    }
  }, [selectedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!selectedDate) {
      errors.selectedDate = "Date is required";
    }
    if (!occasion) {
      errors.occasion = "Occasion is required";
    }
    if (!timeSlot) {
      errors.timeSlot = "Time slot is required";
    }
    if (!numberOfGuests) {
      errors.numberOfGuests = "Number of Guests is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with form submission
    console.log("Form submitted successfully:", {
      firstName,
      lastName,
      selectedDate,
      occasion,
      timeSlot,
    });

    const formData = { firstName, lastName, selectedDate, occasion, timeSlot };
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }

    // Here you can submit the form data to the server
  };

  return (
    <section id="booking_form">
      <h1 className="form-title">Little Lemon Table Reservation</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className={errors.occasion ? "error" : ""}
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            {errors.occasion && (
              <div className="error-message">{errors.occasion}</div>
            )}
          </div>
          <div>
            <label htmlFor="number-of-guests">Number of Guests</label>
            <input
              type="number"
              id="number-of-guests"
              value={numberOfGuests}
              min={1}
              max={10}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
            {errors.numberOfGuests && (
              <div className="error-message">{errors.numberOfGuests}</div>
            )}
          </div>
          <div>
            <label htmlFor="book-date">Choose Date</label>
            <input
              type="date"
              id="book-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className={errors.selectedDate ? "error" : ""}
              required
            />
            {errors.selectedDate && (
              <div className="error-message">{errors.selectedDate}</div>
            )}
          </div>
          <div>
            <label htmlFor="time-slot">Select Time Slot</label>
            <select
              id="time-slot"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className={errors.timeSlot ? "error" : ""}
            >
              <option value="">Select a time slot</option>
              {availableTimes.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.timeSlot && (
              <div className="error-message">{errors.timeSlot}</div>
            )}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingFormTemplate;
