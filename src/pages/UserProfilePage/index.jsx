import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./UserProfilePage.css";

function UserProfilePage() {
  return (
    <div class="container userprofile">
      <Navbar />
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>
      <div>Hi, Username!</div>

      <div>My Appointments</div>

      <div>My Weekly/Monthly Report</div>

      <div>Mood Tracker</div>

      <Footer />
    </div>
  );
}

export default UserProfilePage;
