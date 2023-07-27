import * as React from "react";
import { Text } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import logout from "../../assets/icons/light/logout.png";
import "../../App.css";
import "./DashboardPage.css";
import luna from "../../assets/luna/animate/inhaleexhale.svg";
import okay from "../../assets/luna/aokay.png";

function DashboardPage() {
  return (
    <div class="container ">
      <div className="dashboard-user-container">
        <Link to="/" className="logout-main">
          <img src={logout} />
        </Link>

        <div className="dashboard-box-1">
          <img src={luna} className="mini-luna" />
        </div>

        <Link to="/checkin" className="link">
          <div className="dashboard-box-2">
            <div className="dashboard-box-4-1">Your Daily Check-In</div>

            <div className="dashboard-box-4-2">
              <img src={okay} className="mini-luna" />
            </div>

            <div className="dashboard-box-4-3">
              Complete your daily check-in by sharing an image, audio clip, or
              dairy entry about how you're feeling today.
            </div>
          </div>
        </Link>

        <div className="dashboard-box-3">
          <div className="quote">
            “Promise me you'll always remember: you're braver than you believe,
            and stronger than you seem, and smarter than you think.”
          </div>
          <div className="author">— Christopher Robin </div>
        </div>

        <Link to="/talk" className="link">
          <div className="dashboard-box-4">
            <div className="dashboard-box-4-1">How are you feeling today?</div>

            <div className="dashboard-box-4-2">
              <img src={luna} className="mini-luna" />
            </div>

            <div className="dashboard-box-4-3">
              Why not have a chat with our Luna? Or book a call with one of our
              therapists? We are here for you.
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
