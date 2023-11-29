import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./CalmcastPage.css";

function CalmcastPage() {
  return (
    <div class="container calmcast">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>This is the calmcast page</div>

      <Footer />
    </div>
  );
}

export default CalmcastPage;
