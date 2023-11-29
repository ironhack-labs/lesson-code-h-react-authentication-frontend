import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProviderWrapper } from "./context/auth.context";
import { TherapistAuthProviderWrapper } from "./context/therapistAuth.context";
import { CheckInProviderWrapper } from "./context/checkIn.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <TherapistAuthProviderWrapper>
          <CheckInProviderWrapper>
            <App />
          </CheckInProviderWrapper>
        </TherapistAuthProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
