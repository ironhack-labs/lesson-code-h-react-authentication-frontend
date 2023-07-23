import * as React from "react";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react-components";
import "./DesignSample.css";
import "../../App.css";
import logo from "../../assets/logos/textlogo.png";

function DesignSamplePage() {
  return (
    <div class="container design-sample">
      <Text>Welcome, USER!</Text>

      <Text>
        Hi, I am Luna! I will be your companion during your experience on
        hopeme. I am used to providing light when things get dark so I'm happy
        to help you during your journey! In order to give you the best
        experience possible, it would be great if you could answer a few
        questions about your current goals with hopeme
      </Text>
    </div>
  );
}

export default DesignSamplePage;
