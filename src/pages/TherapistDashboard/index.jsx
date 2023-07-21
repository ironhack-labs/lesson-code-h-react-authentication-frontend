import { useState } from "react";
import axios from "axios";

function TherapistDashboard() {
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <p>Welcome back (username).</p>
      </div>
      <div>
        <button>Edit Profile Info</button>
      </div>
    </div>
  );
}

export default TherapistDashboard;
