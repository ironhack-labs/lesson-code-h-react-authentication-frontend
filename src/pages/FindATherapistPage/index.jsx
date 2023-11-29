import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./FindATherapistPage.css";
import luna from "../../assets/luna/welcome.png";

function FindATherapistPage() {
  return (
    <div class="container find-a-therapist">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>THIS IS A PLACEHOLDER PAGE FOR OUR FIND A THERAPIST PAGE</div>

      <Footer />
    </div>
  );
}

export default FindATherapistPage;
