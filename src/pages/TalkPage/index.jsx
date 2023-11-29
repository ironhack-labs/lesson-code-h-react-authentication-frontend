import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./TalkPage.css";

function TalkPage() {
  return (
    <div class="container talk">
      <Navbar />

      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <Link to="/talk-to-luna">
        <Text>TALK TO LUNA (Our AI Therapist)</Text>
      </Link>

      <Link to="/find-a-therapist">
        <Text>FIND A THERAPIST</Text>
      </Link>

      <Footer />
    </div>
  );
}

export default TalkPage;
