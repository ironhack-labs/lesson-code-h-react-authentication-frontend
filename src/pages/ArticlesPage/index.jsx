import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./ArticlesPage.css";
import luna from "../../assets/luna/welcome.png";

function ArticlesPage() {
  return (
    <div class="container example">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>ARTICLES PAGE</div>

      <Footer />
    </div>
  );
}

export default ArticlesPage;
