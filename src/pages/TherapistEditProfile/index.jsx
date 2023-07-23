import { Title1, Label, Input, Button } from "@fluentui/react-components";
import { useState, useContext, useEffect } from "react";
import "./TherapistEditProfile.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import axios from "axios";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function TherapistEditProfile() {
  const { logOutTherapist } = useContext(TherapistAuthContext);
  const navigate = useNavigate;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [approach, setApproach] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

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
        setEmail(oneTherapist.email);
        setName(oneTherapist.name);
        setLocation(oneTherapist.location);
        setPrice(oneTherapist.price);
        setLanguages(oneTherapist.languages);
        setAvailability(oneTherapist.availability);
        setApproach(oneTherapist.approach);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    const requestBody = {
      email,
      name,
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
        console.log("Profile updated successfully!", response.data);
        setSuccessMessage(true);
      })
      .catch((error) => {
        // Handle error, if needed.
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <nav>
        <Link to="/therapist/profile">
          <Button>Back to profile</Button>
        </Link>
        <Button onClick={logOutTherapist}>Logout</Button>
      </nav>
      <Title1>Edit Your Account Details</Title1>

      <form onSubmit={handleFormSubmit}>
        <div>
          <Label>Email:</Label>
          <Input
            value={email}
            name="email"
            onChange={(ev, value) => setEmail(ev.target.value)}
          />
        </div>

        <div>
          <Label>Name:</Label>
          <Input
            value={name}
            name="name"
            onChange={(ev, value) => setName(ev.target.value)}
          />
        </div>

        <div>
          <Label>Location:</Label>
          <Input
            value={location}
            name="location"
            onChange={(ev, value) => setLocation(ev.target.value)}
          />
        </div>

        <div>
          <Label>Price per session (€):</Label>
          <Input
            value={price}
            name="price"
            onChange={(ev, value) => setPrice(ev.target.value)}
          />
        </div>

        <div>
          <Label>Languages Spoken:</Label>
          <Input
            value={languages}
            name="languages"
            onChange={(ev, value) => setLanguages(ev.target.value)}
          />
        </div>

        <div>
          <Label>Availability:</Label>
          <Input
            value={availability}
            name="availability"
            onChange={(ev, value) => setAvailability(ev.target.value)}
          />
        </div>

        <div>
          <Label>Approach:</Label>
          <Input
            value={approach}
            name="approach"
            onChange={(ev, value) => setApproach(ev.target.value)}
          />
        </div>

        <div>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
      {successMessage && (
        <div style={{ color: "green", fontWeight: "bold" }}>
          Profile updated successfully!
        </div>
      )}
      <div>
        <Button type="delete">Delete Account</Button>
      </div>
    </div>
  );
}

export default TherapistEditProfile;
