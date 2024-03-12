import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState();
  const [times, setTimes] = useState();
  const [guests, setGuests] = useState();
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                onChange={(e) => handleChange(e.target.value)}
                value={date}
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Select Timeslot:</label>
              <select
                name=""
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time:</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="btnReceive">
              <input
                type="submit"
                value={"Confirm Reservation"}
                aria-label="On Click"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
