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
import luna from "../../assets/luna/welcome.png";
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
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container loginpage">
      <div className="login-page-1">
        <div>
          <img src={luna} />
        </div>

        <div>Welcome Back!</div>

        <div>
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

            <div>
              <button type="submit" className="button-primary">
                Login
              </button>
            </div>
          </form>
        </div>

        {errorMessage && (
          <Toast className="error-message">{errorMessage}</Toast>
        )}

        <div className="form">
          <Text>Not registered as a user yet?</Text>
          <Link to="/signup">
            <UILink>Register here</UILink>
          </Link>

          <Link to={"/"} className="link">
            <button className="button-options">Are you a therapist?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
