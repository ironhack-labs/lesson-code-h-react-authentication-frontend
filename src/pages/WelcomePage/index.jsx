import * as React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
import { Button, Text, Link as UILink } from "@fluentui/react-components";
import "./WelcomePage.css";
import "../../App.css";
import luna from "../../assets/luna/welcome.png";

function WelcomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div class="container welcome">
      {isLoggedIn && (
        <div class="welcome-1">
          <div>
            <img src={luna} href="Luna, your helpful guide" />
          </div>

          <div>
            <Text>Welcome, {user.name || " to hopeme"}</Text>
          </div>

          <div>
            <Text>
              Hi, I am Luna! I will be your companion during your experience on
              hopeme. I am used to providing light when things get dark so I'm
              happy to help you during your hopeme journey! In order to give you
              the best experience possible, it would be great if you could
              answer a few questions about your current goals with hopeme.
            </Text>
          </div>

          <div>
            {/* Should go to the mental health survey */}
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
