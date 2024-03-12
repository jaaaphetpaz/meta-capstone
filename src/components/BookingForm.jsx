import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState();
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form action="">
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                onClick={(e) => handleChange(e.target.value)}
                value={date}
                required
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
