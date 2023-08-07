import { Routes, Route } from "react-router-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./App.css";

// User Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Authentication/SignupPage";
import LoginPage from "./pages/Authentication/LoginPage";
import IsAnon from "./components/IsAnon";
import DashboardPage from "./pages/WelcomeAndDashboardPages/DashboardPage";
import WelcomePage from "./pages/WelcomeAndDashboardPages/WelcomePage";
import TalkPage from "./pages/TherapyPages/TalkPage";
import UserProfilePage from "./pages//UserProfile/UserProfilePage";
import ExercisesPage from "./pages/ContentPages/ExercisesPage";
import CheckinPage from "./pages/CheckinPage";
import AiTherapistPage from "./pages/TherapyPages/AiTherapistPage";
import FindATherapistPage from "./pages/TherapyPages/FindATherapistPage";
import TherapistDetailsPage from "./pages/TherapyPages/TherapistDetailsPage";
import BreathExercisesPage from "./pages/ContentPages/BreathExercisesPage";
import ArticlesPage from "./pages/ContentPages/ArticlesPage";
import CalmcastPage from "./pages/ContentPages/CalmcastPage";
import EditUserPage from "./pages/UserProfile/EditUserProfile";
import BookingPage from "./pages/TherapyPages/BookingPage";

// Therapist Routes
import IsTherapist from "./components/IsTherapist";
import TherapistLoginPage from "./pages/Authentication/TherapistLogin";
import TherapistSignupPage from "./pages/Authentication/TherapistSignUp";
import TherapistProfile from "./pages/TherapistProfile/TherapistProfilePage";
import TherapistEditProfile from "./pages/TherapistProfile/TherapistEditProfile";
import TherapySuccessPage from "./pages/TherapistProfile/TherapySuccessPage";

// Sample Component Setup
import DesignSamplePage from "./pages/DesignSamplePage";
import ExamplePage from "./pages/ExamplePage";
import FollowTheBreath from "./pages/ContentPages/FollowTheBreath";

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
          <Route path="/therapist/success" element={<TherapySuccessPage />} />
          <Route path="/follow-the-breath" element={<FollowTheBreath />} />
          <Route path="/book-a-therapist" element={<BookingPage />} />

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
