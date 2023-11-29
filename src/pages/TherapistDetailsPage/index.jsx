import * as React from "react";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import back from "../../assets/icons/light/back-button.svg";

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
    <div className="container therapist-details">
      <div className="therpist-list">
        <Link to="/find-a-therapist">
          <ReactSVG src={back} alt="mood" />
        </Link>
        {therapist && (
          <>
            <h1>{therapist.name}</h1>
            <p>{therapist.introduction}</p>
            <img src={therapist.imageUrl}  width="100"/>
            <div>
              <ul>
                <li>{therapist.location}</li>
                <li>€{therapist.price}</li>
                <li>{therapist.approach}</li>
                <li>{therapist.languages}</li>
                <li>{therapist.availability}</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TherapistDetailsPage;