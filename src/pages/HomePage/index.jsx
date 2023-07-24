import * as React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "../../App.css";
import logo from "../../assets/logos/textlogo.png";

function HomePage() {
  return (
    <div class="container homepage">
      <div class="homepage-1">
        <img src={logo} alt="HopeMe Logo" />
      </div>

      <div class="homepage-2">
        <Link to="/login" className="link">
          <button className="button-options">Patient</button>
        </Link>

        <Link to="/therapist/login" className="link">
          <button className="button-options">Therapist</button>
        </Link>
      </div>

      <div class="homepage-3">An Andev App &copy; 2023</div>
    </div>
  );
}

export default HomePage;
