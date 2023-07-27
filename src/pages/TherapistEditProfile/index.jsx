import {
  Title1,
  Label,
  Input,
  Button,
  Toast,
} from "@fluentui/react-components";
import { ReactSVG } from "react-svg";
import { useState, useContext, useEffect } from "react";
import "./TherapistEditProfile.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import axios from "axios";
import back from "../../assets/icons/light/back-button.svg";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function TherapistEditProfile() {
  const { logOutTherapist } = useContext(TherapistAuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [approach, setApproach] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    axios
      .get(`${API_URL}/therapist/therapistInfo`, config)
      .then((response) => {
        const oneTherapist = response.data;
        console.log(response.data);
        setimageUrl(oneTherapist.imageUrl);
        setEmail(oneTherapist.email);
        setName(oneTherapist.name);
        setIntroduction(oneTherapist.introduction);
        setLocation(oneTherapist.location);
        setPrice(oneTherapist.price);
        setLanguages(oneTherapist.languages);
        setAvailability(oneTherapist.availability);
        setApproach(oneTherapist.approach);
      })
      .catch((error) => console.log(error));
  }, []);

  const uploadImage = (e) => {
    const configuration = {
      Headers: {
        "Content-Type": `'multipart/form-data'`,
        Authorization: `Bearer ${authToken}`,
      },
    };
    const data = new FormData();
    data.append("imageUrl", e.target.files[0]);
    axios
      .post(`${API_URL}/therapist/upload`, data, configuration)
      .then((res) => {
        setimageUrl(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    const requestBody = {
      imageUrl,
      email,
      name,
      introduction,
      location,
      price,
      languages,
      availability,
      approach,
    };

    axios
      .put(`${API_URL}/therapist/updateProfile`, requestBody, config)
      .then((response) => {
        // Handle success, if needed.
        setSuccessMessage(true);
      })
      .catch((error) => {
        // Handle error, if needed.
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleDeleteButton = (e) => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    axios
      .delete(`${API_URL}/therapist/deleteTherapist`, config)
      .then((response) => {
        localStorage.removeItem("authToken");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="therapist-edit-profile-page-container">
        <div className="therapist-profile-box-1">
          <div>
            <p>Update your profile information</p>
          </div>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="form">
            Profile Picture:
            <Input
              type="file"
              name="imageUrl"
              accept="/image/*"
              onChange={(e) => uploadImage(e)}
            />
          </div>
          <div className="form">
            Email:
            <Input
              value={email}
              name="email"
              onChange={(ev, value) => setEmail(ev.target.value)}
            />
          </div>

          <div className="form">
            Name:
            <Input
              value={name}
              name="name"
              onChange={(ev, value) => setName(ev.target.value)}
            />
          </div>
          <div className="form">
            Introduction:
            <Input
              value={introduction}
              name="introduction"
              onChange={(ev, value) => setIntroduction(ev.target.value)}
            />
          </div>
          <div className="form">
            Location:
            <Input
              value={location}
              name="location"
              onChange={(ev, value) => setLocation(ev.target.value)}
            />
          </div>

          <div className="form">
            Price per session (€):
            <Input
              value={price}
              name="price"
              onChange={(ev, value) => setPrice(ev.target.value)}
            />
          </div>

          <div className="form">
            Languages Spoken:
            <Input
              value={languages}
              name="languages"
              onChange={(ev, value) => setLanguages(ev.target.value)}
            />
          </div>

          <div className="form">
            Availability:
            <Input
              value={availability}
              name="availability"
              onChange={(ev, value) => setAvailability(ev.target.value)}
            />
          </div>

          <div className="form">
            Approach:
            <Input
              value={approach}
              name="approach"
              onChange={(ev, value) => setApproach(ev.target.value)}
            />
          </div>

          <div>
            <br></br>
            <button type="submit" className="button-primary">
              Save Changes
            </button>

            {errorMessage && (
              <Toast className="error-message">{errorMessage}</Toast>
            )}
          </div>
        </form>

        {successMessage && <div>Profile updated successfully!</div>}
        <div>
          <button
            type="delete"
            onClick={handleDeleteButton}
            className="button-primary"
          >
            Delete Account
          </button>
        </div>

        <div>
          <Link to="/therapist/profile" className="link">
            <div className="button-primary">Back to My Profile</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TherapistEditProfile;
