import "../../App.css";
import "./Checkin4.css";
import { useState } from "react";
import axios from "axios";
import { useCheckInContext } from "../../context/checkIn.context";
import luna from "../../assets/luna/welcome.png";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function Checkin4() {
  const { diaryState } = useCheckInContext();
  const [diaryEntry, setDiaryEntry] = diaryState;

  const handleDiaryChange = (event) => {
    const entry = event.target.value;
    setDiaryEntry(entry);
  };

  return (
    <div className="container">
      <div className="container-holder-checkin">
        <h1>Diary</h1>
        <p>
          How are you feeling today? It's good to write your thoughts and
          feelings down.
        </p>

        <img src={luna} />

        <p>
          Once you click the save button, you can find your check-in data in
          your profile.
        </p>

        <div>
          <textarea
            className="last-step-text"
            type="text"
            name="diaryEntry"
            onChange={handleDiaryChange}
            placeholder="Write your thoughts here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Checkin4;
