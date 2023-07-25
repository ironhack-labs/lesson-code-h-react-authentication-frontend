import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import back from "../../assets/icons/light/back-button.svg";

import slider1 from "../../assets/slider/1.png";
import slider2 from "../../assets/slider/2.png";
import slider3 from "../../assets/slider/3.png";
import slider4 from "../../assets/slider/4.png";
import slider5 from "../../assets/slider/5.png";

import luna1 from "../../assets/luna/despair.png";
import luna2 from "../../assets/luna/concern.png";
import luna3 from "../../assets/luna/aokay.png";
import luna4 from "../../assets/luna/happy.png";
import luna5 from "../../assets/luna/determined.png";

import "../../App.css";
import "./Checkin1.css";

function Checkin1() {
  const [mood, setMood] = useState(3);

  let step1 = {
    1: {
      luna: luna1,
      slider: slider1,
      text: "Overwhelmed",
    },
    2: {
      luna: luna2,
      slider: slider2,
      text: "Managing",
    },
    3: {
      luna: luna3,
      slider: slider3,
      text: "A Okay",
    },
    4: {
      luna: luna4,
      slider: slider4,
      text: "Happy",
    },
    5: {
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
    <div>
      <Link to="/dashboard">
        <ReactSVG src={back} alt="mood" />
      </Link>

      <div>
        <img src={step1[mood].luna} alt="mood slider" />
      </div>

      <div>
        <div>{step1[mood].text}</div>
      </div>

      <div>
        <img src={step1[mood].slider} />
      </div>

      <button onClick={decreaseMood}>Decrease Mood</button>
      <button onClick={increaseMood}>Increase Mood</button>
    </div>
  );
}

export default Checkin1;
