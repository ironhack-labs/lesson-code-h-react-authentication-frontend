import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_LIVE_SERVER;

const TherapistAuthContext = React.createContext();

function TherapistAuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [therapist, setTherapist] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateTherapist = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios
        .get(`${API_URL}/therapist/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // If the server verifies that JWT token is valid  ✅
          const user = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setTherapist(therapist);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) ❌
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // If the token is not available
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  };

  const logOutTherapist = () => {
    removeToken();
    authenticateTherapist();
  };

  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateTherapist();
  }, []);

  return (
    <TherapistAuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        therapist,
        storeToken,
        authenticateTherapist,
        logOutTherapist,
      }}
    >
      {props.children}
    </TherapistAuthContext.Provider>
  );
}

export { TherapistAuthProviderWrapper, TherapistAuthContext };
