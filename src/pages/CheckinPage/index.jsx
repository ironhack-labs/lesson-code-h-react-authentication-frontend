import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Button } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./CheckinPage.css";
import luna from "../../assets/luna/welcome.png";
import slider from "../../assets/icons/slider.svg";

function CheckinPage() {
  return (
    <div class="container checkin">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>
        <img src={luna} />
      </div>

      <div>Completely Okay</div>

      <div>
        <img src={slider} />
      </div>

      <Button>Continue</Button>

      <Footer />
    </div>
  );
}

export default CheckinPage;
