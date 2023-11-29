import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "../../App.css";
import "./ExamplePage.css";
import luna from "../../assets/luna/welcome.png";

function ExamplePage() {
  return (
    <div className="container example">
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>
        <img src={luna} />
      </div>

      <div>THIS IS AN EXAMPLE OF HOW OUR PAGES OUR BUILT</div>

      <Footer />
    </div>
  );
}

export default ExamplePage;
