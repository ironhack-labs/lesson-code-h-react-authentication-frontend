import * as React from "react";
import { Link } from "react-router-dom";
import luna from "../../assets/luna/determined.png";
import Footer from "../../components/Footer";
import "../../App.css";
import "./ExercisesPage.css";

function ExercisesPage() {
  return (
    <div className="container">
      <div className="exercises">
        <div className="main-container">
          <div className="ex-box-1">
            <Link to="/breath-exercises" className="link">
              <div className="bubble">Breath Exercises</div>
            </Link>

            <Link to="/articles" className="link">
              <div className="bubble">Inspiring Articles</div>
            </Link>
          </div>

          <div className="ex-box-2">
            <img
              src={luna}
              className="hero-image"
              href="Luna, your helpful guide"
            />
            <div>What should we work on today?</div>
          </div>

          <div className="ex-box-3">
            <Link to="/talk" className="link">
              <div className="bubble">Talk to Someone</div>
            </Link>

            <Link to="/calmcast" className="link">
              <div className="bubble">Relaxing Audios</div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ExercisesPage;
