import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./BreathExercisesPage.css";
import anxiety from "../../assets/luna/anxiety.png";
import anger from "../../assets/luna/anger.png";
import irritation from "../../assets/luna/frustrated.png";
import sadness from "../../assets/luna/despair.png";
import mindfulness from "../../assets/luna/meditate.png";
import worry from "../../assets/luna/concern.png";

function BreathExercisesPage() {
  return (
    <div class="container">
      <div className="breath">
        <div className="breath-1">
          <Link to="/exercises" className="back-link">
            <ReactSVG src={back} alt="mood" />
          </Link>

          <div>What would you like help with today?</div>
        </div>

        <div className="breath-2">
          <div className="breath-card">
            <div className="card-1">
              Anxiety <br></br> <div>3min</div>
            </div>

            <div className="card-2">
              <img src={anxiety} className="mini-luna" />
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Anger <br></br> 3min
            </div>

            <div className="card-2">
              <img src={anger} className="mini-luna" />
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">Irritation 3min</div>

            <div className="card-2">
              <img src={irritation} className="mini-luna" />
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Sadness <br></br> 3min
            </div>

            <div className="card-2">
              <img src={sadness} className="mini-luna" />
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Mindfulness <br></br> 3min
            </div>

            <div className="card-2">
              <img src={mindfulness} className="mini-luna" />
            </div>
          </div>
          <div className="breath-card">
            <div className="card-1">
              Worry <br></br> 3min
            </div>

            <div className="card-2">
              <img src={worry} className="mini-luna" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BreathExercisesPage;
