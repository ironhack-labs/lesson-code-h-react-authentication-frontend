import { useContext, useState } from "react";
import { Button, Input } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { TherapistAuthContext } from "../../context/therapistAuth.context";

function TherapistProfile() {
  const { logOutTherapist, therapist } = useContext(TherapistAuthContext);
  return (
    <div>
      <nav>
        <Button onClick={logOutTherapist}>Logout</Button>
      </nav>
      <div>
        <h1>Hello</h1>
        <p>Welcome back {therapist.username}.</p>
      </div>
      <div>
        <Link to="/therapist/editProfile">
          <button>Edit Profile Info</button>
        </Link>
      </div>
    </div>
  );
}

export default TherapistProfile;
