import * as React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import axios from "axios";
import back from "../../assets/icons/light/back-button.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./CheckinPage.css";
import { CheckInContext } from "../../context/checkIn.context";
import Checkin1 from "../../components/Checkin1";
import Checkin2 from "../../components/Checkin2";
import Checkin3 from "../../components/Checkin3";
import Checkin4 from "../../components/Checkin4";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function CheckinPage(props) {
  const authToken = localStorage.getItem("authToken");
  const [step, setStep] = useState(0);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    moodState: [mood, setMood],
    imageState: [imageUrl, setImageUrl],
    audioState: [audioUrl, setAudioUrl],
    diaryState: [diaryEntry, setDiaryEntry],
  } = useContext(CheckInContext);

  const handleNext = () => {
    if (step === 3) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const checkInData = {
      mood: mood,
      imageUrl: imageUrl,
      audioUrl: audioUrl,
      diaryEntry: diaryEntry,
    };
    console.log(checkInData);
    axios
      .post(`${API_URL}/checkIn/updateCheckIn`, checkInData, config)
      .then((res) => {
        console.log("Data saved: ", res.data);
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container checkin">
      <Navbar />

      <div className="step-pages">
        {step === 0 && <Checkin1 />}
        {step === 1 && <Checkin2 />}
        {step === 2 && <Checkin3 />}
        {step === 3 && <Checkin4 />}
      </div>

      <div className="nav-buttons-container">
        <div className="nav-buttons">
          <button className="nav-button" onClick={handlePrev}>
            {step === 0 ? (
              <Link to="/dashboard">
                <ReactSVG src={back} alt="mood" />
              </Link>
            ) : (
              step + " / 4"
            )}
          </button>

          {successMessage && (
            <div className="success-message">Check-in saved successfully!</div>
          )}
          <button
            className="nav-button"
            onClick={step === 3 ? handleSubmit : handleNext}
          >
            {step === 3 ? "SAVE" : step + 2 + " / 4"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckinPage;
