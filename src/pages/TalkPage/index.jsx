import * as React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./TalkPage.css";
import luna from "../../assets/luna/welcome.png";

function TalkPage() {
  return (
    <div class="container">
      <div className="talk-page">
        <img src={luna} className="talk-1" />

        <div className="main-text">
          AT hopeme we provide a few services. You can talk with professional
          therapists in training, who will offer you expert advice in your area
          of interest. Alternatively you can talk to me, LUNA! Think of me as a
          friend that is happy to lend an ear. I will listen to you judgement
          free and we can start from 0 each time you chat with me. Have you ever
          gotten so frustrated, angry, or upset that you would like to write a
          letter, email, or message to someone? Have you ever done this then
          burned, deleted, or erased the message without sending it? This is
          what our ai-powered chatbot is designed to replicate.
        </div>

        <div className="talk-3">
          <Link to="/talk-to-luna" className="link">
            <div className="button-options">TALK TO LUNA (Our AI Helper)</div>
          </Link>

          <Link to="/find-a-therapist" className="link">
            <div className="button-options">FIND A DEDICATED THERAPIST</div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TalkPage;
