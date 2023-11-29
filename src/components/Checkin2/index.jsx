import "../../App.css";
import "./Checkin2.css";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import { useCheckInContext } from "../../context/checkIn.context";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function Checkin2() {
  const { imageState } = useCheckInContext();
  const [imageUrl, setImageUrl] = imageState;

  const authToken = localStorage.getItem("authToken");

  const uploadImage = (e) => {
    const configuration = {
      headers: {
        "Content-Type": `'multipart/form-data'`,
        Authorization: `Bearer ${authToken}`,
      },
    };
    console.log(authToken);
    const data = new FormData();
    data.append("imageUrl", e.target.files[0]);

    axios
      .post(`${API_URL}/checkIn/uploadImg`, data, configuration)
      .then((res) => {
        setImageUrl(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="checkin2">
      <div>
        <h2>Image Upload</h2>
        <p>
          A picture speaks a thousand words. Upload a picture to remind yourself
          how you're doing or what you're up to.
        </p>
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          name="imageUrl"
          accept="/image/*"
          onChange={(e) => uploadImage(e)}
        />
      </div>
    </div>
  );
}

export default Checkin2;
