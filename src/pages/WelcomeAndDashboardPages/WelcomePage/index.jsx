import * as React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { Link } from "react-router-dom";
import { Button, Text, Link as UILink } from "@fluentui/react-components";
import "./WelcomePage.css";
import "../../../App.css";
import luna from "../../../assets/luna/happy.png";

function WelcomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div className="container ">
      {isLoggedIn && (
        <div className="welcome">
          <div>
            <img src={luna} href="Luna, your helpful guide" />
          </div>

          <div className="welcome-intro">
            Hello, {user.name || " to hopeme"}
          </div>

          <div className="welcome-text">
            Welcome to hopeme! Hi, I am Luna! I will be your companion during
            your experience on hopeme. I am used to providing light when things
            get dark so I'm happy to help you every step of the way. Why not
            check in and let me know how your day is going?
          </div>

          <div>
            <Link to={"/checkin"} className="button-primary">
              Your First Check-In With Luna
            </Link>
          </div>

          <div>
            <Link to={"/dashboard"} className="button-primary">
              Your hopme Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
