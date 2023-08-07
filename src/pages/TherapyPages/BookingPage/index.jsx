import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Calendar from "react-calendar";
import back from "../../../assets/icons/light/back-button.svg";
import "./BookingPage.css";
import "../../../App.css";

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="container">
      <div className="book-appointment-container">
        <Link to="/find-a-therapist">
          <ReactSVG src={back} alt="mood" className="back-link" />
        </Link>

        <div className="book-title"> REQUEST TO BOOK AN APPOINTMENT</div>
        <div>
          <Calendar onChange={setSelectedDate} className="custom-calendar" />
        </div>
        <div>
          {selectedDate ? (
            <h2 className="primary">
              Select a time for {selectedDate.toDateString()}
            </h2>
          ) : (
            <h2 className="primary">When would you like to book?</h2>
          )}
          <div className="select-element">
            <select onChange={(e) => setSelectedTime(e.target.value)}>
              <option value="">Select a time</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button onClick={handleConfirmBooking} className="button primary">
            Confirm Booking
          </button>
        </div>
        {isConfirmed && (
          <div>
            <h2 className="primary">Your booking is confirmed!</h2>
            <p>Date: {selectedDate && selectedDate.toDateString()}</p>
            <p>Time: {selectedTime}</p>
            <Link to="/dashboard" className="link">
              <button className="button primary">Back to Dashboard</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BookingPage;
