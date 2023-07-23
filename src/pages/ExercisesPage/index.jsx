import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react-components";
import luna from "../../assets/luna/welcome.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./ExercisesPage.css";

function ExercisesPage() {
  return (
    <div class="container exercises">
      <Navbar />

      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>Breathing Exercises</div>
      <div>Inspiring Articles</div>
      <div>
        {" "}
        <img src={luna} href="Luna, your helpful guide" />
      </div>

      <Link to="/talk">
        <div>Talk to Someone</div>
      </Link>
      <div>Relaxing Audios</div>

      <div>
        <div>Do you need help?</div>
        <div>
          At hopeme we have an abundance of resources that can help you out
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ExercisesPage;
