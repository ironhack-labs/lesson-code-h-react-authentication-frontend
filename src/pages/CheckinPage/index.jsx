import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "./CheckinPage.css";

import Checkin1 from "../../components/Checkin1";
import Checkin2 from "../../components/Checkin2";
import Checkin3 from "../../components/Checkin3";
import Checkin4 from "../../components/Checkin4";

function CheckinPage() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: "",
    step8: "",
  });

  const handleNext = () => {
    if (step === 3) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="container checkin">
      <Navbar />

      <div className="step-pages">
        {step === 0 && <Checkin1 />}

        {step === 1 && <Checkin2 />}

        {step === 2 && <Checkin3 />}

        {step === 3 && <Checkin4 />}
      </div>

      <div className="nav-buttons-container">
        <div class="nav-buttons">
          <button className="nav-button" onClick={handlePrev}>
            {step === 0 ? (
              <Link to="/dashboard">
                <ReactSVG src={back} alt="mood" />
              </Link>
            ) : (
              step + " / 4"
            )}
          </button>

          <button className="nav-button" onClick={handleNext}>
            {step === 3 ? "SAVE" : step + 2 + " / 4"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckinPage;
