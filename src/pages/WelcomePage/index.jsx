import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Text, Link as UILink } from "@fluentui/react-components";
import "./WelcomePage.css";
import "../../App.css";
import luna from "../../assets/luna/welcome.png";

function WelcomePage() {
  return (
    <div class="container welcome">
      <div class="welcome-1">
        <div>
          <img src={luna} href="Luna, your helpful guide" />
        </div>

        <div>
          <Text>Welcome, USER!</Text>
        </div>

        <div>
          <Text>
            Hi, I am Luna! I will be your companion during your experience on
            hopeme. I am used to providing light when things get dark so I'm
            happy to help you during your hopeme journey! In order to give you
            the best experience possible, it would be great if you could answer
            a few questions about your current goals with hopeme.
          </Text>
        </div>

        <div>
          {/* Should go to the mental health survey */}
          <Link to={"/checkin"}>
            <Button>How Are You Feeling Today?</Button>
          </Link>
        </div>

        <div>
          <Link to={"/dashboard"}>
            <Button>hopme Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
