import { ReactSVG } from "react-svg";
import "./FollowTheBreath.css";
import "../../App.css";

function FollowTheBreath() {
  return (
    <div className="full-screen-container">
      <div className="follow-breath-container">
        <p className="anim-circle">diaphragmatic animation</p>
      </div>
      <div className="textbox">
        <p>
          Come here to take a few minutes to unwind or catch your breath in
          stressful situations. Breathe in as the circles expand, and breathe
          out again as they contract.{" "}
        </p>
      </div>
    </div>
  );
}

export default FollowTheBreath;
