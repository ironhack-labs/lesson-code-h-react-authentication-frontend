import { Routes, Route } from "react-router-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./App.css";

// User Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import DashboardPage from "./pages/DashboardPage";
import WelcomePage from "./pages/WelcomePage";
import TalkPage from "./pages/TalkPage";
import UserProfilePage from "./pages/UserProfilePage";
import ExercisesPage from "./pages/ExercisesPage";
import CheckinPage from "./pages/CheckinPage";
import AiTherapistPage from "./pages/AiTherapistPage";
import FindATherapistPage from "./pages/FindATherapistPage";
import TherapistDetailsPage from "./pages/TherapistDetailsPage";
import BreathExercisesPage from "./pages/BreathExercisesPage";
import ArticlesPage from "./pages/ArticlesPage";
import CalmcastPage from "./pages/CalmcastPage";
import EditUserPage from "./pages/EditUserProfile";

// Therapist Routes
import IsTherapist from "./components/IsTherapist";
import TherapistLoginPage from "./pages/TherapistLogin";
import TherapistSignupPage from "./pages/TherapistSignUp";
import TherapistProfile from "./pages/TherapistProfile";
import TherapistEditProfile from "./pages/TherapistEditProfile";

// Sample Component Setup
import DesignSamplePage from "./pages/DesignSamplePage";
import ExamplePage from "./pages/ExamplePage";

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
          <Route path="/talk" element={<TalkPage />} />
          <Route path="/dashboard/profile" element={<UserProfilePage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/checkin" element={<CheckinPage />} />
          <Route path="/talk-to-luna" element={<AiTherapistPage />} />
          <Route path="/breath-exercises" element={<BreathExercisesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/calmcast" element={<CalmcastPage />} />

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

          <Route path="/find-a-therapist" element={<FindATherapistPage />} />
          <Route
            path="/find-a-therapist/:therapistId"
            element={<TherapistDetailsPage />}
          />

          <Route path="dashboard/profile/editUser" element={<EditUserPage />} />
        </Routes>
      </FluentProvider>
    </div>
  );
}

export default App;
