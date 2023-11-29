import { Routes, Route } from "react-router-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./App.css";
import * as CONSTS from "./utils/consts";
import * as PATHS from "./utils/paths";

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
          <Route path={PATHS.HOMEPAGE} element={<HomePage />} />
          <Route path="/design/sample" element={<DesignSamplePage />} />
          <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATHS.WELCOME} element={<WelcomePage />} />
          <Route path={PATHS.TALKPAGE} element={<TalkPage />} />
          <Route path={PATHS.USERPROFILE} element={<UserProfilePage />} />
          <Route path={PATHS.EXERCISES} element={<ExercisesPage />} />
          <Route path={PATHS.CHECKIN} element={<CheckinPage />} />
          <Route path={PATHS.AITHERAPIST} element={<AiTherapistPage />} />
          <Route
            path={PATHS.BREATHEXERCISES}
            element={<BreathExercisesPage />}
          />
          <Route path={PATHS.ARTICLES} element={<ArticlesPage />} />
          <Route path={PATHS.CALMCAST} element={<CalmcastPage />} />
          <Route path={PATHS.THERAPYSUCCESS} element={<TherapySuccessPage />} />
          <Route path={PATHS.FOLLOWTHEBREATH} element={<FollowTheBreath />} />
          <Route path={PATHS.BOOKATHERAPIST} element={<BookingPage />} />

          <Route
            path={PATHS.SIGNUPPAGE}
            element={
              <IsAnon>
                {" "}
                <SignupPage />{" "}
              </IsAnon>
            }
          />

          <Route
            path={PATHS.LOGINPAGE}
            element={
              <IsAnon>
                {" "}
                <LoginPage />{" "}
              </IsAnon>
            }
          />

          <Route
            path={PATHS.THERAPISTSIGNUP}
            element={
              <IsAnon>
                {" "}
                <TherapistSignupPage />{" "}
              </IsAnon>
            }
          />
          <Route
            path={PATHS.THERAPISTLOGIN}
            element={
              <IsAnon>
                {" "}
                <TherapistLoginPage />{" "}
              </IsAnon>
            }
          />
          <Route
            path={PATHS.THERAPISTLOGIN}
            element={
              <IsTherapist>
                {" "}
                <TherapistProfile />{" "}
              </IsTherapist>
            }
          />
          <Route
            path={PATHS.EDITTHERAPISTPROFILE}
            element={
              <IsTherapist>
                <TherapistEditProfile />{" "}
              </IsTherapist>
            }
          />

          <Route path={PATHS.FINDATHERAPIST} element={<FindATherapistPage />} />
          <Route
            path={PATHS.THERAPISTDETAILS}
            element={<TherapistDetailsPage />}
          />

          <Route path={PATHS.EDITUSERPROFILE} element={<EditUserPage />} />
        </Routes>
      </FluentProvider>
    </div>
  );
}

export default App;
