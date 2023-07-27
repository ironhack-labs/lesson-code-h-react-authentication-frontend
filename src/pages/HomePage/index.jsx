import * as React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "../../App.css";
import logo from "../../assets/logos/textlogo.png";

function HomePage() {
  return (
    <div className="container homepage">
      <div className="homepage-1">
        <img src={logo} alt="HopeMe Logo" />
      </div>

      <div className="homepage-2">
        <Link to="/signup" className="button-primary">
          I am looking for help
        </Link>

        <Link to="/therapist/signup" className="button-primary">
          I am a Therapist
        </Link>
      </div>

      <div className="homepage-3">An Andev App &copy; 2023</div>
    </div>
  );
}

export default HomePage;
