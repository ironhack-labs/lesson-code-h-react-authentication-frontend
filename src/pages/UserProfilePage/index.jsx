import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./UserProfilePage.css";
import profile from "../../assets/luna/aokay.png";

import { useContext } from "react";
import { CheckInContext } from "../../context/checkIn.context";
import { AuthContext } from "../../context/auth.context";

function UserProfilePage() {
  const { user } = useContext(AuthContext);
  const {
    moodState: [mood, setMood],
    diaryState: [diaryEntry, setDiaryEntry],
  } = useContext(CheckInContext);

  return (
    <div class="container">
      <div className="user-profile-page">
        <Link to="/dashboard" className="back-link">
          <ReactSVG src={back} alt="mood" />
        </Link>

        <div className="user-profile-page-1">USER PROFILE</div>

        <div className="user-profile-page-2">
          <div className="user-profile-page-2-1">
            <img src={profile} className="profile-photo" />
            <div>Upload New Photo</div>
          </div>

          <div className="user-profile-page-2-1">
            <div>Username: {user.name}</div>
            <div>Email: {user.email}</div>
          </div>
        </div>

        <div className="user-profile-page-3">My Weekly/Monthly Report</div>

        <div className="user-profile-page-4">
          Mood Tracker
          <div>
            <p>Today's mood score:</p>
            <h4>{mood}/5</h4>
          </div>
          <div>
            <p>Today's diary entry:</p>
            <p>{diaryEntry}</p>
          </div>
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
