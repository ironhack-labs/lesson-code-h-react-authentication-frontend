import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import IsTherapist from "./components/IsTherapist";
import TherapistLoginPage from "./pages/TherapistLogin";
import TherapistSignupPage from "./pages/TherapistSignUp";
import TherapistProfile from "./pages/TherapistProfile";
import TherapistEditProfile from "./pages/TherapistEditProfile";

function App() {
  return (
    <div className="App">
      <FluentProvider theme={teamsLightTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/signup"
            element={
              <IsAnon>
                {" "}
                <SignupPage />{" "}
              </IsAnon>
            }
          />

          <Route
            path="/login"
            element={
              <IsAnon>
                {" "}
                <LoginPage />{" "}
              </IsAnon>
            }
          />

          <Route
            path="/therapist/signup"
            element={
              <IsAnon>
                {" "}
                <TherapistSignupPage />{" "}
              </IsAnon>
            }
          />
          <Route
            path="/therapist/login"
            element={
              <IsAnon>
                {" "}
                <TherapistLoginPage />{" "}
              </IsAnon>
            }
          />
          <Route
            path="/therapist/profile"
            element={
              <IsTherapist>
                {" "}
                <TherapistProfile />{" "}
              </IsTherapist>
            }
          />
          <Route
            path="/therapist/editProfile"
            element={
              <IsTherapist>
                (" ")
                <TherapistEditProfile />{" "}
              </IsTherapist>
            }
          />
          {/* <Routes
            path="/welcome"
            element={
              <IsAnon>
                {" "}
                <Welcome />{" "}
              </IsAnon>
            }
          /> */}
        </Routes>
      </FluentProvider>
    </div>
  );
}

export default App;
