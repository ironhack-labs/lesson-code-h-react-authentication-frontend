import * as React from "react";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import back from "../../assets/icons/light/back-button.svg";
import location from "../../assets/icons/dark/location.png";
import euro from "../../assets/icons/dark/euro.png";
import luna from "../../assets/luna/breathe.png";
import "./TherapistDetailsPage.css";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function TherapistDetailsPage(props) {
  const [therapist, setTherapist] = useState(null);
  const { therapistId } = useParams();

  const getTherapist = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/therapist/${therapistId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneTherapist = response.data;
        setTherapist(oneTherapist);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTherapist();
  }, []);

  return (
    <div className="container">
      <div className="therapist-details-container">
        <Link to="/find-a-therapist" className="back-link">
          <ReactSVG src={back} alt="mood" />
        </Link>

        {therapist && (
          <div className="therapist-info-card">
            <div className="therapist-card-1">
              <div className="find-therapist-pic">
                <img
                  src={therapist.imageUrl || luna}
                  className="therapist-card-pic"
                />
              </div>
              <div className="find-therapist-name ">
                <div className="main-name">{therapist.name}</div>
                <div className="field-of-study">{therapist.approach}</div>
              </div>
            </div>

            <div className="therapist-card-2">
              <div className="therpist-card-info-section">
                {" "}
                <img src={location} /> Kreuzberg, 10999 Berlin
              </div>

              <div className="therpist-card-info-section-2">
                <img src={euro} /> {therapist.price}/h
              </div>

              <div className="therpist-card-info-section-2">
                {" "}
                <div className="circle">DE</div>
                <div className="circle">EN</div>
                <div className="circle">ES</div>
              </div>
            </div>

            <div className="therapist-card-3">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/book-a-therapist"
              >
                <div className="button-options">MAKE AN APPOINTMENT</div>
              </Link>
            </div>
          </div>
        )}

        <div className="therapist-info-card">
          <div className="day-box-1">ABOUT ME</div>

          <div className="day-box-2">
            Hello there, I'm a dedicated student therapist specializing in
            Cognitive Behavioral Therapy (CBT). As part of my studies on the
            HOPEME platform, I'm delighted to offer free therapy to those
            seeking help with anxiety, depression, trauma, or healing. Driven by
            a passion for mental health, I've pursued psychology education and
            specialized CBT training. My approach centers on empathy and
            creating a safe space for clients to explore their emotions and
            experiences. With expertise in anxiety, depression, trauma, and
            healing, I guide clients to develop healthier coping strategies and
            regain control of their lives. HOPEME's mission of accessibility
            aligns with my values, and I'm committed to making a positive impact
            through free therapy sessions. Witnessing clients' growth fuels my
            dedication to this rewarding journey. If you're seeking
            compassionate support to navigate life's challenges, let's embark on
            a journey of healing and growth together on HOPEME.
          </div>
        </div>

        <div className="therapist-info-card">
          <div className="day-box-3">AVAILABILITY</div>
          <div className="day-box-4">
            <div>Monday - Friday</div>
            <div>8:00 - 17:00</div>
            <div>In Person / Virtual</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TherapistDetailsPage;
