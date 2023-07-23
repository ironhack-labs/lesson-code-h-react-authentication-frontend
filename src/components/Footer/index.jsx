import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import sun from "../../assets/icons/dark/sun.svg";
import home from "../../assets/icons/dark/home.svg";
import discover from "../../assets/icons/dark/discover.svg";
import profile from "../../assets/icons/dark/profile.svg";
import chat from "../../assets/icons/dark/chat.svg";
import plus from "../../assets/icons/light/plus.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <Link to="/dashboard">
          <ReactSVG src={sun} alt="mood" />
        </Link>
        <div>Home</div>
      </div>

      <div className="footer-nav">
        <Link to="/help-menu">
          <ReactSVG src={discover} alt="navigate to our exercises" />
        </Link>

        <div>Exercises</div>
      </div>

      <div className="footer-nav">
        <div className="rectangle-menu">
          <ReactSVG src={plus} alt="navigate to our exercises" />
        </div>
      </div>

      <div className="footer-nav">
        <Link to="/dashboard/profile">
          <ReactSVG src={profile} alt="user profile" />
        </Link>
        <div>Profile</div>
      </div>

      <div className="footer-nav">
        <Link to="/talk">
          <ReactSVG src={chat} alt="ai chatbot" />
        </Link>
        <div>Talk</div>
      </div>
    </div>
  );
}

export default Footer;
