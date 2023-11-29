import "../../App.css";
import "./Checkin3.css";
import { useState } from "react";
import axios from "axios";
import { useCheckInContext } from "../../context/checkIn.context";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function Checkin3({ setFormData, formData }) {
  const { audioUrl, setAudioUrl } = useCheckInContext();
  const authToken = localStorage.getItem("authToken");

  const uploadAudio = (e) => {
    const configuration = {
      headers: {
        "Content-Type": `'multipart/form-data'`,
        Authorization: `Bearer ${authToken}`,
      },
    };
    const data = new FormData();
    data.append("audioUrl", e.target.files[0]);
    axios
      .post(`${API_URL}/checkIn/uploadAudio`, data, configuration)
      .then((res) => {
        console.log(res.data);
        setAudioUrl(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleNext = () => {
    // Update the formData with the selected mood
    setFormData((prevFormData) => ({
      ...prevFormData,
      audioUrl: "audioUrl",
    }));
  };

  return (
    <div className="checkin3">
      <div>
        <h2>Audio Upload</h2>
        <p>
          Leave yourself a voice note to listen back to, reminding you of your
          feelings and potentials triggers.
        </p>
      </div>
      <div>
        <label>Audio:</label>
        <input
          value={formData.audioUrl}
          type="file"
          name="audioUrl"
          accept="/audio/*"
          onChange={(e) => uploadAudio(e)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Checkin3;
