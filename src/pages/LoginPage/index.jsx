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
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <Title1>Login</Title1>

      <form onSubmit={handleLoginSubmit}>
        <Label>Email:</Label>
        <Input type="email" name="email" value={email} onChange={handleEmail} />

        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <Button type="submit">Login</Button>
      </form>
      {errorMessage && <Toast className="error-message">{errorMessage}</Toast>}

      <Text>Don't have an account yet?</Text>
      <Link to={"/signup"}>
        {" "}
        <UILink>Register</UILink>
      </Link>
    </div>
  );
}

export default LoginPage;
