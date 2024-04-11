import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-page">
      <div className="confirmation-content">
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "green", fontSize: "48px" }}
        />
        <h1>Booking Confirmed!</h1>
        <p>Thank you for your reservation. We look forward to seeing you.</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
