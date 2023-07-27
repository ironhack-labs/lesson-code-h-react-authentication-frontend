import { useContext, useState } from "react";
import { Button, Input } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import "../../App.css";
import "./TherapistDashboard.css";
import therapistpic from "../../assets/therapist.png";

function TherapistProfile() {
  const { logOutTherapist, therapist } = useContext(TherapistAuthContext);
  return (
    <div className="container">
      <div className="therapist-profile-page-container">
        <div className="therapist-profile-box-1">
          <div>
            <p>Welcome to your hopeme profile</p>
          </div>
        </div>

        <div className="therapist-profile-box-2">
          <div className="therapist-profile-box-cont-1">
            <div className="mini-box-1">
              <img src={therapistpic} className="therapist-profile-pic" />
            </div>

            <div className="mini-box-2">
              <div>Jennifer Buckley</div>
              <div>CBT, Psychotherapy</div>
              <div>Specialties: Trauma, Depression, Anxiety</div>
            </div>
          </div>

          <div className="therapist-info-card-profile">
            <div className="day-box-1">ABOUT ME</div>

            <div className="day-box-2-therapy-prof">
              Hello there, my name is Jennifer. I'm a dedicated student
              therapist specializing in Cognitive Behavioral Therapy (CBT). As
              part of my studies on the HOPEME platform, I'm delighted to offer
              free therapy to those seeking help with anxiety, depression,
              trauma, or healing. Driven by a passion for mental health, I've
              pursued psychology education and specialized CBT training. My
              approach centers on empathy and creating a safe space for clients
              to explore their emotions and experiences. With expertise in
              anxiety, depression, trauma, and healing, I guide clients to
              develop healthier coping strategies and regain control of their
              lives. HOPEME's mission of accessibility aligns with my values,
              and I'm committed to making a positive impact through free therapy
              sessions. Witnessing clients' growth fuels my dedication to this
              rewarding journey. If you're seeking compassionate support to
              navigate life's challenges, let's embark on a journey of healing
              and growth together on HOPEME.
            </div>
          </div>
        </div>

        <div className="therapist-profile-box-3">
          <div>
            <Link to="/therapist/editProfile" className="link">
              <button className="button-primary">Edit Profile Info</button>
            </Link>
          </div>

          <br></br>
          <button onClick={logOutTherapist} className="button-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default TherapistProfile;
