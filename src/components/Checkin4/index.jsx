import "../../App.css";
import "./Checkin4.css";
import { useState } from "react";
import axios from "axios";
import { useCheckInContext } from "../../context/checkIn.context";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function Checkin4() {
  const { diaryState } = useCheckInContext();
  const [diaryEntry, setDiaryEntry] = diaryState; 

  const handleDiaryChange = (event) => {
    const entry = event.target.value;
    setDiaryEntry(entry);
  };

  return (
    <div className="checkin4">
      <div>
        <h1>Diary</h1>
        <p>
          How are you feeling today? It's good to write your thoughts and
          feelings down.
        </p>
        <p>
          Once you click the save button, you can find your check-in data in
          your profile.
        </p>
      </div>
      <div>
        <textarea
          type="text"
          name="diaryEntry"
          onChange={handleDiaryChange}
          placeholder="Write your thoughts here"
        ></textarea>
      </div>
    </div>
  );
}

export default Checkin4;
