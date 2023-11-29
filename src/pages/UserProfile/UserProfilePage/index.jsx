import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react-components";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "../../../App.css";
import "./UserProfilePage.css";
import profile from "../../../assets/luna/aokay.png";
import graphImage from "../../../assets/graphs/graph.png";

import { useContext } from "react";
import { CheckInContext } from "../../../context/checkIn.context";
import { AuthContext } from "../../../context/auth.context";

function UserProfilePage() {
  const { user } = useContext(AuthContext);
  const {
    moodState: [mood, setMood],
    diaryState: [diaryEntry, setDiaryEntry],
  } = useContext(CheckInContext);

  return (
    <div className="container">
      <div className="user-profile-page">
        <Link to="/dashboard" className="back-link">
          <ReactSVG src={back} alt="mood" />
        </Link>

        <div className="user-profile-page-1">USER PROFILE</div>

        <div className="user-profile-page-2">
          <div className="user-profile-page-2-1">
            <img src={profile} className="profile-photo" />
          </div>

          <div className="user-profile-page-2-1">
            <div>Username: Devin Fiachra DM</div>
            <div>Email: therapist@helpme.com</div>
          </div>
        </div>

        <div className="user-profile-page-3">
          My Weekly/Monthly Report
          <div>
            <img src={graphImage} width="300" className="graphImg" />
          </div>
        </div>

        <div className="user-profile-page-4">
          <p>Your Daily Mood score:</p>
          {mood || "Please checkin with Luna"}
        </div>

        <div className="user-profile-page-5">
          <Link to="/dashboard/profile/editUser" className="link">
            <button className="button-primary">Edit profile</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserProfilePage;
