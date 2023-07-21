import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@fluentui/react-components";
import "./HomePage.css";
import "../../App.css";
import logo from "../../assets/textlogo.png";

function HomePage() {
  return (
    <div class="container homepage">
      <div class="homepage-1">
        <img src={logo} alt="HopeMe Logo" />
      </div>

      <div class="homepage-2">
        <Link to="/login">
          <Button>Patient</Button>
        </Link>

        <Button>Therapist</Button>
      </div>
    </div>
  );
}

export default HomePage;
