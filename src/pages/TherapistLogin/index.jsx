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
        navigate("/therapist/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container therapistlogin ">
      <div className="therapistlogin-1">
        <Title1>Therapist Login</Title1>

        <form onSubmit={handleLoginSubmit}>
          <div>
            {" "}
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div>
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
        {errorMessage && (
          <Toast className="error-message">{errorMessage}</Toast>
        )}

        <Text>Don't have an account yet?</Text>
        <Link to={"/therapist/signup"}>
          {" "}
          <UILink>Register</UILink>
        </Link>

        <Link to={"/login"}>
          <Button>Are you looking for a therapist login/signup here!</Button>
        </Link>
      </div>
    </div>
  );
}

export default TherapistLoginPage;
