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
import logo from "../../assets/logos/textlogo.png";

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
    <div className="container">
      <div className="signup-page-1">
        <form onSubmit={handleSignupSubmit}>
          <div className="logo-container">
            <img className="logo-image" src={logo} />
          </div>
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
            Username:
            <Input type="text" name="name" value={name} onChange={handleName} />
          </div>

          <div className="form">
            <br></br>
            <button type="submit" className="button-primary">
              Register
            </button>
          </div>
        </form>

        <br></br>
        <div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>

        <br></br>
        <div className="form">
          <Link to={"/therapist/login"} className="button-options ">
            Are you a therapist?
          </Link>

          <br></br>

          <div className="flex-center">
            <Text>Already have account?</Text>

            <Link to="/login" className="link">
              <UILink>Login here</UILink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
