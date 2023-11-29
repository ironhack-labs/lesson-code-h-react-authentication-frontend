import { useState, useContext } from "react";
import { CheckInContext } from "../../context/checkIn.context";

import slider1 from "../../assets/slider/1.png";
import slider2 from "../../assets/slider/2.png";
import slider3 from "../../assets/slider/3.png";
import slider4 from "../../assets/slider/4.png";
import slider5 from "../../assets/slider/5.png";

import luna1 from "../../assets/luna/despair.png";
import luna2 from "../../assets/luna/concern.png";
import luna3 from "../../assets/luna/welcome.png";
import luna4 from "../../assets/luna/happy.png";
import luna5 from "../../assets/luna/encouragement.png";

import "../../App.css";
import "./Checkin1.css";

function Checkin1() {
  const {
    moodState: [mood, setMood],
  } = useContext(CheckInContext);

  const handleChange = (e) => {
    setMood(e.target.value);
  };

  let step1 = {
    1: {
      number: 1,
      luna: luna1,
      slider: slider1,
      text: "Overwhelmed",
    },
    2: {
      number: 2,
      luna: luna2,
      slider: slider2,
      text: "Managing",
    },
    3: {
      number: 3,
      luna: luna3,
      slider: slider3,
      text: "A Okay",
    },
    4: {
      number: 4,
      luna: luna4,
      slider: slider4,
      text: "Happy",
    },
    5: {
      number: 5,
      luna: luna5,
      slider: slider5,
      text: "Ecstatic",
    },
  };

  const increaseMood = () => {
    if (mood === 5) return;
    setMood((prevMood) => prevMood + 1);
  };
  const decreaseMood = () => {
    if (mood === 1) return;
    setMood((prevMood) => prevMood - 1);
  };

  return (
    <div className="checkin1">
      <div>HOW ARE YOU FEELING TODAY?</div>

      <div className="luna-container">
        <img className="luna-mood" src={step1[mood].luna} alt="mood slider" />
      </div>

      <div>
        <div className="hide-it" onChange={handleChange}>
          {step1[mood].number}
        </div>
        <div>{step1[mood].text}</div>
      </div>

      <div>
        <img src={step1[mood].slider} />
      </div>

      <div className="mood-button-container">
        <button className="mood-button" onClick={decreaseMood}>
          -
        </button>

        <button className="mood-button" onClick={increaseMood}>
          +
        </button>
      </div>
    </div>
  );
}

export default Checkin1;
