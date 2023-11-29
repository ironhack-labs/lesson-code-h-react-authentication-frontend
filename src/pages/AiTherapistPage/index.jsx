import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./AiTherapistPage.css";
import luna from "../../assets/luna/welcome.png";

function AiTherapistPage() {
  return (
    <div class="container aitherapist">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>
        <img src={luna} />
      </div>

      <div>THIS IS A PLACEHOLDER PAGE FOR OUR AI THERAPIST</div>

      <Footer />
    </div>
  );
}

export default AiTherapistPage;
