import "../../App.css";
import "./Checkin3.css";
import axios from "axios";
import { useCheckInContext } from "../../context/checkIn.context";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function Checkin3() {
  const { audioState } = useCheckInContext();
  const [audioUrl, setAudioUrl] = audioState;

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
        setAudioUrl(res.data);
      })
      .catch((error) => console.log(error));
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
          type="file"
          name="audioUrl"
          accept="/audio/*"
          onChange={(e) => uploadAudio(e)}
        />
      </div>
    </div>
  );
}

export default Checkin3;
