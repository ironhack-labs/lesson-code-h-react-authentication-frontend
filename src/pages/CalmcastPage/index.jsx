import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./CalmcastPage.css";
import play from "../../assets/icons/dark/Play Button.png";
import progress from "../../assets/slider/2.png";
import soundwaves from "../../assets/icons/light/soundwaves.png";
import luna from "../../assets/luna/breathe.png";

function CalmcastPage() {
  return (
    <div class="container">
      <Link to="/exercises" className="back-link">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div className="calmcast">
        <div className="calmcast-1">
          <img src={luna} />
          <div className="calm-title">AUDIO</div>
        </div>

        <div className="calmcast-2">
          <div>
            Relax and unwind with our daily curated calmcast. Every day we
            choose a podcast, audio clip, or song to eincourage you to think,
            reflect, or unwind.
          </div>
        </div>

        <div className="calmcast-3">
          <img src={soundwaves} alt="soundwaves" />
          0:35 / 3:43
          <img src={progress} alt="play button" />
        </div>

        <div className="calmcast-4">
          <img src={play} alt="play button" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CalmcastPage;
