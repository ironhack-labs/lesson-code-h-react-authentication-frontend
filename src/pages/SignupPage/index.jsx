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

        <Button type="submit">Sign Up</Button>
      </form>

      {errorMessage && <Toast className="error-message">{errorMessage}</Toast>}

      <Text>Already have account?</Text>

      <Link to={"/login"}>
        <UILink>Login here.</UILink>
      </Link>
    </div>
  );
}

export default SignupPage;
