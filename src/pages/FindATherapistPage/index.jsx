import * as React from "react";
import { ReactSVG } from "react-svg";
import axios from "axios";
import { useState, useEffect } from "react";
import back from "../../assets/icons/light/back-button.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./FindATherapistPage.css";
import chat from "../../assets/luna/breathe.png";
import { Button } from "@fluentui/react-components";
import luna from "../../assets/luna/breathe.png";
import location from "../../assets/icons/dark/location.png";
import euro from "../../assets/icons/dark/euro.png";
import therapist from "../../assets/therapist.png";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function FindATherapistPage() {
  const [therapists, setTherapists] = useState([]);
  const navigate = useNavigate();

  const getAllTherapists = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/therapist/therapists`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setTherapists(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllTherapists();
  }, []);

  const handleLearnMore = (therapistId) => {
    // Navigate to the therapist details page, passing the therapistId as a parameter
    navigate(`/find-a-therapist/${therapistId}`);
  };
  return (
    <div className="container">
      <div className="find-a-therapist-container">
        <Link to="/talk">
          <ReactSVG src={back} alt="mood" className="back-link" />
        </Link>

        <div className="find-a-therapist-container-1">
          <div className="flex-center">
            <img src={luna} className="tiny-luna" />
            <h1>Find a therapist</h1>
            Searching for help is hard at the best of times. hopeme provides
            free and paid therapy options through partnerships with
            universities. All student collaborators receive guidance from their
            professors throughout the process of helping you and are experts in
            training.
          </div>
        </div>

        <div className="find-a-therapist-container-2">
          <div className="therapist-info-card">
            <div className="therapist-card-1">
              <div className="find-therapist-pic">
                <img src={therapist} className="therapist-card-pic" />
              </div>
              <div className="find-therapist-name ">
                <div className="main-name">Name of therapist</div>
                <div className="field-of-study">
                  Supervised Psycology Student
                </div>
              </div>
            </div>

            <div className="therapist-card-2">
              <div className="therpist-card-info-section">
                {" "}
                <img src={location} /> Schöneberg, Berlin 12157
              </div>

              <div className="therpist-card-info-section-2">
                <img src={euro} /> Free
              </div>

              <div className="therpist-card-info-section-2">
                {" "}
                <div className="circle">DE</div>
                <div className="circle">EN</div>
                <div className="circle">ES</div>
              </div>
            </div>

            <div className="therapist-card-3">
              <div className="button-options">MAKE AN APPOINTMENT</div>
            </div>
          </div>
        </div>
      </div>
      {/* 

      <div>
        {therapists.map((therapist) => (
          <div key={therapist._id}>
            <h3>{therapist.name}</h3>
            <div>
              <img src={therapist.imageUrl} width="100" />
            </div>
            <ul>
              <li>{therapist.location}</li>
              <li>€{therapist.price}</li>
              <li>{therapist.approach}</li>
              <li>{therapist.availability}</li>
            </ul>
            <Button onClick={() => handleLearnMore(therapist._id)}>
              Learn More
            </Button>
          </div>
        ))}
      </div> */}

      <Footer />
    </div>
  );
}

export default FindATherapistPage;
