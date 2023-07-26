import {
  Title1,
  Label,
  Input,
  Button,
  Toast,
} from "@fluentui/react-components";
import { useState, useContext, useEffect } from "react";
import "./EditUserProfile.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Footer from "../../components/Footer";
import axios from "axios";
import "../../App.css";
import logo from "../../assets/logos/textlogo.png";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function EditUserPage() {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);

  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    axios
      .get(`${API_URL}/user/userInfo`, config)
      .then((response) => {
        const oneUser = response.data;
        console.log(response.data);
        setEmail(oneUser.email);
        setName(oneUser.name);
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
    };

    axios
      .put(`${API_URL}/user/updateUser`, requestBody, config)
      .then((response) => {
        // Handle success, if needed.
        console.log("Profile updated successfully!", response.data);
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
      .delete(`${API_URL}/user/deleteUser`, config)
      .then((response) => {
        console.log("Profile deleted!");
        localStorage.removeItem("authToken");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="edit-profile-page">
        <Title1>Edit Your hopeme</Title1>

        <img src={logo} className="therpist-reg-logo" />

        <form onSubmit={handleFormSubmit}>
          <div class="form">
            Email:
            <Input
              value={email}
              name="email"
              onChange={(ev, value) => setEmail(ev.target.value)}
            />
          </div>

          <div class="form">
            Name:
            <Input
              value={name}
              name="name"
              onChange={(ev, value) => setName(ev.target.value)}
            />
          </div>
          <div>
            <br></br>
            <button type="submit" className="button-primary">
              Save Changes
            </button>
          </div>

          <br></br>
          <div className="center-text">
            {errorMessage && <div>{errorMessage}</div>}
            {successMessage && <div>Profile updated successfully!</div>}
          </div>
        </form>

        <div>
          <button
            type="delete"
            onClick={handleDeleteButton}
            className="button-primary"
          >
            Delete Your hopeme Account
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EditUserPage;
