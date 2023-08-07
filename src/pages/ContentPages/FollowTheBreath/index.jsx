import { ReactSVG } from "react-svg";
import "./FollowTheBreath.css";
import "../../../App.css";
import { Link } from "react-router-dom";
import luna from "../../../assets/luna/animate/inhaleexhale.svg";
import inhale from "../../../assets/icons/light/inhale.png";
import exhale from "../../../assets/icons/light/exhale.png";
import back from "../../../assets/icons/light/back-button.svg";

function FollowTheBreath() {
  return (
    <div className="container">
      <div className="follow-breath-container">
        <Link to="/exercises" className="back-link-dark">
          <ReactSVG src={back} alt="mood" />
        </Link>

        <div className="anim-circle" data-text="exhale">
          <img src={exhale} className="exhale" />
          <img src={inhale} className="inhale" />

          <div>
            <img src={luna} className="breathe-luna" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowTheBreath;

{
  /* <div className="textbox">
<p>
  Come here to take a few minutes to unwind or catch your breath in
  stressful situations. Breathe in as the circles expand, and breathe
  out again as they contract.{" "}
</p>
</div> */
}
