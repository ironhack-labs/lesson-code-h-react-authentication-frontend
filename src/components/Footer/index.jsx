import { ReactSVG } from "react-svg";
import { Text } from "@fluentui/react-components";
import sun from "../../assets/icons/dark/sun.svg";
import discover from "../../assets/icons/dark/discover.svg";
import profile from "../../assets/icons/dark/profile.svg";
import chat from "../../assets/icons/dark/chat.svg";
import plus from "../../assets/icons/light/plus.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <ReactSVG src={sun} alt="mood" />
      </div>

      <div>
        <ReactSVG src={discover} alt="navigate to our exercises" />
      </div>

      <div>
        <div className="rectangle-menu">
          <ReactSVG src={plus} alt="navigate to our exercises" />
        </div>
      </div>

      <div>
        <ReactSVG src={profile} alt="user profile" />
      </div>

      <div>
        <ReactSVG src={chat} alt="ai chatbot" />
      </div>
    </div>
  );
}

export default Footer;
