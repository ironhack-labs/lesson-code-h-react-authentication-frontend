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
import { AuthContext } from "../../context/auth.context";
import "../../App.css";
import "./LoginPage.css";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
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
    <div className="container loginpage">
      <div className="login-page-1">
        <Title1>User Login</Title1>

        <form onSubmit={handleLoginSubmit}>
          <div>
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

          <Button type="submit">Login</Button>
        </form>
        {errorMessage && (
          <Toast className="error-message">{errorMessage}</Toast>
        )}

        <Text>Not registered as a user yet?</Text>
        <Link to="/signup">
          <UILink>Register here</UILink>
        </Link>

        <Link to={"/therapist/login"}>
          <Button>HOPEME THERAPIST MODE</Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
