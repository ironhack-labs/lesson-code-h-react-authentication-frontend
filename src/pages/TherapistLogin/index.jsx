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
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import "./TherapistLogin.css";
import "../../App.css";
import luna from "../../assets/luna/welcome.png";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function TherapistLoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateTherapist } =
    useContext(TherapistAuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/therapist/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateTherapist();
        navigate("/therapist/profile");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container therapistlogin ">
      <div className="therapistlogin-1">
        <div>
          <div className="page-header">Welcome Back!</div>
        </div>

        <div className="logo-container">
          <img src={luna} />
        </div>

        <form onSubmit={handleLoginSubmit}>
          <div className="form">
            Email:
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="form">
            Password:
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <br></br>

          <div>
            <button className="button-primary" type="submit">
              Login
            </button>

            <br></br>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <br></br>
          </div>
        </form>

        <div className="form-flex">
          <Link to={"/login"} className="link">
            <button className="button-options">
              {" "}
              Are you Looking for a therapist?
            </button>
          </Link>

          <br></br>
          <div className="flex-center">
            {" "}
            <Text>Don't have a professional account yet?</Text>
            <Link to={"/therapist/signup"} className="link">
              {" "}
              <UILink className="link">Register here </UILink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherapistLoginPage;
