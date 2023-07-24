import {
  Button,
  Input,
  Toast,
  Label,
  Text,
  Title1,
  Link as UILink,
} from "@fluentui/react-components";
import "./SignupPage.css";
import "../../App.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import luna from "../../assets/luna/welcome.png";

import axios from "axios";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/welcome");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <div className="container signuppage">
        <div>
          <img src={luna} />
        </div>

        <div>Create Your hopeme Profile Here</div>

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
            Name:
            <Input type="text" name="name" value={name} onChange={handleName} />
          </div>

          <div className="form">
            <button type="submit" className="button-primary">
              Register
            </button>
          </div>
        </form>
        {errorMessage && (
          <Toast className="error-message">{errorMessage}</Toast>
        )}
        <div className="form">
          <Text>Already have account?</Text>

          <Link to="/login">
            <UILink>Login here.</UILink>
          </Link>

          <Link to={"/therapist/login"} className="button-options">
            Are you a therapist?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
