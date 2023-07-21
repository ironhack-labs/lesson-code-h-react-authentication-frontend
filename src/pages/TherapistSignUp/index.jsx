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
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const handleLanguages = (e) => setLanguages(e.target.value);
  const handleAvailability = (e) => setAvailability(e.target.value);
  const handleApproach = (e) => setApproach(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/therapist/signup`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <Title1>Create Your Account</Title1>

      <form onSubmit={handleSignupSubmit}>
        <Label>Email:</Label>
        <Input type="email" name="email" value={email} onChange={handleEmail} />

        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <Label>Name:</Label>
        <Input type="text" name="name" value={name} onChange={handleName} />

        <Label>Location:</Label>
        <Input
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
        />

        <Label>Price per session:</Label>
        <Input type="text" name="price" value={price} onChange={handlePrice} />

        <Label>Location:</Label>
        <Input
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
        />

        <Label>Languages Spoken:</Label>
        <Input
          type="text"
          name="languages"
          value={languages}
          onChange={handleLanguages}
        />

        <Label>Availability:</Label>
        <Input
          type="text"
          name="availability"
          value={availability}
          onChange={handleAvailability}
        />

        <Label>Approach:</Label>
        <Input
          type="text"
          name="approach"
          value={approach}
          onChange={handleApproach}
        />

        <Button type="submit">Sign Up</Button>
      </form>

      {errorMessage && <Toast className="error-message">{errorMessage}</Toast>}

      <Text>Already have account?</Text>

      <Link to={"/therapist/login"}>
        <UILink>Login here.</UILink>
      </Link>
    </div>
  );
}

export default TherapistSignupPage;
