import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "@fluentui/react-components";
import "./Welcome.css";
import "../../App.css";
import logo from "../../assets/textlogo.png";

function WelcomePage() {
  return (
    <div class="container welcome">
      <div class="welcome-1">
        <Text>Welcome, USER!</Text>

        <Text>
          Hi, I am Luna! I will be your companion during your experience on
          hopeme. I am used to providing light when things get dark so I'm happy
          to help you during your hopeme journey! In order to give you the best
          experience possible, it would be great if you could answer a few
          questions about your current goals with hopeme
        </Text>
      </div>
    </div>
  );
}

export default WelcomePage;
