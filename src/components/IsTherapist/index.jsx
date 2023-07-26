import { useContext } from "react";
import { TherapistAuthContext } from "../../context/therapistAuth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading";

function IsTherapist({ children }) {
  const { isLoggedIn, isLoading } = useContext(TherapistAuthContext);

  if (isLoading) return <Loading />;

  if (!isLoggedIn) {
    return <Navigate to="/therapist/login" />;
  } else {
    return children;
  }
}

export default IsTherapist;
