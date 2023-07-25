import * as React from "react";
import { ReactSVG } from "react-svg";
import axios from "axios";
import { useState, useEffect } from "react";
import back from "../../assets/icons/light/back-button.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./FindATherapistPage.css";
import luna from "../../assets/luna/welcome.png";
import chat from "../../assets/luna/breathe.png";
import { Button } from "@fluentui/react-components";

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
    <div className="container find-a-therapist">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>
        <h1>Find a therapist</h1>
        <p>
          Searching for help is hard at the best of times. HopeMe provides free
          and paid therapy options through partnerships with universities. All
          student collaborators receive guidance from their professors
          throughout the process of helping you.
        </p>
      </div>
      <div>
        {therapists.map((therapist) => (
          <div key={therapist._id}>
            <h3>{therapist.name}</h3>
            <div>
              <img src={chat} />
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
      </div>

      <Footer />
    </div>
  );
}

export default FindATherapistPage;
