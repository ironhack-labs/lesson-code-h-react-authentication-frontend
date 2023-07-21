import {
  FluentProvider,
  teamsLightTheme,
  Button,
  Input,
} from "@fluentui/react-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import IsTherapist from "./components/IsTherapist";
import TherapistLoginPage from "./pages/TherapistLogin";
import TherapistSignupPage from "./pages/TherapistSignUp";
import TherapistDashboard from "./pages/TherapistDashboard";

function App() {
  return (
    <div className="App">
      <FluentProvider theme={teamsLightTheme}>
        <Navbar />

        <Button appearance="primary">FLUENT UI FOR STEPHEN</Button>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/projects"
            element={
              <IsPrivate>
                {" "}
                <ProjectListPage />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/projects/:projectId"
            element={
              <IsPrivate>
                {" "}
                <ProjectDetailsPage />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/projects/edit/:projectId"
            element={
              <IsPrivate>
                {" "}
                <EditProjectPage />{" "}
              </IsPrivate>
            }
          />

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
