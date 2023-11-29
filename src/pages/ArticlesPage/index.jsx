import * as React from "react";
import Footer from "../../components/Footer";
import "../../App.css";
import "./ArticlesPage.css";
import luna from "../../assets/luna/welcome.png";
import anxiety from "../../assets/luna/concern.png";
import depression from "../../assets/luna/despair.png";
import love from "../../assets/luna/love.png";
import running from "../../assets/luna/determined.png";
import mindfulness from "../../assets/luna/meditate.png";
import recovery from "../../assets/luna/aokay.png";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";

function ArticlesPage() {
  return (
    <div class="container">
      <div className="aricles-container">
        <Link to="/exercises">
          <ReactSVG src={back} alt="mood" />
        </Link>

        <div className="breath-card">
          <div className="card-1">
            Anxiety <br></br> <div></div>
          </div>

          <div className="card-2">
            <img src={anxiety} className="mini-luna" />
          </div>
        </div>

        <div className="breath-card">
          <div className="card-1">
            Depression <br></br>
          </div>

          <div className="card-2">
            <img src={depression} className="mini-luna" />
          </div>
        </div>

        <div className="breath-card">
          <div className="card-1">Love & Romance </div>

          <div className="card-2">
            <img src={love} className="mini-luna" />
          </div>
        </div>

        <div className="breath-card">
          <div className="card-1">
            Physical Welbeing <br></br>
          </div>

          <div className="card-2">
            <img src={running} className="mini-luna" />
          </div>
        </div>

        <div className="breath-card">
          <div className="card-1">
            Mindfulness <br></br>
          </div>

          <div className="card-2">
            <img src={mindfulness} className="mini-luna" />
          </div>
        </div>
        <div className="breath-card">
          <div className="card-1">
            Recovery <br></br>
          </div>

          <div className="card-2">
            <img src={recovery} className="mini-luna" />
          </div>
        </div>
      </div>

      <div className="articles-3"></div>
      <Footer />
    </div>
  );
}

export default ArticlesPage;
