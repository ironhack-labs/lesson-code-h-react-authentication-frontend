import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./BreathExercisesPage.css";

function BreathExercisesPage() {
  return (
    <div class="container breathexercises">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>BreathExercisesPage</div>

      <Footer />
    </div>
  );
}

export default BreathExercisesPage;
