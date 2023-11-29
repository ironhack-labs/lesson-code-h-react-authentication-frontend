import {
  Button,
  Input,
  Toast,
  Label,
  Text,
  Title1,
  Link as UILink,
} from "@fluentui/react-components";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import logo from "../../assets/logos/textlogo.png";
import "./TherapistSignUp.css";
import "../../App.css";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function TherapistSignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [approach, setApproach] = useState([]);

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateTherapist } =
    useContext(TherapistAuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleLanguages = (e) => setLanguages(e.target.value.split(","));
  const handleAvailability = (e) => setAvailability(e.target.value.split(","));
  const handleApproach = (e) => setApproach(e.target.value.split(","));

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      email,
      password,
      name,
      location,
      price,
      languages,
      availability,
      approach,
    };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/therapist/signup`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateTherapist();
        navigate("/therapist/success");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container therapistsignup">
      <div className="therapistsignup-1">
        <img src={logo} className="therpist-reg-logo" />

        <form onSubmit={handleSignupSubmit}>
          <div className="form">
            {" "}
            Email:
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="form">
            {" "}
            Password:
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="form">
            {" "}
            Name:
            <Input type="text" name="name" value={name} onChange={handleName} />
          </div>

          <div className="form">
            {" "}
            Location:
            <Input
              type="text"
              name="location"
              value={location}
              onChange={handleLocation}
            />
          </div>

          <div className="form">
            {" "}
            Price per session:
            <Input
              type="number"
              name="price"
              value={price}
              onChange={handlePrice}
            />
          </div>

          <div className="form">
            {" "}
            Languages Spoken:
            <Input
              type="text"
              name="languages"
              value={languages}
              onChange={handleLanguages}
            />
          </div>

          <div className="form">
            {" "}
            Availability:
            <Input
              type="text"
              name="availability"
              value={availability}
              onChange={handleAvailability}
            />
          </div>

          <div className="form">
            {" "}
            Approach:
            <Input
              type="text"
              name="approach"
              value={approach}
              onChange={handleApproach}
            />
          </div>

          <div className="form">
            <br></br>
            <button className="button-primary" type="submit">
              Register as a therapist
            </button>
          </div>
        </form>

        <div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>

        <br></br>
        <Link className="button-options " to={"/login"}>
          Are you looking for a therapist?
        </Link>

        <div className="flex-center">
          <Text>Already have account?</Text>
          <Link to={"/therapist/login"} className="link">
            <UILink>Login here.</UILink>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TherapistSignupPage;
