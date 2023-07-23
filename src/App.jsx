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
import TherapistDashboard from "./pages/TherapistDashboard";
import DesignSamplePage from "./pages/DesignSamplePage";
import DashboardPage from "./pages/DashboardPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <FluentProvider theme={teamsLightTheme}>
        <Routes>
          {/* ADD AUTH ROUTES FOR PLACEHOLDER PAGES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/design/sample" element={<DesignSamplePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/welcome" element={<WelcomePage />} />

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
            path="/therapist/dashboard"
            element={
              <IsTherapist>
                {" "}
                <TherapistDashboard />{" "}
              </IsTherapist>
            }
          />
        </Routes>
      </FluentProvider>
    </div>
  );
}

export default App;
